/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const ContactSection = () => {
  const services = [
    "Truck Repair",
    "Roadside Assistance",
    "Job Inquiry",
    "Fleet Management",
    "Other",
  ];

  return (
    <section className="py-24  bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* --- Minimal Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
            Contact <span className="text-primary">Us.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium max-w-xl mx-auto">
            Get in touch with <span className="text-primary">M's Fleet</span>.
            Fill out the form below and we'll get back to you shortly.
          </p>
          <div className="mt-5 flex justify-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span className="text-primary">+1 877-349-8789</span>
            <span>|</span>
            <span className="text-primary">shop@msfleetservice.com</span>
          </div>
        </div>

        {/* --- Clean Form Container --- */}
        <div className="bg-[#FCFDFD] border border-slate-100 p-8 md:p-12 rounded-2xl shadow-sm">
          <form className="space-y-8">
            {/* Names Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* Services Checkboxes - Now Cleaner */}
            <div className="space-y-4">
              <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                Services Needed
              </label>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 bg-white border border-slate-200 rounded-md peer-checked:bg-green-600 peer-checked:border-green-600 transition-all flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                      </div>
                    </div>
                    <span className="text-[13px] font-semibold text-slate-600 peer-checked:text-slate-950 transition-colors">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300 resize-none"
                />
              </div>
            </div>

            {/* Compact Submit Button */}
            <div className="pt-4 text-center md:text-left">
              <button className="bg-primary hover:bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-md active:scale-95">
                Send Message
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
