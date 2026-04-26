/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you work on trucks from all manufacturers?",
      answer:
        "Yes, our certified technicians are equipped to handle diesel engines and heavy-duty trucks from all major manufacturers including Freightliner, Kenworth, Peterbilt, and Volvo.",
    },
    {
      question: "What kind of inspections do you provide?",
      answer:
        "We provide comprehensive DOT and BIT inspections, as well as specialized safety and preventive maintenance checks to ensure your fleet remains compliant and roadworthy.",
    },
    {
      question: "Does Rapid Solutions provide 24/7 roadside assistance?",
      answer:
        "Absolutely. We offer round-the-clock mobile repair and roadside recovery services to minimize your downtime, no matter when or where a breakdown occurs.",
    },
    {
      question: "Do you provide OEM level repairs?",
      answer:
        "Yes, we utilize advanced diagnostics and high-quality parts to ensure all repairs meet or exceed Original Equipment Manufacturer (OEM) standards.",
    },
    {
      question: "How does the Fleet Partner Program work?",
      answer:
        "Our Fleet Partner Program offers prioritized scheduling, discounted labor rates, and customized maintenance plans tailored specifically to your operational needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
              Common Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
            Information <span className="text-primary">& Support.</span>
          </h2>
        </div>

        {/* --- FAQ Accordion List --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border rounded-2xl transition-all duration-500 ${
                activeIndex === index
                  ? "border-primary bg-primary/[0.02] shadow-xl shadow-primary/5"
                  : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-7 text-left outline-none"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-bold transition-colors ${
                      activeIndex === index ? "text-primary" : "text-slate-400"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  {/* Optimized Question Font Size & Weight */}
                  <span className="text-[15px] md:text-base font-bold text-slate-900 uppercase tracking-tight leading-tight">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index
                      ? "bg-primary text-white rotate-180"
                      : "bg-white text-slate-400 border border-slate-100"
                  }`}
                >
                  {activeIndex === index ? (
                    <Minus size={14} />
                  ) : (
                    <Plus size={14} />
                  )}
                </div>
              </button>

              {/* Animated Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-7 pt-0 ml-7 md:ml-9">
                  <div className="w-full h-px bg-slate-100 mb-5"></div>
                  <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Don't see the answer you're looking for?
            <a
              href="/contact"
              className="text-primary font-bold ml-2 hover:underline"
            >
              Contact our experts.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
