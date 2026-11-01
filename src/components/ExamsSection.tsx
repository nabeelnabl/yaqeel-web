import React from 'react';
import { PhoneMockup } from './PhoneMockup';

/**
 * Page 3 — Exams Section
 * Features a stunning, clean light mint green (#BEE9D4).
 * Editorial dark obsidian typography.
 * The right column reserves space for the single globally fixed phone mockup.
 */
export interface ExamsSectionProps {
  onViewMore?: () => void;
}

export const ExamsSection: React.FC<ExamsSectionProps> = ({ onViewMore }) => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[600px] flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 pt-20 pb-16 lg:pt-16 lg:pb-6 text-[#0A1C14] select-none z-10 bg-[#F0FBF5] border-t border-black/[0.06]">
      {/* Seamless Atmospheric Blur Transition between Attendance and Exams */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F5F2FF] to-transparent blur-xl opacity-75 -z-10"
        aria-hidden="true"
      />

      {/* Subtle Minimal Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D7F5E5]/50 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 my-auto">
        
        {/* Left Column: Large Editorial Typography */}
        <div className="flex-[1.18] w-full flex flex-col justify-center text-left max-w-2xl lg:max-w-none z-20">
          
          {/* Section Chapter Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D6D47]/10 text-[#0D6D47] text-xs font-semibold tracking-wider uppercase mb-3.5 lg:mb-3 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D6D47]" />
            <span>02 • Examinations</span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.1rem] font-extrabold tracking-tight uppercase leading-[0.92] text-[#0A1C14] font-display">
            EXAMS
          </h2>

          {/* Main Message */}
          <p className="mt-3 lg:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] xl:text-[2.05rem] font-semibold text-[#143224] tracking-tight leading-snug">
            Gradebooks, score analysis &amp; report cards
          </p>

          {/* Supporting Description */}
          <p className="mt-2.5 lg:mt-2 text-xs sm:text-sm lg:text-[14.5px] text-[#2C5240]/90 font-normal leading-relaxed max-w-xl">
            Enter marks on mobile as papers are corrected. Auto-calculates batch averages, student ranks, and creates 1-click printable report cards.
          </p>

          {/* 5 Key Feature Points from Original Website */}
          <ul className="mt-4 lg:mt-4 space-y-2 lg:space-y-2">
            {[
              'Effortless batch-wise marks entry on mobile as papers are corrected',
              'Automated class averages, highest score tracking, and batch rank calculation',
              'Auto-identifies students needing academic attention with personalized flags',
              '1-click digital PDF progress report cards shared directly with parents',
              'Structured assessment history across unit tests, term exams, and finals',
            ].map((point, index) => (
              <li key={index} className="flex items-start sm:items-center gap-2.5 text-xs sm:text-[13px] lg:text-[13.5px] font-medium text-[#133022]">
                <span className="w-4 h-4 rounded-full bg-[#0A1C14]/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <svg className="w-2.5 h-2.5 text-[#0A1C14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>

          {/* View More Button */}
          <div className="mt-5 lg:mt-5">
            <button
              onClick={onViewMore}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A1C14] hover:bg-[#143224] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
            >
              <span>View More Details</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile In-line Phone Mockup: Rendered on mobile/tablet screens (< lg) */}
        <div className="w-full flex lg:hidden items-center justify-center pt-6 pb-2">
          <PhoneMockup activeFeature="exams" />
        </div>

        {/* Desktop Spacer: Leaves space for the fixed phone mockup on desktop (>= lg) */}
        <div className="flex-[0.82] w-full hidden lg:block pointer-events-none opacity-0 select-none" aria-hidden="true">
          <div className="w-[280px] lg:w-[320px] lg:h-[min(580px,68vh)] aspect-[389/800] ml-auto" />
        </div>

      </div>
    </section>
  );
};
