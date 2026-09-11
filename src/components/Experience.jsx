import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Work History</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Testing Impact
          </h2>

          <p className="mt-3 text-base text-slate-400">
            Hands-on QA engineering, multi-sprint test coverage, API
            verification, and direct developer collaboration.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-10">
          {PROFILE_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group"
            >
              {/* Highlight bar on top */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {exp.role}
                    </h3>

                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                  </div>

                  <div className="text-base font-semibold text-slate-300 flex items-center gap-2">
                    <span>{exp.company}</span>

                    <span className="text-slate-600">•</span>

                    <span className="text-slate-400 text-sm flex items-center gap-1 font-normal">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 self-start lg:self-center">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />

                  <span>{exp.period}</span>

                  <span className="text-slate-600">|</span>

                  <span className="text-emerald-400 font-semibold">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Optional general description */}
              {exp.description && (
                <p className="mt-4 text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                  {exp.description}
                </p>
              )}

              {/* Core Deliverables / Bullet points */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Deliverables &amp; Verified Achievements</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-3"
                    >
                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies / Competencies badges */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-mono mr-1">
                  Skills &amp; Focus:
                </span>

                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};