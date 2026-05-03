/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

// --- TypeScript Interfaces ---
interface LocationData {
  id: number;
  city: string;
  state: string;
  address: string;
  phone: string;
  services: string[];
}

const locations: LocationData[] = [
  {
    id: 1,
    city: "Truckee",
    state: "CA",
    address: "Truckee, California Area",
    phone: "+1 530 237 3532",
    services: ["Mobile", "24/7 Emergency", "Hydraulic"],
  },
  {
    id: 2,
    city: "Carson City",
    state: "NV",
    address: "Carson City, Nevada Area",
    phone: "+1 530 237 3532",
    services: ["Mobile", "Emergency", "Equipment"],
  },
  {
    id: 3,
    city: "Reno / Sparks",
    state: "NV",
    address: "Reno, Sparks & Fernley, NV",
    phone: "+1 775 525 0203",
    services: ["Mobile", "Equipment", "Hydraulic"],
  },
  {
    id: 4,
    city: "Winnemucca",
    state: "NV",
    address: "Winnemucca & Hawthorne, NV",
    phone: "+1 775 525 0203",
    services: ["Mobile", "Emergency", "Hydraulic"],
  },
  {
    id: 5,
    city: "Chicago",
    state: "IL",
    address: "Chicago Metro Area",
    phone: "+1 779 770 7575",
    services: ["Mobile", "Emergency", "Equipment"],
  },
  {
    id: 6,
    city: "Northern IL",
    state: "IL",
    address: "Joliet, Naperville & Rockford, IL",
    phone: "+1 779 770 7575",
    services: ["Mobile", "24/7 Emergency"],
  },
  {
    id: 7,
    city: "Milwaukee",
    state: "WI",
    address: "Milwaukee Metro Area",
    phone: "+1 414 399 3026",
    services: ["Mobile", "24/7 Emergency"],
  },
  {
    id: 8,
    city: "Wisconsin",
    state: "WI",
    address: "Madison, Green Bay & Kenosha, WI",
    phone: "+1 414 399 3026",
    services: ["Mobile", "24/7 Emergency"],
  },
];

const FleetLocations: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Rapid Solutions <span className="text-primary">Locations</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-base mb-6">
            Explore the RS service network across key California, Nevada,
            Illinois, and Wisconsin markets.
          </p>
        </div>

        {/* --- Full Width Map --- */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 group shadow-lg bg-white border border-slate-200">
          <Image
            src="/assets/images/map-image.png"
            alt="Fleet Service Area Map"
            fill
            className="object-contain p-4 transition-transform duration-1000 group-hover:scale-105"
            priority
          />
        </div>

        {/* --- Location Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group relative bg-white p-8 rounded-xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-center min-h-[220px]"
            >
              {/* --- SIDE SLIDE EFFECT LAYER --- */}
              <div className="absolute inset-0 bg-primary/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

              {/* --- CARD CONTENT --- */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* City Name */}
                <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight uppercase leading-none transition-transform duration-500 group-hover:scale-105">
                  {loc.city}
                </h4>

                {/* Address */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin size={14} className="text-primary opacity-70" />
                  <p className="text-slate-500 text-sm font-medium tracking-tight">
                    {loc.address}
                  </p>
                </div>

                {/* Phone Number (Primary Action) */}
                <div className="inline-flex items-center gap-2 py-2 px-4 bg-slate-50 rounded-full border border-slate-100 transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                  <Phone
                    size={14}
                    className="text-primary group-hover:text-white"
                  />
                  <span className="text-slate-900 text-sm font-black group-hover:text-white transition-colors">
                    {loc.phone}
                  </span>
                </div>
              </div>

              {/* Dispatch Link Overlay */}
              <a
                href={`tel:${loc.phone}`}
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label={`Call ${loc.city}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetLocations;
