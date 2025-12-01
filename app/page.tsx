"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-yellow-50 font-sans selection:bg-yellow-900/50">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? "bg-[#0F0518]/80 backdrop-blur-md border-b border-yellow-500/20" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-yellow-500 font-cinzel">
            CODE<span className="text-yellow-200">VEDA 2.0</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-yellow-100/80">
            <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#" className="text-yellow-400 font-semibold">Prizes</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Sponsors</a>
          </div>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 active:scale-95 font-cinzel">
            Register Now
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-40 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-200 text-sm font-semibold tracking-wide uppercase mb-4 animate-pulse">
            Total Prize Pool: ₹100,000+
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-4 font-cinzel">
            <span className="text-gradient">Hackathon Prizes</span>
          </h1>
          <p className="text-xl text-yellow-100/60 max-w-2xl mx-auto leading-relaxed font-light">
            Compete for glory, gadgets, and cash prizes. Build the future at Code Veda.
          </p>
        </div>

        {/* Podium Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-32 relative">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 relative group">
            <div className="glass-card rounded-3xl p-8 text-center transform transition-all duration-500 hover:-translate-y-2 border-t-4 border-gray-400">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 animate-float-delayed">
                <Image
                  src="/assets/silver_trophy.png"
                  alt="Silver Trophy"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-[0_0_15px_rgba(192,192,192,0.5)]"
                />
              </div>
              <div className="mt-16 space-y-2">
                <h2 className="text-2xl font-bold text-gray-300 font-cinzel">2nd Place</h2>
                <div className="text-4xl font-black text-gray-100">₹20,000</div>
                <p className="text-sm text-gray-400 font-medium">+ Swag Kit</p>
                <ul className="mt-6 space-y-2 text-left text-sm text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10">
                  <li className="flex items-center gap-2">✓ Silver Medal</li>
                  <li className="flex items-center gap-2">✓ Premium Subscriptions</li>
                  <li className="flex items-center gap-2">✓ Internship Opportunity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="order-1 md:order-2 relative z-10 group">
            <div className="glass-card rounded-3xl p-10 text-center transform transition-all duration-500 hover:-translate-y-4 border-t-4 border-yellow-500 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
              <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-56 h-56 animate-float">
                <Image
                  src="/assets/gold_trophy.png"
                  alt="Gold Trophy"
                  width={224}
                  height={224}
                  className="object-contain drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
                />
              </div>
              <div className="mt-24 space-y-3">
                <h2 className="text-3xl font-bold text-yellow-400 font-cinzel">1st Place</h2>
                <div className="text-6xl font-black text-yellow-300">₹50,000</div>
                <p className="text-base text-yellow-200/80 font-medium">+ Ultimate Swag Kit</p>
                <ul className="mt-8 space-y-3 text-left text-sm text-yellow-100/80 bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/20">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">★</span> Gold Medal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">★</span> Job Interview
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">★</span> Tech Gadgets Bundle
                  </li>
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black py-3 rounded-xl font-bold transition-all shadow-lg shadow-yellow-500/20 font-cinzel">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 relative group">
            <div className="glass-card rounded-3xl p-8 text-center transform transition-all duration-500 hover:-translate-y-2 border-t-4 border-orange-400">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 animate-float-delayed">
                <Image
                  src="/assets/bronze_trophy.png"
                  alt="Bronze Trophy"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-[0_0_15px_rgba(205,127,50,0.5)]"
                />
              </div>
              <div className="mt-16 space-y-2">
                <h2 className="text-2xl font-bold text-orange-400 font-cinzel">3rd Place</h2>
                <div className="text-4xl font-black text-orange-200">₹10,000</div>
                <p className="text-sm text-orange-300 font-medium">+ Swag Kit</p>
                <ul className="mt-6 space-y-2 text-left text-sm text-orange-100/70 bg-orange-500/10 p-4 rounded-xl border border-orange-500/20">
                  <li className="flex items-center gap-2">✓ Bronze Medal</li>
                  <li className="flex items-center gap-2">✓ Cloud Credits</li>
                  <li className="flex items-center gap-2">✓ Mentorship Session</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black/40 border-t border-white/10 py-12 text-center text-white/40 text-sm backdrop-blur-sm">
        <p>© 2025 Code Veda 2.0. All rights reserved.</p>
      </footer>
    </div>
  );
}
