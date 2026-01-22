import React from "react";

const LocationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">
          Secret Sauce 02
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Geo-Nudges
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Context is everything. We use your location to turn passive movement
          into tracked success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Zero-Friction Tracking
          </h2>
          <p className="text-zinc-400 mb-6 text-lg">
            The biggest barrier to data accuracy is manual logging. We removed
            it. Hyphen understands "places" not just coordinates.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="text-white font-bold">Detection</h4>
                <p className="text-sm text-zinc-400">
                  GPS dwell time &gt; 20mins at a known sports facility.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="text-white font-bold">Verification</h4>
                <p className="text-sm text-zinc-400">
                  Simple notification: "Did you play?"
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl -z-10 rounded-full" />
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-white">Alice</h4>
                  <p className="text-sm text-zinc-500">
                    I noticed you were at a badminton court...
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-indigo-600 text-white text-sm px-6 py-2 rounded-full">
                  Played
                </button>
                <button className="bg-zinc-800 text-zinc-400 text-sm px-6 py-2 rounded-full">
                  Didn't play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
