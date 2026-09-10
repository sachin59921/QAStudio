import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Experience } from './components/Experience';
import { QAShowcase } from './components/QAShowcase';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Impact Metrics Bar */}
        <Metrics />

        {/* Experience Timeline */}
        <Experience />

        {/* QA Methodology & Frontend-Savvy Showcase */}
        <QAShowcase />

        {/* Technical Skills & Competencies */}
        <Skills />

        {/* Education, Certifications & Honors */}
        <EducationCertifications />

        {/* Contact & Inquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}