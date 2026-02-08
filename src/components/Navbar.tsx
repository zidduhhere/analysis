import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { to: "/solution", label: "Solution", exact: true },
    { to: "/secret-sauce", label: "Secret Sauce", includes: true },
    { to: "/business-model", label: "Target Customers", exact: true },
    { to: "/milestones", label: "Roadmap", exact: true },
    { to: "/business-plan", label: "Business Plan", exact: true },
    { to: "/fund-utilisation", label: "Funds", exact: true },
  ];

  const scrollButtons = [
    { id: "about", label: "The Problem" },
    { id: "user-analysis", label: "User Analysis" },
    { id: "insights", label: "Insights" },
    { id: "team-insights", label: "Team Vision" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center border border-teal-500/30">
              <span className="text-teal-400 font-bold">H</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white shrink-0 leading-none">
                Hyphen
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-teal-400 transition-colors whitespace-nowrap ${
                  (link.includes && location.pathname.includes(link.to)) ||
                  (!link.includes && location.pathname === link.to)
                    ? "bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 text-teal-400 font-bold text-xs uppercase tracking-wide"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {scrollButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => handleScroll(btn.id)}
                className="hover:text-teal-400 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                {btn.label}
              </button>
            ))}

            <a
              href="https://chatgpt.com/share/69717cde-76f0-8009-b9b3-84953804ecbc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-zinc-800 hover:border-teal-500/50 hover:text-teal-400 transition-all whitespace-nowrap"
            >
              ChatGPT
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-teal-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-900/50 bg-zinc-950/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  (link.includes && location.pathname.includes(link.to)) ||
                  (!link.includes && location.pathname === link.to)
                    ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-teal-400"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-zinc-900/50 my-2 pt-2">
              {scrollButtons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleScroll(btn.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-teal-400 transition-colors"
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <a
              href="https://chatgpt.com/share/69717cde-76f0-8009-b9b3-84953804ecbc"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-teal-400 transition-colors border border-zinc-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              ChatGPT Discussion
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
