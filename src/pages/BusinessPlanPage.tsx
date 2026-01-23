import React from "react";
import { ArrowRight } from "lucide-react";

const BusinessPlanPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
          Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">
            Plan
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Initial D2C */}
        <div className="bg-linear-to-b from-blue-600 to-blue-700 rounded-3xl p-8 text-white relative flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-900/20">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Initial D2C</h2>
            <div className="w-12 h-1 bg-white/30 rounded-full mb-6"></div>
            <p className="text-lg font-medium leading-relaxed opacity-90 mb-8">
              This is the business plan for the customers / end-users
            </p>
          </div>

          <div className="space-y-6 grow">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-sm opacity-75 mb-1">Hyphen Basic</div>
              <div className="text-2xl font-bold">
                ₹149<span className="text-sm font-normal opacity-75">/mo</span>{" "}
                <span className="text-base font-normal opacity-60 mx-1">
                  or
                </span>{" "}
                ₹1,499
                <span className="text-sm font-normal opacity-75">/yr</span>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-sm opacity-75 mb-1">Hyphen Plus</div>
              <div className="text-2xl font-bold">
                ₹299<span className="text-sm font-normal opacity-75">/mo</span>{" "}
                <span className="text-base font-normal opacity-60 mx-1">
                  or
                </span>{" "}
                ₹2,999
                <span className="text-sm font-normal opacity-75">/yr</span>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-sm opacity-75 mb-1">Hyphen Care</div>
              <div className="text-2xl font-bold">
                ₹499<span className="text-sm font-normal opacity-75">/mo</span>{" "}
                <span className="text-base font-normal opacity-60 mx-1">
                  or
                </span>{" "}
                ₹4,999
                <span className="text-sm font-normal opacity-75">/yr</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <button className="w-full bg-white text-blue-700 font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Secondary B2B */}
        <div className="bg-linear-to-b from-blue-600 to-blue-700 rounded-3xl p-8 text-white relative flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-900/20">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Secondary B2B</h2>
            <div className="w-12 h-1 bg-white/30 rounded-full mb-6"></div>
            <p className="text-lg font-medium leading-relaxed opacity-90 mb-8">
              They pay because we give chances for faster consultation and
              getting proper patient context fewer repeat diagnostics with
              improved outcomes
            </p>
          </div>

          <div className="space-y-6 grow">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2">₹50-₹150</div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                Per Active Patient / Month
              </div>
            </div>

            <div className="text-center font-medium opacity-80 py-2">
              Or SaaS license per clinic
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-sm font-bold uppercase opacity-60 mb-2">
                Includes:
              </div>
              {[
                "Patient summaries",
                "Trend dashboards",
                "Virtual twin consult access",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <span className="text-lg opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <button className="w-full bg-white text-blue-700 font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Insurance Partnerships */}
        <div className="bg-linear-to-b from-blue-600 to-blue-700 rounded-3xl p-8 text-white relative flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-900/20">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Insurance Partnerships</h2>
            <div className="w-12 h-1 bg-white/30 rounded-full mb-6"></div>
            <p className="text-xl font-bold opacity-90 mb-4">
              Why insurers pay
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Early risk signals",
                "Adherence proof",
                "Lower claim ratios",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="text-lg opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 grow">
            <div className="border border-white/30 rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-white/20 px-3 py-1 text-xs font-bold uppercase rounded-br-lg">
                Pricing Model
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <span className="text-lg opacity-90">
                    Per covered life / year
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <span className="text-lg opacity-90">
                    Or % of premium savings shared
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl text-sm leading-relaxed border border-white/10">
              <span className="font-bold block mb-1 text-yellow-300">
                Important:
              </span>
              Strictly opt-in. Users choose what data is shared. No penalties,
              only incentives.
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <button className="w-full bg-white text-blue-700 font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanPage;
