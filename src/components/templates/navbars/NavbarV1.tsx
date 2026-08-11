"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {

  Menu

} from 'lucide-react';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';


import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { useAppSelector } from '@/store/hooks';

import { Logo } from '@/components/ui/logo';
import { useSettings } from '@/components/SettingsProvider';



const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [liveResults, setLiveResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recognitionRef = useRef<any>(null);
  const router = useRouter();
  const { data: session, status } = useSession();
  const { totalQuantity: cartCount, totalAmount } = useAppSelector((state) => state.cart);
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist);
  const settings = useSettings();

  const [categories, setCategories] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);


  useEffect(() => {
    const controller = new AbortController();
    async function fetchCats() {
      try {
        const res = await fetch('/api/categories', { signal: controller.signal });
        if (res.ok) {
          const data = await res.json();
          setCategories(data.filter((c: any) => c.isActive));
        }
      } catch (e: any) {
        if (e.name !== 'AbortError') {
          console.error('Failed to fetch categories');
        }
      }
    }
    fetchCats();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    if (status === 'authenticated') {
      fetch('/api/user/profile', { signal: controller.signal })
        .then(res => {
          if (!res.ok) return null;
          return res.json();
        })
        .then(data => {
          if (isMounted && data) setProfile(data);
        })
        .catch(err => {
          if (err.name !== 'AbortError') {
            console.warn('Could not load user profile data');
          }
        });
    } else {
      setProfile(null);
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [status]);

  // Voice Search Cleanup
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // ignore if already stopped
        }
        recognitionRef.current.onstart = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current = null;
      }
      setIsListening(false);
    };
  }, []);

  const mainCategories = categories.filter(c => !c.parentCategory);

  // Live search debounce
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const trimmed = searchTerm.trim();
    if (!trimmed) { setLiveResults([]); setShowDropdown(false); return; }
    debounceRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/products?search=${encodeURIComponent(trimmed)}&limit=6`);
        if (res.ok) { const data = await res.json(); setLiveResults(data.products || []); setShowDropdown(true); }
      } catch { /* silent */ } finally { setIsSearching(false); }
    }, 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [searchTerm]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) setShowDropdown(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowDropdown(false);
      setLiveResults([]);
    }
  };

  const handleResultClick = () => { setShowDropdown(false); setSearchTerm(''); setLiveResults([]); };

  const handleVoiceSearch = async () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      const Swal = (await import('sweetalert2')).default;
      Swal.fire({
        title: 'Voice Search Unsupported',
        text: 'Voice search is not supported in your browser. Please use Google Chrome for the best experience.',
        icon: 'info',
        confirmButtonColor: '#00D1B2'
      });
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event: any) => {
      setIsListening(false);
      console.error('Speech recognition error', event.error);
      if (event.error === 'not-allowed') {
        toast.error('Microphone access denied. Please enable it in browser settings.');
      } else if (event.error === 'network') {
        toast.error('Network error. Please check your connection.');
      } else if (event.error === 'no-speech') {
        toast.info('No speech detected. Please try again.');
      }
    };
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      router.push(`/shop?search=${encodeURIComponent(transcript.trim())}`);
    };

    recognition.start();
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="relative flex h-16 md:h-20 items-center justify-between">

            {/* Left: Mobile Menu Trigger (Absolute on mobile, hidden on desktop) */}
            <div className="absolute left-0 flex md:hidden items-center">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle mobile menu</span>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <nav className="flex flex-col gap-6 mt-12 px-2">
                    <Logo onClick={() => setOpen(false)} />
                    <div className="space-y-4 pt-6 border-t font-medium tracking-tight">
                      {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href === '/#home' && pathname === '/');
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 rounded-xl transition-all ${isActive
                              ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20'
                              : 'hover:text-primary font-medium'
                              }`}
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Center/Left: Logo (Centered on mobile, left-aligned on desktop) */}
            <div className="flex w-full md:w-auto justify-center md:justify-start items-center">
              <Logo
                imageClassName="size-10 md:size-14"
                textClassName="text-[12px] sm:text-base md:text-2xl lg:text-3xl whitespace-nowrap truncate tracking-tighter"
                sizes="(max-width: 768px) 32px, 56px"
              />
            </div>

            {/* Right: Desktop Navigation Items */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center gap-3 lg:gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href === '/#home' && pathname === '/');
                  return (
                    <li key={item.href} className="flex items-center">
                      <Link
                        href={item.href}
                        className={`text-[12px] font-bold uppercase tracking-[0.12em] transition-all px-3 py-1.5 rounded-full ${isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-foreground/70 hover:text-primary'
                          }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
}
