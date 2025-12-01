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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0616]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#0a0616]/80 z-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-0">
          CODE VEDA
        </h1>
        <ul className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-6 text-white text-sm sm:text-base justify-center sm:justify-end">
          <li className="px-3 py-1 hover:text-blue-400 transition">Home</li>
          <li className="px-3 py-1 hover:text-blue-400 transition">
            Why Code Veda
          </li>
          <li className="px-3 py-1 hover:text-blue-400 transition">
            Problem Statement
          </li>
          <li className="px-3 py-1 hover:text-blue-400 transition">Schedule</li>
          <li className="px-3 py-1 hover:text-blue-400 transition">Prizes</li>
          <li className="px-3 py-1 hover:text-blue-400 transition">Sponsors</li>
          <li className="px-3 py-1 hover:text-blue-400 transition">Teams</li>
          <li className="px-3 py-1 hover:text-blue-400 transition">
            Duality AI
          </li>
          <li className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-blue-600 transition">
            Register
          </li>
        </ul>
      </header>

      {/* TEAM SECTION */}
      <div className="max-w-6xl mx-auto mt-40 bg-[#0a0616]">
        <div
          className="text-left pl-10 h-[100px] flex flex-col justify-center 
opacity-0 translate-y-10 transition-all duration-700 scroll-fade-right"
        >
          <h2
            className="text-9xl font-bold text-white mb-8 -ml-[15rem]
    opacity-0 translate-y-10 transition-all duration-700 scroll-fade-right"
            style={{ fontFamily: "'Samarkan', sans-serif" }}
          >
            Our Team
          </h2>

          <p
            className="text-4xl text-gray-300 -ml-[15rem] mb-15 
  opacity-0 translate-y-10 transition-all duration-700 scroll-fade-right"
          >
            🔱 Code Veda Hackathon - The Council of Leads
          </p>

          <p
            className="text-4xl text-gray-300 mb-7 -ml-[15rem] 
  opacity-0 translate-y-10 transition-all duration-700 scroll-fade-right"
          >
            🔱 Infusing ancient wisdom with modern innovation
          </p>
        </div>

        <div className="relative flex justify-end items-center w-full h-96 mt-10  opacity-0 translate-y-10 transition-all duration-700 delay-200 scroll-fade-right ">
          {/* Guru Image */}
          <div className="relative group float-animation ">
            <img
              src={img8}
              alt="Guru"
              className="w-[500px] h-auto rounded-xl cursor-pointer shadow-lg"
              style={{
                zIndex: 10,
                width: "500px",
                height: "auto",
                top: "-190px",
                left: "350px",
                position: "relative",
                transition: "transform 0.3s",
              }}
            />

            {/* Thought Bubble */}
            <div
              className="absolute -top-32 -right-48 p-6 w-80 bg-white rounded-3xl shadow-xl 
             cursor-pointer transition-transform duration-300 
             transform group-hover:scale-105 float-animation"
              style={{
                zIndex: 20,
                width: "400px",
                height: "auto",
                top: "-160px",
                right: " -30px",
              }}
            >
              <p className="text-lg font-semibold text-black">
                "Code Veda bridges ancient wisdom with modern technology..."
              </p>

              {/* Triangle */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-18px",
                  left: "90%",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "white",
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  transform: "rotate(90deg)",
                }}
              />
            </div>

            {/* Soft Glow Behind Monk (Z-index FIXED) */}
            {/* Optional Glow Behind Guru */}
            <div
              className="absolute -top-10 -left-10 w-[550px] h-[550px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,210,80,0.35) 0%, rgba(255,170,0,0.15) 40%, rgba(255,150,0,0) 70%)",
                filter: "blur(120px)",
                zIndex: 5,
                top: "-170px",
                left: "300px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Team Carousel */}
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-[#0a0616] text-white p-6 mt-20 
     transition-all duration-700 opacity-0 translate-x-20 scroll-fade-right"
      >
        <div className="relative w-full max-w-5xl-[1600px] flex items-center justify-between">
          <div
            className="flex rounded-xl shadow-lg overflow-hidden cursor-grab select-none neon-card"
            style={{
              minHeight: "600px",
              width: "1200px",
              maxWidth: "95%",
              margin: "0 auto",
              backgroundColor: "#0f0424",
              boxShadow:
                "0 4px 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(58, 46, 91, 0.7)", // Shadow + glow (red glow)
              transition: "transform 0.3s ease", // Smooth transition for pop effect
              objectFit: "cover",
              // Add hover logic: e.g., transform: isHovered ? 'scale(1.05)' : 'scale(1)' (using state as in Example 2)
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Left: Image */}

            <div className="w-1/2 flex items-center justify-center relative rounded-full overflow-hidden">
              <img
                src={teamMembers[activeIndex].image}
                alt={teamMembers[activeIndex].name}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            {/* Right: Text */}
            <div className="w-1/2  p-1 flex flex-col justify-center gap-4">
              <h2 className="text-4xl font-bold">
                {teamMembers[activeIndex].name}
              </h2>
              <p className="text-2xl text-blue-400 font-semibold">
                {teamMembers[activeIndex].role}
              </p>
              <p className="text-gray-700">{teamMembers[activeIndex].bio}</p>

              {/* Extra info */}
              {teamMembers[activeIndex].experience && (
                <p className="text-gray-600 font-medium">
                  Experience: {teamMembers[activeIndex].experience}
                </p>
              )}
              {teamMembers[activeIndex].skills && (
                <p className="text-gray-600 font-medium">
                  Skills: {teamMembers[activeIndex].skills}
                </p>
              )}

              <a
                href={teamMembers[activeIndex].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>

            <button
              onClick={nextSlide}
              className="absolute ml-6 top-75 -translate-y-1/2 text-5xl text-gray-400 hover:text-white"
            >
              &#8592;
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-5xl text-gray-400 hover:text-white "
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
