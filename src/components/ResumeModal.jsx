import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-200">

        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-900 text-white border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">
              Resume Document • Sachin Kumar Pal
            </span>
            <span className="text-xs text-slate-400">
              Software QA Engineer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-10 max-h-[85vh] overflow-y-auto print:max-h-none print:p-0 print:overflow-visible font-sans text-slate-800">

          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">

              <div>
                <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  {PROFILE_DATA.name}
                </h1>

                <p className="text-base font-bold text-emerald-700 mt-1">
                  Software QA Engineer
                </p>

                <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                  {PROFILE_DATA.tagline}
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-700 font-mono text-left sm:text-right shrink-0">

                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  <span>{PROFILE_DATA.location}</span>
                </div>

                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3 h-3 text-emerald-600" />
                  <span>+91 {PROFILE_DATA.phoneDisplay}</span>
                </div>

                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-emerald-600" />
                  <span>{PROFILE_DATA.email}</span>
                </div>

                <div className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3 h-3 text-emerald-600" />
                  <span>
                    linkedin.com/in/{PROFILE_DATA.linkedinUsername}
                  </span>
                </div>

                <div className="flex items-center sm:justify-end gap-1.5">
                  <Globe className="w-3 h-3 text-emerald-600" />
                  <span>{PROFILE_DATA.portfolioDisplay}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>

            <p className="text-xs text-slate-700 leading-relaxed">
              {PROFILE_DATA.summary}
            </p>
          </div>

          {/* Skills & Technical Competencies */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              Skills &amp; Technical Competencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">

              <div>
                <strong className="text-slate-900">
                  QA &amp; Testing:
                </strong>{' '}
                Manual Testing, API Testing (Postman), Black Box Testing,
                Smoke Testing, UAT, Functional &amp; Regression Testing,
                Test Case Design &amp; Matrices, Bug Lifecycle Management.
              </div>

              <div>
                <strong className="text-slate-900">
                  Frontend &amp; Dev:
                </strong>{' '}
                HTML, CSS, JavaScript, React.js, Browser DevTools,
                Mobile Web Testing.
              </div>

              <div>
                <strong className="text-slate-900">
                  Methodologies:
                </strong>{' '}
                Agile/Scrum, Sprint Planning, Stand-ups, Retrospectives,
                Defect Triage.
              </div>

              <div>
                <strong className="text-slate-900">
                  Cloud &amp; GenAI:
                </strong>{' '}
                Google Cloud Computing Foundations, Cloud Speech API,
                App Engine, Gemini &amp; Streamlit Apps.
              </div>

            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-950 border-b border-slate-300 pb-1 mb-3 font-mono">
              Work Experience
            </h2>

            <div className="space-y-4">
              {PROFILE_DATA.experiences.map((exp) => (
                <div key={exp.id} className="text-xs">

                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>
                      {exp.company} —{' '}
                      <span className="text-emerald-700 font-semibold">
                        {exp.role}
                      </span>
                    </span>

                    <span className="font-mono text-slate-600 font-normal">
                      {exp.period} ({exp.location})
                    </span>
                  </div>

                  {exp.description && (
                    <p className="text-slate-700 mt-1 italic">
                      {exp.description}
                    </p>
                  )}

                  <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-700">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-950 border-b border-slate-300 pb-1 mb-3 font-mono">
              Education
            </h2>

            <div className="space-y-2 text-xs">
              {PROFILE_DATA.education.map((edu) => (
                <div
                  key={edu.id}
                  className="flex items-start justify-between"
                >
                  <div>
                    <span className="font-bold text-slate-900">
                      {edu.degree}
                    </span>

                    <span className="text-slate-600">
                      {' '}— {edu.institution} ({edu.location})
                    </span>
                  </div>

                  <span className="font-mono text-slate-600 font-normal shrink-0 ml-2">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Honors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">

            {/* Certifications */}
            <div>
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
                Certifications
              </h2>

              <ul className="space-y-1 list-disc list-inside text-slate-700">
                {PROFILE_DATA.certifications.map((c) => (
                  <li key={c.id}>
                    <span className="font-medium text-slate-900">
                      {c.name}
                    </span>{' '}
                    ({c.issuer})
                  </li>
                ))}
              </ul>
            </div>

            {/* Honors & Awards */}
            <div>
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
                Honors &amp; Awards
              </h2>

              <div className="text-slate-700">
                <p className="font-semibold text-slate-900">
                  {PROFILE_DATA.honors[0].title}
                </p>

                <p className="mt-1 text-slate-600 italic">
                  "Quality, it turns out, is a mindset."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};