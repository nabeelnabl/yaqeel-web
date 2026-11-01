import React from 'react';
import { Check, MessageSquare } from 'lucide-react';

interface SimplePricingProps {
  onOpenDemo?: () => void;
}

export const SimplePricing: React.FC<SimplePricingProps> = () => {
  const whatsappUrl = "https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Rs%2045-50%20per%20student%20pricing%20for%20my%20institute.";

  return (
    <section 
      id="pricing"
      aria-label="Yaqeel Institute Management Software Pricing"
      className="py-16 sm:py-24 bg-white border-b border-black/[0.06]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Minimal & Professional Pricing Card */}
        <div 
          itemScope 
          itemType="https://schema.org/Offer"
          className="rounded-3xl bg-neutral-50/80 p-5 sm:p-10 md:p-12 border border-black/[0.07] text-center shadow-xs"
        >
          {/* SEO Meta Tags */}
          <meta itemProp="priceCurrency" content="INR" />
          <meta itemProp="price" content="45" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="category" content="Educational Software / Institute Management System" />

          {/* Minimal Eyebrow */}
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono mb-3">
            Simple &amp; Transparent Pricing
          </p>

          {/* Clean Price Headline */}
          <div className="flex flex-wrap items-baseline justify-center gap-1.5 sm:gap-2 font-display">
            <span className="text-3xl xs:text-4xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight">
              ₹45 &ndash; ₹50
            </span>
            <span className="text-xs sm:text-base font-medium text-neutral-500">
              / student / year
            </span>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-medium">
            Full platform access &bull; Zero setup fees &bull; No hidden charges
          </p>

          {/* Clean Aligned Feature Checklist */}
          <div className="mt-7 sm:mt-8 flex flex-col items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-700 font-medium text-left max-w-md mx-auto">
            {[
              'All Core Modules Included (Attendance, Fees, Exams, Payroll)',
              'Automated WhatsApp Absence & Performance Alerts',
              'Student & Parent Mobile App Access',
              'Free Dedicated WhatsApp Onboarding & Support',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          {/* Centered WhatsApp Button */}
          <div className="mt-8 sm:mt-9 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current shrink-0" />
              <span>Get Quotation on WhatsApp</span>
            </a>
          </div>

          {/* Clean Subtext */}
          <p className="mt-5 text-[11.5px] text-neutral-400">
            Custom quotations available for institutes with 1,000+ students &bull; GST compliant invoices
          </p>

        </div>

      </div>
    </section>
  );
};
