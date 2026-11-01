import React from 'react';
import { PhoneMockup } from './PhoneMockup';

export interface PayrollSectionProps {
  onViewMore?: () => void;
}

/**
 * Page 5 — Teachers Payroll Section
 * Features a minimal, crisp light sky/ice blue (#F0F6FF).
 * Editorial dark obsidian typography (#0B192C).
 * 5 authentic feature points from the original platform.
 * View More button with arrow.
 * The right column reserves space for the globally fixed phone mockup.
 */
export const PayrollSection: React.FC<PayrollSectionProps> = ({ onViewMore }) => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[600px] flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 pt-20 pb-16 lg:pt-16 lg:pb-6 text-[#0B192C] select-none z-10 bg-[#F0F6FF] border-t border-black/[0.06]">
      {/* Seamless Atmospheric Blur Transition between Fees and Payroll */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFF6F0] to-transparent blur-xl opacity-75 -z-10"
        aria-hidden="true"
      />

      {/* Subtle Minimal Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D8E9FE]/50 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 my-auto">
        
        {/* Left Column: Large Editorial Typography */}
        <div className="flex-[1.18] w-full flex flex-col justify-center text-left max-w-2xl lg:max-w-none z-20">
          
          {/* Section Chapter Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-semibold tracking-wider uppercase mb-3.5 lg:mb-3 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            <span>04 • Teachers Payroll</span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.1rem] font-extrabold tracking-tight uppercase leading-[0.92] text-[#0B192C] font-display">
            PAYROLL
          </h2>

          {/* Main Message */}
          <p className="mt-3 lg:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] xl:text-[2.05rem] font-semibold text-[#132A4A] tracking-tight leading-snug">
            Staff salary payouts, lecture logs &amp; hours
          </p>

          {/* Supporting Description */}
          <p className="mt-2.5 lg:mt-2 text-xs sm:text-sm lg:text-[14.5px] text-[#2E486B]/90 font-normal leading-relaxed max-w-xl">
            Compute faculty compensation effortlessly based on logged lecture hours and class rosters.
          </p>

          {/* 5 Key Feature Points from Original Yaqeel Website */}
          <ul className="mt-4 lg:mt-4 space-y-2 lg:space-y-2">
            {[
              'Track teaching hours, assigned divisions, and daily lecture logs',
              'Automated monthly salary calculation based on attendance and hours worked',
              'Granular role-based permissions protecting sensitive accounting ledgers',
              'Generate 1-click monthly salary slips and transparent payout records',
              'Complete faculty directory, timetable mapping, and staff check-in history',
            ].map((point, index) => (
              <li key={index} className="flex items-start sm:items-center gap-2.5 text-xs sm:text-[13px] lg:text-[13.5px] font-medium text-[#142B47]">
                <span className="w-4 h-4 rounded-full bg-[#0B192C]/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <svg className="w-2.5 h-2.5 text-[#0B192C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
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
          <PhoneMockup activeFeature="payroll" />
        </div>

        {/* Desktop Spacer: Leaves space for the fixed phone mockup on desktop (>= lg) */}
        <div className="flex-[0.82] w-full hidden lg:block pointer-events-none opacity-0 select-none" aria-hidden="true">
          <div className="w-[280px] lg:w-[320px] lg:h-[min(580px,68vh)] aspect-[389/800] ml-auto" />
        </div>

      </div>
    </section>
  );
};
