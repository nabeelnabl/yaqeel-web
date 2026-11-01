import React from 'react';

export type FeatureKey = 'attendance' | 'exams' | 'fees' | 'payroll';

export interface PhoneMockupProps {
  className?: string;
  activeFeature?: FeatureKey;
  mode?: 'fixed' | 'inline';
}

interface DemoItem {
  id: FeatureKey;
  webp: string;
  gif: string;
  alt: string;
}

const DEMOS: DemoItem[] = [
  {
    id: 'attendance',
    webp: '/assets/attendance-screen.webp',
    gif: '/assets/attendance-screen.gif',
    alt: 'Attendance Feature Demo',
  },
  {
    id: 'exams',
    webp: '/assets/exams-screen.webp',
    gif: '/assets/exams-screen.gif',
    alt: 'Exams Feature Demo',
  },
  {
    id: 'fees',
    webp: '/assets/fees-screen.webp',
    gif: '/assets/fees-screen.gif',
    alt: 'Fees Feature Demo',
  },
  {
    id: 'payroll',
    webp: '/assets/payroll-screen.webp',
    gif: '/assets/payroll-screen.gif',
    alt: 'Teachers Payroll Feature Demo',
  },
];

/**
 * iPhone Pro Phone Mockup with Dynamic Feature Demos
 *
 * Optimized for mobile & desktop:
 * - Pixel-perfect screen alignment with CSS mask clipping (no overflow/leak below frame)
 * - Ground shadow kept outside frame aspect ratio to eliminate letterbox shift
 * - High-speed animated WebP with lightweight GIF fallback
 * - Seamless opacity cross-fade
 * - Standalone inline mode for mobile sections (renders only 1 demo per section)
 */
export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  className = '',
  activeFeature = 'attendance',
  mode = 'inline',
}) => {
  // On mobile inline sections, only render the specific feature to optimize performance & memory
  const visibleDemos = mode === 'inline' 
    ? DEMOS.filter((d) => d.id === activeFeature) 
    : DEMOS;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Device Frame Wrapper: Fixed strict 389/800 aspect ratio */}
      <div
        className="relative w-[240px] xs:w-[265px] sm:w-[290px] md:w-[320px] lg:h-[min(580px,68vh)] lg:w-auto max-w-[85vw] aspect-[389/800] shrink-0"
      >
        {/* ======================================================
            LAYER 1: SCREEN DEMO DISPLAY (Precision Masked 1:1 with bezel)
           ====================================================== */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden z-10 flex items-center justify-center rounded-[38px] sm:rounded-[44px]"
          style={{
            WebkitMaskImage: "url('/assets/screen-mask.png')",
            maskImage: "url('/assets/screen-mask.png')",
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
          aria-label={`Current demo: ${activeFeature}`}
        >
          {visibleDemos.map((demo) => {
            const isActive = activeFeature === demo.id;
            return (
              <div
                key={demo.id}
                className="absolute inset-0 w-full h-full will-change-[opacity]"
                style={{
                  transition: 'opacity 350ms ease-in-out',
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <picture>
                  <source type="image/webp" srcSet={demo.webp} />
                  <img
                    src={demo.gif}
                    alt={demo.alt}
                    className="w-full h-full object-cover object-top select-none"
                    loading={isActive ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </picture>
              </div>
            );
          })}

          {/* Subtle Screen Ambient Glass Glare */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent z-25"
            aria-hidden="true"
          />
        </div>

        {/* ======================================================
            LAYER 2: IPHONE PRO FRAME (Titanium Rim + Dynamic Island)
           ====================================================== */}
        <img
          src="/assets/iphone-frame.webp"
          alt="iPhone Pro Frame"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          loading="eager"
        />
      </div>

      {/* Soft Physical Ambient Ground Shadow (Positioned outside frame box) */}
      <div
        className="w-[72%] h-5 sm:h-7 bg-black/35 blur-xl rounded-full -mt-2 sm:-mt-3 pointer-events-none z-0"
        aria-hidden="true"
      />
    </div>
  );
};
