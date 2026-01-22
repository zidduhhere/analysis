import React from "react";

const PreventionPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">
          Secret Sauce 05
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Proactive Health
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Healthcare today is reactive. You fall sick, then you see a doctor.
          Hyphen changes the paradigm to <b>Predictive & Preventive</b>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="order-2 md:order-1 relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10 rounded-full" />
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
            {/* Timeline Visual */}
            <div className="relative border-l-2 border-zinc-800 pl-8 space-y-12 my-4">
              {/* Event 1 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-zinc-800 rounded-full border-4 border-zinc-950"></div>
                <div className="text-sm text-zinc-500 mb-1">Week 1</div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <p className="text-white text-sm">Sleep avg drops to 5.5h</p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-zinc-800 rounded-full border-4 border-zinc-950"></div>
                <div className="text-sm text-zinc-500 mb-1">Week 2</div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <p className="text-white text-sm">
                    Resting Heart Rate trend +5bpm
                  </p>
                </div>
              </div>

              {/* Intervention */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-zinc-950 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <div className="text-sm text-emerald-500 font-bold mb-1">
                  Alice Intervention
                </div>
                <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/30">
                  <p className="text-emerald-200 text-sm font-semibold">
                    "Viral risk high. Suggest boosting Vitamin C & earlier sleep
                    tonight."
                  </p>
                  <button className="mt-3 bg-emerald-600 text-white text-xs px-3 py-2 rounded-full hover:bg-emerald-500 transition-colors">
                    Accept Protocol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-white mb-6">
            The Trained Model
          </h2>
          <p className="text-zinc-400 mb-6 text-lg">
            Alice isn't just a chatbot. She's a trained epidemiologist for your
            personal life. By correlating your data (HRV, Sleep, Activity) with
            regional health trends, she spots illness vectors *before* you feel
            symptoms.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Immunity Shield</h3>
                <p className="text-sm text-zinc-400">
                  Suggests dietary changes based on local flu seasons and your
                  current stress levels.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">
                📉
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">
                  Chronic Prevention
                </h3>
                <p className="text-sm text-zinc-400">
                  Identifies micro-patterns leading to Diabetes or Hypertension
                  years in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreventionPage;
