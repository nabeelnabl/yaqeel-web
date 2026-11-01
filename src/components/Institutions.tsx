import React from 'react';
import { Award } from 'lucide-react';

export const Institutions: React.FC = () => {
  const institutions = [
    {
      name: 'SNM Higher Secondary School',
      short: 'SNMHSS Parappanangadi',
      logo: '/assets/snmhss.webp',
      type: 'Higher Secondary School',
      status: 'Active Partner'
    },
    {
      name: 'Edu Win Academy',
      short: 'Edu Win Academy',
      logo: '/assets/edu_win.webp',
      type: 'Premier Academy',
      status: 'Active Partner'
    },
    {
      name: 'Excel Group Tuition',
      short: 'Excel Education',
      logo: '/assets/excel.webp',
      type: 'Group Tuition Centre',
      status: 'Active Partner'
    },
    {
      name: 'Infinity Academy',
      short: "Infinity Student's Academy",
      logo: '/assets/infinity.webp',
      type: 'Tuition & Coaching',
      status: 'Active Partner'
    },
    {
      name: 'Wings Academy',
      short: 'Wings Academy',
      logo: '/assets/wings.webp',
      type: 'Learning Institute',
      status: 'Active Partner'
    }
  ];

  // Quadruplicated list for seamless infinite loop
  const displayInstitutions = [...institutions, ...institutions, ...institutions, ...institutions];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-black/[0.06] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold mb-3 border border-neutral-200/60">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven In Real Classrooms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 font-display tracking-tight">
            Trusted by leading institutions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
            Yaqeel is empowering educational academies, tuition centres, and higher secondary schools across Kerala and India.
          </p>
        </div>

        {/* Smooth Horizontal Sliding Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Continuous Sliding Track */}
          <div className="flex gap-4 sm:gap-5 animate-marquee hover:[animation-play-state:paused] py-2">
            {displayInstitutions.map((inst, idx) => (
              <div
                key={idx}
                className="group w-[210px] sm:w-[230px] h-[120px] sm:h-[125px] flex-shrink-0 p-4 rounded-2xl bg-white border border-black/[0.07] hover:border-blue-400 hover:shadow-[0_8px_25px_rgba(37,99,235,0.06)] transition-all duration-300 flex flex-col items-center text-center justify-center"
              >
                {/* Logo Presentation */}
                <div className="h-11 w-full flex items-center justify-center mb-2">
                  <img
                    src={inst.logo}
                    alt={inst.name}
                    className="max-h-10 max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Institution Title */}
                <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 font-display leading-tight line-clamp-1 group-hover:text-blue-600 transition-colors w-full px-1">
                  {inst.name}
                </h4>
                <span className="text-[10.5px] text-neutral-400 font-medium block mt-0.5 line-clamp-1 w-full px-1">
                  {inst.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
