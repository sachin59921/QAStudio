import React from 'react';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Certifications &amp; Honors
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A strong foundation in computer applications, verified cloud credentials, and an eye for quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Education History</h3>
            </div>

            <div className="space-y-4">
              {PROFILE_DATA.education.map((edu, idx) => (
                <div
                  key={edu.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-md group relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {edu.degree}
                        </h4>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Postgraduate
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-slate-300 mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{edu.location}</span>
                      </p>
                    </div>

                    <div className="font-mono text-xs text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 self-start">
                      <Calendar className="w-3 h-3 inline mr-1 text-emerald-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {edu.focus && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 pt-3 border-t border-slate-800/80">
                      {edu.focus}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Honors Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications Card */}
            <div>
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800 mb-6">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3">
                {PROFILE_DATA.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-teal-500/40 transition-all shadow-sm group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                          {cert.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="font-medium text-emerald-400 font-mono">{cert.issuer}</span>
                          {cert.category && (
                            <>
                              <span>•</span>
                              <span className="capitalize text-[11px] text-slate-400">{cert.category}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="p-1 rounded bg-teal-500/10 text-teal-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                    {cert.highlight && (
                      <p className="mt-2 text-xs text-slate-400 leading-snug">
                        {cert.highlight}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Awards Card */}
            <div>
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800 mb-4">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Honors &amp; Awards</h3>
              </div>

              {PROFILE_DATA.honors.map((honor, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-amber-950/20 border border-amber-500/30 shadow-lg relative overflow-hidden"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        State-Level Recognition
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">
                        {honor.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed italic">
                        "{honor.significance}"
                      </p>
                      <div className="mt-3 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Quality is a mindset in both film and software.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
