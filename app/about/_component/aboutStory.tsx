import React from "react";
import Image from "next/image";
import { Target, Eye } from "lucide-react";

const AboutStory = () => {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Column: Focused Story & Vision */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
              Our Foundation
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight mb-6">
            Driven by <span className="text-primary">Reliability.</span>
          </h2>

          <div className="space-y-4 text-slate-500 text-base leading-relaxed max-w-xl">
            <p>
              <span className="text-slate-900 font-bold">Rapid Solutions</span>{" "}
              was born out of a critical need in the logistics industry: a
              repair partner that moves as fast as the freight does. We began
              with a single mission—to eliminate the costly delays of
              traditional shop repairs.
            </p>
            <p>
              Today, we operate as a strategic extension of your fleet. We don’t
              just offer mechanical expertise; we provide the peace of mind that
              your trucks are always road-ready and compliant.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="flex gap-4">
              <Target className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
                  Our Mission
                </h4>
                <p className="text-slate-500 text-[13px] leading-snug">
                  To redefine roadside assistance through precision, speed, and
                  integrity.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-4">
              <Eye className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
                  Our Vision
                </h4>
                <p className="text-slate-500 text-[13px] leading-snug">
                  To become the gold standard for fleet maintenance across the
                  nation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Image Representation */}
        <div className="lg:w-1/2 w-full">
          <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="https://i.ibb.co.com/SYdHBn8/CCD2-DA6-B-3-DF0-4-F66-B97-F-35-A4-EAFE80-C7-1.png"
              alt="RS Fleet Service"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
