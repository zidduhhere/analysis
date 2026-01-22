import React from "react";

const ProblemStatement: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The System is Broken.
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Most people want to be healthy, but today’s systems demand strict
            routines that{" "}
            <span className="text-white font-medium">
              real 9-5 jobs and family life
            </span>{" "}
            simply cannot sustain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div className="mb-6 w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-teal-500/50 transition-colors">
              <span className="text-2xl text-zinc-300 group-hover:text-teal-400">
                Running
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Unsustainable Routines
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Strict regimes demand willpower that depletes over time. When life
              gets busy, health is the first thing to be dropped.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div className="mb-6 w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-teal-500/50 transition-colors">
              <span className="text-2xl text-zinc-300 group-hover:text-teal-400">
                💰
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Wasted Protection
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Insurance costs are skyrocketing, yet people rarely claim their
              benefits until it's too late. Coverage should be proactive, not
              just reactive.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div className="mb-6 w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-teal-500/50 transition-colors">
              <span className="text-2xl text-zinc-300 group-hover:text-teal-400">
                📉
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Disconnected Incentives
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Current apps track data but don't link it to real-world rewards.
              Your daily walk should mean more than just a number on a screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
