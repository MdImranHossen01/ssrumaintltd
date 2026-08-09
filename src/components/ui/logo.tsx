"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useSettings } from '@/components/SettingsProvider';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
  onClick?: () => void;
  sizes?: string;
  src?: string;
}

export function Logo({ className, imageClassName, textClassName, showText = true, onClick, sizes, src }: LogoProps) {
  const { brandName, logoUrl } = useSettings();

  const finalBrandName = brandName || "Palli Vita Nutrition Hub";
  const finalLogoUrl = src || logoUrl || "/logo.webp";

  return (
    <Link href="/" className={cn("flex items-center gap-1.5 group", className)} onClick={onClick}>
      <div className={cn("relative flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 size-6 md:size-8 shrink-0", imageClassName)}>
        <Image
          src={finalLogoUrl}
          alt={`${finalBrandName} Logo`}
          fill
          sizes={sizes || "(max-width: 768px) 24px, 32px"}
          className="object-contain"
          quality={80}
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col text-left leading-[1.1] shrink-0">
          <span className="text-[16px] md:text-[20px] lg:text-[22px] uppercase text-foreground transition-colors group-hover:text-primary tracking-wider font-logo font-medium">
            S S Ruma
          </span>
          <span className="text-[14px] md:text-[16px] lg:text-[18px] uppercase text-foreground/80 transition-colors group-hover:text-primary tracking-widest font-logo font-normal">
            International Ltd
          </span>
        </div>
      )}
    </Link>
  );
}

