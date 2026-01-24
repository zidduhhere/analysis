import React from "react";
import { AlertCircle, Target, Zap } from "lucide-react";

const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            Why We're Doing This
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-teal-400 to-blue-500 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* The Problem */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Health today is either overwhelming or ignored.
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                  Most people live structured lives—work, family, routine—but
                  modern health systems expect disruption: strict diets, intense
                  workouts, constant tracking, and high motivation.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  As a result, people either burn out or only engage with health
                  when something goes wrong. This leads to repeated tests,
                  fragmented medical histories, higher costs, and avoidable
                  health risks.
                </p>
              </div>
            </div>
          </div>

          {/* Our Belief */}
          <div className="bg-linear-to-br from-teal-900/20 to-blue-900/20 border border-teal-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -z-10" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  We believe health should not compete with life.
                </h3>
                <p className="text-xl text-teal-100 font-semibold mb-4">
                  It should quietly fit into it.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Hyphen exists to make health{" "}
                  <span className="text-white font-bold">
                    calm, continuous, and invisible by default
                  </span>
                  —so people don't need to "start" or "maintain" health. They
                  just live, and health stays in sync.
                </p>
              </div>
            </div>
          </div>

          {/* The Vision */}
          <div className="text-center py-8">
            <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-full px-8 py-4">
              <Zap className="w-5 h-5 text-yellow-400" />
              <p className="text-lg font-mono text-zinc-300">
                Health that{" "}
                <span className="text-white font-bold">
                  works with your life
                </span>
                , not against it
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
