import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ============= UPDATED HEADER COMPONENT =============
const UpdatedHeader = () => {
  return (
    <motion.header 
      className="relative z-10 text-center pt-24 pb-6 px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block px-4 py-2 rounded-full border border-yellow-300/40 bg-black/30 backdrop-blur-md text-xs tracking-widest uppercase text-yellow-200/80"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 20px rgba(255,215,0,0.4)",
          borderColor: "rgba(252, 211, 77, 0.6)"
        }}
      >
        Cosmic · Vedic · Code
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide"
      >
        <motion.span 
          className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent inline-block"
          whileHover={{ scale: 1.05 }}
        >
          Why{" "}
        </motion.span>
             <motion.span 
        className="cursor-pointer inline-block font-extrabold text-yellow-300 [text-shadow:0_0_10px_rgba(255,193,7,0.6)] hover:[text-shadow:0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-yellow-300">Code</span>
        <span className="[text-shadow:0_0_10px_rgba(168,85,247,0.6)] hover:[text-shadow:0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300">Veda</span>
      </motion.span>


        <span className="text-cyan-200"> </span>
        <motion.span
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
          className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border-2 border-yellow-400/50 text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-bold"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255,215,0,0.6)",
          }}
        >
          2.0
        </motion.span>
        <motion.span 
          className="text-cyan-200 inline-block"
          whileHover={{ scale: 1.1 }}
        >
          ?
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-3 text-sm sm:text-base text-indigo-200/90 italic"
      >
        आधुनिक तकनीक • वैदिक ज्ञान • दिव्य कॉस्मिक यात्रा
      </motion.p>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-1 text-xs sm:text-sm text-slate-300/80"
      >
        The evolution of modern technology with ancient wisdom, written in the language of stars.
      </motion.p>
    </motion.header>
  );
};

// ============= OPTIMIZED HERO SECTION =============
const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className="relative z-10 max-w-6xl mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Simplified Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, #ffd700 0%, transparent 70%)',
            opacity: 0.15
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            right: '10%',
            top: '20%',
            opacity: 0.1
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Title */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-yellow-400/40 bg-black/40 backdrop-blur-md mb-6 cursor-pointer"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255,215,0,0.3)",
            borderColor: "rgba(252, 211, 77, 0.6)",
          }}
        >
          <HiSparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-yellow-300 font-bold text-lg tracking-wide [text-shadow:0_0_10px_rgba(255,193,7,0.6)] hover:[text-shadow:0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300">
            Why Code<span className="[text-shadow:0_0_10px_rgba(168,85,247,0.6)] hover:[text-shadow:0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300">Veda</span> 2.0?
          </span>
        </motion.div>

        <motion.h2 
          variants={itemVariants} 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%]">
            The Evolution Continues
          </span>
        </motion.h2>

        <motion.p 
          variants={itemVariants} 
          className="text-indigo-200/90 text-base sm:text-lg max-w-3xl mx-auto"
        >
          From a spark of curiosity to a cosmic movement
        </motion.p>
      </motion.div>

      {/* CodeVeda 1.0 Story Card */}
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-br from-black/70 via-purple-950/40 to-black/70 rounded-3xl border-2 border-yellow-500/30 p-6 sm:p-8 backdrop-blur-xl mb-8"
        whileHover={{ 
          y: -5,
          boxShadow: "0 15px 40px rgba(255, 215, 0, 0.2)",
          borderColor: "rgba(251, 191, 36, 0.5)",
        }}
      >
        {/* Version Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/40 mb-6"
          whileHover={{ 
            scale: 1.05,
          }}
        >
          <span className="text-2xl">🌟</span>
          <span className="text-yellow-300 font-bold text-lg">CodeVeda 1.0</span>
          <span className="text-slate-300 text-sm">— The Dawn of the Movement</span>
        </motion.div>

        {/* Story Content */}
        <motion.div 
          className="space-y-4 text-slate-200 leading-relaxed"
        >
          <p className="text-base sm:text-lg">
            Version 1 unleashed <span className="text-yellow-300 font-bold text-xl [text-shadow:0_0_10px_rgba(255,193,7,0.6)] hover:[text-shadow:0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300">7000+</span> registrations, 
            ignited curiosity, and brought together a diverse community of learners, coders, and creators.
          </p>
          <p className="text-base sm:text-lg">
            The overwhelming response proved that the world is ready for something beyond conventional tech — 
            a blend of <span className="sanskrit">Vedic knowledge</span>, cosmic curiosity, and modern computation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            { value: "7000+", label: "Registrations", color: "[text-shadow:0_0_10px_rgba(255,193,7,0.6)] hover:[text-shadow:0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300", icon: "👥" },
            { value: "∞", label: "Possibilities", color: "[text-shadow:0_0_10px_rgba(168,85,247,0.6)] hover:[text-shadow:0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300", icon: "✨" },
            { value: "1", label: "Movement", color: "text-cyan-300", icon: "🌊" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card text-center p-4 rounded-xl bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(255,215,0,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Transition Divider */}
      <motion.div
        variants={itemVariants}
        className="relative my-8"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-yellow-400/20" />
        </div>
        <div className="relative flex justify-center">
          <motion.span 
            className="bg-black/60 px-6 py-2 rounded-full border-2 border-yellow-400/40 text-yellow-300 font-semibold text-sm backdrop-blur-md"
            whileHover={{ 
              scale: 1.05,
            }}
          >
            And thus...
          </motion.span>
        </div>
      </motion.div>
    </motion.section>
  );
};

// ============= CODEVEDA 2.0 ANNOUNCEMENT =============
const CodeVeda2Announcement = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative bg-gradient-to-br from-purple-950/60 via-black/70 to-purple-950/60 rounded-3xl border-2 border-purple-500/40 p-6 sm:p-8 backdrop-blur-xl overflow-hidden group"
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 50px rgba(168, 85, 247, 0.3)",
        borderColor: "rgba(168, 85, 247, 0.6)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/30 to-purple-500/30 border-2 border-yellow-400/50 mb-6"
          whileHover={{ 
            scale: 1.05,
          }}
        >
          <span className="text-3xl">✨</span>
          <span className="text-yellow-300 font-bold text-2xl sm:text-3xl [text-shadow:0_0_10px_rgba(255,193,7,0.6)] hover:[text-shadow:0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300">
            CodeVeda 2.0
          </span>
        </motion.div>

        <motion.div className="space-y-4">
          <motion.h3 
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="[text-shadow:0_0_10px_rgba(255,193,7,0.6)] hover:[text-shadow:0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300">Larger.</span>{' '}
            <span className="[text-shadow:0_0_10px_rgba(168,85,247,0.6)] hover:[text-shadow:0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300">Deeper.</span>{' '}
            <span className="text-cyan-300">More Cosmic.</span>
          </motion.h3>
          
          <motion.p 
            className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            An expanded universe of knowledge where ancient wisdom meets cutting-edge innovation, 
            where every line of code carries the weight of <span className="sanskrit">dharma</span>, 
            and every project becomes a sacred act of creation.
          </motion.p>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 text-black font-bold text-lg shadow-lg transition-all"
            style={{
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a 
              href="https://vision.hack2skill.com/event/codeveda2/?utm_source=google.com&utm_medium=Mohit"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Join the Evolution 
              <span>→</span>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ============= SIMPLIFIED BACKGROUND ANIMATIONS =============
const BackgroundAnimations = ({ mousePos }) => {
  return (
    <>
      {/* Simplified Orbital Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '100px',
              height: '100px',
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(255,215,0,0.1)' : 
                i % 3 === 1 ? 'rgba(168,85,247,0.1)' : 
                'rgba(34,211,238,0.1)'
              } 0%, transparent 70%)`,
              left: '50%',
              top: '50%',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                transform: `translateX(${150 + i * 50}px)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Simple Glow following mouse */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(168,85,247,0.05) 50%, transparent 70%)',
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          opacity: 0.2
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

// ============= CHAPTERS DATA =============
const chapters = [
  {
    title: "आदि पुस्तक: The Genesis",
    sanskrit: "कोडवेद सारः",
    english: "The Essence of CodeVeda",
    content: `
      <p>In the beginning, there was knowledge. And from this knowledge emerged understanding. CodeVeda represents the convergence of ancient Vedic wisdom with modern technological innovation - a new path for those who seek to create with purpose and meaning.</p>
      <p>Like the Vedas, which are repositories of timeless knowledge organized in systematic ways, modern code organizes logic and information to solve problems of our time.</p>
      <div class="border-l-4 border-yellow-400 bg-yellow-400/10 text-yellow-400 transition-all duration-300 hover:bg-yellow-400/20 p-4 my-4">"सत्यं ज्ञानम् अनन्तं ब्रह्म" (Truth, Knowledge, Infinity)</div>
    `
  },
  {
    title: "समारम्भ: The Beginning",
    sanskrit: "आरम्भ ज्ञानम्",
    english: "Origins & Philosophy",
    content: `
      <p>The Vedas, ancient texts from the Indian subcontinent, are organized into four collections, each with its own focus and purpose. Similarly, modern software development follows foundational principles that guide its implementation.</p>
      <p>Just as rishis (sages) received and transmitted Vedic knowledge through careful contemplation and structured organization, developers create systems that organize and process knowledge for the digital age.</p>
      <div class="border-l-4 border-yellow-400 bg-yellow-400/10 text-yellow-400 transition-all duration-300 hover:bg-yellow-400/20 p-4 my-4">"यथा पिण्डे तथा ब्रह्माण्डे" (As in the microcosm, so in the macrocosm)</div>
    `
  },
  {
    title: "चतुर्विध सिद्धान्त: Four Principles",
    sanskrit: "आरम्भ सिद्धान्त",
    english: "Foundational Pillars",
    content: `
      <p>Like the four Vedas (Rigveda, Yajurveda, Samaveda, and Atharvaveda), CodeVeda is built upon four foundational principles:</p>
    `
  },
  {
    title: "वेद चतुष्टय: The Four Pillars",
    sanskrit: "वेद सिद्धान्त",
    english: "Core Principles",
    content: `
      <ul>
        <li><span class="sanskrit">ज्ञान (Jñāna)</span> - Knowledge: The pursuit of understanding through study and exploration</li>
        <li><span class="sanskrit">संरचना (Saṃracanā)</span> - Structure: The organized arrangement of information</li>
        <li><span class="sanskrit">सामंजस्य (Sāmañjasya)</span> - Harmony: Balance between ancient wisdom and modern innovation</li>
        <li><span class="sanskrit">प्रयोग (Prayoga)</span> - Application: Practical implementation of knowledge for the benefit of all</li>
      </ul>
    `
  },
  {
    title: "ज्ञान मार्ग: Path of Knowledge",
    sanskrit: "वेदाङ्ग-विज्ञानयोः समन्वयः",
    english: "Integrating Wisdom & Technology",
    content: `
      <p>Why merge these seemingly disparate domains? The Vedic tradition emphasizes the interconnected nature of all existence - a principle that mirrors modern systems thinking and network theory.</p>
      <div class="border-l-4 border-yellow-400 bg-yellow-400/10 text-yellow-400 transition-all duration-300 hover:bg-yellow-400/20 p-4 my-4">"अहं ब्रह्मास्मि" (I am Brahman/The Infinite Reality)</div>
      <p>This interconnectedness in Vedic philosophy parallels the web of dependencies and relationships in modern software architecture. By approaching technology with Vedic principles, we create more holistic, sustainable, and meaningful solutions.</p>
    `
  },
  {
    title: "प्राचीन पद्धति: Ancient Algorithms",
    sanskrit: "वैदिक-अल्गोरिथम",
    english: "Vedic Computational Methods",
    content: `
      <p>The Vedas contained sophisticated mathematical methods and algorithmic thinking long before modern computing:</p>
      <ul>
        <li>Recursive thinking patterns in Yajurveda</li>
        <li>Pattern recognition methodologies in Rigveda</li>
        <li>Memory optimization techniques in Vedic mathematics</li>
        <li>Modular organization of knowledge components</li>
      </ul>
      <p>These ancient methods inspire new approaches to computational thinking and problem-solving in our digital age.</p>
    `
  },
  {
    title: "सृष्टि संरक्षण: Sustainable Creation",
    sanskrit: "संधारणीय प्रौद्योगिकी",
    english: "Sustainable Technology",
    content: `
      <p>The Vedic principle of harmony with nature guides our approach to creating technology that enhances rather than depletes our world. Technology should be a force for balance, not disruption.</p>
      <div class="border-l-4 border-yellow-400 bg-yellow-400/10 text-yellow-400 transition-all duration-300 hover:bg-yellow-400/20 p-4 my-4">"वसुधैव कुटुम्बकम्" (The world is one family)</div>
      <p>Through CodeVeda, we aim to develop solutions that are not only technically excellent but also ethically sound and environmentally conscious. Our code becomes a form of dharma - righteous action in the world.</p>
    `
  },
  {
    title: "पञ्चमहाभूत: Five Elements",
    sanskrit: "पञ्चतत्त्व-कोडिंग",
    english: "Five Elements of Sustainable Code",
    content: `
      <ul>
        <li><span class="sanskrit">पृथ्वी (Pṛthvī)</span> - Earth: Grounded, stable infrastructure</li>
        <li><span class="sanskrit">जल (Jala)</span> - Water: Adaptable, flowing user experience</li>
        <li><span class="sanskrit">अग्नि (Agni)</span> - Fire: Transformative, powerful processing</li>
        <li><span class="sanskrit">वायु (Vāyu)</span> - Air: Lightweight, efficient delivery</li>
        <li><span class="sanskrit">आकाश (Ākāśa)</span> - Space: Expansive, scalable architecture</li>
      </ul>
    `
  },
  {
    title: "समुदाय शक्ति: Community Power",
    sanskrit: "सङ्घशक्तिः",
    english: "The Strength of Community",
    content: `
      <p>In ancient times, knowledge was preserved and advanced through communities of learning. Similarly, the modern open-source movement thrives on collective contribution and shared discovery.</p>
      <p>CodeVeda builds a community where knowledge flows freely, where diverse perspectives enrich our understanding, and where collaboration leads to innovations that benefit all.</p>
    `
  },
  {
    title: "आचार संहिता: Guiding Ethics",
    sanskrit: "नैतिक सिद्धान्ताः",
    english: "Our Guiding Principles",
    content: `
      <ul>
        <li><span class="sanskrit">सत्य (Satya)</span> - Truth: Honesty in our code and communications</li>
        <li><span class="sanskrit">अहिंसा (Ahiṃsā)</span> - Non-harm: Creating technology that benefits rather than exploits</li>
        <li><span class="sanskrit">अस्तेय (Asteya)</span> - Non-stealing: Respecting intellectual property and giving proper attribution</li>
        <li><span class="sanskrit">दान (Dāna)</span> - Giving: Contributing to open-source and knowledge-sharing</li>
        <li><span class="sanskrit">धी (Dhī)</span> - Wisdom: Making thoughtful decisions about technology's impact</li>
      </ul>
    `
  },
  {
    title: "मार्ग प्रशस्ति: The Path Forward",
    sanskrit: "आगामि मार्गः",
    english: "The Vision Ahead",
    content: `
      <p>CodeVeda isn't just a hackathon—it's a community of thinkers and builders bridging ancient wisdom with future innovation. We invite you to join us in creating technology that reflects the depth and wisdom of our shared human heritage.</p>
      <div class="border-l-4 border-yellow-400 bg-yellow-400/10 text-yellow-400 transition-all duration-300 hover:bg-yellow-400/20 p-4 my-4">"तमसो मा ज्योतिर्गमय" (Lead us from darkness to light)</div>
      <p>Together, we code a more mindful technological future. We blend the best of what has come before with the possibilities that lie ahead.</p>
    `
  },
  {
    title: "यज्ञ: Sacred Creation",
    sanskrit: "सृजन यज्ञ",
    english: "Join The Movement",
    content: `
      <p>A Vedic yajna (ritual sacrifice) was a community gathering for transformation and blessing. CodeVeda is our modern yajna - a coming together to create technology that transforms and blesses our world.</p>
      <p>Bring your skills, your wisdom, and your creative spirit. Join us in this sacred act of creation.</p>
      <div class="join-container">
        <button class="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105" onclick="window.open('https://vision.hack2skill.com/event/codeveda2/?utm_source=google.com&utm_medium=Mohit', '_blank')">Register for CodeVeda 2.0</button>
      </div>
    `
  }
];

const mantras = [
  "ॐ भूर्भुवः स्वः",
  "सत्यमेव जयते",
  "असतो मा सद्गमय",
  "तमसो मा ज्योतिर्गमय",
  "धर्मो रक्षति रक्षितः",
  "अहं ब्रह्मास्मि",
  "वसुधैव कुटुम्बकम्"
];

// ============= MAIN COMPONENT =============
const WhyCodeVeda = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [search, setSearch] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredChapters = useMemo(() => {
    if (!search.trim()) return chapters;
    const q = search.toLowerCase();
    return chapters.filter(
      (ch) =>
        ch.title.toLowerCase().includes(q) ||
        ch.english.toLowerCase().includes(q) ||
        (ch.sanskrit && ch.sanskrit.toLowerCase().includes(q))
    );
  }, [search]);

  useEffect(() => {
    if (!filteredChapters.includes(chapters[currentChapter])) {
      setCurrentChapter(0);
    }
  }, [filteredChapters, currentChapter]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    setMousePos({ x, y });
  };

  const current = chapters[currentChapter];
  const mantraForChapter = mantras[currentChapter % mantras.length];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-6xl [text-shadow:0_0_10px_rgba(255,193,7,0.6)]"
        >
          ✨
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app-container bg-cosmic-900 text-divine-silver min-h-screen flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen text-white relative overflow-x-hidden bg-[linear-gradient(135deg,#140724_0%,#0f0622_50%,#1a0b2e_100%)]"
        onMouseMove={handleMouseMove}
      >
        {/* Starfield Background */}
        <div className="fixed inset-0 pointer-events-none opacity-40 animate-[pulse-glow_4s_ease-in-out_infinite]"
             style={{
               backgroundImage: `
                 radial-gradient(2px 2px at 20% 30%, white, transparent),
                 radial-gradient(2px 2px at 60% 70%, white, transparent),
                 radial-gradient(1px 1px at 50% 50%, white, transparent),
                 radial-gradient(1px 1px at 80% 10%, white, transparent),
                 radial-gradient(2px 2px at 90% 60%, white, transparent),
                 radial-gradient(1px 1px at 33% 80%, white, transparent),
                 radial-gradient(1px 1px at 15% 90%, white, transparent),
                 radial-gradient(2px 2px at 70% 20%, white, transparent)
               `,
               backgroundSize: '200% 200%'
             }}
        />

        {/* Golden Mandala Overlay */}
        <div className="fixed left-1/2 top-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 pointer-events-none z-0 animate-[float_6s_infinite_ease-in-out]"
             style={{
               background: 'radial-gradient(circle, transparent 30%, rgba(255,193,7,.05) 55%, transparent 75%)'
             }}
        />

        {/* Background Animations */}
        <BackgroundAnimations mousePos={mousePos} />

        {/* Main Content Structure */}
        <div className="relative z-10">
          <UpdatedHeader />
          <HeroSection />
          
          {/* CodeVeda 2.0 Announcement Section */}
          <section className="relative z-10 max-w-6xl mx-auto px-4 py-8">
            <CodeVeda2Announcement />
          </section>

          {/* Chapters Section */}
          <motion.main 
            className="relative z-10 max-w-6xl mx-auto px-4 pb-16 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-6 lg:gap-8">
              {/* Sidebar */}
              <motion.aside 
                className="bg-gradient-to-br from-black/60 via-purple-950/30 to-black/60 border-2 border-yellow-500/30 rounded-2xl p-5 backdrop-blur-xl max-h-[75vh] overflow-hidden flex flex-col"
                whileHover={{ 
                  y: -2,
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Search Bar */}
                <motion.div 
                  className="flex items-center gap-2 rounded-xl bg-slate-900/70 border-2 border-slate-600/80 px-3 py-2.5 mb-4 shadow-inner"
                >
                  <FiSearch className="w-5 h-5 text-yellow-300" />
                  <input
                    type="text"
                    placeholder="Search chapters..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent text-sm outline-none text-slate-100 placeholder:text-slate-400"
                  />
                </motion.div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wide text-slate-300/80">
                    अध्याय अनुक्रमणिका • Chapters
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-yellow-300/10 text-yellow-200 border border-yellow-300/30">
                    {currentChapter + 1} / {chapters.length}
                  </span>
                </div>

                {/* Chapter List */}
                <div className="overflow-y-auto pr-2 space-y-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-yellow-400 [&::-webkit-scrollbar-thumb]:to-purple-500">
                  {filteredChapters.map((ch, idx) => {
                    const realIndex = chapters.indexOf(ch);
                    const isActive = realIndex === currentChapter;
                    return (
                      <motion.button
                        key={ch.title + realIndex}
                        onClick={() => setCurrentChapter(realIndex)}
                        className={`w-full text-left rounded-xl px-3 py-3 transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-yellow-400/25 via-yellow-300/15 to-purple-500/20 border-2 border-yellow-300/50 shadow-lg"
                            : "bg-slate-900/40 border-2 border-slate-700/50 hover:border-yellow-200/40 hover:bg-slate-900/70"
                        }`}
                        whileHover={{ 
                          scale: 1.02,
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                              isActive
                                ? "bg-yellow-300 text-slate-900"
                                : "bg-slate-800 text-slate-200"
                            }`}
                          >
                            {realIndex + 1}
                          </span>
                          <div className="min-w-0">
                            <div
                              className={`text-sm font-semibold truncate ${
                                isActive ? "text-yellow-100 [text-shadow:0_0_10px_rgba(255,193,7,0.6)]" : "text-slate-100"
                              }`}
                            >
                              {ch.title}
                            </div>
                            <div className="text-xs text-slate-300 truncate">{ch.english}</div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}

                  {filteredChapters.length === 0 && (
                    <div className="text-sm text-slate-300/80 mt-6 italic text-center p-4 border border-slate-700/50 rounded-lg">
                      No chapter matching <span className="text-yellow-200 font-semibold">"{search}"</span>.
                    </div>
                  )}
                </div>
              </motion.aside>

              {/* Main Content */}
              <motion.section 
                className="relative bg-gradient-to-br from-black/70 via-purple-950/40 to-black/70 rounded-3xl border-2 border-yellow-500/40 backdrop-blur-2xl shadow-2xl overflow-hidden min-h-[60vh] flex flex-col"
                whileHover={{ 
                  y: -2,
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative z-10 px-6 sm:px-8 md:px-10 pt-7 pb-6 flex-1 flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col"
                    >
                      {/* Chapter Header */}
                      <div className="mb-5">
                        <div className="text-sm sm:text-base text-yellow-200 font-semibold tracking-wide mb-1 sanskrit">
                          {current.sanskrit}
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-50 mb-2">
                          {current.title}
                        </h2>
                        <p className="mt-1 text-sm sm:text-base text-indigo-200/90 italic">
                          {current.english}
                        </p>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-yellow-400 [&::-webkit-scrollbar-thumb]:to-purple-500">
                        <div
                          className="text-sm sm:text-base leading-relaxed text-slate-100/90"
                          dangerouslySetInnerHTML={{ __html: current.content }}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation and Mantra */}
                  <div className="mt-5 space-y-4">
                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-slate-300/90 text-sm">
                        <HiSparkles className="w-5 h-5 text-yellow-300" />
                        <span>
                          Chapter{" "}
                          <span className="text-yellow-200 font-semibold">{currentChapter + 1}</span> of{" "}
                          <span className="text-yellow-200 font-semibold">{chapters.length}</span>
                        </span>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <motion.button
                          onClick={() => setCurrentChapter((prev) => (prev > 0 ? prev - 1 : prev))}
                          disabled={currentChapter === 0}
                          className={`px-4 py-2 rounded-full border-2 text-sm transition ${
                            currentChapter === 0
                              ? "border-slate-600 text-slate-500 cursor-not-allowed"
                              : "border-slate-500 text-slate-100 hover:border-yellow-300 hover:text-yellow-200"
                          } bg-slate-900/60`}
                          whileHover={currentChapter !== 0 ? { 
                            scale: 1.05,
                          } : {}}
                        >
                          ← Previous
                        </motion.button>
                        <motion.button
                          onClick={() =>
                            setCurrentChapter((prev) =>
                              prev < chapters.length - 1 ? prev + 1 : prev
                            )
                          }
                          disabled={currentChapter === chapters.length - 1}
                          className={`px-4 py-2 rounded-full text-sm bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 text-slate-900 font-semibold shadow-lg transition ${
                            currentChapter === chapters.length - 1
                              ? "opacity-60 cursor-not-allowed"
                              : ""
                          }`}
                          whileHover={currentChapter !== chapters.length - 1 ? { 
                            scale: 1.05,
                          } : {}}
                        >
                          <span className="flex items-center gap-1">
                            Next 
                            <span>→</span>
                          </span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Mantra Display */}
                    <div className="text-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={mantraForChapter}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="inline-flex items-center px-5 py-2.5 rounded-full bg-yellow-300/10 border-2 border-yellow-300/40 text-sm text-yellow-100 shadow-lg backdrop-blur-sm"
                        >
                          <span className="mr-2 text-yellow-200/90 text-base">✦</span>
                          <span className="font-semibold mr-2 sanskrit">{mantraForChapter}</span>
                          <span className="text-xs text-slate-200/80">• guiding mantra</span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </motion.main>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default WhyCodeVeda;
