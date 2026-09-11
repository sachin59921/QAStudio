import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Copy,
  Check,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'QA Engineer',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger mailto so recruiter can send directly from their mail client
    const subject = encodeURIComponent(
      `Opportunity Inquiry: ${formData.roleType} - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Hi Sachin,\n\nName: ${formData.name}\nEmail: ${formData.email}\nRole Interest: ${formData.roleType}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Quality &amp; Engineering Roles
          </h2>

          <p className="mt-3 text-base text-slate-400">
            Open to QA Engineer, QA Tester, and Software QA Analyst opportunities
            — on-site in Goa, hybrid, or remote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Direct Channels
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Feel free to email, call, or message me directly on LinkedIn.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>

                    <div className="overflow-hidden">
                      <div className="text-[10px] uppercase font-mono text-slate-400">
                        Email Directly
                      </div>

                      <a
                        href={`mailto:${PROFILE_DATA.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-400 truncate block transition-colors"
                      >
                        {PROFILE_DATA.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(PROFILE_DATA.email, 'email')
                    }
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                      <Phone className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">
                        Phone / Mobile
                      </div>

                      <a
                        href={`tel:${PROFILE_DATA.phone}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-teal-400 transition-colors"
                      >
                        +91 {PROFILE_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(PROFILE_DATA.phoneDisplay, 'phone')
                    }
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">
                      Location
                    </div>

                    <span className="text-xs sm:text-sm text-slate-200">
                      {PROFILE_DATA.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Online Profiles
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PROFILE_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </div>

                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </a>

                  <a
                    href={PROFILE_DATA.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-semibold">Portfolio</span>
                    </div>

                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-purple-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Hiring status banner */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Immediate Availability</span>
                </div>

                <p className="text-slate-400">
                  Ready to join fast-paced engineering squads and drive
                  defect-free releases.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>

              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to initiate contact or schedule an
                interview.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>

                  <h4 className="text-base font-bold text-white">
                    Opening Email Client...
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300">
                    Thank you,{' '}
                    <strong className="text-emerald-300">
                      {formData.name}
                    </strong>
                    . A pre-filled draft has been dispatched to your email
                    application targeting{' '}
                    <code className="text-white bg-slate-950 px-1 py-0.5 rounded">
                      {PROFILE_DATA.email}
                    </code>
                    .
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-emerald-400 underline cursor-pointer hover:text-emerald-300"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Role / Topic of Discussion
                    </label>

                    <select
                      value={formData.roleType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          roleType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="QA Engineer Position">
                        Software QA Engineer Position
                      </option>

                      <option value="QA Tester / Analyst Role">
                        QA Tester / Software QA Analyst Role
                      </option>

                      <option value="Freelance / Contract Testing">
                        Freelance / Contract Web &amp; API Testing
                      </option>

                      <option value="General Technical Inquiry">
                        General Technical Inquiry / Networking
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message / Project Details *
                    </label>

                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about your team, tech stack, or the role you are looking to fill..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sachin</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};