import React from "react";
import {
  ArrowRight,
  Activity,
  Shield,
  Brain,
  Share2,
  Heart,
} from "lucide-react";

const SolutionPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Introduction */}
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Calm, Privacy-First <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-blue-500">
            Health Infrastructure
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
          Hyphen is designed to work with real life—not disrupt it. No strict
          plans. No constant tracking. Just a system that quietly understands
          how you already live.
        </p>
      </div>

      <div className="space-y-32">
        {/* Section 1: Methodology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10 rounded-full group-hover:bg-blue-500/10 transition-colors duration-700" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 opacity-50">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col items-center">
                  <Activity className="w-8 h-8 text-blue-500 mb-2" />
                  <span className="text-xs text-zinc-500 uppercase">
                    Smart Watch
                  </span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col items-center">
                  <span className="text-2xl">💊</span>
                  <span className="text-xs text-zinc-500 uppercase mt-2">
                    Meds
                  </span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col items-center">
                  <span className="text-2xl">🥗</span>
                  <span className="text-xs text-zinc-500 uppercase mt-2">
                    Food
                  </span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col items-center">
                  <Activity className="w-8 h-8 text-amber-500 mb-2" />
                  <span className="text-xs text-zinc-500 uppercase">
                    Daily Pattern
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-zinc-950/90 border border-zinc-700 px-6 py-3 rounded-full text-white font-mono text-sm shadow-xl">
                  Building Baseline...
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest">
                The Methodology
              </h2>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Understanding the Invisible
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Instead of asking you to change your routines, follow strict
              plans, or constantly track every calorie, Hyphen quietly
              understands your existing lifestyle.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-blue-500/20 pl-6">
              By using data from smart devices, medicines, food habits, and
              daily patterns, the system builds a personal health baseline that
              reflects what is{" "}
              <span className="text-white font-semibold">normal for you</span>{" "}
              over time.
            </p>
          </div>
        </div>

        {/* Section 2: Ownership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-mono text-teal-400 uppercase tracking-widest">
                Ownership & Clarity
              </h2>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Context, Not Confusion
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Hyphen turns everyday data into a clear, continuous health picture
              that you fully own.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              When you visit a doctor—online or at a hospital—you can share a
              simple, doctor-ready summary of your health history and trends.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Conversations start with context
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Reduces repeated tests
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Leads to better decisions
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/5 blur-3xl -z-10 rounded-full group-hover:bg-teal-500/10 transition-colors duration-700" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative">
              <div className="bg-zinc-950 rounded-xl p-6 border border-zinc-800 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="h-2 w-24 bg-zinc-800 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-zinc-800 rounded"></div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                    <Share2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-zinc-900/50 rounded-lg w-full"></div>
                  <div className="h-16 bg-zinc-900/50 rounded-lg w-full"></div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  Doctor-Ready Export Generated
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Proactive Assistant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-amber-500/5 blur-3xl -z-10 rounded-full group-hover:bg-amber-500/10 transition-colors duration-700" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 ring-1 ring-amber-500/20">
                <Brain className="w-10 h-10 text-amber-500" />
              </div>
              <div className="bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-2xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-950 border-t border-l border-zinc-800 rotate-45"></div>
                <p className="text-sm text-zinc-300">
                  "Your resting heart rate elevated slightly over 3 days. Check
                  for fever?"
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Brain className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-mono text-amber-400 uppercase tracking-widest">
                Proactive Intelligence
              </h2>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              No Constant Noise
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              The system works mostly in the background. A proactive AI
              assistant gently checks in{" "}
              <span className="text-white font-semibold">
                only when something meaningful changes
              </span>
              .
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              No constant reminders. No pressure. Optional features like
              photo-based food tracking and medicine logging are available when
              you want insight, but never forced.
            </p>
          </div>
        </div>

        {/* Section 4: Privacy & Continuity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest">
                Deep Privacy
              </h2>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Virtual Health Twin
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Hyphen supports privacy at a deeper level through a virtual health
              twin, allowing you to consult doctors remotely without exposing
              personal identity.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Hospitals and clinics can securely receive user-approved data and
              contribute clinical insights back into the system, creating
              continuity across care providers.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10 rounded-full group-hover:bg-indigo-500/10 transition-colors duration-700" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-1 relative overflow-hidden">
              <div className="bg-zinc-950 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-64 h-64 border border-indigo-500/50 rounded-full animate-ping duration-[3s]"></div>
                  <div className="w-48 h-48 border border-indigo-500/50 rounded-full animate-ping duration-[3s] delay-700"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-32 bg-indigo-500/20 rounded-full blur-xl absolute"></div>
                  <Shield className="w-16 h-16 text-indigo-400 mb-4 relative z-10" />
                  <div className="text-white font-bold text-lg">
                    Virtual Twin Active
                  </div>
                  <div className="text-indigo-400/60 text-xs font-mono mt-2">
                    Identity Masked • Data Stream Encrypted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="text-center mt-32 max-w-3xl mx-auto bg-zinc-900/50 border border-zinc-800 p-12 rounded-3xl">
        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-6">Not Just An App</h2>
        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
          At its core, Hyphen is not a fitness or wellness app. It is{" "}
          <span className="text-white font-bold">
            personal health infrastructure
          </span>
          —built to keep health calm, continuous, and cost-effective, so you can
          live your life while your health is quietly taken care of.
        </p>
        <button className="bg-white text-zinc-900 font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-colors mx-auto">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SolutionPage;
