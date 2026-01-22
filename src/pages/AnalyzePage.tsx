import React from "react";

const AnalyzePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-4">
          Solution 01
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          We Analyze.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Your life generates data every second. We turn that noise into a
          clear, doctor-ready signal without you lifting a finger.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Signal Integration
          </h2>
          <p className="text-zinc-400 mb-6">
            We connect directly with your existing ecosystem—Apple Watch, Oura
            Ring, Google Fit. No new hardware to buy. We normalize this data
            into a unified "Health Stream".
          </p>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Heart Rate Variability (HRV) Analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Sleep Quality vs. Work Stress Correlation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Passive Activity Tracking
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex items-center justify-center">
          {/* Placeholder for an illustration or graphic */}
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <div className="text-zinc-500 font-mono text-sm">
              DATA FLOW VISUALIZATION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzePage;
