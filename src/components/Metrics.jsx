import React from 'react';
import { CheckCircle2, ShieldAlert, Target, RefreshCw } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Metrics = () => {
  const metricIcons = [
    <CheckCircle2 key="1" className="w-5 h-5 text-emerald-400" />,
    <ShieldAlert key="2" className="w-5 h-5 text-amber-400" />,
    <RefreshCw key="3" className="w-5 h-5 text-teal-400" />,
    <Target key="4" className="w-5 h-5 text-cyan-400" />,
  ];

  return (
    <section className="py-8 border-y border-slate-800/80 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono">
            Proven Testing Impact &amp; Metrics
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROFILE_DATA.metrics.map((metric, index) => (
            <div
              key={metric.label}
              id={`metric-card-${index}`}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/40 transition-all hover:-translate-y-0.5 shadow-sm group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-300 transition-colors font-mono tracking-tight">
                  {metric.value}
                </span>

                <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
                  {metricIcons[index % metricIcons.length]}
                </div>
              </div>

              <h4 className="text-sm font-semibold text-slate-200">
                {metric.label}
              </h4>

              <p className="text-xs text-slate-400 mt-1 leading-snug">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};