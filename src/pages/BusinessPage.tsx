import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Institutions } from '../components/Institutions';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  GraduationCap,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export const BusinessPage: React.FC = () => {
  const openDemo = () => {
    const text = encodeURIComponent("Hi Yaqeel, I would like to book a free demo for my institute.");
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-blue-100 selection:text-neutral-900">
      <Navbar onOpenDemo={openDemo} />

      {/* Hero Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Yaqeel for Business &amp; Institutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-tight">
            The Operating System for Modern Tuition Centres &amp; Academies.
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            From 50-student coaching batches to multi-campus academies with 8,000+ enrolments &mdash; Yaqeel simplifies attendance, fees, exams, and parent communications from one unified mobile platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={openDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-100 transition-all shadow-md active:scale-95"
            >
              Book an Institution Demo
            </button>
            <a
              href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20get%20Yaqeel%20for%20my%20institution."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Partner Schools */}
      <Institutions />

      {/* Solutions / Core Pillars */}
      <section className="py-20 sm:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
              Everything You Need to Run &amp; Grow Your Institute
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Designed to simplify operations, keep everyone connected, and help your academy scale with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 01 — Manage Your Institute */}
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-50/70 border border-black/[0.07] flex flex-col justify-between hover:border-black/20 hover:shadow-sm transition-all">
              <div>
                <span className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <p className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-1">
                  01 &mdash; Manage Your Institute
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-6">
                  Everything in one place
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2">&bull; Students &amp; batch management</li>
                  <li className="flex items-center gap-2">&bull; Attendance &amp; absence tracking</li>
                  <li className="flex items-center gap-2">&bull; Fees &amp; payment records</li>
                  <li className="flex items-center gap-2">&bull; Exams, marks &amp; results</li>
                </ul>
              </div>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20explore%20management%20features%20for%20my%20institute."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 font-bold text-xs hover:border-neutral-900 transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Explore Management</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 02 — Keep Everyone Connected */}
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-600/30">
                  <Users className="w-6 h-6" />
                </span>
                <p className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-1">
                  02 &mdash; Keep Everyone Connected
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-6">
                  Built for students, teachers &amp; parents
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                  <li className="flex items-center gap-2">&bull; Teacher management &amp; access</li>
                  <li className="flex items-center gap-2">&bull; Student academic progress</li>
                  <li className="flex items-center gap-2">&bull; Parent updates &amp; notifications</li>
                  <li className="flex items-center gap-2">&bull; Student Mobile App</li>
                </ul>
              </div>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20explore%20the%20Yaqeel%20platform%20for%20students%2C%20teachers%20and%20parents."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors text-center inline-flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20"
              >
                <span>Explore Yaqeel Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 03 — Grow With Confidence */}
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-50/70 border border-black/[0.07] flex flex-col justify-between hover:border-black/20 hover:shadow-sm transition-all">
              <div>
                <span className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </span>
                <p className="text-xs font-bold tracking-wider text-emerald-600 uppercase mb-1">
                  03 &mdash; Grow With Confidence
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-6">
                  Insights that help you improve
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2">&bull; Performance &amp; progress reports</li>
                  <li className="flex items-center gap-2">&bull; Fee collection insights</li>
                  <li className="flex items-center gap-2">&bull; Attendance analytics</li>
                  <li className="flex items-center gap-2">&bull; Reports for smarter decisions</li>
                </ul>
              </div>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20discover%20Yaqeel%20reports%20and%20analytics%20for%20my%20institute."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 font-bold text-xs hover:border-neutral-900 transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Discover Analytics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
