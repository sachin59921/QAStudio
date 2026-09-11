import React from 'react';
import {
  ArrowUp,
  Mail,
  Phone,
  Linkedin,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-sm shadow-md">
                SP
              </div>

              <span className="font-bold text-white text-base">
                {PROFILE_DATA.name}
              </span>

              <span className="text-xs text-emerald-400 font-mono">
                • {PROFILE_DATA.title}
              </span>
            </div>

            <p className="text-xs text-slate-500 mt-1 max-w-md">
              {PROFILE_DATA.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Email Sachin"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PROFILE_DATA.phone}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
              title="Call Mobile"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
              title="Live Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>"{PROFILE_DATA.philosophy}"</span>
          </p>

          <p>
            {PROFILE_DATA.location} • Available for On-site, Hybrid &amp;
            Remote roles
          </p>
        </div>
      </div>
    </footer>
  );
};