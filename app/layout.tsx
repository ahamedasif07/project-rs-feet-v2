import Footer from "@/shared/footer/footer";
import Navbar from "@/shared/navbar/navBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RS Fleet",
  description: "Rapid Solution Fleet Services - Keeping your business moving.",
  keywords: [
    "RS Fleet",
    "Rapid Solution Fleet Services",
    "Fleet Services",
    "Truck Services",
    "Vehicle Services",
    "Fleet Management",
    "Fleet Maintenance",
    "Fleet Repair",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
