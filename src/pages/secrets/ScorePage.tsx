import React from "react";

const ScorePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">
          Secret Sauce 01
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          HMPUI Score
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          The heartbeat of Hyphen. A single number that synthesizes your health
          reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full" />
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <span className="text-zinc-500 font-mono text-xs uppercase">
                Hyphen Dashboard
              </span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-40 h-40 rounded-full border-8 border-blue-500/20 border-t-blue-500 flex items-center justify-center relative">
                <span className="text-5xl font-bold text-white">86</span>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">Excellent</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Steady routine • Low friction
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            A Credit Score for Health
          </h2>
          <p className="text-zinc-400 mb-6 text-lg">
            Just as a credit score aggregates your financial behavior, the HMPUI
            score aggregates your health behavior. It's not about running a
            marathon; it's about consistency.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h4 className="text-white font-bold mb-1">Composite Logic</h4>
              <p className="text-sm text-zinc-400">
                Sleep Stability + Activity Minutes + Nutritional Density -
                Stress Spikes
              </p>
            </div>
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h4 className="text-white font-bold mb-1">Dynamic Weighting</h4>
              <p className="text-sm text-zinc-400">
                If you're sick, activity guidelines drop. If you're stressed,
                sleep importance rises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
