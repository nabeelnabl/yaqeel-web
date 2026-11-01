import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-blue-100 selection:text-neutral-900">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-neutral-50/70 border-b border-black/[0.06] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80 mb-4">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Service Terms</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 font-display tracking-tight">
            Terms of Use
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Guidelines and legal responsibilities governing your use of the Yaqeel platform and mobile applications.
          </p>

          <span className="inline-block mt-4 text-xs font-semibold text-neutral-400">
            Last updated: May 2026
          </span>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-black/[0.07] shadow-xs space-y-8 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Yaqeel (including mobile applications, web portals, and associated software), you agree to be bound by these Terms of Use and our Privacy Policy. If you represent an educational institution or tuition centre, you confirm having the authority to bind such institution to these terms.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              2. Use of Platform &amp; Account Responsibilities
            </h2>
            <p>
              Institutions are responsible for maintaining the confidentiality of their administrator and staff credentials. All activities occurring under your institutional account remain the responsibility of the designated institute administrators.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              3. Student Data &amp; Privacy Compliance
            </h2>
            <p>
              Yaqeel operates as a software service provider. Institutes retain all rights and ownership of their uploaded student records, grades, and attendance data. Yaqeel will never sell or exploit institutional records for commercial marketing purposes.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              4. Subscription &amp; Billing
            </h2>
            <p>
              Subscription fees are billed on an annual basis according to the number of active enrolled students. Failure to remit subscription renewals may result in temporary suspension of administrative access until balances are settled.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              5. Contact &amp; Legal Notices
            </h2>
            <p>
              For formal legal inquiries or notices regarding these terms, contact <a href="mailto:support@yaqeel.com" className="text-blue-600 underline">support@yaqeel.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
