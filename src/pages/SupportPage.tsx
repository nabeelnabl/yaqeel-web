import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  Phone
} from 'lucide-react';

export const SupportPage: React.FC = () => {
  const openDemo = () => {
    const text = encodeURIComponent("Hi Yaqeel, I would like to book a free demo for my institute.");
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-blue-100 selection:text-neutral-900">
      <Navbar onOpenDemo={openDemo} />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-neutral-50/70 border-b border-black/[0.06] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Customer Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 font-display tracking-tight">
            How can we help?
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Find answers in our knowledge base, report technical issues, or connect directly with our support desk.
          </p>

          {/* Quick Contact Badges: Call, WhatsApp, Email */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+919400639420"
              className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-neutral-200 text-xs sm:text-sm font-bold text-neutral-900 hover:text-blue-600 hover:border-blue-500 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call +91 94006 39420</span>
            </a>

            <a
              href="https://wa.me/918590028549?text=Hi%20Yaqeel%20Support%2C%20I%20have%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-[#20BA59] shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp: +91 85900 28549</span>
            </a>

            <a
              href="mailto:support@yaqeel.com"
              className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-neutral-200 text-xs sm:text-sm font-bold text-neutral-900 hover:text-blue-600 hover:border-blue-500 shadow-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>support@yaqeel.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Embedded FAQ */}
      <FAQ />

      <Footer />
    </div>
  );
};
