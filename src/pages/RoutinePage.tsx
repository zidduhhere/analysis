import React from "react";

const RoutinePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-4">
          Solution 02
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Follow Routine.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Health shouldn't be a separate job. We believe in "Compensatory
          Health"—adjusting to your chaos, not asking you to eliminate it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">The 9-5 Sync</h2>
          <p className="text-zinc-400 mb-6">
            We know you sit for 8 hours. We know you have crunch times. Hyphen
            doesn't annoy you during a meeting. We find the "dead air" in your
            schedule—the commute, the coffee break—and insert micro-health
            actions there.
          </p>
          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <h3 className="text-amber-400 font-bold mb-2">
              The "Missed Workout" Protocol
            </h3>
            <p className="text-sm text-zinc-300">
              Missed the gym because of overtime? We don't shame you. We simply
              adjust your weekend nutrition plan to balance the caloric deficit
              automatically.
            </p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📅</div>
            <div className="text-zinc-500 font-mono text-sm">CALENDAR SYNC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinePage;
