import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    path: "/solution/analyze",
    title: "WE ANALYZE",
    icon: (
      <svg
        className="w-24 h-24 text-blue-400"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-20"
        />
        <path
          d="M50 20V50L70 70"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle
          cx="30"
          cy="30"
          r="5"
          fill="currentColor"
          className="text-teal-400 animate-pulse"
        />
      </svg>
    ),
    description:
      "Using data from your existing smart devices, we understand how your life naturally runs and summarize the essential health signals into a clear, doctor-ready view.",
  },
  {
    path: "/solution/routine",
    title: "FOLLOW ROUTINE",
    icon: (
      <svg
        className="w-24 h-24 text-amber-500"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="30"
          width="60"
          height="40"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-50"
        />
        <path d="M40 80h20M50 70v10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M35 50h30"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-amber-400"
        />
      </svg>
    ),
    description:
      "We don't think that health is a separate path. Health should follow into your life. No motivated workout, we compensate to the routine life only when you need it.",
  },
  {
    path: "/solution/nudges",
    title: "SMALL NUDGES",
    icon: (
      <svg
        className="w-24 h-24 text-purple-500"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 80 Q 40 20 80 40"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="80"
          cy="40"
          r="4"
          fill="currentColor"
          className="animate-ping"
        />
      </svg>
    ),
    description:
      "With a proactive model and your lifestyle data we simply find out where you will be able to include a fasting, exercise, walking, yoga, or meditation to maximize productivity.",
  },
  {
    path: "/solution/insurance",
    title: "MUTATING INSURANCE",
    icon: (
      <svg
        className="w-24 h-24 text-yellow-500"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="50"
          cy="70"
          rx="30"
          ry="10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <ellipse
          cx="50"
          cy="65"
          rx="30"
          ry="10"
          stroke="currentColor"
          strokeWidth="2"
          className="translate-y-[-10px]"
        />
        <ellipse
          cx="50"
          cy="60"
          rx="30"
          ry="10"
          stroke="currentColor"
          strokeWidth="2"
          className="translate-y-[-20px]"
        />
      </svg>
    ),
    description:
      "We provide mutable health insurance where maintaining a good profile reduces your premium. You don't have to pay extra interest when you are paying the loan in TIME.",
  },
];

const SolutionNavigator: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-2 uppercase">
            Solution
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-zinc-100 group"
            >
              <h3 className="text-lg font-black uppercase mb-6 tracking-wide border-b-2 border-transparent group-hover:border-zinc-900 transition-all pb-1">
                {item.title}
              </h3>

              <div className="mb-6 p-4 bg-zinc-50 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              <Link
                to={item.path}
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors shadow-lg shadow-blue-500/30"
              >
                Click Here
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500 uppercase tracking-tighter">
            Proactively Analyse & Plan
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-2 tracking-[0.2em] uppercase">
            Solution in Three Words
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionNavigator;
