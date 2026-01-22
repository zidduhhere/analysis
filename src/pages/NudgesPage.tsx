import React from "react";

const NudgesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-purple-500 font-mono text-xs uppercase tracking-widest mb-4">
          Solution 03
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Small Nudges.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Motivation fails. Habit prevails. We use behavioral psychology to
          nudge you toward better choices without the willpower drain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Proactive Interventions
          </h2>
          <p className="text-zinc-400 mb-6">
            Your heart rate is elevated, but you aren't moving? You're likely
            stressed. Hyphen detects this and prompts a 2-minute breathing
            exercise <i>before</i> the cortisol spike damages your focused work.
          </p>
          <ul className="space-y-4">
            <li className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 flex justify-between items-center">
              <span className="text-zinc-300">High Stress Detected</span>
              <span className="text-xs font-bold bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                NUDGE: BREATHE
              </span>
            </li>
            <li className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 flex justify-between items-center">
              <span className="text-zinc-300">75 mins Sedentary</span>
              <span className="text-xs font-bold bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                NUDGE: STRETCH
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🔔</div>
            <div className="text-zinc-500 font-mono text-sm">
              SMART NOTIFICATIONS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NudgesPage;
