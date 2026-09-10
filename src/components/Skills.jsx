import React, { useState } from 'react';
import { Layers, CheckCircle2, Search, Sparkles, Code2, Bug, Terminal, Cpu } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'QA & Testing Specialties': <Bug className="w-4 h-4 text-emerald-400" />,
    'Frontend & Technical Literacy': <Code2 className="w-4 h-4 text-teal-400" />,
    'Tools & Methodologies': <Terminal className="w-4 h-4 text-cyan-400" />,
    'Cloud & Emerging Tech': <Cpu className="w-4 h-4 text-indigo-400" />
  };

  const allCategories = ['All', ...PROFILE_DATA.skillCategories.map(c => c.category)];

  const filteredCategories = PROFILE_DATA.skillCategories.map(cat => {
    const isCategoryMatch = selectedCategory === 'All' || selectedCategory === cat.category;
    const filteredSkills = cat.skills.filter(s => 
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      isCategoryMatch,
      filteredSkills
    };
  }).filter(cat => cat.isCategoryMatch && cat.filteredSkills.length > 0);

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills &amp; Testing Arsenal
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A comprehensive matrix of manual testing, API validation, modern frontend technologies, and agile methodologies.
          </p>

          {/* Search & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search skills (e.g. Postman, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/60">
                    {categoryIcons[group.category] || <Layers className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{group.category}</h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {group.filteredSkills.length} competencies listed
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.filteredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-950 border border-slate-800/90 text-slate-200 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Category bottom insight */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Verified in production &amp; sprint cycles</span>
                <span className="text-emerald-400/80">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
