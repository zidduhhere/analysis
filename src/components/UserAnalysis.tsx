import React from "react";

const UserAnalysis: React.FC = () => {
  return (
    <section
      id="user-analysis"
      className="py-24 bg-zinc-950 px-6 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Core Philosophy */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-400 tracking-wide uppercase">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Almost Automated <span className="text-teal-400">Health</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We understand your routine and your time. We don’t rely on
            aggressive motivation or "do it now" streaks. We believe in simple
            nudges that facilitate a healthy life. While others tell you to
            "stay healthy," we work with your hospitals to make your choices{" "}
            <span className="text-white font-medium">
              less expensive and better
            </span>
            .
          </p>
        </div>

        {/* Personas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Persona 1 */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 relative overflow-hidden group hover:border-teal-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl text-white select-none">
              1
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl">
                  SE
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    The Tech Lead
                  </h3>
                  <p className="text-zinc-500 text-sm">
                    Software Engineer • 9:00 - 6:00+
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-zinc-300">
                <p>
                  "I work 5 days a week, often overtime to meet deadlines. I
                  used to workout, but now time is a luxury I don't have."
                </p>
                <ul className="space-y-2 text-sm text-zinc-400 bg-zinc-950/50 p-4 rounded-lg">
                  <li className="flex gap-2">
                    <span className="text-blue-500">➜</span> Weekends are for
                    family, not strict diets.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">➜</span> Needs flexibility,
                    not rigid plans.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 relative overflow-hidden group hover:border-teal-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl text-white select-none">
              2
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold text-xl">
                  GE
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    The Government Employee
                  </h3>
                  <p className="text-zinc-500 text-sm">
                    High Profile • 9:00 - 6:30
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-zinc-300">
                <p>
                  "I'm mentally exhausted after work. My weakness is working
                  out, and I'm skeptical about paying for apps when YouTube is
                  free."
                </p>
                <ul className="space-y-2 text-sm text-zinc-400 bg-zinc-950/50 p-4 rounded-lg">
                  <li className="flex gap-2">
                    <span className="text-purple-500">➜</span> Prefers homely
                    food and simple diets.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-500">➜</span> Cannot maintain
                    gym streaks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Definition / Questions */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            The Hyphen Solution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-teal-400 font-medium mb-2 uppercase text-xs tracking-wider">
                The Challenge
              </h4>
              <p className="text-zinc-300 mb-4">
                "How do we help high-performing professionals maintain health
                without adding another task to their to-do list?"
              </p>
            </div>
            <div>
              <h4 className="text-teal-400 font-medium mb-2 uppercase text-xs tracking-wider">
                Our Answer
              </h4>
              <p className="text-zinc-300 mb-4">
                A proactive health score system that rewards you for the small,
                invisible choices you make everyday—integrated directly with
                your healthcare providers to reduce costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAnalysis;
