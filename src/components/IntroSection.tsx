import React from 'react';
import { AppBadgesGroup } from './AppBadges';

export interface IntroSectionProps {
  onOpenDemo?: () => void;
}

/**
 * Page 1 — Yaqeel Intro
 * Minimal, spacious full-screen introduction page.
 * Features glowing app icon mark, refined typography,
 * official Google Play & App Store download buttons, and subtle trust proof.
 */
export const IntroSection: React.FC<IntroSectionProps> = () => {
  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:min-h-[600px] bg-black flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 text-center select-none overflow-hidden">
      {/* Dynamic Ambient Luxury Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[480px] bg-blue-600/[0.08] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[340px] bg-purple-600/[0.06] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content — Perfectly Proportioned on Mobile & Desktop */}
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center relative z-10 w-full">
        
        {/* Sleek App Icon Mark */}
        <div className="mb-6 sm:mb-8 transition-transform duration-500 ease-out hover:scale-105">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[26px] overflow-hidden shadow-[0_16px_40px_rgba(91,52,234,0.35)] ring-1 ring-white/10 mx-auto">
            <img
              src="/assets/logo.png"
              alt="Yaqeel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Primary Headline — Minimal & Refined */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium text-white tracking-[-0.03em] leading-[1.12] max-w-lg sm:max-w-2xl font-display">
          Institute management made simple.
        </h1>

        {/* Descriptive Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-neutral-400 font-normal max-w-md sm:max-w-xl leading-relaxed">
          Manage daily attendance, fee collections, student exam gradebooks, and staff payroll all from your phone.
        </p>

        {/* Store Download Badges: Google Play & App Store */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <AppBadgesGroup theme="glass" size="md" className="gap-3 sm:gap-4" />
        </div>

        {/* Minimal Subtle Trust Note */}
        <p className="mt-8 sm:mt-12 text-xs sm:text-[13px] text-neutral-500 font-normal tracking-wide">
          Trusted by 8,000+ students &amp; teachers across India
        </p>

      </div>

      {/* Minimal Clean Scroll Indicator */}
      <div 
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-10 z-20 flex flex-col items-center gap-1.5 sm:gap-2 select-none pointer-events-none opacity-75"
        aria-hidden="true"
      >
        <div className="w-[1.5px] h-6 sm:h-10 bg-gradient-to-b from-white via-white/80 to-transparent rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
        <span className="text-[8.5px] sm:text-[10px] font-sans font-medium tracking-[0.25em] text-white/40 uppercase">
          SCROLL
        </span>
      </div>
    </section>
  );
};
