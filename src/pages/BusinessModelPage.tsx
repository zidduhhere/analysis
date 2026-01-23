import React from "react";

const BusinessModelPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
          Target{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
            Customers
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Connecting the dots between patients, providers, and payers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative">
        {/* Background Connection Lines (Desktop only) */}
        <div className="hidden lg:block absolute inset-0 top-32 z-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 600">
            <line
              x1="330"
              y1="300"
              x2="500"
              y2="300"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            />
            <line
              x1="670"
              y1="300"
              x2="500"
              y2="300"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            />
            <circle
              cx="500"
              cy="300"
              r="50"
              fill="currentColor"
              className="text-zinc-800"
            />
          </svg>
        </div>

        {/* 1. Professionals / Students */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 relative overflow-hidden z-10 hover:border-indigo-500/50 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-3xl -mr-12 -mt-12 rounded-full"></div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 text-2xl">
              🧑‍💻
            </div>
            <h2 className="text-2xl font-bold text-white leading-tight">
              Students & <br /> Professionals
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
                Key Requirements
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Health without
                  routine disruption
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Minimal effort, low
                  mental load
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Fewer repeated
                  tests & visits
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Privacy & data
                  access
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Family health
                  visibility
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
                Interests
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Calm, predictable
                  life
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Cost control
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Better doctor
                  conversation
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span> Family well-being
                </li>
              </ul>
            </div>

            <div className="bg-indigo-950/30 p-4 rounded-xl border border-indigo-500/20">
              <h3 className="text-indigo-300 font-bold mb-2 text-sm">
                Use Cases
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded">
                  Passive tracking
                </span>
                <span className="text-xs bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded">
                  Doctor-ready summaries
                </span>
                <span className="text-xs bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded">
                  Food/Medicine logging
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Hospitals (Central High/Low) */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden z-10 hover:border-emerald-500/50 transition-all duration-300 lg:mt-12">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 blur-3xl -mr-12 -mt-12 rounded-full"></div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 text-2xl">
              🏥
            </div>
            <h2 className="text-2xl font-bold text-white">Hospitals</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
                Key Requirements
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Clean patient
                  context
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Time efficiency
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Better decision
                  support
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
                Interests
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Clinical accuracy
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Fewer repeat
                  diagnostics
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Patient adherence
                </li>
              </ul>
            </div>

            <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/20">
              <h3 className="text-emerald-300 font-bold mb-2 text-sm">
                Use Cases
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-emerald-500/20 text-emerald-200 px-2 py-1 rounded">
                  Pre-consult summaries
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-200 px-2 py-1 rounded">
                  Longitudinal views
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-200 px-2 py-1 rounded">
                  Twin Consult
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Insurance Companies */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 relative overflow-hidden z-10 hover:border-red-500/50 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/20 blur-3xl -mr-12 -mt-12 rounded-full"></div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-2xl">
              🛡️
            </div>
            <h2 className="text-2xl font-bold text-white leading-tight">
              Insurance <br /> Companies
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-3">
                Key Requirements
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-red-500">•</span> Risk visibility
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span> Preventive insights
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span> Adherence proof
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-3">
                Interests
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-red-500">•</span> Lower claim ratios
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span> Predictive modelling
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span> Incentive programs
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span> Variety of plans
                </li>
              </ul>
            </div>

            <div className="bg-red-950/30 p-4 rounded-xl border border-red-500/20">
              <h3 className="text-red-300 font-bold mb-2 text-sm">Use Cases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">
                  Opt-in health scores
                </span>
                <span className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">
                  Premium incentives
                </span>
                <span className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">
                  Eligibility check
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelPage;
