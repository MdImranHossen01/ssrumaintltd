"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'office' | 'team' | 'meetings' | 'construction' | 'events';
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 'gal-1', category: 'office', title: 'Main Corporate Workspace', image: '/assets/images/Banner/gallery-workspace.webp' },
  { id: 'gal-2', category: 'team', title: 'Our Management Team', image: '/assets/images/Banner/gallery-team.webp' },
  { id: 'gal-3', category: 'meetings', title: 'Annual General Meeting', image: '/assets/images/Banner/gallery-meetings.webp' },
  { id: 'gal-4', category: 'construction', title: 'Structural Piling Work', image: '/assets/images/Banner/gallery-piling.webp' },
  { id: 'gal-5', category: 'events', title: 'International Business Expo', image: '/assets/images/Banner/gallery-expo.webp' },
  { id: 'gal-6', category: 'office', title: 'Executive Boardroom', image: '/assets/images/Banner/gallery-boardroom.webp' },
  { id: 'gal-7', category: 'construction', title: 'Concrete Slab Casting', image: '/assets/images/Banner/gallery-slab.webp' },
  { id: 'gal-8', category: 'meetings', title: 'Foreign Client Consultation', image: '/assets/images/Banner/gallery-consultation.webp' },
];

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'office', label: 'Office' },
  { id: 'team', label: 'Team' },
  { id: 'meetings', label: 'Meetings' },
  { id: 'construction', label: 'Construction Works' },
  { id: 'events', label: 'Business Events' },
];

export default function CorporateGallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="w-full space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${filter === cat.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Showcase */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImg(item.image)}
            className="group relative overflow-hidden aspect-square rounded-xl cursor-pointer bg-muted border border-border/85 shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                <Eye className="h-5 w-5" />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs font-semibold truncate">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={selectedImg}
              alt="Gallery image preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
