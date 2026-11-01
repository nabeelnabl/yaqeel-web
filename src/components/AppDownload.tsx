import React from 'react';
import { Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AppBadgesGroup } from './AppBadges';

export const AppDownload: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-black/[0.06] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Banner Card */}
        <div className="relative rounded-3xl sm:rounded-[36px] p-6 sm:p-12 lg:p-16 bg-neutral-950 text-white shadow-2xl overflow-hidden border border-neutral-800 text-center">
          
          {/* Subtle Ambient Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* App Icon */}
            <div className="mb-5">
              <img
                src="/assets/logo.png"
                alt="Yaqeel App"
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 object-contain"
              />
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Take your institute with you.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Download the official Yaqeel app for iOS and Android. Manage your tuition centre or school from anywhere.
            </p>

            {/* Store Badges */}
            <div className="mt-8 flex justify-center">
              <AppBadgesGroup size="md" className="justify-center gap-3 sm:gap-4" />
            </div>

            {/* Trust Note */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> End-to-End Secure
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Instant OTP Login
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" /> iOS &amp; Android Apps
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
