import React, { useState } from 'react';
import { 
  Users, 
  Layers, 
  CheckSquare, 
  CreditCard, 
  FileText, 
  TrendingUp, 
  Award, 
  UserCheck, 
  Bell, 
  BarChart3,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface FeaturesGridProps {
  onOpenDemo?: () => void;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ onOpenDemo }) => {
  const [filter, setFilter] = useState<'all' | 'operations' | 'academics' | 'finance'>('all');

  const features = [
    {
      num: '01',
      title: 'Student Management',
      category: 'operations',
      desc: 'Complete digital student records with batch tags, parent contact logs, and history searchable in seconds.',
      icon: Users,
      badge: 'Core'
    },
    {
      num: '02',
      title: 'Classes & Batches',
      category: 'operations',
      desc: 'Organise multiple branches, morning/evening batches, and divisions with custom subject schedules.',
      icon: Layers,
      badge: 'Organise'
    },
    {
      num: '03',
      title: 'Fast Attendance',
      category: 'operations',
      desc: 'Mark an entire class in under 10 seconds. Auto-dispatch absent notifications to parents via WhatsApp.',
      icon: CheckSquare,
      badge: '10s Mark'
    },
    {
      num: '04',
      title: 'Fee Management',
      category: 'finance',
      desc: 'Track paid, pending, and overdue fees clearly. Generate digital receipts and send polite automated reminders.',
      icon: CreditCard,
      badge: 'Automated'
    },
    {
      num: '05',
      title: 'Exams & Marks',
      category: 'academics',
      desc: 'Create class tests, term exams, and log marks subject-wise with grade calculation and ranks.',
      icon: FileText,
      badge: 'Gradebook'
    },
    {
      num: '06',
      title: 'Academic Progress',
      category: 'academics',
      desc: 'Visualize performance trends over time to identify struggling students before final examinations.',
      icon: TrendingUp,
      badge: 'Analytics'
    },
    {
      num: '07',
      title: 'Result Certificates',
      category: 'academics',
      desc: 'Generate professional, institute-branded PDF report cards ready for one-tap WhatsApp sharing.',
      icon: Award,
      badge: 'Instant PDF'
    },
    {
      num: '08',
      title: 'Teacher Management',
      category: 'operations',
      desc: 'Grant secure role-based access for faculty to take roll call and submit marks without accessing fees.',
      icon: UserCheck,
      badge: 'Staff'
    },
    {
      num: '09',
      title: 'Parent WhatsApp Updates',
      category: 'operations',
      desc: 'Build instant parental trust with automated absence alerts, exam marks, and fee notifications.',
      icon: Bell,
      badge: 'WhatsApp'
    },
    {
      num: '10',
      title: 'Operational Reports',
      category: 'finance',
      desc: 'One-click summaries of student strength, fee collections, teacher hours, and batch attendance rates.',
      icon: BarChart3,
      badge: 'Insights'
    }
  ];

  const filtered = filter === 'all' 
    ? features 
    : features.filter(f => f.category === filter);

  const handleOpenDemo = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const text = encodeURIComponent("Hi Yaqeel, I would like to book a demo to explore all features.");
      window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
    }
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold mb-3 border border-neutral-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Complete Feature Suite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-tight">
            Built for how modern institutes operate
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            From daily roll calls and teacher schedules to fee reconciliation and parent notifications &mdash; everything is engineered to run seamlessly from mobile.
          </p>

          {/* Minimal Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'operations', label: 'Operations & Staff' },
              { id: 'academics', label: 'Academics & Exams' },
              { id: 'finance', label: 'Fees & Finance' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group p-6 sm:p-7 rounded-3xl bg-neutral-50/60 border border-black/[0.06] hover:bg-white hover:border-blue-400/80 hover:shadow-[0_12px_32px_rgba(37,99,235,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:text-blue-700 transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-neutral-200/60 text-neutral-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 font-display mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.04] flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-blue-600 transition-colors">
                  <span>Module {item.num}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Button */}
        <div className="mt-14 text-center">
          <button
            onClick={handleOpenDemo}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Request Full Institute Demo on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
