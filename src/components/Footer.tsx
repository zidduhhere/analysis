import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} HealthAnalysis. All rights reserved.
        </p>
        <p className="text-zinc-600 text-xs mt-2">
          Designed for a healthier future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
