import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Copy,
  Check,
  FileText,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Code2,
  Bug,
  Terminal,
  Activity,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Hero = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="overview"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="absolute top-48 right-10 w-[300px] h-[250px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-emerald-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          <span>
            Open to Opportunities: QA Engineer • QA Tester • QA Analyst
            (On-site / Hybrid / Remote)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Main Bio Column */}
          <div className="lg:col-span-8 space-y-6">

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {PROFILE_DATA.name}
                </span>
              </h1>

              <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-300 flex flex-wrap items-center gap-2">
                <span>{PROFILE_DATA.title}</span>

                <span className="text-emerald-400 font-mono text-base font-normal">
                  | Manual &amp; API Specialist
                </span>
              </p>
            </div>

            {/* Tagline pill list */}
            <div className="flex flex-wrap gap-2 pt-1">

              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Bug className="w-3.5 h-3.5 text-emerald-400" />
                Manual Testing &amp; Bug Lifecycle
              </span>

              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                API Testing (Postman)
              </span>

              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                Agile/Scrum Ceremonies
              </span>

              <span className="px-3 py-1 rounded-md text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                Frontend-Savvy QA (React.js)
              </span>

            </div>

            {/* Quote banner */}
            <div className="relative p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900/90 to-slate-900/50 border-l-4 border-l-emerald-500 border-y border-r border-slate-800/80 shadow-lg">
              <p className="text-base sm:text-lg font-medium text-emerald-300/95 italic">
                "{PROFILE_DATA.philosophy}"
              </p>

              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Quality issues caught before they ever reach real people.
              </p>
            </div>

            {/* Summary narrative */}
            <div className="space-y-3.5 text-slate-300 leading-relaxed text-sm sm:text-base">

              <p>
                I make sure software products work the way users expect. At{' '}
                <span className="text-white font-semibold">
                  SJ Innovation
                </span>
                , I designed and executed functional, regression, and API test
                cases across web and mobile applications — validating releases,
                tracking defects through their complete lifecycle, and
                partnering directly with developers to resolve them quickly.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-sm">

                <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>The Frontend-Savvy Advantage:</span>
                </div>

                <p>
                  With my hands-on knowledge in{' '}
                  <strong className="text-white">
                    HTML, CSS, JavaScript, and React.js
                  </strong>
                  , I don't just report bugs — I speak developers' language.
                  This translates to clearer root-cause isolation, faster fixes,
                  reproducible network/state details, and fewer back-and-forth
                  cycles.
                </p>

              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">

              <a
                href="#experience"
                id="hero-view-experience-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all cursor-pointer"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#methodology"
                id="hero-view-workflow-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>QA Workflow &amp; Sample Defect</span>
              </a>

              <button
                onClick={onOpenResume}
                id="hero-open-resume-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>View Resume PDF</span>
              </button>

            </div>
          </div>

          {/* Quick Contact & Profile Card Column */}
          <div className="lg:col-span-4">

            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">

              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-2xl text-slate-950 shadow-inner">
                  SP
                </div>

                <div>
                  <h3 className="font-bold text-lg text-white">
                    {PROFILE_DATA.name}
                  </h3>

                  <p className="text-xs text-emerald-400 font-medium">
                    Software QA Engineer
                  </p>

                  <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>Goa, India</span>
                  </p>
                </div>

              </div>

              {/* Verified Contact Points */}
              <div className="py-4 space-y-3">

                {/* Email */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 group">

                  <div className="flex items-center gap-2.5 overflow-hidden">

                    <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>

                    <div className="overflow-hidden">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        Email Address
                      </div>

                      <a
                        href={`mailto:${PROFILE_DATA.email}`}
                        className="text-xs font-mono text-slate-200 hover:text-emerald-400 truncate block transition-colors"
                      >
                        {PROFILE_DATA.email}
                      </a>
                    </div>

                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(PROFILE_DATA.email, 'email')
                    }
                    title="Copy Email"
                    className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 group">

                  <div className="flex items-center gap-2.5 overflow-hidden">

                    <div className="p-1.5 rounded-md bg-teal-500/10 text-teal-400">
                      <Phone className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        Mobile / WhatsApp
                      </div>

                      <a
                        href={`tel:${PROFILE_DATA.phone}`}
                        className="text-xs font-mono text-slate-200 hover:text-teal-400 transition-colors"
                      >
                        +91 {PROFILE_DATA.phoneDisplay}
                      </a>
                    </div>

                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(PROFILE_DATA.phoneDisplay, 'phone')
                    }
                    title="Copy Phone"
                    className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                </div>

                {/* LinkedIn */}
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors group"
                >

                  <div className="flex items-center gap-2.5">

                    <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        LinkedIn Profile
                      </div>

                      <span className="text-xs text-slate-200 group-hover:text-blue-300 font-mono">
                        in/{PROFILE_DATA.linkedinUsername}
                      </span>
                    </div>

                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />

                </a>

                {/* Portfolio */}
                <a
                  href={PROFILE_DATA.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors group"
                >

                  <div className="flex items-center gap-2.5">

                    <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-400">
                      <Globe className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        Live Portfolio URL
                      </div>

                      <span className="text-xs text-slate-200 group-hover:text-purple-300 font-mono">
                        {PROFILE_DATA.portfolioDisplay}
                      </span>
                    </div>

                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />

                </a>

              </div>

              {/* Mindset snippet card */}
              <div className="mt-2 pt-4 border-t border-slate-800">

                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Quality Mindset</span>
                </div>

                <p className="text-xs text-slate-400 italic">
                  "I won 2nd Prize at a state-level intercollegiate short film
                  competition. Quality, it turns out, is a mindset."
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};