"use client";
import React from "react";
import { Zap, Activity, Wrench, DollarSign, Users, Clock } from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Fast Mobile Response",
    desc: "We come to your truck to reduce downtime and avoid towing.",
    icon: Zap,
  },
  {
    title: "OEM-Level Diagnostics",
    desc: "Accurate troubleshooting using advanced diagnostic tools.",
    icon: Activity,
  },
  {
    title: "Heavy-Duty Repair Experts",
    desc: "Specialized in commercial truck systems and repairs.",
    icon: Wrench,
  },
  {
    title: "Transparent Pricing",
    desc: "No surprises. Clear rates and upfront communication.",
    icon: DollarSign,
  },
  {
    title: "Fleet Partner Savings",
    desc: "$35 OFF labor rates for approved fleet partners.",
    icon: Users,
  },
  {
    title: "24/7 Roadside Support",
    desc: "We’re ready anytime your truck breaks down.",
    icon: Clock,
  },
];

export default function PremiumFeatures() {
  return (
    <section className="relative bg-[#fafafa] py-24 px-4 overflow-hidden">
      {/* Subtle Background Pattern or Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Why Choose
            <span className="text-primary"> Rapid Solutions</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Built for commercial trucks, roadside service, and fleet operations
            that cannot afford downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-[1px] rounded-2xl bg-slate-200 hover:bg-gradient-to-b hover:from-primary/40 hover:to-transparent transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Card Body */}
              <div className="relative h-full bg-white rounded-[15px] p-10 overflow-hidden transition-colors duration-500 group-hover:bg-slate-50/50 flex flex-col items-center text-center">
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-out shadow-inner">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Bottom Line Effect */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
