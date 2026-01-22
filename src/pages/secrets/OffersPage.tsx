import React from "react";

const OffersPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-4">
          Secret Sauce 04
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Value Exchange
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Your health data is an asset. We build the marketplace where you can
          spend it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Tangible Rewards
          </h2>
          <p className="text-zinc-400 mb-6 text-lg">
            Gamification is fun, but value is better. We partner with
            pharmacies, hospitals, and insurers to honor your HMPUI score as a
            discount voucher.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-teal-500/30 p-4 rounded-xl flex items-center gap-4">
              <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400 font-bold">
                20%
              </div>
              <div>
                <h4 className="text-white font-bold">Pharmacy Discounts</h4>
                <p className="text-xs text-zinc-500">
                  On all chronic medication
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-blue-500/30 p-4 rounded-xl flex items-center gap-4">
              <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 font-bold">
                FREE
              </div>
              <div>
                <h4 className="text-white font-bold">Annual Diagnostics</h4>
                <p className="text-xs text-zinc-500">
                  Full body checkup every year
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-teal-500/10 blur-3xl -z-10 rounded-full" />
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h4 className="text-white font-bold mb-4">Live Offers</h4>
            <div className="space-y-3">
              <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xl">
                    💊
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      20% off Medicines
                    </div>
                    <div className="text-zinc-500 text-[10px]">
                      Code: HYPHEN20
                    </div>
                  </div>
                </div>
                <button className="bg-teal-600 text-white text-[10px] px-3 py-1 rounded-full">
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
