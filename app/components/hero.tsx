"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Phone, ArrowRight } from "lucide-react";

// --- Swiper CSS ---
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const images = [
    {
      url: "https://i.ibb.co.com/F4J3qZXH/1-A119-B8-A-AF9-E-4473-9-D7-F-866-E18942-C57-1.png",
      pos: "bottom center",
    },
    {
      url: "https://i.ibb.co.com/SYdHBn8/CCD2-DA6-B-3-DF0-4-F66-B97-F-35-A4-EAFE80-C7-1.png",
      pos: "bottom center",
    },
    {
      url: "https://i.ibb.co.com/Kxqq2B2L/DCAF35-F9-EF53-48-DE-9-CB3-E72-C807-E0-EFF-1.png",
      pos: "center right",
    },
    {
      url: "https://i.ibb.co.com/XxPFpgcN/E3-F6-BE0-C-D6-A4-403-B-AE72-86-BDA5-AE2-B38-1.png",
      pos: "bottom center",
    },
  ];

  return (
    <section className="w-full bg-black overflow-hidden relative h-[650px] sm:h-[800px] lg:h-[95vh]">
      {/* 1. Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={2000}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover animate-subtle-zoom"
                style={{
                  backgroundImage: `url(${img.url})`,
                  backgroundPosition: img.pos,
                }}
              >
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/10 to-black/90" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Content Layer - Using absolute positioning for extreme corners */}
      <div className="relative z-10 h-full w-full max-w-[1800px] mx-auto">
        {/* TOP LEFT CORNER: Heading & Tagline */}
        <div className="absolute top-8 left-6 md:top-12 md:left-12 lg:top-16 lg:left-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">
              Rapid Solutions
            </span>
            <div className="w-8 h-[1px] bg-primary/50" />
            <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
              24/7 Service
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl  font-black text-white mb-4 tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
            Truck & Trailer <br />
            <span className="text-primary">Repair Experts</span>
          </h1>

          <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-md border-l border-primary/40 pl-4 opacity-90">
            Rapid Solutions delivers professional roadside assistance and fleet
            maintenance to minimize downtime.
          </p>
        </div>

        {/* BOTTOM RIGHT CORNER: Buttons */}
        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 flex flex-col sm:flex-row gap-3">
          <button className="bg-primary hover:bg-white text-white hover:text-black px-8 py-4 text-[10px] font-black transition-all duration-500 flex items-center justify-center gap-3 tracking-widest uppercase shadow-xl">
            <Phone size={16} className="animate-pulse" />
            Emergency Call
          </button>

          <button className="bg-white/5 border border-white/10 hover:bg-white text-white hover:text-black px-8 py-4 text-[10px] font-black transition-all duration-500 flex items-center justify-center gap-3 tracking-widest uppercase backdrop-blur-md">
            View Services
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.12);
          }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 12s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
