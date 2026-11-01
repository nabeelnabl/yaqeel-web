import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, ChevronRight, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { YaqeelLogo } from './YaqeelLogo';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(isHome);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      if (isHome) {
        const vh = window.innerHeight || 800;
        // Black intro hero spans 1vh; white background appears when scrolled past ~75% of vh
        setIsDarkBackground(scrollY < vh * 0.75);
      } else {
        setIsDarkBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const whatsappUrl = "https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%27m%20interested%20in%20learning%20more%20about%20Yaqeel%20for%20my%20institute.";

  const handleDemoClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const text = encodeURIComponent("Hi Yaqeel, I would like to book a free demo for my institute.");
      window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-white border-b border-black/[0.06] py-3 shadow-xs'
            : isDarkBackground
            ? scrolled
              ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
              : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
            : 'bg-white/90 backdrop-blur-md border-b border-black/[0.06] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand: Dark on white drawer or white page, White on dark intro hero */}
          <Link to="/" className="flex items-center group select-none" aria-label="Yaqeel Home" onClick={() => setMobileMenuOpen(false)}>
            <YaqeelLogo
              variant="horizontal"
              theme={mobileMenuOpen ? 'dark' : isDarkBackground ? 'white' : 'dark'}
              size="md"
              text="yaqeel"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className={`hidden md:flex items-center gap-7 lg:gap-8 text-[13.5px] font-semibold transition-colors duration-200 ${
            isDarkBackground ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            <a
              href={isHome ? "#attendance-section" : "/#attendance-section"}
              className={`transition-colors ${
                isDarkBackground ? 'hover:text-white' : 'hover:text-blue-600'
              }`}
            >
              Features
            </a>

            <a
              href={isHome ? "#pricing" : "/#pricing"}
              className={`transition-colors ${
                isDarkBackground ? 'hover:text-white' : 'hover:text-blue-600'
              }`}
            >
              Pricing
            </a>
            <a
              href={isHome ? "#reviews" : "/#reviews"}
              className={`transition-colors ${
                isDarkBackground ? 'hover:text-white' : 'hover:text-blue-600'
              }`}
            >
              Reviews
            </a>
            <a
              href={isHome ? "#faq" : "/#faq"}
              className={`transition-colors ${
                isDarkBackground ? 'hover:text-white' : 'hover:text-blue-600'
              }`}
            >
              FAQ
            </a>
            <Link
              to="/support"
              className={`transition-colors ${
                isDarkBackground ? 'hover:text-white' : 'hover:text-blue-600'
              }`}
            >
              Support
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* WhatsApp Pill */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs hover:shadow ${
                isDarkBackground && !mobileMenuOpen
                  ? 'bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-400 border border-emerald-500/30'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp</span>
            </a>

            {/* Book Demo Button */}
            <button
              onClick={handleDemoClick}
              className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold shadow-xs transition-all active:scale-95 ${
                mobileMenuOpen
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-white'
                  : isDarkBackground
                  ? 'bg-white hover:bg-neutral-100 text-neutral-950'
                  : 'bg-neutral-900 hover:bg-neutral-800 text-white'
              }`}
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                mobileMenuOpen
                  ? 'text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:scale-95'
                  : isDarkBackground
                  ? 'text-white hover:bg-white/10 active:scale-95'
                  : 'text-neutral-900 hover:bg-neutral-100 active:scale-95'
              }`}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Simple, Clean & Universally Familiar Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-between px-6 pt-24 pb-8 md:hidden animate-in fade-in duration-200 select-none overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col justify-center my-auto py-2">
            <nav className="flex flex-col divide-y divide-neutral-100">
              {[
                { label: 'Home', href: '/', isRoute: true },
                { label: 'Features', href: isHome ? '#attendance-section' : '/#attendance-section' },
                { label: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
                { label: 'Reviews', href: isHome ? '#reviews' : '/#reviews' },
                { label: 'FAQ', href: isHome ? '#faq' : '/#faq' },
                { label: 'Support', href: '/support', isRoute: true },
              ].map((item, idx) => {
                const row = (
                  <div className="flex items-center justify-between py-3.5 px-2 hover:bg-neutral-50 active:bg-neutral-100 rounded-xl transition-colors group">
                    <span className="text-xl font-bold tracking-tight text-neutral-900 font-display">
                      {item.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
                  </div>
                );

                return item.isRoute ? (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    {row}
                  </Link>
                ) : (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    {row}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions: Clear, Obvious & Familiar to Everyone */}
          <div className="space-y-3 pt-6 border-t border-neutral-100 mt-auto">
            {/* Call Helpline */}
            <a
              href="tel:+919400639420"
              className="w-full py-3.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Helpline: +91 94006 39420</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp: +91 85900 28549</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
