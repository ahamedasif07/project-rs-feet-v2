/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Wrench, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      title: "Elite Technicians",
      desc: "Our team consists of ASE-certified masters who specialize in heavy-duty diesel systems.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "On-Site Infrastructure",
      desc: "We bring the shop to you. Our service units are fully equipped for complex roadside repairs.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Direct Transparency",
      desc: "No hidden fees or guesswork. You get real-time updates and honest labor reporting.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Uptime Optimization",
      desc: "We don't just fix problems; we analyze fleet data to prevent future breakdowns.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section: Responsive Flex */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12 mb-12 md:mb-16">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-6 md:w-8 h-[1.5px] bg-primary"></div>
              <span className="text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                Our Standard
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] uppercase tracking-tight">
              The Professional <br />
              <span className="text-primary">RS Advantage.</span>
            </h2>
          </div>

          <div className="w-full lg:w-1/3">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed border-l-2 border-slate-200 pl-4 md:pl-6 lg:max-w-sm">
              We've built our reputation on high-stakes reliability. When your
              fleet is down, you need more than a mechanic—you need a partner.
            </p>
          </div>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 group hover:bg-slate-900 transition-all duration-500 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="text-primary mb-5 md:mb-6 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                {item.icon}
              </div>

              <h4 className="text-slate-900 group-hover:text-white font-black uppercase text-sm tracking-tight mb-2 md:mb-3 transition-colors">
                {item.title}
              </h4>

              <p className="text-slate-500 group-hover:text-slate-300 text-[13px] leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
