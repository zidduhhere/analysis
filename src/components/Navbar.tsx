import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center border border-teal-500/30">
            <span className="text-teal-400 font-bold">H</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-white leading-none">
              Hyphen
            </span>
            <span className="text-[10px] text-zinc-500 font-mono leading-none tracking-wider">
              TEAM DK70
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
          <Link
            to="/secret-sauce"
            className={`hover:text-teal-400 transition-colors ${
              location.pathname.includes("/secret-sauce")
                ? "bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 text-teal-400 font-bold text-xs uppercase tracking-wide"
                : ""
            }`}
          >
            Secret Sauce
          </Link>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-teal-400 transition-colors bg-transparent border-none cursor-pointer"
          >
            The Problem
          </button>
          <button
            onClick={() => handleScroll("user-analysis")}
            className="hover:text-teal-400 transition-colors bg-transparent border-none cursor-pointer"
          >
            User Analysis
          </button>
          <button
            onClick={() => handleScroll("insights")}
            className="hover:text-teal-400 transition-colors bg-transparent border-none cursor-pointer"
          >
            Insights
          </button>
          <button
            onClick={() => handleScroll("team-insights")}
            className="hover:text-teal-400 transition-colors bg-transparent border-none cursor-pointer"
          >
            Team Vision
          </button>
          <a
            href="https://chatgpt.com/share/69717cde-76f0-8009-b9b3-84953804ecbc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-zinc-800 hover:border-teal-500/50 hover:text-teal-400 transition-all"
          >
            ChatGPT Discussion
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
