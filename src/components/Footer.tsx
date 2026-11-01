import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { YaqeelLogo } from './YaqeelLogo';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-black/[0.06] pt-16 pb-12 text-neutral-600 selection:bg-blue-100 selection:text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-black/[0.06]">
          
          {/* Brand Info (2 cols on large) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group" aria-label="Yaqeel Home">
              <YaqeelLogo
                variant="horizontal"
                theme="dark"
                size="md"
              />
            </Link>

            <p className="text-sm font-semibold text-neutral-800 font-display">
              Institute Management Made Simple.
            </p>

            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              Built for forward-looking educational institutes in India. Empowering tuition centres, coaching academies, and schools to streamline daily operations from handheld mobile devices.
            </p>

            {/* Support Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>8,000+ Students managed across verified partner institutes</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:contents">
            {/* Product Links */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono mb-4">
                [ Product ]
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                <li>
                  <a
                    href="https://business.yaqeel.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-950 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Console</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://business.yaqeel.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-950 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Mobile App</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    FAQ &amp; Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    For Institutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono mb-4">
                [ Legal ]
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/delete-account"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    Delete Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono mb-4">
              [ Contact ]
            </h4>
            
            {/* 1st: Call */}
            <div className="space-y-0.5">
              <a
                href="tel:+919400639420"
                className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+91 94006 39420</span>
              </a>
              <span className="text-[11px] text-neutral-400 block pl-5">
                Direct Call Helpline
              </span>
            </div>

            {/* 2nd: WhatsApp */}
            <div className="space-y-0.5">
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20have%20an%20enquiry%20regarding%20the%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-[#25D366] hover:text-[#20BA59] transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>+91 85900 28549</span>
              </a>
              <span className="text-[11px] text-neutral-400 block pl-5">
                Official WhatsApp Desk
              </span>
            </div>

            {/* 3rd: Email */}
            <div className="space-y-0.5">
              <a
                href="mailto:support@yaqeel.com"
                className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>support@yaqeel.com</span>
              </a>
              <span className="text-[11px] text-neutral-400 block pl-5">
                Responds within a few hours
              </span>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/yaqeel.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-pink-600 hover:border-pink-300 transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Yaqeel/61594261919784/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/yaqeel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-blue-700 hover:border-blue-400 transition-colors shadow-xs"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p>
            &copy; {CURRENT_YEAR} Yaqeel. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <Link to="/terms" className="hover:text-neutral-900 transition-colors">
              Terms of Use
            </Link>
            <Link to="/privacy" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-neutral-900 transition-colors">
              Refund Policy
            </Link>
            <Link to="/delete-account" className="hover:text-neutral-900 transition-colors">
              Delete Account
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
