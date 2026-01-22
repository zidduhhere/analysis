import React from "react";

const FoodPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-4">
          Secret Sauce 03
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Alice AI
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          AI that speaks your culinary language. Capable of analyzing rural
          foods of India and identifying calorie composition for *every* Indian
          food.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="absolute inset-0 bg-orange-500/10 blur-3xl -z-10 rounded-full" />
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden group">
            {/* Integrated AI Image */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60"></div>
              <img
                src="/appam-analysis.png"
                alt="AI Analyzing Appam and Egg Curry"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay UI that mimics the analysis */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                      <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                        Analysis Complete
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      Morning Breakfast
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">
                      550{" "}
                      <span className="text-sm font-normal text-zinc-400">
                        kcal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                <span>Appam (2)</span> <span>240 kcal</span>
              </div>
              <div className="flex justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                <span>Egg Curry</span> <span>220 kcal</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Gravy Base</span> <span>90 kcal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-white mb-6">Beyond "Curry"</h2>
          <p className="text-zinc-400 mb-6 text-lg">
            Generic trackers categorize 1,000 different dishes as "Curry". We
            trained our model on diverse regional datasets to distinguish
            *Sambar* from *Rasam*, and *Appam* from *Dosa*.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
              <div className="text-2xl mb-2">📸</div>
              <div className="text-white font-bold">Snap</div>
            </div>
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
              <div className="text-2xl mb-2">⚡️</div>
              <div className="text-white font-bold">Track</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
