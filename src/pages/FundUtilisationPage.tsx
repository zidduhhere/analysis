import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowRight } from "lucide-react";

const data = [
  {
    name: "Trust-Led Growth",
    value: 30,
    color: "#3b82f6",
    description:
      "Marketing, community building, establishing brand credibility, and patient trust networks.",
  }, // Blue
  {
    name: "Core Platform Development",
    value: 20,
    color: "#ef4444",
    description:
      "Engineering costs, expanding Alice AI capabilities, server infrastructure, and app maintenance.",
  }, // Red
  {
    name: "Feasibility Study",
    value: 20,
    color: "#818cf8",
    description:
      "Clinical trials, pilot programs with partner hospitals, user testing, and market research.",
  }, // Light Blue/Indigo
  {
    name: "Ecosystem & Partnerships",
    value: 30,
    color: "#1e1b4b",
    description:
      "Integration with hospitals, insurance providers, labs, and third-party health services.",
  }, // Dark Blue
];

const FundUtilisationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
          Strategic Fund Utilisation{" "}
          <span className="block text-2xl md:text-4xl lg:text-5xl text-yellow-400 mt-2">
            (18–24 Months)
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Chart Section */}
        <div className="h-[400px] md:h-[500px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={160}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#18181b",
                  borderColor: "#27272a",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                itemStyle={{ color: "#fff" }}
                formatter={(value: number | string | undefined) => [
                  `${value}%`,
                  "Allocation",
                ]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Centered Text for Donut (Optional) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
                Total
              </div>
              <div className="text-white text-3xl font-bold">100%</div>
            </div>
          </div>
        </div>

        {/* Legend & Details Section */}
        <div className="space-y-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors flex gap-5 items-start group"
            >
              <div
                className="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                style={{ backgroundColor: item.color }}
              >
                {item.value}%
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {item.name.toUpperCase()}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <div className="pt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-colors mx-auto lg:mx-0 uppercase text-xs tracking-widest">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundUtilisationPage;
