import React from 'react';
import { PhoneMockup } from './PhoneMockup';

/**
 * Page 2 — Attendance Section
 * Features a stunning, luxurious light Yaqeel lavender (#D5C8FE).
 * Editorial dark obsidian typography.
 * The right column reserves space for the single globally fixed phone mockup.
 */
export interface AttendanceSectionProps {
  onViewMore?: () => void;
}

export const AttendanceSection: React.FC<AttendanceSectionProps> = ({ onViewMore }) => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[600px] flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 pt-20 pb-16 lg:pt-16 lg:pb-6 text-[#131127] select-none z-10 bg-[#F5F2FF]">
      {/* Subtle Minimal Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#E5DCFF]/60 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 my-auto">
        
        {/* Left Column: Large Editorial Typography */}
        <div className="flex-[1.18] w-full flex flex-col justify-center text-left max-w-2xl lg:max-w-none z-20">
          
          {/* Section Chapter Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#542BE0]/10 text-[#542BE0] text-xs font-semibold tracking-wider uppercase mb-3.5 lg:mb-3 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#542BE0]" />
            <span>01 • Attendance</span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.1rem] font-extrabold tracking-tight uppercase leading-[0.92] text-[#131127] font-display">
            ATTENDANCE
          </h2>

          {/* Main Message */}
          <p className="mt-3 lg:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] xl:text-[2.05rem] font-semibold text-[#251E3D] tracking-tight leading-snug">
            Mark Attendance in Seconds
          </p>

          {/* Supporting Description */}
          <p className="mt-2.5 lg:mt-2 text-xs sm:text-sm lg:text-[14.5px] text-[#463D64]/90 font-normal leading-relaxed max-w-xl">
            Mark daily attendance with a single tap. Absentee alerts are dispatched directly to parents via WhatsApp.
          </p>

          {/* 5 Key Feature Points from Original Website */}
          <ul className="mt-4 lg:mt-4 space-y-2 lg:space-y-2">
            {[
              'One-tap roll call with instant "All Are Present" or "Mark Absent"',
              'Automated absentee notifications dispatched directly via WhatsApp & SMS',
              'Forenoon and Afternoon session shifts for morning and evening batches',
              'Real-time absentee list with fast student search by name or roll number',
              'Monthly turnout analytics and automated attendance percentage reports',
            ].map((point, index) => (
              <li key={index} className="flex items-start sm:items-center gap-2.5 text-xs sm:text-[13px] lg:text-[13.5px] font-medium text-[#292241]">
                <span className="w-4 h-4 rounded-full bg-[#131127]/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <svg className="w-2.5 h-2.5 text-[#131127]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#131127] hover:bg-[#251E3D] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
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
          <PhoneMockup activeFeature="attendance" />
        </div>

        {/* Desktop Spacer: Leaves space for the fixed phone mockup on desktop (>= lg) */}
        <div className="flex-[0.82] w-full hidden lg:block pointer-events-none opacity-0 select-none" aria-hidden="true">
          <div className="w-[280px] lg:w-[320px] lg:h-[min(580px,68vh)] aspect-[389/800] ml-auto" />
        </div>

      </div>
    </section>
  );
};
