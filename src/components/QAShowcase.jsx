import React, { useState } from 'react';
import {
  ShieldCheck,
  Bug,
  Terminal,
  Code2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  Layers,
  Eye,
  Zap,
  Check,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const QAShowcase = () => {
  const [activeTab, setActiveTab] = useState('workflow');
  const [reportView, setReportView] = useState('frontend-savvy');

  // Postman runner interactive simulation state
  const [apiRunning, setApiRunning] = useState(false);
  const [apiExecuted, setApiExecuted] = useState(true);
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);

  const endpoints = [
    {
      method: 'POST',
      url: '/api/v1/auth/session/validate',
      desc: 'Authentication session & token expiry validation',
      status: 200,
      statusText: 'OK',
      time: '48ms',
      assertions: [
        { name: 'Status code is 200 OK', passed: true },
        {
          name: 'Response body contains valid user claims & roles',
          passed: true,
        },
        {
          name: 'JWT payload has active expiration timestamp',
          passed: true,
        },
        {
          name: 'Content-Type is application/json',
          passed: true,
        },
      ],
      responseSnippet: `{
  "status": "authenticated",
  "userId": "usr_99812",
  "role": "qa_engineer",
  "sessionExpiry": 1757493200,
  "verified": true
}`,
    },
    {
      method: 'POST',
      url: '/api/v1/orders/checkout',
      desc: 'Cart checkout negative testing (Missing CVV validation)',
      status: 422,
      statusText: 'Unprocessable Entity',
      time: '62ms',
      assertions: [
        {
          name: 'Catches missing CVV before payment gateway trigger',
          passed: true,
        },
        {
          name: 'Returns standard validation schema with error key',
          passed: true,
        },
        {
          name: 'Prevents UI race condition with 422 status code',
          passed: true,
        },
      ],
      responseSnippet: `{
  "error": "VALIDATION_FAILED",
  "field": "cvv",
  "message": "Security CVV code is required",
  "code": 422
}`,
    },
    {
      method: 'GET',
      url: '/api/v1/inventory/items?limit=25&offset=0',
      desc: 'Pagination and boundary value limit tests',
      status: 200,
      statusText: 'OK',
      time: '89ms',
      assertions: [
        { name: 'Status code is 200 OK', passed: true },
        {
          name: 'Response array size does not exceed specified limit (25)',
          passed: true,
        },
        {
          name: 'Total count header is present for frontend pagination',
          passed: true,
        },
      ],
      responseSnippet: `{
  "data": [ /* 25 items returned */ ],
  "pagination": {
    "totalCount": 128,
    "limit": 25,
    "offset": 0,
    "hasNext": true
  }
}`,
    },
  ];

  const handleRunApi = () => {
    setApiRunning(true);

    setTimeout(() => {
      setApiRunning(false);
      setApiExecuted(true);
    }, 600);
  };

  const workflowStages = [
    {
      step: '01',
      title: 'Sprint & Requirements Analysis',
      desc: 'Review user stories, acceptance criteria, and edge cases during sprint planning ceremonies.',
      tag: 'Scrum Ceremonies',
    },
    {
      step: '02',
      title: 'Test Case Design & Matrix',
      desc: 'Formulate smoke, positive, negative, and boundary test cases guaranteeing 100% sprint coverage.',
      tag: 'Documentation',
    },
    {
      step: '03',
      title: 'Manual & Cross-Device Execution',
      desc: 'Execute structured manual testing across web and mobile viewports, capturing visual and UX defects.',
      tag: 'Black Box / UAT',
    },
    {
      step: '04',
      title: 'API Testing with Postman',
      desc: 'Validate REST endpoints, JSON schemas, auth tokens, and status codes before frontend consumption.',
      tag: 'Postman Integration',
    },
    {
      step: '05',
      title: 'Frontend-Savvy Defect Triage',
      desc: 'Log detailed bug reports with console errors, network traces, and suspected React component state causes.',
      tag: 'Developer Alignment',
    },
    {
      step: '06',
      title: 'Regression & Release Sign-off',
      desc: 'Verify bug fixes, execute regression suites across releases, and ensure zero repeat issues.',
      tag: 'Release Readiness',
    },
  ];

  return (
    <section
      id="methodology"
      className="py-20 bg-slate-900/50 border-t border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>QA Methodology &amp; Engineering Rigor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Guarantee Software Quality
          </h2>

          <p className="mt-3 text-base text-slate-400">
            Explore my end-to-end testing lifecycle, see why developers prefer
            my bug reports, and inspect sample API test suites.
          </p>

          {/* Tab buttons */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">

            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'workflow'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>QA Lifecycle Workflow</span>
            </button>

            <button
              onClick={() => setActiveTab('defect-report')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'defect-report'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bug className="w-4 h-4" />
              <span>Frontend-Savvy Bug Report</span>
            </button>

            <button
              onClick={() => setActiveTab('postman')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'postman'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Postman API Suite</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Workflow */}
        {activeTab === 'workflow' && (
          <div className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {workflowStages.map((stage) => (
                <div
                  key={stage.step}
                  className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all hover:-translate-y-0.5 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700/60">
                        STAGE {stage.step}
                      </span>

                      <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-emerald-400/90 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Quality Gate</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Philosophy Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>
                    Proactive Defect Interception vs Reactive Bug Catching
                  </span>
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 max-w-3xl">
                  By reviewing acceptance criteria early and validating API
                  payloads before the UI integration is complete, I prevent
                  breaking changes from propagating through the release
                  pipeline.
                </p>
              </div>

              <div className="text-xs font-mono text-emerald-300 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 whitespace-nowrap">
                Zero Post-Release Defect Goal
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Frontend-Savvy Defect Report Comparison */}
        {activeTab === 'defect-report' && (
          <div className="space-y-6">

            {/* Toggle between Generic vs Sachin's Report */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs text-slate-400 font-mono">
                Select Report Comparison:
              </span>

              <div className="p-1 rounded-lg bg-slate-900 border border-slate-800 flex">

                <button
                  onClick={() => setReportView('generic')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    reportView === 'generic'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Generic Bug Report (Vague)
                </button>

                <button
                  onClick={() => setReportView('frontend-savvy')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    reportView === 'frontend-savvy'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sachin's Report (Frontend-Savvy QA)
                </button>
              </div>
            </div>

            {reportView === 'frontend-savvy' ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl relative overflow-hidden">

                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-mono text-xs font-bold">
                      {PROFILE_DATA.sampleBugReport.id} •{' '}
                      {PROFILE_DATA.sampleBugReport.severity}
                    </span>

                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-xs font-mono">
                      Priority: {PROFILE_DATA.sampleBugReport.priority}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Includes React State &amp; Network Analysis</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-white">
                    {PROFILE_DATA.sampleBugReport.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Environment: {PROFILE_DATA.sampleBugReport.environment}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                  {/* Left Column: Reproduction Steps */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                        Steps to Reproduce:
                      </h4>

                      <ol className="space-y-2 text-xs sm:text-sm text-slate-300 list-decimal list-inside bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                        {PROFILE_DATA.sampleBugReport.stepsToReproduce.map(
                          (step, i) => (
                            <li key={i} className="leading-relaxed">
                              {step}
                            </li>
                          )
                        )}
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                        <div className="text-[11px] font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Expected Behavior
                        </div>

                        <p className="text-xs text-slate-300 leading-snug">
                          {PROFILE_DATA.sampleBugReport.expectedResult}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                        <div className="text-[11px] font-mono text-rose-400 font-semibold mb-1 flex items-center gap-1">
                          <XCircle className="w-3 h-3" />
                          Actual Behavior
                        </div>

                        <p className="text-xs text-slate-300 leading-snug">
                          {PROFILE_DATA.sampleBugReport.actualResult}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-teal-400 flex items-center gap-1.5 font-semibold">
                          <Code2 className="w-3.5 h-3.5" />
                          Developer Root-Cause Insight:
                        </span>

                        <span className="text-[10px] text-slate-500 font-mono">
                          React / Redux Context
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {PROFILE_DATA.sampleBugReport.devInsight}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-slate-800">
                        <span className="text-xs text-amber-400 flex items-center gap-1">
                          <Terminal className="w-3 h-3" />
                          Network Payload Inspection
                        </span>

                        <span className="text-[10px] text-slate-500">
                          Postman / DevTools
                        </span>
                      </div>

                      <pre className="text-slate-300 text-[11px] overflow-x-auto whitespace-pre-wrap leading-tight">
                        {PROFILE_DATA.sampleBugReport.apiPayloadSnippet}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Generic Bug Report */
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-rose-500/20 opacity-80">

                <div className="flex items-center gap-3 pb-3 border-b border-slate-800 text-rose-400 text-xs font-mono">
                  <AlertTriangle className="w-4 h-4" />
                  <span>
                    Generic / Incomplete Bug Report (What developers usually
                    complain about)
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <h3 className="text-base font-semibold text-slate-300">
                    "Payment button not working on website"
                  </h3>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-2">
                    <p>
                      <strong>Description:</strong> I tried to pay for an order
                      and the button stayed loading forever. Please fix asap.
                    </p>

                    <p>
                      <strong>Expected:</strong> It should work.
                    </p>

                    <p>
                      <strong>Steps:</strong> Click the button.
                    </p>

                    <p className="text-rose-400 italic">
                      No environment details, no console logs, no network status
                      codes, no expected vs actual comparison.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Interactive Postman Simulation */}
        {activeTab === 'postman' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-6">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />

                  <span className="ml-2 font-mono text-xs text-slate-400">
                    Postman Collection Runner • Sachin Kumar Pal
                  </span>
                </div>
              </div>

              {/* Endpoint selection pills */}
              <div className="flex flex-wrap gap-2">
                {endpoints.map((ep, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedEndpoint(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedEndpoint === idx
                        ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-amber-400 font-bold mr-1">
                      {ep.method}
                    </span>

                    {ep.url.split('?')[0].slice(0, 18)}...
                  </button>
                ))}
              </div>
            </div>

            {/* Active endpoint details */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">

              <div className="flex items-center gap-3 overflow-hidden font-mono text-xs">
                <span
                  className={`px-2.5 py-1 rounded font-bold ${
                    endpoints[selectedEndpoint].method === 'POST'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}
                >
                  {endpoints[selectedEndpoint].method}
                </span>

                <span className="text-slate-200 truncate">
                  {endpoints[selectedEndpoint].url}
                </span>
              </div>

              <div className="flex items-center gap-3 self-end md:self-center">

                <span
                  className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                    endpoints[selectedEndpoint].status === 200
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}
                >
                  {endpoints[selectedEndpoint].status}{' '}
                  {endpoints[selectedEndpoint].statusText}
                </span>

                <span className="text-xs font-mono text-slate-400">
                  {endpoints[selectedEndpoint].time}
                </span>

                <button
                  onClick={handleRunApi}
                  disabled={apiRunning}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Play
                    className={`w-3.5 h-3.5 ${
                      apiRunning ? 'animate-spin' : ''
                    }`}
                  />

                  <span>
                    {apiRunning ? 'Running...' : 'Run Test'}
                  </span>
                </button>
              </div>
            </div>

            {/* Assertions & Response Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />

                  <span>
                    Postman Test Scripts (Tests Passed:{' '}
                    {endpoints[selectedEndpoint].assertions.length}/
                    {endpoints[selectedEndpoint].assertions.length})
                  </span>
                </h4>

                <div className="space-y-2">
                  {endpoints[selectedEndpoint].assertions.map((asst, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-300"
                    >
                      <span className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        {asst.name}
                      </span>

                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                        PASS
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" />
                  <span>Verified Response Payload (JSON)</span>
                </h4>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-300">
                  <pre className="overflow-x-auto whitespace-pre text-[11px] leading-relaxed text-emerald-300/90">
                    {endpoints[selectedEndpoint].responseSnippet}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};