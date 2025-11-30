'use client';

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const CosmicSponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [brahmaSponsors, setBrahmaSponsors] = useState([]);
  const [vishnuSponsors, setVishnuSponsors] = useState([]);
  const [shivaSponsors, setShivaSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        const response = await fetch('/data/sponsor.json');
        const data = await response.json();
        const allSponsors = data.flatMap(tier =>
          tier.sponsors.map(sponsor => ({ ...sponsor, tier: tier.tier }))
        );
        setSponsors(allSponsors);
        setBrahmaSponsors(data.find(t => t.tier === "Brahma Tier")?.sponsors || []);
        setVishnuSponsors(data.find(t => t.tier === "Vishnu Tier")?.sponsors || []);
        setShivaSponsors(data.find(t => t.tier === "Shiva Tier")?.sponsors || []);
      } catch (error) {
        console.log("API fetch failed", error);
      }
    };
    fetchSponsor();
  }, []);

  // Cosmic animations
  const cosmicContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cosmicItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cosmicHeader = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 70
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-cosmic">
      {/* Animated starfield background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-cosmic-stars opacity-80"></div>
        {/* Animated nebula gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-nebula-purple via-cosmic-deep to-cosmic-nebula-blue opacity-40 animate-pulse"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cosmicHeader}
          className="relative py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-gold to-transparent opacity-20"></div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-cosmic-gold drop-shadow-2xl relative z-10 tracking-wider">
            Our Cosmic Sponsors
          </h1>
          <p className="mt-4 md:mt-6 text-cosmic-gold/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Sacred partners who illuminate our journey through the cosmos
          </p>

          {/* Radiant glow effect */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-cosmic-gold rounded-full filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cosmic-nebula-purple rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full py-8 md:py-12 my-8 md:my-12 border-y-2 border-cosmic-gold/30 backdrop-blur-sm"
        >
          <Marquee speed={60} gradient={false} pauseOnHover={false}>
            {sponsors.map((all, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="h-80 w-72 m-4 rounded-xl overflow-hidden transition-transform duration-300 cursor-pointer relative group"
              >
                {/* Cosmic card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cosmic-gold/10 via-cosmic-nebula-blue/10 to-cosmic-nebula-purple/10 border border-cosmic-gold/30"></div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-gold to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative h-full w-full p-4 flex flex-col justify-center items-center">
                  <div className="text-center lg:text-lg my-5 font-bold text-cosmic-gold px-3 py-2 rounded-lg bg-cosmic-deep/60 backdrop-blur border border-cosmic-gold/40">
                    {all.tier}
                  </div>

                  <div className="h-[50%] w-[58%] py-5 flex flex-col gap-2">
                    <div className="h-[70%] w-full rounded-md overflow-hidden bg-cosmic-deep/40 border border-cosmic-gold/20">
                      <img
                        src={all.logo || "/placeholder.svg"}
                        className={`h-full w-full transition-transform duration-300 ${all.name === "Endless Domains" ? "object-cover scale-150 group-hover:scale-[1.65]" : "object-contain group-hover:scale-110"}`}
                        alt={all.name}
                      />
                    </div>
                    <div className="h-[30%] w-full text-center font-bold lg:text-sm text-cosmic-gold/90">
                      {all.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Royal Tiers Section */}
        <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cosmicHeader}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cosmic-gold relative z-10 px-6 md:px-8">
                The Divine Tiers
              </h2>
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 h-1 md:h-2 w-32 md:w-48 bg-gradient-to-r from-cosmic-gold via-cosmic-nebula-blue to-cosmic-gold"></div>
            </div>
            <p className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg text-cosmic-gold/70 max-w-3xl md:max-w-4xl mx-auto">
              Honored celestial partners who guide our voyage through innovation
            </p>
          </motion.div>

          {/* Brahma Tier */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-100px" }}
            variants={cosmicContainer}
            className="mb-16 md:mb-20 lg:mb-28"
          >
            <div className="relative mb-8 md:mb-12">
              <motion.div animate={floatingAnimation.animate} className="absolute -left-4 md:-left-8 top-0 h-16 w-16 md:h-20 md:w-20">
                <div className="h-full w-full bg-cosmic-gold rounded-full flex items-center justify-center shadow-2xl shadow-cosmic-gold/50 backdrop-blur">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-cosmic-deep" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </motion.div>

              <div className="ml-20 md:ml-28 pl-6 md:pl-8 border-l-4 border-cosmic-gold/50">
                <motion.h3 variants={cosmicItem} className="text-2xl md:text-3xl lg:text-4xl font-bold text-cosmic-gold mb-2 md:mb-3">
                  Brahma Tier
                </motion.h3>
                <motion.p variants={cosmicItem} className="text-sm md:text-base lg:text-lg text-cosmic-gold/80 italic">
                  Principal celestial partners who fuel our cosmic journey.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={cosmicContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            >
              {brahmaSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={cosmicItem}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                  className="group relative rounded-2xl overflow-hidden backdrop-blur-md border-2 border-cosmic-gold/40 bg-cosmic-deep/40 hover:border-cosmic-gold/70 transition-all duration-300"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-gold via-cosmic-nebula-blue to-cosmic-gold opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 rounded-2xl blur"></div>

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cosmic-gold to-transparent opacity-50"></div>

                  <div className="absolute -top-1 -right-1 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 z-10 bg-cosmic-gold rounded-full flex items-center justify-center shadow-lg shadow-cosmic-gold/50">
                    <span className="text-xs md:text-sm lg:text-base font-bold text-cosmic-deep">{index + 1}</span>
                  </div>

                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="p-4 md:p-6 lg:p-8 h-56 md:h-64 lg:h-72 flex items-center justify-center relative">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-gold/5 to-cosmic-nebula-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        className="max-h-full max-w-full object-contain transform transition-transform duration-300 group-hover:scale-110 relative z-10"
                        alt={sponsor.name}
                      />
                    </div>
                    <div className="bg-gradient-to-r from-cosmic-deep to-cosmic-deep/80 p-4 md:p-5 lg:p-6 text-center border-t border-cosmic-gold/30">
                      <p className="text-sm md:text-base lg:text-lg font-bold text-cosmic-gold">{sponsor.name}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Vishnu Tier */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-100px" }}
            variants={cosmicContainer}
            className="mb-16 md:mb-20 lg:mb-28"
          >
            <div className="relative mb-8 md:mb-12">
              <motion.div animate={floatingAnimation.animate} className="absolute -left-4 md:-left-8 top-0 h-16 w-16 md:h-20 md:w-20">
                <div className="h-full w-full bg-cosmic-nebula-blue rounded-full flex items-center justify-center shadow-2xl shadow-cosmic-nebula-blue/50 backdrop-blur">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-cosmic-deep" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>

              <div className="ml-20 md:ml-28 pl-6 md:pl-8 border-l-4 border-cosmic-nebula-blue/50">
                <motion.h3 variants={cosmicItem} className="text-2xl md:text-3xl lg:text-4xl font-bold text-cosmic-nebula-blue mb-2 md:mb-3">
                  Vishnu Tier
                </motion.h3>
                <motion.p variants={cosmicItem} className="text-sm md:text-base lg:text-lg text-cosmic-nebula-blue/80 italic">
                  Radiant guardians sustaining our innovation ecosystem.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={cosmicContainer}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            >
              {vishnuSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={cosmicItem}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(100, 150, 200, 0.3)" }}
                  className="group relative rounded-2xl overflow-hidden backdrop-blur-md border-2 border-cosmic-nebula-blue/40 bg-cosmic-deep/40 hover:border-cosmic-nebula-blue/70 transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-nebula-blue via-cosmic-gold to-cosmic-nebula-purple opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 rounded-2xl blur"></div>

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cosmic-nebula-blue to-transparent opacity-50"></div>

                  <div className="absolute -top-1 -right-1 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 z-10 bg-cosmic-nebula-blue rounded-full flex items-center justify-center shadow-lg shadow-cosmic-nebula-blue/50">
                    <span className="text-xs md:text-sm lg:text-base font-bold text-cosmic-deep">{index + 1}</span>
                  </div>

                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="p-4 md:p-6 lg:p-8 h-56 md:h-64 lg:h-72 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-nebula-blue/5 to-cosmic-nebula-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        className={`${sponsor.name === "Endless Domains" ? "h-full w-full object-cover scale-150 group-hover:scale-[1.65]" : "max-h-full max-w-full object-contain group-hover:scale-110"} transform transition-transform duration-300 relative z-10`}
                        alt={sponsor.name}
                      />
                    </div>
                    <div className="bg-gradient-to-r from-cosmic-deep to-cosmic-deep/80 p-4 md:p-5 lg:p-6 text-center border-t border-cosmic-nebula-blue/30">
                      <p className="text-sm md:text-base lg:text-lg font-bold text-cosmic-nebula-blue">{sponsor.name}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Shiva Tier */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-100px" }}
            variants={cosmicContainer}
            className="mb-16 md:mb-20 lg:mb-28"
          >
            <div className="relative mb-8 md:mb-12">
              <motion.div animate={floatingAnimation.animate} className="absolute -left-4 md:-left-8 top-0 h-16 w-16 md:h-20 md:w-20">
                <div className="h-full w-full bg-cosmic-nebula-purple rounded-full flex items-center justify-center shadow-2xl shadow-cosmic-nebula-purple/50 backdrop-blur">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-cosmic-deep" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </motion.div>

              <div className="ml-20 md:ml-28 pl-6 md:pl-8 border-l-4 border-cosmic-nebula-purple/50">
                <motion.h3 variants={cosmicItem} className="text-2xl md:text-3xl lg:text-4xl font-bold text-cosmic-nebula-purple mb-2 md:mb-3">
                  Shiva Tier
                </motion.h3>
                <motion.p variants={cosmicItem} className="text-sm md:text-base lg:text-lg text-cosmic-nebula-purple/80 italic">
                  Honored contributors weaving cosmic energy into our mission.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={cosmicContainer}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            >
              {shivaSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={cosmicItem}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(150, 100, 150, 0.3)" }}
                  className="group relative rounded-2xl overflow-hidden backdrop-blur-md border-2 border-cosmic-nebula-purple/40 bg-cosmic-deep/40 hover:border-cosmic-nebula-purple/70 transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-nebula-purple via-cosmic-gold to-cosmic-nebula-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 rounded-2xl blur"></div>

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cosmic-nebula-purple to-transparent opacity-50"></div>

                  <div className="absolute -top-1 -right-1 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 z-10 bg-cosmic-nebula-purple rounded-full flex items-center justify-center shadow-lg shadow-cosmic-nebula-purple/50">
                    <span className="text-xs md:text-sm lg:text-base font-bold text-cosmic-deep">{index + 1}</span>
                  </div>

                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="p-4 md:p-6 lg:p-8 h-48 md:h-56 lg:h-64 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-nebula-purple/5 to-cosmic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        className="max-h-full max-w-full object-contain transform transition-transform duration-300 group-hover:scale-110 relative z-10"
                        alt={sponsor.name}
                      />
                    </div>
                    <div className="bg-gradient-to-r from-cosmic-deep to-cosmic-deep/80 p-4 md:p-5 lg:p-6 text-center border-t border-cosmic-nebula-purple/30">
                      <p className="text-sm md:text-base lg:text-lg font-bold text-cosmic-nebula-purple">{sponsor.name}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Why Sponsor Us - Cosmic Call */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-16 md:mt-20 lg:mt-28"
          >
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cosmic-gold px-6">
                Why Join Our Cosmos
              </h2>
              <div className="h-1 md:h-2 w-32 md:w-48 bg-gradient-to-r from-cosmic-gold via-cosmic-nebula-blue to-cosmic-nebula-purple mx-auto mt-6"></div>
              <p className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg text-cosmic-gold/70 max-w-3xl mx-auto">
                Illuminate the path forward and align with innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group backdrop-blur-md bg-cosmic-deep/40 border-2 border-cosmic-gold/30 hover:border-cosmic-gold/60 p-6 md:p-8 lg:p-10 rounded-2xl transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-gold via-cosmic-nebula-blue to-cosmic-nebula-purple opacity-0 group-hover:opacity-20 rounded-2xl blur -z-10"></div>

                <div className="text-sm md:text-base lg:text-lg space-y-4 md:space-y-6">
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-cosmic-gold leading-relaxed">
                    Sponsoring us transcends traditional partnership. It is a sacred alignment with a mission of cosmic significance, connecting your brand to a vibrant community of innovators and dreamers.
                  </p>
                  <p className="text-cosmic-gold/80 leading-relaxed">
                    Gain celestial visibility, strengthen connections with your audience, and be remembered as a brand that dared to dream beyond the ordinary. Your support becomes our collective triumph.
                  </p>
                  <a href="https://forms.gle/FmU2ktDsAoLFFFGMA" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-cosmic-gold to-cosmic-gold/80 text-cosmic-deep font-bold rounded-lg hover:shadow-2xl hover:shadow-cosmic-gold/50 transition-all duration-300 transform"
                    >
                      Begin Your Journey
                    </motion.button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-cosmic-gold/40 shadow-2xl shadow-cosmic-gold/20 relative group"
              >
                <img
                  src="/placeholder.svg?key=gicyk"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  alt="Cosmic Divine Energy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deep via-transparent to-transparent opacity-50"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CosmicSponsors;
