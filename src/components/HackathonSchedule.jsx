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
      date: "Jul 1, 2025 - Aug 20, 2025",
      title: "Registration Phase",
      organization: "Phase 1",
      description1: "Registrations will be open till 20th August 2025",
      description2: "All participants are expected to form teams of 2-4 members",
      description3: "No changes will be allowed in team structure after registration closes",
      tags: ["2-4 Members", "Online"],
      icon: "📝",
      achievement: "500+ Teams Registered"
    },
    {
      id: 2,
      date: "Aug 2, 2025 - Aug 25, 2025",
      title: "PPT Submission",
      organization: "Phase 2",
      description1: "PPT submission starts on 15th July 2025",
      description2: "Deadline for PPT submission is 25th August 2025",
      description3: "Project description should be added alongside the PPT",
      tags: ["Planning", "Strategy"],
      icon: "💡",
      achievement: "300+ Project Ideas Submitted"
    },
    {
      id: 3,
      date: "Sep 6, 2025",
      title: "Online Round",
      organization: "Phase 3",
      description1: "Online round will be conducted on 6th September 2025",
      description2: "Shortlisted teams from the PPT round will move to the online round",
      description3: "Results of this round will be declared next day, i.e. on 7th September 2025",
      tags: ["Development", "Pitching"],
      icon: "⚡",
      achievement: "24/7 Mentor Support Active"
    },
    {
      id: 4,
      date: "Sep 13, 2025",
      title: "Final Offline Round",
      organization: "Phase 4",
      description1: "Offline round will be conducted on 13th September 2025 at Microsoft, Gurugram",
      description2: "It will be a 8 hours high energy hackathon",
      description3: "Present your projects to judges, BEST OF LUCK :)",
      tags: ["Presentation", "Demo"],
      icon: "🏆",
      achievement: "Top 50 Teams Selected"
    }
  ];

  return (
    <div>      

      {/* Filter Tabs */}
      <div className="w-full pb-8 overflow-hidden">
        <div className="flex gap-10 animate-scroll-lr whitespace-nowrap w-max">
          {/* FIRST ROW */}
          {['CODE VEDA 2.0', 'GEEK ROOM', 'ADGIPS', 'GEEK ROOM', 'CODE VEDA 2.0', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0', 'WIN', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0'].map((tab, i) => (
            <motion.button
              key={tab + "1"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-2 rounded-full text-sm bg-gray-800/50 text-gray-400 hover:bg-gray-700"
            >
              {tab}
            </motion.button>
          ))}
          {/* DUPLICATED ROW */}
          {['CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0', 'BUILD', 'CODE VEDA 2.0', 'GEEK ROOM', 'CODE VEDA 2.0', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'ADGIPS', 'CODE VEDA 2.0', 'GEEK ROOM', 'ADGIPS'].map((tab) => (
            <motion.button
              key={tab + "2"}
              className="px-6 py-2 rounded-full text-sm bg-gray-800/50 text-gray-400"
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>


      {/* Timeline Container */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-6 pb-20">
        {/* Animated Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 overflow-hidden">
          <motion.div
            className="w-full h-full mt-50 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500"
            style={{
              scaleY: smoothProgress,
              transformOrigin: 'top',
              opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.3])
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-gray-800 via-gray-800 to-gray-800" 
               style={{ zIndex: -1 }} />
        </div>

        {/* Phase Cards */}
        <div className="relative space-y-24">
          {phases.map((phase, index) => (
            <PhaseCard 
              key={phase.id} 
              phase={phase} 
              index={index}
              scrollProgress={smoothProgress}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const PhaseCard = ({ phase, index, scrollProgress }) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
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
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
    >
      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-purple-600 border-4 border-black shadow-lg shadow-blue-500/50 z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-blue-400"
        />
      </motion.div>

      {/* Spacer */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <motion.div
        // find
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full md:w-1/2 ml-16 md:ml-0"
      >
        <div className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow">
          {/* Date Header */}
          <div className="bg-linear-to-r from-teal-500 to-indigo-900 px-6 py-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-2xl">{phase.icon}</span>
              <span className="font-medium">{phase.date}</span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-blue-400 mb-3">
              <span className="text-lg">🏢</span>
              <span className="text-sm">{phase.organization}</span>
            </div>
            <h3 className="text-3xl font-bold pb-4 bg-linear-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
              {phase.title}
            </h3>
            <p className="text-gray-400 mb-4">{phase.description1}</p>
            <p className="text-gray-400 mb-4">{phase.description2}</p>
            <p className="text-gray-400 mb-4">{phase.description3}</p>


            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {phase.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Achievement */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">🏆</span>
                <span className="text-sm font-medium text-gray-300">Achievement:</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">{phase.achievement}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HackathonSchedule;
