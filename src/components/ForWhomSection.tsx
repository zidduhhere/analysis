import React from "react";
import { Briefcase, Heart, Users, Stethoscope } from "lucide-react";

const ForWhomSection: React.FC = () => {
  const audiences = [
    {
      icon: Briefcase,
      title: "Working Professionals",
      color: "blue",
      description:
        "People with structured routines who don't have time for constant health tracking.",
      features: [
        "Minimal manual input",
        "Passive health monitoring",
        "Context-aware suggestions",
        "No disruption to daily flow",
      ],
    },
    {
      icon: Heart,
      title: "Families & Caregivers",
      color: "pink",
      description:
        "Those managing health for dependents—children, aging parents, or partners.",
      features: [
        "Multi-user support",
        "Shared health summaries",
        "Medication reminders",
        "Family health dashboard",
      ],
    },
    {
      icon: Users,
      title: "Preventive & Chronic Care Users",
      color: "green",
      description:
        "People managing conditions like diabetes, hypertension, or PCOS who need continuous tracking without burnout.",
      features: [
        "Long-term pattern tracking",
        "Deviation alerts",
        "Doctor-ready reports",
        "Medication adherence support",
      ],
    },
    {
      icon: Stethoscope,
      title: "Doctors, Clinics & Hospitals",
      color: "purple",
      description:
        "Healthcare providers who need structured patient data without asking patients to manually log everything.",
      features: [
        "Pre-visit patient summaries",
        "Trend visualization",
        "Virtual twin consultations",
        "Reduced consultation time",
      ],
    },
  ];

  const colorMap: Record<
    string,
    { bg: string; border: string; icon: string; accent: string }
  > = {
    blue: {
      bg: "from-blue-900/20 to-blue-800/10",
      border: "border-blue-500/20",
      icon: "text-blue-400",
      accent: "bg-blue-500/10",
    },
    pink: {
      bg: "from-pink-900/20 to-pink-800/10",
      border: "border-pink-500/20",
      icon: "text-pink-400",
      accent: "bg-pink-500/10",
    },
    green: {
      bg: "from-green-900/20 to-green-800/10",
      border: "border-green-500/20",
      icon: "text-green-400",
      accent: "bg-green-500/10",
    },
    purple: {
      bg: "from-purple-900/20 to-purple-800/10",
      border: "border-purple-500/20",
      icon: "text-purple-400",
      accent: "bg-purple-500/10",
    },
  };

  return (
    <section id="for-whom" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            Who This Is For
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-green-400 to-teal-500 mx-auto mb-6" />
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Hyphen is designed for anyone who wants health to work{" "}
            <span className="text-white font-semibold">with</span> their life,
            not against it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => {
            const colors = colorMap[audience.color];
            const Icon = audience.icon;

            return (
              <div
                key={index}
                className={`bg-linear-to-br ${colors.bg} border ${colors.border} rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.accent} flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {audience.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${colors.icon}`}
                      ></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Whether you're managing your own health, caring for others, or
              treating patients,{" "}
              <span className="text-white font-bold">
                Hyphen adapts to your context
              </span>{" "}
              instead of demanding you adapt to it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
