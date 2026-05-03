/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const servicesList = [
  "Truck Repair",
  "Roadside Assistance",
  "Job Inquiry",
  "Fleet Management",
  "Other",
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      services: selectedServices,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          duration: 4000,
          position: "top-center",
          style: { background: "#10b981", color: "#fff", fontWeight: "bold" },
        });
        (e.target as HTMLFormElement).reset();
        setSelectedServices([]);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
            Contact <span className="text-primary">Us.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium max-w-xl mx-auto">
            Get in touch with{" "}
            <span className="text-primary">Rapid Solutions</span>. Fill out the
            form below and we'll get back to you shortly.
          </p>
        </div>

        {/* --- Form Container --- */}
        <div className="bg-[#FCFDFD] border border-slate-100 p-8 md:p-12 rounded-2xl shadow-sm">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Names Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    name="firstName"
                    type="text"
                    required
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
                    name="lastName"
                    type="text"
                    required
                    placeholder="Enter last name"
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* Company Name Field (New) */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                Company Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="companyName"
                  type="text"
                  placeholder="Enter your company name (optional)"
                  className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300"
                />
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
                    name="email"
                    type="email"
                    required
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
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* Services Checkboxes */}
            <div className="space-y-4">
              <label className="text-[11px] font-bold uppercase text-slate-900 tracking-wider ml-1">
                Services Needed
              </label>
              <div className="flex flex-wrap gap-3">
                {servicesList.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                      />
                      <div className="w-5 h-5 bg-white border border-slate-200 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
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
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all text-sm font-medium text-slate-800 placeholder:text-slate-300 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center md:text-left">
              <button
                type="submit"
                disabled={loading}
                className="bg-slate-900 hover:bg-primary disabled:bg-slate-400 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-md active:scale-95 min-w-[200px]"
              >
                {loading ? (
                  <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
