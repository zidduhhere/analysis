import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-teal-400 tracking-wide uppercase">
            Hyphen • Team DK70
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            Health designed for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              real life.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed">
            Bridging the gap between 9-5 routines and sustainable health. No
            strict regimes. Just seamless integration with your daily life.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)]"
            >
              Explore the Gap
            </a>
            <a
              href="#insights"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium rounded-lg transition-all"
            >
              View Insights
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-950/80 border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-300">
                    Stress & Motivation
                  </div>
                  <div className="text-xs text-zinc-500">
                    Major blockers for 80% of users
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-950/80 border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-300">
                    Financial Waste
                  </div>
                  <div className="text-xs text-zinc-500">
                    Unclaimed insurance & reactive care
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
