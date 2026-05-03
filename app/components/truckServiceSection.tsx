"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServiceImage {
  url: string;
  alt: string;
}

const TruckServiceSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const serviceImages: ServiceImage[] = [
    {
      url: "https://i.ibb.co.com/F4J3qZXH/1-A119-B8-A-AF9-E-4473-9-D7-F-866-E18942-C57-1.png",
      alt: "Mechanic working on heavy duty engine",
    },
    {
      url: "https://i.ibb.co.com/SYdHBn8/CCD2-DA6-B-3-DF0-4-F66-B97-F-35-A4-EAFE80-C7-1.png",
      alt: "Fleet service truck onsite",
    },
    {
      url: "https://i.ibb.co.com/Kxqq2B2L/DCAF35-F9-EF53-48-DE-9-CB3-E72-C807-E0-EFF-1.png",
      alt: "Diesel technician performing diagnostics",
    },
    {
      url: "https://i.ibb.co.com/XxPFpgcN/E3-F6-BE0-C-D6-A4-403-B-AE72-86-BDA5-AE2-B38-1.png",
      alt: "Mobile repair unit working on truck",
    },
  ];

  // Auto-play logic for image crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceImages.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, [serviceImages.length]);

  const features = ["24/7 Mobile Service", "Fast Response Time"];

  return (
    <section className="relative bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Minimize Downtime. <br />
              <span className="text-primary ">Maximize Fleet Performance.</span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-lg mb-8 max-w-xl">
              Rapid Solutions Fleet Service delivers OEM-level diagnostics and
              on-site heavy-duty repairs — keeping your trucks on the road and
              your business moving.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact">
                <button className="bg-zinc-950 hover:bg-primary text-white px-8 py-4 text-sm font-black transition-all duration-300 flex items-center gap-2 uppercase rounded-lg shadow-xl">
                  Schedule Service
                </button>
              </Link>
              <Link href="/partner-program">
                <button className="bg-white border-2 border-slate-200 hover:border-primary text-slate-900 px-8 py-4 text-sm font-black transition-all duration-300 flex items-center gap-2 uppercase rounded-lg">
                  Fleet Partner
                </button>
              </Link>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="text-slate-700 font-bold text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Image Gallery */}
          <div className="relative order-1 lg:order-2 h-[400px] md:h-[550px] w-full group">
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700" />

            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={serviceImages[currentIndex].url}
                    alt={serviceImages[currentIndex].alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {serviceImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      idx === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckServiceSection;
