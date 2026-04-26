import React from "react";
import {
  ShieldCheck,
  Wrench,
  Truck,
  HardHat,
  Clock,
  Bus,
  ClipboardCheck,
  Settings,
  Zap,
  Navigation,
  Fuel,
} from "lucide-react";

const WhatWeOffer = () => {
  const services = [
    {
      title: "DOT/BIT Inspections",
      desc: "Comprehensive safety compliance and state-certified inspections to keep your fleet road-legal.",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      title: "Mobile Repair",
      icon: <Zap className="w-6 h-6" />,
      desc: "Emergency on-site mechanical solutions delivered directly to your location, 24/7.",
    },
    {
      title: "Preventive Maintenance",
      icon: <Settings className="w-6 h-6" />,
      desc: "Strategic service intervals designed to reduce long-term wear and prevent costly breakdowns.",
    },
    {
      title: "Heavy Equipment Repair",
      icon: <HardHat className="w-6 h-6" />,
      desc: "Specialized diagnostics and repairs for construction, agricultural, and industrial machinery.",
    },
    {
      title: "Roadside Assistance",
      icon: <Navigation className="w-6 h-6" />,
      desc: "Rapid response recovery and minor mechanical fixes to get your drivers back on schedule.",
    },
    {
      title: "Bus & RV Services",
      icon: <Bus className="w-6 h-6" />,
      desc: "Expert maintenance for passenger vehicles, focusing on safety, comfort, and reliability.",
    },
    {
      title: "General Diesel Repair",
      icon: <Truck className="w-6 h-6" />,
      desc: "Full-scale engine, transmission, and drivetrain overhauls for all major diesel makes.",
    },
    {
      title: "Lift Gate & Towing",
      icon: <Wrench className="w-6 h-6" />,
      desc: "Specialized hydraulic repairs and heavy-duty towing services for maximum operational uptime.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-[1.5px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">
              Expertise & Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tighter mb-6">
            Our Professional <br />
            <span className="text-primary">Service Portfolio.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
            We provide a full spectrum of mechanical repair and fleet management
            solutions, engineered to minimize downtime and maximize reliability.
          </p>
        </div>

        {/* Clean Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-50 hover:bg-slate-900 p-8 rounded-2xl transition-all duration-500 border border-slate-100 hover:border-slate-800 flex flex-col items-start shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="bg-white p-3 rounded-xl text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-slate-900 group-hover:text-white text-lg font-black uppercase tracking-tight mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed transition-colors">
                {service.desc}
              </p>

              {/* Subtle Decorative Number */}
              <span className="absolute top-6 right-8 text-slate-200 group-hover:text-slate-800 text-4xl font-black transition-colors pointer-events-none">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 p-8 md:p-12 bg-slate-950 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
              Need Custom Fleet Support?
            </h4>
            <p className="text-slate-400 font-medium text-sm md:text-base">
              Contact our specialists today for a custom maintenance plan
              tailored to your fleet size.
            </p>
          </div>
          <button className="relative z-10 bg-primary hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shrink-0">
            Get A Free Quote
          </button>

          {/* Subtle BG Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
