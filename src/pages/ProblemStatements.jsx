import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaLeaf, FaGlobe, FaHeartbeat, FaCode, FaVrCardboard, FaCube } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';

const tracks = [
  {
    id: 'iot',
    title: 'IOT',
    description: 'This interconnection transforms everyday objects into smart devices capable of real-time monitoring, control, and intelligent decision-making across diverse sectors.',
    icon: FaWifi,
  },
  {
    id: 'sustainable',
    title: 'SUSTAINABLE DEVELOPMENT',
    description: 'Holistic approach to progress that meets present needs - economic growth, social equity, and environmental protection - without compromising the ability of future generations to meet theirs.',
    icon: FaLeaf,
  },
  {
    id: 'web3',
    title: 'WEB 3',
    description: 'Web 3 (also known as Web 3.0) is envisioned as a decentralized, user-focused next-generation internet that emphasizes transparency, security, and machine-understandable content underpinned by blockchain.',
    icon: FaGlobe,
  },
  {
    id: 'healthcare',
    title: 'HEALTHCARE',
    description: 'Healthcare is fundamental to sustainable development; it ensures healthy lives and well-being for all (SDG 3), reduces inequalities through equitable access, and fosters resilient, inclusive societies.',
    icon: FaHeartbeat,
  },
  {
    id: 'appdev',
    title: 'APP DEVELOPMENT',
    description: 'Application development is the structured process of designing, building, testing, and deploying software solutions ranging from mobile and web apps to enterprise systems tailored to meet user needs.',
    icon: FaCode,
  },
  {
    id: 'arvr',
    title: 'AR/VR',
    description: 'Augmented Reality (AR) enhances your real-world view by overlaying digital information. Virtual Reality (VR) fully immerses you in a computer-generated environment via headsets and sensors.',
    icon: FaVrCardboard,
  },
  {
    id: 'blockchain',
    title: 'BLOCKCHAIN',
    description: "Blockchain serves as the foundational distributed ledger of Web 3 enabling peer-to-peer transactions without intermediaries, with blockchain's tamper-proof, consensus-driven validation ensuring secure, transparent record-keeping.",
    icon: FaCube,
  },
];

const HexCard = React.forwardRef(({ track, isTop = false }, ref) => {
  const Icon = track.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${isTop ? 'w-[320px] h-[180px]' : 'w-[300px] h-[170px]'} group`}
    >
      {/* Golden Border Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#bf953f] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%)' }}
      />
      {/* Inner Content Layer */}
      <div
        className="absolute inset-[2px] bg-[#0a0015]/95 flex flex-col items-center justify-center p-3 text-center"
        style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%)' }}
      >
        <div className="mb-1 p-2 rounded-full border border-yellow-500/50 text-yellow-400 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-base font-bold text-yellow-400 mb-1 font-serif tracking-wide uppercase">
          {track.title}
        </h3>
        <p className="text-gray-300 text-[9px] leading-tight line-clamp-4 px-4">
          {track.description}
        </p>
      </div>
    </motion.div>
  );
});

const ProblemStatements = () => {
  const containerRef = useRef(null);
  const [lines, setLines] = useState(null);

  // Card refs
  const iotRef = useRef(null);
  const sustainableRef = useRef(null);
  const web3Ref = useRef(null);
  const healthcareRef = useRef(null);
  const appdevRef = useRef(null);
  const arvrRef = useRef(null);
  const blockchainRef = useRef(null);

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current) return;

      const container = containerRef.current.getBoundingClientRect();

      const getPos = (ref) => {
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        return {
          cx: rect.left + rect.width / 2 - container.left,
          cy: rect.top + rect.height / 2 - container.top,
          top: rect.top - container.top,
          bottom: rect.bottom - container.top,
        };
      };

      const iot = getPos(iotRef);
      const sustainable = getPos(sustainableRef);
      const web3 = getPos(web3Ref);
      const healthcare = getPos(healthcareRef);
      const appdev = getPos(appdevRef);
      const arvr = getPos(arvrRef);
      const blockchain = getPos(blockchainRef);

      if (iot && sustainable && web3 && healthcare && appdev && arvr && blockchain) {
        setLines({ iot, sustainable, web3, healthcare, appdev, arvr, blockchain });
      }
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    const timer = setTimeout(updateLines, 500);

    return () => {
      window.removeEventListener('resize', updateLines);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cosmic-900 text-white font-sans overflow-x-hidden">
      <CosmicBackground />
      <Navbar />

      <div className="relative z-10 pt-2 pb-12 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 mb-2 font-serif drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
          >
            CODE VEDA 2.0
          </motion.h1>
          <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </header>

        {/* Cards Container */}
        <div ref={containerRef} className="relative">
          {/* SVG Connecting Lines */}
          {lines && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
              <defs>
                <linearGradient id="gold-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bf953f" />
                  <stop offset="50%" stopColor="#fcf6ba" />
                  <stop offset="100%" stopColor="#bf953f" />
                </linearGradient>
              </defs>

              {/* IOT down to split */}
              <line
                x1={lines.iot.cx}
                y1={lines.iot.bottom}
                x2={lines.iot.cx}
                y2={lines.iot.bottom + 15}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />

              {/* Horizontal line */}
              <line
                x1={lines.sustainable.cx}
                y1={lines.iot.bottom + 15}
                x2={lines.web3.cx}
                y2={lines.iot.bottom + 15}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />

              {/* Left drop to Sustainable */}
              <line
                x1={lines.sustainable.cx}
                y1={lines.iot.bottom + 15}
                x2={lines.sustainable.cx}
                y2={lines.sustainable.top}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />

              {/* Right drop to Web3 */}
              <line
                x1={lines.web3.cx}
                y1={lines.iot.bottom + 15}
                x2={lines.web3.cx}
                y2={lines.web3.top}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />

              {/* Sustainable -> Healthcare */}
              <line
                x1={lines.sustainable.cx}
                y1={lines.sustainable.bottom}
                x2={lines.healthcare.cx}
                y2={lines.healthcare.top}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />

              {/* Web3 -> AppDev */}
              <line
                x1={lines.web3.cx}
                y1={lines.web3.bottom}
                x2={lines.appdev.cx}
                y2={lines.appdev.top}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />

              {/* Healthcare -> AR/VR */}
              <line
                x1={lines.healthcare.cx}
                y1={lines.healthcare.bottom}
                x2={lines.arvr.cx}
                y2={lines.arvr.top}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />

              {/* AppDev -> Blockchain */}
              <line
                x1={lines.appdev.cx}
                y1={lines.appdev.bottom}
                x2={lines.blockchain.cx}
                y2={lines.blockchain.top}
                stroke="url(#gold-line)"
                strokeWidth="2"
              />
            </svg>
          )}

          {/* Cards Layout */}
          <div className="flex flex-col items-center gap-4 relative z-10">
            {/* Row 1: IOT */}
            <div className="flex justify-center">
              <HexCard ref={iotRef} track={tracks[0]} isTop />
            </div>

            {/* Row 2: Sustainable Dev & Web 3 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 w-full">
              <HexCard ref={sustainableRef} track={tracks[1]} />
              <HexCard ref={web3Ref} track={tracks[2]} />
            </div>

            {/* Row 3: Healthcare & App Dev */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 w-full">
              <HexCard ref={healthcareRef} track={tracks[3]} />
              <HexCard ref={appdevRef} track={tracks[4]} />
            </div>

            {/* Row 4: AR/VR & Blockchain */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 w-full">
              <HexCard ref={arvrRef} track={tracks[5]} />
              <HexCard ref={blockchainRef} track={tracks[6]} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProblemStatements;
