/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  ShieldCheck,
  Zap,
  Wrench,
  ArrowRight,
  TrendingDown,
  Timer,
  Settings,
} from "lucide-react";

const RSFleetsPartner = () => {
  const benefits = [
    {
      title: "Priority Access",
      icon: <Timer className="w-5 h-5 text-primary" />,
      desc: "Fast-tracked scheduling to minimize downtime.",
    },
    {
      title: "Exclusive Rates",
      icon: <TrendingDown className="w-5 h-5 text-primary" />,
      desc: "Significant labor discounts for partner fleets.",
    },
    {
      title: "RS Intelligence",
      icon: <Settings className="w-5 h-5 text-primary" />,
      desc: "Advanced management for fleet performance.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE: Strategic Messaging */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-8 bg-slate-50 px-4 py-2 rounded-sm border-l-4 border-primary">
              <span className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em]">
                Partner Program
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter  mb-8">
              Reliability <br />
              <span className="text-primary">Redefined.</span>
            </h2>

            <p className="text-slate-500  font-medium leading-relaxed max-w-lg mb-10">
              We collaborate with fleet leaders to engineer a low-risk,
              high-reward partnership. At{" "}
              <span className="text-slate-900 font-bold">RS Fleets</span>, we
              don't just service vehicles; we optimize your entire operational
              cost.
            </p>

            {/* Clean Benefit Grid */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 transition-transform group-hover:scale-110 duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm font-medium leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button: Primary to Black */}
            <button className="group flex items-center gap-4 bg-primary hover:bg-black text-white px-10 py-5 rounded-md font-black text-xs transition-all duration-500 tracking-[0.2em] uppercase shadow-2xl shadow-primary/20">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* RIGHT SIDE: Premium Pricing Card */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>

              <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)]">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-primary font-black text-[10px] tracking-widest uppercase bg-primary/5 px-2 py-1 rounded">
                      Elite Status
                    </span>
                    <h3 className="text-3xl font-black text-slate-900 mt-4 leading-none uppercase tracking-tighter">
                      Fleet Partner <br /> Program
                    </h3>
                  </div>
                  <ShieldCheck className="text-primary w-8 h-8" />
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100 relative overflow-hidden">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 relative z-10">
                    Guaranteed Savings
                  </p>
                  <div className="flex items-baseline gap-1 relative z-10">
                    <span className="text-6xl font-black text-slate-900 tracking-tighter">
                      $35
                    </span>
                    <span className="text-xl font-bold text-slate-400">
                      /hr
                    </span>
                  </div>
                  <p className="text-primary font-black text-xs uppercase mt-2 tracking-widest relative z-10">
                    Labor Rate Discount
                  </p>
                  {/* Subtle BG Icon */}
                  <Wrench className="absolute -bottom-4 -right-4 text-slate-100 w-24 h-24 rotate-12" />
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Priority Next-Bay Service",
                    "Custom Maintenance Portal",
                    "Dedicated Fleet Assistant",
                    "Unit-Specific History Storage",
                    "Comprehensive PM Audits",
                  ].map((list, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-slate-600 font-bold text-sm tracking-tight">
                        {list}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-slate-50 flex items-center justify-between opacity-60">
                  <p className="text-[10px] text-slate-700 uppercase font-black ">
                    Authorized By RS Fleets
                  </p>
                  <div className="w-8 h-[1px] bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSFleetsPartner;
