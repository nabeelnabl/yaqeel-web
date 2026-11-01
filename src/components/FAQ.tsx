import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What does the ₹45 – ₹50 / year pricing include?',
      a: 'Everything is included: daily attendance, fee ledger management, exam gradebooks, teacher payroll, parent WhatsApp alerts, and the student mobile app. There are zero hidden setup fees, server maintenance charges, or extra fees for adding new batches.'
    },
    {
      q: 'How do students and parents receive real-time updates?',
      a: 'All attendance check-ins, exam marks, and fee payment receipts sync instantaneously in the Yaqeel student mobile app and are also dispatched directly to parents via automated WhatsApp notifications.'
    },
    {
      q: 'Can teachers take attendance and enter marks completely on mobile?',
      a: 'Yes. Yaqeel is designed mobile-first from the ground up. Teachers can mark an entire class of 60 students in under 10 seconds or log test scores right from their smartphones without needing a laptop or desktop computer.'
    },
    {
      q: 'How quickly can our institute get started?',
      a: 'Setup takes under 10 minutes. Our team provides dedicated WhatsApp assistance to help you import your existing student lists, classes, batches, and fee structures immediately.'
    },
    {
      q: 'Is our student and financial data secure?',
      a: 'Yes. All institute data is encrypted in transit and at rest using enterprise-grade 256-bit SSL encryption. Only authorized administrators and verified faculty credentials have access to your institute portal.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-b border-black/[0.06] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold mb-3 border border-neutral-200/60">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Answers &amp; Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500">
            Everything you need to know about the Yaqeel platform and onboarding.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-black/[0.07] bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 select-none hover:bg-neutral-50/50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-neutral-900 font-display">
                    {item.q}
                  </span>
                  <span className={`p-1.5 rounded-full text-neutral-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600 bg-blue-50' : 'bg-neutral-100'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-black/[0.04]">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
