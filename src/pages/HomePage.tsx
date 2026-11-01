import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { IntroSection } from '../components/IntroSection';
import { AttendanceSection } from '../components/AttendanceSection';
import { ExamsSection } from '../components/ExamsSection';
import { FeesSection } from '../components/FeesSection';
import { PayrollSection } from '../components/PayrollSection';
import { PhoneMockup } from '../components/PhoneMockup';
import { FeatureDetailModal } from '../components/FeatureDetailModal';
import { Institutions } from '../components/Institutions';
import { SimplePricing } from '../components/SimplePricing';
import { Testimonials } from '../components/Testimonials';
import { AppDownload } from '../components/AppDownload';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const attendanceRef = useRef<HTMLDivElement>(null);
  const examsRef = useRef<HTMLDivElement>(null);
  const feesRef = useRef<HTMLDivElement>(null);
  const payrollRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const homeHeroRef = useRef<HTMLDivElement>(null);

  const [activeFeature, setActiveFeature] = useState<'attendance' | 'exams' | 'fees' | 'payroll'>('attendance');
  const [activeModalFeature, setActiveModalFeature] = useState<string | null>(null);

  const openDemo = () => {
    const text = encodeURIComponent("Hi Yaqeel, I would like to book a free demo for my institute.");
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const vh = window.innerHeight || 800;

          // 1. Direct hardware-accelerated Intro layer transforms
          if (homeHeroRef.current) {
            const introProgress = Math.min(1, Math.max(0, scrollY / vh));
            homeHeroRef.current.style.transform = `scale(${1 - introProgress * 0.05})`;
            homeHeroRef.current.style.opacity = `${1 - introProgress * 0.45}`;
            homeHeroRef.current.style.visibility = introProgress >= 1 ? 'hidden' : 'visible';
            homeHeroRef.current.style.pointerEvents = introProgress >= 0.8 ? 'none' : 'auto';
          }

          // 2. Desktop-only: Direct hardware-accelerated Fixed Phone Mockup transforms
          const isDesktop = window.innerWidth >= 1024;
          if (isDesktop && phoneWrapperRef.current && featuresRef.current) {
            const rect = featuresRef.current.getBoundingClientRect();
            let targetY = 0;
            let targetOpacity = 0;

            // Phase 1: Features container rising from bottom
            if (rect.top > 0) {
              targetY = rect.top;
              targetOpacity = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.45)));
            }
            // Phase 2: Features container active (Attendance to Payroll)
            else if (rect.bottom >= vh) {
              targetY = 0;
              targetOpacity = 1;
            }
            // Phase 3: Exiting features container below Payroll (Smooth Dissolve)
            else {
              const exitDistance = Math.min(450, vh * 0.55);
              const exitProgress = Math.min(1, Math.max(0, (vh - rect.bottom) / exitDistance));
              targetOpacity = Math.max(0, 1 - exitProgress * exitProgress);
              targetY = -(exitProgress * 60);
            }

            phoneWrapperRef.current.style.transform = `translate3d(0, ${targetY}px, 0)`;
            phoneWrapperRef.current.style.opacity = `${targetOpacity}`;
            phoneWrapperRef.current.style.visibility = targetOpacity <= 0.005 ? 'hidden' : 'visible';
          }

          // 3. Desktop-only: Determine active feature for fixed mockup
          if (isDesktop && attendanceRef.current && examsRef.current && feesRef.current && payrollRef.current) {
            const centerY = (vh + 80) / 2;
            const attRect = attendanceRef.current.getBoundingClientRect();
            const examsRect = examsRef.current.getBoundingClientRect();
            const feesRect = feesRef.current.getBoundingClientRect();
            const payrollRect = payrollRef.current.getBoundingClientRect();

            const attDist = Math.abs(attRect.top + attRect.height / 2 - centerY);
            const examsDist = Math.abs(examsRect.top + examsRect.height / 2 - centerY);
            const feesDist = Math.abs(feesRect.top + feesRect.height / 2 - centerY);
            const payrollDist = Math.abs(payrollRect.top + payrollRect.height / 2 - centerY);

            const minDist = Math.min(attDist, examsDist, feesDist, payrollDist);

            const nextFeature =
              minDist === payrollDist ? 'payroll' :
              minDist === feesDist ? 'fees' :
              minDist === examsDist ? 'exams' : 'attendance';

            setActiveFeature((prev) => (prev !== nextFeature ? nextFeature : prev));
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden selection:bg-blue-100 selection:text-neutral-900">
      
      {/* Top Floating Navbar */}
      <Navbar onOpenDemo={openDemo} />

      {/* ========================================================
          PAGE 1: YAQEEL INTRO (Fixed Base Layer)
          Stays pinned in place at top:0. As user scrolls down,
          the Features page rolls UP and covers this page completely.
         ======================================================== */}
      <div
        id="home"
        ref={homeHeroRef}
        className="fixed top-0 left-0 right-0 w-full h-[100dvh] z-0 overflow-hidden flex flex-col items-center justify-center pointer-events-auto"
        style={{
          transform: 'scale(1)',
          opacity: 1,
          willChange: 'transform, opacity',
        }}
      >
        <IntroSection onOpenDemo={openDemo} />
      </div>

      {/* 100dvh Document Spacer — creates the natural scroll runway so Features covers Intro */}
      <div className="w-full h-[100dvh] pointer-events-none select-none" aria-hidden="true" />

      {/* ========================================================
          FEATURE PAGES (ROLLS UP & COVERS THE FIXED INTRO PAGE)
          Flat top edge with elevated deep physical drop shadow.
          Contains Attendance, Exams, Fees, Payroll with continuous background scroll.
         ======================================================== */}
      <div
        ref={featuresRef}
        className="relative z-10 w-full rounded-none shadow-[0_-30px_90px_rgba(0,0,0,0.85),0_-10px_30px_rgba(0,0,0,0.6)] border-t border-black/10 overflow-hidden bg-[#F5F2FF]"
      >
        {/* Subtle Top Page Edge Shadow/Highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] bg-white/40 pointer-events-none z-30"
          aria-hidden="true"
        />

        {/* ======================================================
            FEATURE SECTIONS CONTENT STREAM
            Only background and titles/descriptions scroll past
           ====================================================== */}
        <div className="relative z-10 w-full">
          
          {/* PAGE 2: ATTENDANCE (Minimal Light Lavender Zone) */}
          <div ref={attendanceRef} id="attendance-section" className="scroll-mt-24">
            <AttendanceSection onViewMore={() => setActiveModalFeature('attendance')} />
          </div>

          {/* PAGE 3: EXAMS (Minimal Light Mint Zone) */}
          <div ref={examsRef} id="exams-section" className="scroll-mt-24">
            <ExamsSection onViewMore={() => setActiveModalFeature('exams')} />
          </div>

          {/* PAGE 4: FEES (Minimal Warm Peach Zone) */}
          <div ref={feesRef} id="fees-section" className="scroll-mt-24">
            <FeesSection onViewMore={() => setActiveModalFeature('fees')} />
          </div>

          {/* PAGE 5: PAYROLL (Minimal Crisp Ice Blue Zone) */}
          <div ref={payrollRef} id="payroll-section" className="scroll-mt-24">
            <PayrollSection onViewMore={() => setActiveModalFeature('payroll')} />
          </div>

        </div>

      </div>

      {/* ========================================================
          THE SINGLE FIXED PHONE MOCKUP
          Positioned between the top bar (top-16 sm:top-20) and bottom (bottom-0)
          so it is perfectly centered vertically in the available viewport.
         ======================================================== */}
      <div
        ref={phoneWrapperRef}
        className="hidden lg:flex fixed inset-x-0 top-16 sm:top-20 bottom-0 pointer-events-none z-30 items-center justify-center"
        style={{
          transform: 'translate3d(0, 1000px, 0)',
          opacity: 0,
          visibility: 'hidden',
          willChange: 'transform, opacity',
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-8 lg:gap-12 xl:gap-16 pointer-events-none">
          {/* Left column empty spacer on desktop */}
          <div className="flex-[1.18] w-full" aria-hidden="true" />

          {/* Right column on desktop: Phone Mockup */}
          <div className="flex-[0.82] w-full flex items-center justify-end pointer-events-auto">
            <PhoneMockup activeFeature={activeFeature} mode="fixed" />
          </div>
        </div>
      </div>

      {/* ========================================================
          CONTINUATION SECTIONS BELOW PAYROLL
          All sitting on top (z-20) in luminous clean backgrounds
         ======================================================== */}
      <div className="relative z-20 w-full bg-white">
        
        {/* 1. Partner Institutions Marquee */}
        <div id="institutions">
          <Institutions />
        </div>

        {/* 2. Simple Transparent Pricing */}
        <SimplePricing onOpenDemo={openDemo} />

        {/* 5. Verified Testimonials */}
        <Testimonials />

        {/* 6. Mobile App Download Banner */}
        <AppDownload />

        {/* 7. Frequently Asked Questions */}
        <FAQ />

        {/* 8. Comprehensive Footer */}
        <Footer />

      </div>

      {/* Feature Detail Modal */}
      <FeatureDetailModal
        featureId={activeModalFeature}
        onClose={() => setActiveModalFeature(null)}
      />

    </div>
  );
};
