import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#14b8a6", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

const routineData = [
  { name: "9-5 Routine / Student", value: 93 },
  { name: "Other", value: 7 },
];

const healthCostConcernData = [
  { name: "Yes", value: 64 },
  { name: "Somewhat", value: 28.6 },
  { name: "Not Really", value: 7.4 },
];

const activityData = [
  { name: "Not Active", value: 50 },
  { name: "Slightly Active", value: 24.7 },
  { name: "Very Active", value: 16.1 },
  { name: "Moderately", value: 9.2 },
];

const consistencyData = [
  { name: "Never", value: 37.1 },
  { name: "Rarely", value: 30.1 },
  { name: "Often", value: 19.4 },
  { name: "Sometimes", value: 13.4 },
];

const consistencyBenefitsData = [
  { name: "Yes", value: 94.2 },
  { name: "No/Maybe", value: 5.8 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 p-2 rounded shadow-xl text-xs text-zinc-100">
        <p className="font-semibold">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col items-center">
    <h3 className="text-sm font-medium text-zinc-300 mb-4 text-center h-10 flex items-center">
      {title}
    </h3>
    <div className="w-full h-64">{children}</div>
  </div>
);

const SurveyCharts: React.FC = () => {
  return (
    <section
      id="charts"
      className="py-24 bg-zinc-950 px-6 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Survey Analysis
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Insights from 180+ respondents revealing the disconnect between
            daily life and health systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Daily Routine */}
          <ChartCard title="What best describes your daily routine?">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={routineData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {routineData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-zinc-400 text-2xl font-bold"
                >
                  93%
                </text>
                <text
                  x="50%"
                  y="65%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-zinc-500 text-xs"
                >
                  9-5 Workers
                </text>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Health Cost Concern */}
          <ChartCard title="Concerned about future medical costs?">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={healthCostConcernData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {healthCostConcernData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Activity Levels */}
          <ChartCard title="Physical Activity on Weekdays">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <XAxis
                  dataKey="name"
                  stroke="#52525b"
                  fontSize={10}
                  interval={0}
                  tick={{ angle: -45, textAnchor: "end" }}
                  height={60}
                />
                <YAxis stroke="#52525b" fontSize={10} />
                <Tooltip
                  cursor={{ fill: "#27272a" }}
                  contentStyle={{
                    backgroundColor: "#18181b",
                    borderColor: "#27272a",
                    color: "#f4f4f5",
                  }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Consistency */}
          <ChartCard title="Consistency > 2 Weeks">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={consistencyData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {consistencyData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Breaks Routine */}
          <ChartCard title="What breaks your routine?">
            <div className="flex flex-col justify-center h-full space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-zinc-300">
                  <span>Busy Schedule / Stress</span>
                  <span className="font-bold text-teal-400">43.5%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{ width: "43.5%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-zinc-300">
                  <span>Lack of Motivation</span>
                  <span className="font-bold text-blue-400">30%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-zinc-300">
                  <span>No Clear Benefits</span>
                  <span className="font-bold text-amber-500">19%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: "19%" }}
                  ></div>
                </div>
              </div>
            </div>
          </ChartCard>

          {/* Future Consistency */}
          <ChartCard title="Would you be consistent with clear benefits?">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={consistencyBenefitsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {consistencyBenefitsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-teal-400 text-2xl font-bold"
                >
                  94%
                </text>
                <text
                  x="50%"
                  y="65%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-zinc-500 text-xs"
                >
                  Yes
                </text>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </section>
  );
};

export default SurveyCharts;
