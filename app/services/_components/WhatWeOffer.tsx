import React from "react";
import {
  Wrench,
  Truck,
  HardHat,
  Bus,
  ClipboardCheck,
  Settings,
  Zap,
  Navigation,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const WhatWeOffer = () => {
  const services = [
    {
      title: "DOT/BIT Inspections",
      desc: "Comprehensive safety compliance and state-certified inspections.",
      icon: <ClipboardCheck className="w-5 h-5" />,
    },
    {
      title: "Mobile Repair",
      icon: <Zap className="w-5 h-5" />,
      desc: "Emergency on-site mechanical solutions, 24/7.",
    },
    {
      title: "Preventive Maintenance",
      icon: <Settings className="w-5 h-5" />,
      desc: "Strategic service intervals to prevent costly breakdowns.",
    },
    {
      title: "Heavy Equipment Repair",
      icon: <HardHat className="w-5 h-5" />,
      desc: "Specialized diagnostics for construction and industrial machinery.",
    },
    {
      title: "Roadside Assistance",
      icon: <Navigation className="w-5 h-5" />,
      desc: "Rapid response recovery to get drivers back on schedule.",
    },
    {
      title: "Bus & RV Services",
      icon: <Bus className="w-5 h-5" />,
      desc: "Expert maintenance focusing on safety and reliability.",
    },
    {
      title: "General Diesel Repair",
      icon: <Truck className="w-5 h-5" />,
      desc: "Full-scale engine and drivetrain overhauls.",
    },
    {
      title: "Lift Gate & Towing",
      icon: <Wrench className="w-5 h-5" />,
      desc: "Hydraulic repairs and heavy-duty towing services.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Centered Header Section --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">
              Service Portfolio
            </span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-5xl  font-black text-slate-900 leading-tight uppercase tracking-tighter">
            Our <span className="text-primary">Services.</span>
          </h2>
        </div>

        {/* --- Premium Service Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-10 transition-all duration-500 ease-in-out hover:z-10"
            >
              {/* 20% Primary Color Hover Effect */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

              <div className="absolute top-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-700"></div>

              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                {service.icon}
              </div>

              <div className="relative z-10 mt-12">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 block group-hover:text-primary transition-colors">
                  0{idx + 1}
                </span>
                <h3 className="text-slate-900 text-xl font-black uppercase tracking-tight mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Read Details <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Premium Call to Action --- */}
        <div className="mt-20 relative group">
          <div className="absolute inset-0 bg-primary rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative bg-slate-950 rounded-[2.5rem] p-8 md:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="relative z-10 text-center lg:text-left">
              <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
                Keep Your Fleet <br />
                <span className="text-primary  font-light">
                  In Constant Motion.
                </span>
              </h4>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-primary hover:bg-white text-white hover:text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-primary/20">
                  Request A Call
                </button>
              </Link>
              <Link href="/locations" className="w-full sm:w-auto">
                <button className="w-full border border-primary hover:bg-primary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500">
                  Locations
                </button>
              </Link>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
