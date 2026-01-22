import React from "react";

const InsurancePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4">
          Solution 04
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Mutating Insurance.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          The ultimate incentive. Why pay for risk you don't represent? We turn
          your health data into currency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Dynamic Premiums
          </h2>
          <p className="text-zinc-400 mb-6">
            Traditional insurance is a bet against yourself. Hyphen changes the
            game. Maintain a "Green" health score for 3 months, and your premium
            drops automatically. It's not a discount; it's fair pricing.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
              <div className="text-xs text-zinc-500 uppercase">
                Standard Premium
              </div>
              <div className="text-xl font-bold text-zinc-300 line-through decoration-red-500">
                $450/mo
              </div>
            </div>
            <div className="p-4 bg-teal-900/10 border border-teal-500/20 rounded-xl">
              <div className="text-xs text-teal-500 uppercase">
                Hyphen Price
              </div>
              <div className="text-2xl font-bold text-white">$320/mo</div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">💰</div>
            <div className="text-zinc-500 font-mono text-sm">
              FINANCIAL HEALTH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
