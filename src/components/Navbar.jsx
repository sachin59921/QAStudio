import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Experience', href: '#experience' },
    { label: 'QA Methodology', href: '#methodology' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Education & Certs', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <a
            href="#overview"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-bold text-slate-950 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              SP
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {PROFILE_DATA.name}
                </span>

                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to QA Roles
                </span>
              </div>

              <p className="text-xs text-slate-400 font-mono tracking-wide">
                Software QA Engineer
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 hover:border-slate-600 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Resume PDF</span>
            </button>

            <a
              id="nav-hire-btn"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-sm shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50"
            >
              <CheckCircle2 className="w-4 h-4 text-slate-950" />
              <span>Hire / Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800/80 flex flex-col gap-1.5 bg-slate-950/95 rounded-2xl p-4 shadow-xl border border-slate-800">

            <div className="mb-2 flex items-center gap-2 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {PROFILE_DATA.availability}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800/80 hover:text-emerald-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                View / Print Resume
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-950"
              >
                <CheckCircle2 className="w-4 h-4" />
                Get in Touch
              </a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};