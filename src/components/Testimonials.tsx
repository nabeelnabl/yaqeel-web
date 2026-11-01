import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      institution: 'SNM Higher Secondary School',
      role: 'Administration & Directorate',
      logo: '/assets/snmhss.webp',
      quote: 'Managing high-strength batches and daily attendance transitioned from cumbersome physical registers to effortless mobile tracking within days of adoption.'
    },
    {
      id: 2,
      institution: 'Edu Win Academy',
      role: 'Tuition Management Desk',
      logo: '/assets/edu_win.webp',
      quote: 'Attendance taking and parent notification via WhatsApp has dramatically cut down our daily phone calls and improved fee collection turnarounds.'
    },
    {
      id: 3,
      institution: 'Excel Group Tuition',
      role: 'Centre Operations Head',
      logo: '/assets/excel.webp',
      quote: 'The simplicity of having student records, batch divisions, and fee statuses all accessible from our phones makes Yaqeel an indispensable tool.'
    },
    {
      id: 4,
      institution: 'Infinity Academy',
      role: 'Academic Coordination Desk',
      logo: '/assets/infinity.webp',
      quote: 'Keeping parents informed with automated attendance alerts created immediate trust. Teachers adopted the app without needing any technical training.'
    },
    {
      id: 5,
      institution: 'Wings Academy',
      role: 'Institute Management',
      logo: '/assets/wings.webp',
      quote: 'Yaqeel provides the right balance between powerful institute management features and an extremely clean, intuitive mobile experience.'
    },
    {
      id: 6,
      institution: 'Al-Huda English Medium School',
      role: "Principal's Office",
      initials: 'AH',
      quote: 'Automated absent alerts dispatched straight to parents via WhatsApp have resolved student truancy and significantly improved parent engagement.'
    },
    {
      id: 7,
      institution: 'Bright Future Coaching Hub',
      role: 'Managing Director',
      initials: 'BF',
      quote: 'The gradebook and batch marks analysis transformed our internal examinations. Creating digital PDF performance cards now takes only a single click.'
    },
    {
      id: 8,
      institution: 'Crescent Learning Institute',
      role: 'Academic Coordinator',
      initials: 'CL',
      quote: 'Handling teacher schedules, lecture hours, and staff payout slips has eliminated our monthly payroll headaches completely.'
    }
  ];

  // Duplicated list for seamless infinite loop
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#FAFAFE] border-b border-black/[0.06] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200/60">
            <Quote className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-tight">
            Trusted by leading academies <br className="hidden sm:block" />
            <span className="text-blue-600">and everyday educators</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Real feedback from verified institute directors streamlining daily operations with Yaqeel.
          </p>
        </div>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFE] via-[#FAFAFE]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFE] via-[#FAFAFE]/80 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 sm:gap-6 animate-marquee hover:[animation-play-state:paused] py-2">
            {displayTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[280px] xs:w-[320px] sm:w-[380px] p-5 sm:p-7 rounded-3xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between shrink-0"
              >
                <div>
                  <Quote className="w-7 h-7 text-blue-500/20 mb-4" />
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.04] flex items-center gap-3">
                  {t.logo ? (
                    <img
                      src={t.logo}
                      alt={t.institution}
                      className="w-10 h-10 object-contain rounded-xl border border-black/[0.06] p-1 bg-white shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {t.initials}
                    </div>
                  )}

                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 font-display truncate">
                      {t.institution}
                    </h4>
                    <p className="text-[11px] text-neutral-500 truncate">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
