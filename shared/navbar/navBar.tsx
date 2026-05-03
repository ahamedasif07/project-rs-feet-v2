"use client";

import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What we offer", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Locations", href: "locations" },
    { name: "Fleet Partner Program", href: "/partner-program" },
  ];

  return (
    <>
      <nav className="w-full bg-[#FCFCFC] backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 ">
          {/* --- Logo Section (Updated for larger size) --- */}
          <div className="">
            <Link href="/" className="transition-opacity block">
              <div className="relative">
                {/* Mobile Logo: 180px width */}
                <div className="block md:hidden">
                  <Image
                    src="/assets/images/IMG_3431-removebg-preview.png"
                    alt="logo"
                    width={180}
                    height={70}
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Desktop Logo: 280px width (Apni ekhane width barale aro boro hobe) */}
                <div className="hidden md:block">
                  <Image
                    src="/assets/images/IMG_3431-removebg-preview.png"
                    alt="logo"
                    width={200}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Back to Original Style */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-semibold text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions - Back to Original Style */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+1 779 770 7575"
                className="animate-ring w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                <PhoneCall size={18} />
              </a>
              <Link href="/contact">
                <button className="bg-primary hover:bg-black text-white px-6 py-3 rounded-md text-xs font-black transition-all duration-300 tracking-widest uppercase">
                  Request A Call
                </button>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={32} />
            </button>
          </div>
        </div>

        {/* --- Mobile Drawer - Back to Original Animations --- */}
        <div
          className={`fixed inset-0 z-[70] lg:hidden transition-all duration-500 ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          />

          <div
            className={`absolute top-0 right-0 h-screen w-[80%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col`}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-50">
              <span className="font-bold text-gray-400 tracking-widest text-xs">
                MENU
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-4 text-base font-semibold text-gray-800 border-b border-gray-50 hover:text-primary transition-all duration-300 transform ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <div
                className={`mt-8 space-y-6 transition-all duration-500 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
              >
                <Link href="/contact">
                  <button className="w-full bg-black hover:bg-primary text-white py-4 rounded-md text-xs font-black tracking-widest uppercase shadow-lg transition-all">
                    Request A Call
                  </button>
                </Link>
                <div className="flex items-center justify-center gap-3 text-gray-500">
                  <PhoneCall size={18} className="text-primary" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes ring {
            0%,
            100% {
              transform: rotate(0);
            }
            15% {
              transform: rotate(-15deg);
            }
            30% {
              transform: rotate(15deg);
            }
            45% {
              transform: rotate(-15deg);
            }
            60% {
              transform: rotate(15deg);
            }
            75% {
              transform: rotate(0);
            }
          }
          .animate-ring {
            animation: ring 2s infinite;
          }
        `}</style>
      </nav>

      {/* Adjusted Spacer for larger logo height */}
      <div className="h-24 md:h-32 w-full"></div>
    </>
  );
};

export default Navbar;
