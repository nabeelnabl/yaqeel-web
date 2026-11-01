import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AlertTriangle, Trash2, Mail, Phone, CheckCircle2 } from 'lucide-react';

export const DeleteAccountPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [instName, setInstName] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      alert('Please check the confirmation box before submitting.');
      return;
    }

    const subject = encodeURIComponent(`Account Deletion Request - ${instName}`);
    const body = encodeURIComponent(
      `Institution: ${instName}\nRegistered Phone: ${phone}\n\nI confirm that I am the authorized administrator and request permanent deletion of this Yaqeel account and all associated student and attendance records.`
    );
    window.location.href = `mailto:support@yaqeel.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-rose-100 selection:text-neutral-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-neutral-50/70 border-b border-black/[0.06] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200/80 mb-4">
            <Trash2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Account Management</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 font-display tracking-tight">
            Delete Account
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
            We are sorry to see you go. Deleting your account is permanent &mdash; please read the guidelines below before initiating the request.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Warning Callout */}
        <div className="flex items-start gap-4 p-5 sm:p-6 bg-rose-50 border border-rose-200 rounded-3xl">
          <AlertTriangle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-rose-800 leading-relaxed font-medium">
            <span className="font-bold block mb-1">Irreversible Action:</span>
            This action cannot be undone. All your data including student records, attendance logs, fee history, and exam results will be permanently and irreversibly purged from our servers.
          </div>
        </div>

        {/* Steps Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.07] shadow-xs space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display">
            How to Request Account Deletion
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Due to privacy and security protocols, institutional accounts must be verified by the registered owner before data deletion is initiated.
          </p>

          <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-neutral-700">
            <li>Submit the deletion verification form below or email <span className="font-semibold text-neutral-900">support@yaqeel.com</span> directly from your registered email address.</li>
            <li>Our compliance officer will reach out via phone/WhatsApp to confirm your administrator credentials.</li>
            <li>Upon successful identity verification, your account, backups, and student registers will be permanently wiped within 14 calendar days.</li>
          </ol>
        </div>

        {/* Deletion Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.07] shadow-xs">
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display mb-6">
            Account Deletion Request Form
          </h3>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Your request has been initiated in your email client. Our support desk will follow up to verify your request.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Institution Name
                </label>
                <input
                  type="text"
                  required
                  value={instName}
                  onChange={(e) => setInstName(e.target.value)}
                  placeholder="e.g. SNM Higher Secondary School"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Registered Administrator Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 94000 00000"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              <div className="pt-2 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm-box"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-rose-600 border-neutral-300 focus:ring-rose-500"
                />
                <label htmlFor="confirm-box" className="text-xs text-neutral-600 select-none">
                  I understand that this action is permanent and will permanently delete all student, attendance, and financial data for this institution.
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                Submit Deletion Request
              </button>
            </form>
          )}
        </div>

        {/* Contact Helpdesk */}
        <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-600">
          <div>
            <span className="font-bold text-neutral-900 block">Need urgent assistance?</span>
            <span>You can speak directly with our team.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919400639420"
              className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-900 font-bold hover:border-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 94006 39420</span>
            </a>
            <a
              href="mailto:support@yaqeel.com"
              className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-900 font-bold hover:border-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Email Support</span>
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
};
