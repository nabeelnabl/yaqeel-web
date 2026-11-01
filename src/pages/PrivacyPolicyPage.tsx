import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Lock } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-blue-100 selection:text-neutral-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-neutral-50/70 border-b border-black/[0.06] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80 mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>Legal Disclosures</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 font-display tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Your privacy matters to us. This policy explains what data we collect, how we process it, and how we protect it.
          </p>

          <span className="inline-block mt-4 text-xs font-semibold text-neutral-400">
            Last updated: May 2026
          </span>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-black/[0.07] shadow-xs space-y-10 text-neutral-700 leading-relaxed text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly when you create an account, register your institution layout, or contact our support team. This includes your administrative name, email address, phone number, and institution details.
            </p>
            <p className="mt-3">
              We also automatically collect certain technical data when you interact with the Yaqeel platform &mdash; such as your IP address, device type, operating system version, and system usage patterns &mdash; to help us maintain and improve platform security.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the collected information solely to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-neutral-600">
              <li>Provide, operate, and maintain the Yaqeel platform and mobile applications.</li>
              <li>Process transactions and manage subscription cycles.</li>
              <li>Send critical administrative notices, such as attendance confirmations, fee receipts, and security alerts.</li>
              <li>Respond to customer support requests and diagnose technical issues.</li>
              <li>Improve platform performance and user experience across handheld devices.</li>
            </ul>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              3. Data Retention &amp; Security
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical security safeguards to prevent unauthorized access, alteration, or disclosure of your educational data. All communications between the mobile application and our servers are encrypted via SSL/TLS.
            </p>
            <p className="mt-3">
              We retain institutional data only for as long as your account remains active or as required to fulfill our legal obligations and resolve disputes.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              4. Third-Party Sharing
            </h2>
            <p>
              Yaqeel does not sell, rent, or monetize student, teacher, or institutional data to advertisers or third parties under any circumstances. We share information only with trusted infrastructure providers (such as cloud database hosts and SMS/WhatsApp gateway providers) strictly as necessary to execute core application functionality.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy practices or this Privacy Policy, please contact our data compliance desk at:
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-xs sm:text-sm font-medium space-y-1">
              <p className="text-neutral-900 font-bold">Yaqeel Privacy &amp; Data Compliance</p>
              <p>Email: <a href="mailto:support@yaqeel.com" className="text-blue-600 underline">support@yaqeel.com</a></p>
              <p>Phone: +91 94006 39420 / +91 85900 28549</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};
