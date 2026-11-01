import React, { useEffect } from 'react';

export interface FeatureDetail {
  id: 'attendance' | 'exams' | 'fees' | 'payroll';
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  description: string;
  highlights: { title: string; desc: string }[];
}

const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  attendance: {
    id: 'attendance',
    badge: '01 • Daily Operations',
    badgeColor: 'bg-[#542BE0]/10 text-[#542BE0] border-[#542BE0]/20',
    title: 'Attendance Management',
    tagline: 'Mark Attendance in Seconds',
    description: 'Mark attendance with a single tap from your phone. Absentee alerts are dispatched directly to parents via WhatsApp, with real-time monthly turnout analytics.',
    highlights: [
      {
        title: 'Forenoon & Afternoon Shifts',
        desc: 'Seamless session tabs tailored for morning classes, evening batches, and tuition centres.',
      },
      {
        title: 'Instant "All Are Present" or "Mark Absent"',
        desc: 'Quickly select only the students who are absent, leaving the rest automatically marked present.',
      },
      {
        title: 'Search by Name or Roll Number',
        desc: 'Find any student instantly across large divisions with fast real-time search.',
      },
      {
        title: 'Automated Parent WhatsApp Alerts',
        desc: 'Dispatches instant absentee notifications to parents without manual typing or delays.',
      },
    ],
  },
  exams: {
    id: 'exams',
    badge: '02 • Academic Tracking',
    badgeColor: 'bg-[#0D6D47]/10 text-[#0D6D47] border-[#0D6D47]/20',
    title: 'Exams & Score Gradebooks',
    tagline: 'Gradebooks, Score Analysis & Report Cards',
    description: 'Enter subject-wise marks easily as soon as test sheets are corrected. Auto-calculates batch averages, student ranks, and creates 1-click printable report cards.',
    highlights: [
      {
        title: 'Effortless Mobile Marks Entry',
        desc: 'Teachers can enter scores batch-wise in seconds from any smartphone as papers are corrected.',
      },
      {
        title: 'Identify Students Needing Attention',
        desc: 'Auto-flags students with lower subject scores for personalized revision before major exams.',
      },
      {
        title: '1-Click Digital Result Certificates',
        desc: 'Instantly generate and share branded PDF progress report cards with parents.',
      },
      {
        title: 'Batch Ranks & Class Averages',
        desc: 'Computes overall pass rate, class average percentage, and batch rankings in real time.',
      },
    ],
  },
  fees: {
    id: 'fees',
    badge: '03 • Finance & Accounts',
    badgeColor: 'bg-[#A6421B]/10 text-[#A6421B] border-[#A6421B]/20',
    title: 'Fee Collections & Ledgers',
    tagline: 'Clear Ledgers & Instant Digital Receipts',
    description: 'Track paid, pending, and overdue fees clearly by student or batch. Automatically send polite WhatsApp payment reminders with UPI links and branded receipts.',
    highlights: [
      {
        title: 'Live Collections Ledger',
        desc: 'Instant view of total fees cleared, pending balances, and overdue accounts batch by batch.',
      },
      {
        title: 'Instant Branded Receipts',
        desc: 'Generate GST-compliant or standard institution payment receipts with your logo in one click.',
      },
      {
        title: 'Automated Payment Reminders',
        desc: 'Send gentle WhatsApp reminders with direct UPI payment links so parents can pay on time.',
      },
      {
        title: 'Revenue Audit Reports',
        desc: 'Download daily, monthly, and annual financial ledger summaries for management reviews.',
      },
    ],
  },
  payroll: {
    id: 'payroll',
    badge: '04 • Staff Management',
    badgeColor: 'bg-[#1D4ED8]/10 text-[#1D4ED8] border-[#1D4ED8]/20',
    title: 'Teachers Payroll & Logs',
    tagline: 'Staff Salary Payouts & Lecture Logs',
    description: 'Manage teaching faculty salaries, track assigned classes and lecture hours, compute monthly payouts, and maintain transparent teacher attendance records.',
    highlights: [
      {
        title: 'Faculty Hours & Lecture Logs',
        desc: 'Track daily teaching periods, classes taken, and monthly logged hours per faculty member.',
      },
      {
        title: 'Automated Payout Calculations',
        desc: 'Computes monthly faculty compensation based on verified lecture hours and attendance.',
      },
      {
        title: 'Granular Access Permissions',
        desc: 'Role-based security protects sensitive accounting ledgers while granting teachers syllabus view.',
      },
      {
        title: '1-Click Salary Slips',
        desc: 'Generate printable or digital monthly salary slips and transparent payout records.',
      },
    ],
  },
};

export const FeatureDetailModal: React.FC<{
  featureId: string | null;
  onClose: () => void;
}> = ({ featureId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (featureId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [featureId, onClose]);

  if (!featureId || !FEATURE_DETAILS[featureId]) return null;
  const detail = FEATURE_DETAILS[featureId];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Yaqeel, I would like to see a demo of the ${detail.title} module for my institute.`
    );
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border border-neutral-200/80 text-left overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border ${detail.badgeColor}`}
        >
          {detail.badge}
        </span>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tracking-tight pr-8">
          {detail.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-neutral-500">{detail.tagline}</p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">{detail.description}</p>

        {/* Capabilities Grid */}
        <div className="mt-6 pt-6 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {detail.highlights.map((h, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/60">
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{h.title}</span>
              </h4>
              <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-neutral-400">Mobile-first &bull; Android &amp; iOS compatible</p>
          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-initial px-5 sm:px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
            >
              Request Live Demo
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs sm:text-sm transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
