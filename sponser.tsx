"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { Github, Twitter, Linkedin, Instagram, Sun, Cloud, Moon } from "lucide-react"

interface Sponsor {
  name: string
  logo: string
  website: string
  tier: "Brahma Tier" | "Vishnu Tier" | "Shiva Tier"
}

interface TierData {
  tier: "Brahma Tier" | "Vishnu Tier" | "Shiva Tier"
  sponsors: Sponsor[]
}

const sponsorData: TierData[] = [
  {
    tier: "Brahma Tier",
    sponsors: [
      {
        name: "Galactic Enterprises",
        logo: "https://static.photos/technology/320x240/1",
        website: "#",
        tier: "Brahma Tier",
      },
      {
        name: "Cosmic Solutions",
        logo: "https://static.photos/technology/320x240/2",
        website: "#",
        tier: "Brahma Tier",
      },
      {
        name: "Nebula Networks",
        logo: "https://static.photos/technology/320x240/3",
        website: "#",
        tier: "Brahma Tier",
      },
    ],
  },
  {
    tier: "Vishnu Tier",
    sponsors: [
      {
        name: "Stellar Systems",
        logo: "https://static.photos/technology/320x240/4",
        website: "#",
        tier: "Vishnu Tier",
      },
      {
        name: "Orbit Innovations",
        logo: "https://static.photos/technology/320x240/5",
        website: "#",
        tier: "Vishnu Tier",
      },
      { name: "Astro Ventures", logo: "https://static.photos/technology/320x240/6", website: "#", tier: "Vishnu Tier" },
      { name: "Quantum Leap", logo: "https://static.photos/technology/320x240/7", website: "#", tier: "Vishnu Tier" },
    ],
  },
  {
    tier: "Shiva Tier",
    sponsors: [
      { name: "Meteor Labs", logo: "https://static.photos/technology/320x240/8", website: "#", tier: "Shiva Tier" },
      { name: "Pulsar Tech", logo: "https://static.photos/technology/320x240/9", website: "#", tier: "Shiva Tier" },
      {
        name: "Comet Creations",
        logo: "https://static.photos/technology/320x240/10",
        website: "#",
        tier: "Shiva Tier",
      },
      { name: "Black Hole Inc", logo: "https://static.photos/technology/320x240/11", website: "#", tier: "Shiva Tier" },
      {
        name: "Supernova Group",
        logo: "https://static.photos/technology/320x240/12",
        website: "#",
        tier: "Shiva Tier",
      },
    ],
  },
]

interface TierConfig {
  icon: React.ComponentType<{ className?: string }>
  gradientFrom: string
  gradientTo: string
  textColor: string
  badgeGradient: string
  descriptionColor: string
}

const tierConfig: Record<"Brahma Tier" | "Vishnu Tier" | "Shiva Tier", TierConfig> = {
  "Brahma Tier": {
    icon: Sun,
    gradientFrom: "from-yellow-500",
    gradientTo: "to-yellow-700",
    textColor: "text-yellow-400",
    badgeGradient: "from-yellow-500 to-yellow-700",
    descriptionColor: "text-yellow-200",
  },
  "Vishnu Tier": {
    icon: Cloud,
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
    textColor: "text-blue-400",
    badgeGradient: "from-blue-500 to-blue-700",
    descriptionColor: "text-blue-200",
  },
  "Shiva Tier": {
    icon: Moon,
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-700",
    textColor: "text-purple-400",
    badgeGradient: "from-purple-500 to-purple-700",
    descriptionColor: "text-purple-200",
  },
}

const tierDescriptions: Record<"Brahma Tier" | "Vishnu Tier" | "Shiva Tier", string> = {
  "Brahma Tier": "Creators of our cosmic reality",
  "Vishnu Tier": "Sustainers of our galactic balance",
  "Shiva Tier": "Transformers of cosmic energy",
}

export default function Home() {
  const [stars, setStars] = useState<
    Array<{ id: number; left: number; top: number; size: number; opacity: number; delay: number }>
  >([])
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create stars
    const newStars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrollY(scrollTop)

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / docHeight
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const allSponsors = sponsorData.flatMap((tier) => tier.sponsors)
  const marqueeSponsors = [...allSponsors, ...allSponsors]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes cosmic-arch-glow {
          0% { 
            box-shadow: 0 0 15px rgba(218, 165, 32, 0.2), 
                        inset 0 0 15px rgba(218, 165, 32, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(218, 165, 32, 0.4), 
                        inset 0 0 25px rgba(218, 165, 32, 0.2);
          }
          100% { 
            box-shadow: 0 0 15px rgba(218, 165, 32, 0.2), 
                        inset 0 0 15px rgba(218, 165, 32, 0.1);
          }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes cosmic-border {
          0% { 
            border-color: rgba(255, 194, 14, 0.1);
            box-shadow: 0 0 10px rgba(255, 194, 14, 0.1);
          }
          50% { 
            border-color: rgba(255, 194, 14, 0.4);
            box-shadow: 0 0 20px rgba(255, 194, 14, 0.3);
          }
          100% { 
            border-color: rgba(255, 194, 14, 0.1);
            box-shadow: 0 0 10px rgba(255, 194, 14, 0.1);
          }
        }

        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 194, 14, 0.3)); }
          50% { filter: drop-shadow(0 0 15px rgba(255, 194, 14, 0.6)); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .marquee-track {
          animation: marquee 30s linear infinite;
        }

        .marquee-item {
          transition: all 0.3s ease;
        }

        .marquee-item-container {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: visible;
          animation: cosmic-arch-glow 4s ease-in-out infinite;
        }

        .arch-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 40px 40px 15px 15px;
          border: 3px solid rgba(218, 165, 32, 0.4);
          overflow: hidden;
          background: radial-gradient(ellipse at center, rgba(30, 20, 60, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
          box-shadow: 0 0 20px rgba(218, 165, 32, 0.2), inset 0 0 20px rgba(218, 165, 32, 0.1);
        }

        .arch-frame::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 20px;
          border: 3px solid rgba(218, 165, 32, 0.4);
          border-bottom: none;
          border-radius: 50% 50% 0 0;
          box-shadow: 0 0 15px rgba(218, 165, 32, 0.3), inset 0 0 10px rgba(218, 165, 32, 0.1);
        }

        .arch-frame::after {
          content: '';
          position: absolute;
          top: 12px;
          right: 15px;
          width: 10px;
          height: 10px;
          background: rgba(218, 165, 32, 0.7);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation: sparkle 3s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(218, 165, 32, 0.6);
        }

        .arch-frame-left::before {
          content: '';
          position: absolute;
          top: 12px;
          left: 15px;
          width: 10px;
          height: 10px;
          background: rgba(218, 165, 32, 0.7);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation: sparkle 3s ease-in-out infinite 1s;
          box-shadow: 0 0 8px rgba(218, 165, 32, 0.6);
          z-index: 10;
        }

        .marquee-item:hover .arch-frame {
          transform: scale(1.1) translateY(-8px);
          animation: cosmic-arch-glow 1.5s ease-in-out infinite;
          border-color: rgba(218, 165, 32, 0.7);
          box-shadow: 0 0 40px rgba(218, 165, 32, 0.5), inset 0 0 30px rgba(218, 165, 32, 0.3);
        }

        .arch-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 12px;
          filter: brightness(1.1) contrast(1.1);
        }

        .sponsor-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 194, 14, 0.2);
          transition: all 0.3s ease;
          animation: cosmic-border 3s ease-in-out infinite;
          position: relative;
        }

        .sponsor-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, 
            transparent 0%,
            rgba(255, 194, 14, 0.1) 25%,
            transparent 50%,
            rgba(59, 130, 246, 0.1) 75%,
            transparent 100%
          );
          background-size: 200% 200%;
          animation: shimmer 3s linear infinite;
          pointer-events: none;
        }

        .sponsor-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 194, 14, 0.3);
          border-color: rgba(255, 194, 14, 0.5);
          animation: cosmic-border 1.5s ease-in-out infinite;
        }

        .sponsor-card-animated {
          animation: float 6s ease-in-out infinite;
        }

        .cosmic-title {
          position: relative;
          display: inline-block;
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animation: `pulse-slow ${3 + star.delay}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1470&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.7,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1470&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.5,
            mixBlendMode: "screen",
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1470&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.4,
            mixBlendMode: "overlay",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        <div
          className="absolute inset-0 bg-gradient-radial"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(30, 58, 138, 0.15), rgba(88, 28, 135, 0.15))",
            transform: `translateY(${scrollY * 0.25}px)`,
          }}
        />
      </div>

      <div className="relative bg-black/40 text-white min-h-screen" ref={containerRef}>
        <header className="relative py-12 px-4 sm:px-6 lg:px-8 text-center backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 mb-4 cosmic-title">
            Our Cosmic Sponsors
          </h1>
          <p className="text-lg md:text-xl text-yellow-300 max-w-3xl mx-auto">
            Celestial beings supporting our galactic journey
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </header>

        <div className="relative py-8 overflow-hidden border-y border-yellow-500/20 backdrop-blur-sm">
          <div className="flex w-full overflow-hidden">
            <div className="marquee-track flex w-full">
              {marqueeSponsors.map((sponsor, index) => (
                <div key={index} className="mx-4 w-56 flex-shrink-0 marquee-item">
                  <div className="marquee-item-container arch-frame-left">
                    <div className="arch-frame">
                      <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="arch-image" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          {sponsorData.map((tierData) => {
            const config = tierConfig[tierData.tier]
            const Icon = config.icon

            return (
              <section key={tierData.tier} className="mb-20">
                <div className="flex items-center mb-8">
                  <div
                    className={`h-16 w-16 rounded-full bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} flex items-center justify-center mr-6 shadow-lg animate-pulse`}
                  >
                    <Icon className="text-2xl text-white" size={32} />
                  </div>
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-bold ${config.textColor} cosmic-title`}>
                      {tierData.tier}
                    </h2>
                    <p className={config.descriptionColor + " italic"}>{tierDescriptions[tierData.tier]}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierData.sponsors.map((sponsor, index) => (
                    <div
                      key={`${tierData.tier}-${index}`}
                      className="sponsor-card rounded-xl overflow-hidden shadow-lg relative sponsor-card-animated group backdrop-blur-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} opacity-5 group-hover:opacity-15 transition-opacity duration-300 z-0`}
                      />

                      <div
                        className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${config.badgeGradient} text-white flex items-center justify-center font-bold text-sm z-20 shadow-lg glow-pulse`}
                      >
                        {index + 1}
                      </div>

                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full relative z-10"
                      >
                        <div className="p-6 h-48 flex items-center justify-center">
                          <img
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={sponsor.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 brightness-110"
                          />
                        </div>
                        <div className="p-4 bg-gradient-to-r from-black/70 to-black/50 border-t border-gray-800 group-hover:from-black/90 group-hover:to-black/70 transition-colors duration-300">
                          <h3 className="text-lg font-bold text-center text-yellow-300 group-hover:text-yellow-200 transition-colors">
                            {sponsor.name}
                          </h3>
                          <p className="text-xs text-center text-gray-400 mt-1">{tierData.tier}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-title">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Become a Sponsor
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join our cosmic community and showcase your brand alongside industry leaders. Support innovation and gain
              visibility in the tech ecosystem.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg glow-pulse">
              Become a Sponsor
            </button>
          </div>
        </section>

        <footer className="relative py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-yellow-500/10 backdrop-blur-sm">
          <p className="text-gray-400">© 2025 Cosmic Sponsors. All celestial rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Github className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
          </div>
        </footer>
      </div>
    </>
  )
}
