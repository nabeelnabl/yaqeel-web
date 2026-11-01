import React from 'react';
import { 
  Bell, 
  CheckCircle2, 
  Award, 
  CreditCard, 
  ArrowRight
} from 'lucide-react';

interface StudentAppHighlightProps {
  onOpenDemo?: () => void;
}

export const StudentAppHighlight: React.FC<StudentAppHighlightProps> = ({ onOpenDemo }) => {
  const handleOpenDemo = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const text = encodeURIComponent("Hi Yaqeel, I would like to know more about the Student & Parent mobile app.");
      window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFE] border-b border-black/[0.06] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80 mb-3 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Parent &amp; Student Mobile App</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-tight">
            Everything Students Need, <span className="text-blue-600">in One Place.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Live attendance check-ins, instant exam marks, fee receipts, and batch timetables — delivered directly to parents' and students' smartphones.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-blue-400/80 hover:shadow-[0_12px_32px_rgba(37,99,235,0.06)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display mb-2">
                Live Attendance Check-ins
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Parents receive instant verification the moment their child arrives in class, eliminating uncertainty and unauthorized absenteeism.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-blue-400/80 hover:shadow-[0_12px_32px_rgba(37,99,235,0.06)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display mb-2">
                Exam Marks &amp; Digital Report Cards
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Unit test results, class rank standing, and downloadable PDF performance cards accessible immediately with zero paperwork.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-blue-400/80 hover:shadow-[0_12px_32px_rgba(37,99,235,0.06)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display mb-2">
                Fee Clearance &amp; Payment Receipts
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Transparent fee ledger statements with installment breakdowns, direct UPI payments, and digital receipts for parents.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-blue-400/80 hover:shadow-[0_12px_32px_rgba(37,99,235,0.06)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display mb-2">
                Broadcast Notices &amp; Timetable Alerts
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Urgent holiday announcements, exam date sheets, and revision batch timings reach parents through push notifications and WhatsApp.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={handleOpenDemo}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Learn More About the Student App</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
