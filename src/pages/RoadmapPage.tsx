import React from "react";

const RoadmapPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
          Milestone &{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-yellow-400">
            Roadmap
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          From concept to market domination. Our journey timeline.
        </p>
      </div>

      <div className="relative">
        {/* Central snake line for Desktop (hidden on mobile) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
          >
            <path
              d="M100,200 L900,200 Q950,200 950,250 L950,450 Q950,500 900,500 L100,500 Q50,500 50,550 L50,750"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="4"
              className="opacity-50"
            />
          </svg>
        </div>

        {/* Vertical line for Mobile */}
        <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-yellow-400 opacity-30"></div>

        <div className="space-y-12 lg:space-y-0 relative z-10 w-full max-w-5xl mx-auto min-h-[800px]">
          {/* 00: Ideation */}
          <div className="lg:absolute lg:left-[5%] lg:top-[300px] flex items-center lg:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/20 flex items-center justify-center text-white font-bold text-2xl z-10 border-4 border-zinc-950">
              00
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full lg:w-64">
              <div className="text-xs text-blue-400 font-mono mb-2">
                JAN 2026 - CURRENT
              </div>
              <h3 className="text-white font-bold mb-2">Ideation Phase</h3>
              <p className="text-zinc-500 text-sm">
                Roadmap: Problem - Product - Business
              </p>
            </div>
          </div>

          {/* 01: Problem Validation */}
          <div className="lg:absolute lg:left-[20%] lg:top-[120px] flex items-center lg:flex-col lg:items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white font-bold z-10 border-4 border-zinc-950">
              01
            </div>
            <div className="text-left lg:text-center w-full lg:w-48">
              <div className="text-xs text-zinc-500 font-mono mb-1 uppercase">
                January
              </div>
              <h3 className="text-white font-bold">Problem Validation</h3>
            </div>
          </div>

          {/* 02: MVP Development */}
          <div className="lg:absolute lg:left-[45%] lg:top-[120px] flex items-center lg:flex-col lg:items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white font-bold z-10 border-4 border-zinc-950">
              02
            </div>
            <div className="text-left lg:text-center w-full lg:w-48">
              <div className="text-xs text-zinc-500 font-mono mb-1 uppercase">
                Jan - March 2026
              </div>
              <h3 className="text-white font-bold">MVP Development</h3>
            </div>
          </div>

          {/* 03: Pilot & Iteration */}
          <div className="lg:absolute lg:left-[70%] lg:top-[120px] flex items-center lg:flex-col lg:items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white font-bold z-10 border-4 border-zinc-950">
              03
            </div>
            <div className="text-left lg:text-center w-full lg:w-48">
              <div className="text-xs text-zinc-500 font-mono mb-1 uppercase">
                March - July 2026
              </div>
              <h3 className="text-white font-bold">Pilot & Iteration</h3>
            </div>
          </div>

          {/* 04: Business Validation */}
          <div className="lg:absolute lg:right-[0%] lg:top-[420px] flex items-center lg:flex-row-reverse gap-6">
            <div className="w-12 h-12 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/20 flex items-center justify-center text-white font-bold z-10 border-4 border-zinc-950">
              04
            </div>
            <div className="text-left lg:text-right w-full lg:w-48">
              <div className="text-xs text-zinc-500 font-mono mb-1 uppercase">
                July - Sept 2026
              </div>
              <h3 className="text-white font-bold">Business Validation</h3>
            </div>
          </div>

          {/* 05: Monetization Test */}
          <div className="lg:absolute lg:left-[65%] lg:top-[600px] flex items-center lg:flex-col-reverse lg:items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/20 flex items-center justify-center text-white font-bold z-10 border-4 border-zinc-950">
              05
            </div>
            <div className="text-left lg:text-center w-full lg:w-48">
              <div className="text-xs text-zinc-500 font-mono mb-1 uppercase">
                Oct - Nov 2026
              </div>
              <h3 className="text-white font-bold">Monetization Test</h3>
            </div>
          </div>

          {/* 06: Marketing */}
          <div className="lg:absolute lg:left-[40%] lg:top-[600px] flex items-center lg:flex-col-reverse lg:items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/20 flex items-center justify-center text-white font-bold z-10 border-4 border-zinc-950">
              06
            </div>
            <div className="text-left lg:text-center w-full lg:w-48">
              <div className="text-xs text-zinc-500 font-mono mb-1 uppercase">
                Nov 2026 - Nov 2027
              </div>
              <h3 className="text-white font-bold">Marketing</h3>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 text-xs text-red-400/70 font-mono uppercase tracking-widest animate-pulse">
          • The given time frames may change accordingly
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
