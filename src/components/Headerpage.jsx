import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import img1 from "../assets/team/member1.png";
import img2 from "../assets/team/member2.png";
import img3 from "../assets/team/member3.png";
import img4 from "../assets/team/member4.png";
import img5 from "../assets/team/member5.png";
import img6 from "../assets/team/member6.png";
import img7 from "../assets/team/member7.png";
import img8 from "../assets/team/member8.png"; // guru image

// Example team members
const teamMembers = [
  {
    name: "Shivansh Baliyan",
    role: "Karya Sutradhār (Master of Event Orchestration)",
    bio: "The guiding thread behind the entire event, overseeing timelines, planning rituals (schedules), and ensuring divine order (logistics).",
    experience: "3+ years experience",
    skills: "React, HTML, CSS, Tailwind",
    linkedin: "#",
    image: img1,
  },
  {
    name: "Shaurya Pratap Singh",
    role: "Chitrakaār (The Visual Artisan)",
    bio: "Crafts the visual aura of Code Veda through compelling posters, designs, and aesthetic storytelling rooted in creative dharma..",
    experience: "3+ years experience",
    skills: "React, HTML, CSS, Tailwind",
    linkedin: "#",
    image: img2,
  },
  {
    name: "Sampreeti Rastogi",
    role: "Sambandh Vidhāyak (Architect of Alliances)",
    bio: "Builds and nurtures ties with sponsors, media houses, and external patrons — channeling support and blessings for the hackathon.",
    experience: "3+ years experience",
    skills: "React, HTML, CSS, Tailwind",
    linkedin: "#",
    image: img3,
  },
  {
    name: "Nikhil Sood",
    role: "Vaarta Doot (Messenger of the Digital Realm)",
    bio: "Spreads the word across the digital skies — managing social media, promotions, and keeping the online Agni alive.",
    experience: "3+ years experience",
    skills: "React, HTML, CSS, Tailwind",
    linkedin: "#",
    image: img4,
  },
  {
    name: "Vidhi Garg",
    role: "Agni Neta (Marketing Lead of the Digital Frontier)",
    bio: "Leads the charge in igniting brand presence — strategizing campaigns, fueling growth, and keeping the digital Agni blazing.",
    experience: "3+ years experience",
    skills: "React, HTML, CSS, Tailwind",
    linkedin: "#",
    image: img5,
  },
  {
    name: "Chetan Kumar",
    role: "Agni Neta (Marketing Lead of the Digital Frontier)",
    bio: "Weaves powerful narratives across platforms — crafting campaigns, building communities, and lighting the flame of engagement in the digital universe.",
    experience: "3+ years experience",
    skills: "React, HTML, CSS, Tailwind",
    linkedin: "#",
    image: img6,
  },
  {
    name: "Sumit Thakur",
    role: "Yajna Karta (Executor of the Sacred Ritual)",
    bio: "The one who brings the vision to life — ensuring smooth execution, team alignment, and sanctity of every operational task.",
    experience: "3+ years experience",
    skills: "React, HTML, CSS, Tailwind",
    linkedin: "#",
    image: img7,
  },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));

  // Scroll Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-20");
            entry.target.classList.add("opacity-100", "translate-x-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* TEAM SECTION */}
      <div className="max-w-7xl mx-auto mt-10 lg:mt-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-left z-10 opacity-0 translate-y-10 transition-all duration-700 scroll-fade-right">
          <h2
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Samarkan', sans-serif" }}
          >
            Our Team
          </h2>

          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>

          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            🔱 Code Veda Hackathon <br/>
            <span className="text-yellow-400 font-semibold">The Council of Leads</span>
          </p>

          <p className="text-xl text-gray-400 italic">
            "Infusing ancient wisdom with modern innovation"
          </p>
        </div>

        {/* Right Content - Guru Image */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0 opacity-0 translate-y-10 transition-all duration-700 delay-200 scroll-fade-right">
          <div className="relative group float-animation">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <img
              src={img8}
              alt="Guru"
              className="relative z-10 w-full max-w-md h-auto rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />

            {/* Thought Bubble */}
            <div className="absolute -top-20 -left-10 md:-left-20 z-20 animate-bounce-slow">
               <div className="bg-white text-black p-6 rounded-2xl rounded-br-none shadow-xl max-w-xs relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <p className="text-lg font-semibold leading-snug">
                  "Code Veda bridges ancient wisdom with modern technology..."
                </p>
                {/* Bubble Tail */}
                <div className="absolute -bottom-4 right-0 w-8 h-8 bg-white clip-path-polygon"></div>
                <svg className="absolute -bottom-4 right-0 w-6 h-6 text-white fill-current transform rotate-90" viewBox="0 0 24 24">
                   <path d="M24 0l-24 24h24v-24z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Carousel */}
      <div className="w-full max-w-6xl mx-auto mt-32 mb-20 opacity-0 translate-y-10 transition-all duration-700 delay-300 scroll-fade-right">
        <div className="relative bg-[#0f0424]/80 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Left: Image */}
            <div className="md:w-2/5 p-8 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)] group">
                <img
                  src={teamMembers[activeIndex].image}
                  alt={teamMembers[activeIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {teamMembers[activeIndex].name}
                  </h2>
                  <p className="text-xl md:text-2xl text-yellow-400 font-medium">
                    {teamMembers[activeIndex].role}
                  </p>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {teamMembers[activeIndex].bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  {teamMembers[activeIndex].experience && (
                    <div>
                      <span className="text-gray-500 text-sm uppercase tracking-wider">Experience</span>
                      <p className="text-white font-medium">{teamMembers[activeIndex].experience}</p>
                    </div>
                  )}
                  {teamMembers[activeIndex].skills && (
                    <div>
                      <span className="text-gray-500 text-sm uppercase tracking-wider">Skills</span>
                      <p className="text-white font-medium">{teamMembers[activeIndex].skills}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <a
                    href={teamMembers[activeIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-600/30"
                  >
                    <FaLinkedin size={20} />
                    <span className="font-semibold">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute bottom-8 right-8 flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center text-black transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-yellow-500/50"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
