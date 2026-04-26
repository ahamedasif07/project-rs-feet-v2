/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Wrench,
  ShieldCheck,
  Zap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      title: "Elite Technicians",
      desc: "Our team consists of ASE-certified masters who specialize in heavy-duty diesel systems.",
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      title: "On-Site Infrastructure",
      desc: "We bring the shop to you. Our service units are fully equipped for complex roadside repairs.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Direct Transparency",
      desc: "No hidden fees or guesswork. You get real-time updates and honest labor reporting.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Uptime Optimization",
      desc: "We don't just fix problems; we analyze fleet data to prevent future breakdowns.",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FDFDFD] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-primary"></span>
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                Our Standard
              </span>
            </div>
            <h2 className="text-4xl  md:text-5xl font-black text-slate-900 leading-[1.05] uppercase tracking-tighter">
              The Professional <br />
              <span className="text-primary ">RS Advantage.</span>
            </h2>
          </div>

          <div className="lg:max-w-xs border-l-[3px] border-primary/20 pl-6">
            <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-medium">
              We've built our reputation on high-stakes reliability. When your
              fleet is down, you need a partner, not just a mechanic.
            </p>
          </div>
        </div>

        {/* --- Classy Hover Card Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-10 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* 20% Primary Tint Hover Effect */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

              {/* Animated Top Line */}
              <div className="absolute top-0 left-0 w-0 h-[4px] bg-primary group-hover:w-full transition-all duration-700 ease-in-out"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-10">
                <h4 className="text-slate-900 font-black uppercase text-base tracking-tight mb-3 transition-colors group-hover:text-primary">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[13px] leading-relaxed font-medium transition-colors group-hover:text-slate-600">
                  {item.desc}
                </p>
              </div>

              {/* Minimalist Floating Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="text-primary w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
