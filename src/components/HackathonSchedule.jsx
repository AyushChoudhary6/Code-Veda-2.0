import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HackathonSchedule = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const phases = [
    {
      id: 1,
      date: "29 November, 2025 - 15 February, 2026",
      title: "Registration Phase",
      organization: "Phase 1",
      description1: "Registrations will be open till 15th February 2026",
      description2: "All participants are expected to form teams of 2-4 members",
      description3: "No changes will be allowed in team structure after registration closes",
      tags: ["2-4 Members", "Team Formation"],
      // icon: "📝",
      // achievement: "500+ Teams Registered"
    },
    {
      id: 2,
      date: "TBA",
      title: "PPT Submission",
      organization: "Phase 2",
      description1: "Submit a detailed presentation outlining your project idea, approach, and potential impact",
      description2: "Include your tech stack, implementation strategy, and team member roles",
      description3: "Projects will be evaluated based on innovation, feasibility, and alignment with problem statements",
      tags: ["Planning", "Strategy"],
      icon: "💡",
      achievement: "Ideas Transform Into Innovation"
    },
    {
      id: 3,
      date: "TBA",
      title: "Online Round",
      organization: "Phase 3",
      description1: "Shortlisted teams will participate in virtual coding and development challenges",
      description2: "Demonstrate your technical skills and present project progress to expert judges",
      description3: "Top-performing teams will advance to the grand finale at the offline round",
      tags: ["Development", "Pitching"],
      icon: "⚡",
      achievement: "Where Code Meets Excellence"
    },
    {
      id: 4,
      date: "TBA",
      title: "Final Offline Round",
      organization: "Phase 4",
      description1: "High-intensity in-person hackathon where finalists compete for the championship",
      description2: "Present your fully functional projects, demonstrate live features, and defend your solutions",
      description3: "Network with industry experts, showcase your talent, and compete for exciting prizes!",
      tags: ["Presentation", "Demo"],
      icon: "🏆",
      achievement: "Champions Are Born Here"
    }
  ];

  return (
    <div className="relative z-10">      

      {/* Runic Filter Tabs */}
      <div className="w-full pb-12 overflow-hidden">
        <div className="flex gap-8 animate-scroll-lr whitespace-nowrap w-max py-4">
          {/* FIRST ROW */}
          {['CODE VEDA 2.0', 'GEEK ROOM', 'ADGIPS', 'GEEK ROOM', 'CODE VEDA 2.0', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0', 'WIN', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0'].map((tab, i) => (
            <motion.div
              key={tab + "1"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative px-6 py-2 bg-black/40 backdrop-blur-md border border-yellow-500/30 text-yellow-100/80 font-mono text-sm tracking-widest uppercase clip-path-rune hover:border-yellow-400/60 hover:text-yellow-300 transition-all duration-300">
                {tab}
              </div>
            </motion.div>
          ))}
          {/* DUPLICATED ROW */}
          {['CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0', 'BUILD', 'CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'ADGIPS'].map((tab, i) => (
            <motion.div
              key={tab + "2" + i}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative px-6 py-2 bg-black/40 backdrop-blur-md border border-yellow-500/30 text-yellow-100/80 font-mono text-sm tracking-widest uppercase clip-path-rune hover:border-yellow-400/60 hover:text-yellow-300 transition-all duration-300">
                {tab}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Timeline Container */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-6 pb-20">
        {/* Constellation Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5">
          {/* Background Line (Dashed) */}
          <div className="absolute inset-0 border-l-2 border-dashed border-purple-500/20" />
          
          {/* Active Line (Glowing Beam) */}
          <motion.div
            className="absolute top-0 left-[-1px] w-[3px] bg-gradient-to-b from-yellow-400 via-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
            style={{
              height: "100%",
              scaleY: smoothProgress,
              transformOrigin: 'top',
            }}
          />
        </div>

        {/* Phase Cards */}
        <div className="relative space-y-32">
          {phases.map((phase, index) => (
            <PhaseCard 
              key={phase.id} 
              phase={phase} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PhaseCard = ({ phase, index }) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
    >
      {/* Planetary Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
      >
        <div className="relative w-8 h-8">
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 blur-md"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="absolute inset-1 rounded-full bg-black border-2 border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
          <div className="absolute inset-[6px] rounded-full bg-yellow-200" />
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="hidden md:block w-1/2" />

      {/* Holographic Content Card */}
      <motion.div
        className="w-full md:w-1/2 ml-16 md:ml-0 group"
        whileHover={{ y: -5, scale: 1.01 }}
      >
        <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-yellow-500/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          
          {/* Cosmic Glow Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Date Header */}
          <div className="relative bg-white/5 border-b border-white/5 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{phase.icon}</span>
              <span className="font-mono text-yellow-100/90 text-sm tracking-wide">{phase.date}</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs text-purple-200">
              {phase.organization}
            </div>
          </div>

          {/* Card Content */}
          <div className="relative p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              {phase.title}
            </h3>
            
            <div className="space-y-3 mb-6 text-slate-300/80 text-sm sm:text-base leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">›</span>
                {phase.description1}
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">›</span>
                {phase.description2}
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">›</span>
                {phase.description3}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {phase.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 text-cyan-200/80 rounded-md text-xs border border-white/10 font-mono hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Achievement Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                <span className="text-yellow-400 text-sm">🏆</span>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Milestone</div>
                <div className="text-sm text-yellow-100/90 font-medium">{phase.achievement}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HackathonSchedule;
