import React from "react";

const SecretSaucePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Secret Sauce
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          It's not magic. It's a system designed to understand the invisible
          context of your daily life.
        </p>
      </div>

      <div className="space-y-32">
        {/* Feature 01: HMPUI Score */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <span className="text-zinc-500 font-mono text-xs uppercase">
                  Hyphen Dashboard
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-40 h-40 rounded-full border-8 border-blue-500/20 border-t-blue-500 flex items-center justify-center relative">
                  <span className="text-5xl font-bold text-white">86</span>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white">Excellent</h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Steady routine • Low friction
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">
              01. The Metric
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              HMPUI Score
            </h2>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              What is it?
            </h3>
            <p className="text-zinc-400 mb-6">
              A composite dynamic score that aggregates your sleep, activity,
              nutritional balance, and routine consistency into a single,
              actionable number. Think of it as a "Credit Score" for your
              health.
            </p>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              How it helps you
            </h3>
            <p className="text-zinc-400 mb-6">
              You don't need to track 50 different metrics. Just keep your score
              above 80. If it drops, the system tells you exactly *why* (e.g.,
              "Sleep debt increasing") and how to fix it with one move.
            </p>
          </div>
        </div>

        {/* Feature 02: Location Intelligence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">
              02. Contextual Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Location-Based Nudges
            </h2>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              Why is it relevant?
            </h3>
            <p className="text-zinc-400 mb-6">
              Manual logging fails because it's tedious. We solve this by using
              the sensors you already have.
            </p>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              The Implementation
            </h3>
            <p className="text-zinc-400 mb-6">
              When your GPS puts you at a "Badminton Court" or "Park" for &gt;20
              minutes, Hyphen proactively asks:{" "}
              <span className="italic text-indigo-400">"Did you play?"</span>.
              One tap confirms it. No searching for "Badminton" in a list of 100
              sports.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl -z-10 rounded-full" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 mb-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Alice</h4>
                    <p className="text-xs text-zinc-500">
                      I noticed you were at a badminton court...
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="bg-indigo-600 text-white text-xs px-4 py-2 rounded-full">
                    Played
                  </button>
                  <button className="bg-zinc-800 text-zinc-400 text-xs px-4 py-2 rounded-full">
                    Didn't play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 03: Regional Food AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-orange-500/10 blur-3xl -z-10 rounded-full" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden group">
              <div className="relative overflow-hidden rounded-xl h-64">
                <img
                  src="/appam-analysis.png"
                  alt="AI Analyzing Appam"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <div className="flex justify-between items-end">
                    <span className="text-white font-bold">
                      Kerala Breakfast
                    </span>
                    <span className="text-orange-400 font-mono text-sm">
                      550 kcal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-4">
              03. Local Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Alice AI
            </h2>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              The Problem
            </h3>
            <p className="text-zinc-400 mb-6">
              Most global apps know "Pancakes" but fail at "Appam" or "Dosa". We
              built Alice to be capable of analyzing rural foods of India and
              identifying calorie composition for *every* Indian food.
            </p>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              The Solution
            </h3>
            <p className="text-zinc-400 mb-6">
              Snap a photo. Our AI identifies{" "}
              <span className="text-orange-400">
                Appam, Egg Curry, Gravy/Oil base
              </span>{" "}
              instantly. It calculates accurate caloric density for *your*
              region's cooking style, not a generic US database.
            </p>
          </div>
        </div>

        {/* Feature 04: Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-4">
              04. The Exchange
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real-World Offers
            </h2>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              Why it matters
            </h3>
            <p className="text-zinc-400 mb-6">
              Points on a screen don't pay bills. Hyphen points do.
            </p>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              How it works
            </h3>
            <p className="text-zinc-400 mb-6">
              Score ≥ 80? Unlock immediate financial benefits.
            </p>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> 20% off medicines at
                partnered pharmacies.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Free annual medical
                checkups.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Priority scheduling
                with nearby hospitals.
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/10 blur-3xl -z-10 rounded-full" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h4 className="text-white font-bold mb-4">Benefits Unlocked</h4>
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
                  <button className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full">
                    Redeem
                  </button>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xl">
                      🩺
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        Free Medical Checkup
                      </div>
                      <div className="text-zinc-500 text-[10px]">
                        BP + Sugar + BMI
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 05: Prevention */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10 rounded-full" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative">
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-zinc-950 p-3 rounded-lg border border-zinc-800 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                  <span className="text-zinc-500 text-sm">Symptoms appear</span>
                </div>
                <div className="flex items-center gap-4 bg-emerald-950/30 p-3 rounded-lg border border-emerald-500/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                  <span className="text-emerald-200 text-sm font-bold">
                    Alice predicts risk (3 days earlier)
                  </span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-zinc-400 text-xs mb-2">Promoting</p>
                <p className="text-white font-bold text-xl">
                  Faster and effective doctor & hospital visits
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">
              05. The Goal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proactive Health
            </h2>
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              Don't just track. Prevent.
            </h3>
            <p className="text-zinc-400 mb-6">
              Our trained health model moves you from a reactive lifestyle to a
              preventive one. Alice identifies subtle patterns—like slight HRV
              drops combined with poor sleep—to flag potential illness days
              before you feel sick.
            </p>
            <a
              href="/secret-sauce/prevention"
              className="text-emerald-400 hover:text-emerald-300 font-semibold border-b border-emerald-500/30 pb-0.5 inline-block"
            >
              Explore the Model &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretSaucePage;
