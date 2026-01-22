import React from "react";

const Insights: React.FC = () => {
  return (
    <section
      id="insights"
      className="py-24 bg-zinc-950 px-6 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Survey Highlights */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              What the Data Says
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <div className="text-4xl font-bold text-teal-400 mb-2">93%</div>
                <div className="text-sm text-zinc-400">
                  Have a rigid 9-5 working routine or student schedule
                </div>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <div className="text-4xl font-bold text-teal-400 mb-2">64%</div>
                <div className="text-sm text-zinc-400">
                  Are concerned about future medical costs
                </div>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <div className="text-4xl font-bold text-teal-400 mb-2">84%</div>
                <div className="text-sm text-zinc-400">
                  Believe healthy living should reduce insurance costs
                </div>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <div className="text-4xl font-bold text-teal-400 mb-2">94%</div>
                <div className="text-sm text-zinc-400">
                  Would be consistent with habits if there were clear benefits
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                <h4 className="text-white font-medium">The Consensus</h4>
              </div>
              <p className="text-zinc-400 italic">
                "162 respondents agree that insurance premiums should reflect
                their actual health state, not just statistical averages."
              </p>
            </div>
          </div>

          {/* Stakeholder Pain Points */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Stakeholder Friction
            </h2>
            <div className="space-y-6">
              <div className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  Insurance Agencies
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> Rising claim
                    costs due to preventable lifestyle diseases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> Client churn to
                    competitors with "modern" perks
                  </li>
                </ul>
              </div>

              <div className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  Healthcare Providers
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> Lack of
                    accurate, longitudinal patient lifestyle data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> Difficulty in
                    monitoring adherence to health plans
                  </li>
                </ul>
              </div>

              <div className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  Consumers
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> No real-time
                    feedback on how habits affect health
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> Paying
                    effectively for "nothing" until sickness strikes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
