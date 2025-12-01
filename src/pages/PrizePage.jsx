import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrizePage = () => {
  return (
    <div className="min-h-screen bg-cosmic-900 text-divine-silver">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-32 space-y-4 md:space-y-6">
          <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-200 text-xs md:text-sm font-semibold tracking-wide uppercase mb-2 md:mb-4 animate-pulse">
            Total Prize Pool: TBA
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-2 md:mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent px-4">
            Hackathon Prizes
          </h1>
          <p className="text-base md:text-xl text-yellow-100/60 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Compete for glory, gadgets, and cash prizes. Build the future at Code Veda.
          </p>
        </div>

        {/* Podium Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-end mb-16 md:mb-32 relative">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 relative group">
            <div className="glass-card rounded-3xl p-6 md:p-8 text-center transform transition-all duration-500 hover:-translate-y-2 border-t-4 border-gray-400 bg-cosmic-800/50 backdrop-blur-sm border border-gray-400/20">
              <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 animate-float-delayed">
                <img
                  src="/assets/silver_trophy.png"
                  alt="Silver Trophy"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(192,192,192,0.5)]"
                />
              </div>
              <div className="mt-12 md:mt-16 space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-300">2nd Place</h2>
                <div className="text-3xl md:text-4xl font-black text-gray-100">TBA</div>
                <ul className="mt-4 md:mt-6 space-y-2 text-left text-xs md:text-sm text-gray-300 bg-white/5 p-3 md:p-4 rounded-xl border border-white/10">
                  <li className="flex items-center gap-2">✓ Other Exciting Stuff</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="order-1 md:order-2 relative z-10 group">
            <div className="glass-card rounded-3xl p-8 md:p-10 text-center transform transition-all duration-500 hover:-translate-y-4 border-t-4 border-yellow-500 bg-cosmic-800/60 backdrop-blur-sm border border-yellow-500/30 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
              <div className="absolute -top-20 md:-top-28 left-1/2 -translate-x-1/2 w-44 h-44 md:w-56 md:h-56 animate-float">
                <img
                  src="/assets/gold_trophy.png"
                  alt="Gold Trophy"
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
                />
              </div>
              <div className="mt-16 md:mt-24 space-y-2 md:space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">1st Place</h2>
                <div className="text-4xl md:text-6xl font-black text-yellow-300">TBA</div>
                <ul className="mt-6 md:mt-8 space-y-2 md:space-y-3 text-left text-xs md:text-sm text-yellow-100/80 bg-yellow-500/10 p-4 md:p-6 rounded-xl border border-yellow-500/20">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">★</span> Other Exciting Stuff
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 relative group">
            <div className="glass-card rounded-3xl p-6 md:p-8 text-center transform transition-all duration-500 hover:-translate-y-2 border-t-4 border-orange-400 bg-cosmic-800/50 backdrop-blur-sm border border-orange-400/20">
              <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 animate-float-delayed">
                <img
                  src="/assets/bronze_trophy.png"
                  alt="Bronze Trophy"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(205,127,50,0.5)]"
                />
              </div>
              <div className="mt-12 md:mt-16 space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-orange-400">3rd Place</h2>
                <div className="text-3xl md:text-4xl font-black text-orange-200">TBA</div>
                <ul className="mt-4 md:mt-6 space-y-2 text-left text-xs md:text-sm text-orange-100/70 bg-orange-500/10 p-3 md:p-4 rounded-xl border border-orange-500/20">
                  <li className="flex items-center gap-2">✓ Other Exciting Stuff</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Prizes Section */}
        {/* <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Special Category Prizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cosmic-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Best Innovation</h3>
              <p className="text-3xl font-black text-purple-300 mb-2">₹5,000</p>
              <p className="text-sm text-gray-400">For the most innovative solution</p>
            </div>
            <div className="bg-cosmic-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Best Design</h3>
              <p className="text-3xl font-black text-blue-300 mb-2">₹5,000</p>
              <p className="text-sm text-gray-400">For outstanding UI/UX design</p>
            </div>
            <div className="bg-cosmic-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all">
              <h3 className="text-xl font-bold text-green-400 mb-2">Best Tech Stack</h3>
              <p className="text-3xl font-black text-green-300 mb-2">₹5,000</p>
              <p className="text-sm text-gray-400">For best use of technology</p>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  )
}

export default PrizePage
