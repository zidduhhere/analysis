import React from "react";

const TeamInsights: React.FC = () => {
  return (
    <section
      id="team-insights"
      className="py-24 bg-zinc-950 px-6 border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-zinc-800 flex-1" />
          <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
            Internal Notes
          </span>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Architectural <span className="text-teal-400">Reflection</span>
        </h2>

        <div className="space-y-8">
          <div className="bg-zinc-900/40 border-l-2 border-teal-500 p-8 rounded-r-xl">
            <h3 className="text-xl font-semibold text-white mb-4">
              Why Hyphen?
            </h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              We started with a simple observation: there's a disconnect between
              the "perfect" lifestyles apps expect us to lead and the messy,
              chaotic reality of our 9-to-5 lives. "Hyphen" represents the
              link—the connector between health and routine, motivation and
              reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20">
              <div className="text-teal-400 font-mono text-sm mb-3">
                01. THE PITFALL
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                The "All-or-Nothing" Trap
              </h4>
              <p className="text-zinc-400">
                Existing solutions demand we change our lives to fit their
                systems. We believe the system should change to fit our lives. A
                30-minute walk should count as much as a gym session if it's
                what you can sustain.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20">
              <div className="text-teal-400 font-mono text-sm mb-3">
                02. THE SOLUTION
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Incentivized Consistency
              </h4>
              <p className="text-zinc-400">
                Data shows that 94% of users would be consistent if they saw
                clear benefits. By linking health data directly to insurance
                premiums, we turn health from a "chore" into a financial asset.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Vision for the Future
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto italic">
              "To create a world where maintaining your health pays for your
              protection. No more wasted premiums, no more unachievable goals.
              Just a system that works for you."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamInsights;
