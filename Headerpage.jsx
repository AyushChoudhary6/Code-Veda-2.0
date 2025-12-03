import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import meditationImg from "/meditation2.png";
import img1 from "../assets/team/animesh.jpg";
import img2 from "../assets/team/mohit.jpg";
import img3 from "../assets/team/yash.jpg";
import img4 from "../assets/team/aditi mishra.jpg";
import img5 from "../assets/team/mehak.jpg";
import img6 from "../assets/team/peksha dixit.jpg";
import img7 from "../assets/team/revant.jpg";
import img8 from "../assets/team/sahil chaudhary.jpg";
import img9 from "../assets/team/Sumit Thakur.jpg";
import img10 from "../assets/team/Ayush Choudhary.jpg";
import img11 from "../assets/team/Chetak Kumar.jpg";
import img12 from "../assets/team/Nikhil Sood.jpg";
import img13 from "../assets/team/Riya.jpg";
import img14 from "../assets/team/Sampreeti Rastogi.jpg";
import img15 from "../assets/team/Shaurya Pratap Singh.jpg";

// ---------- DATA DIVIDED INTO 3 CATEGORIES ----------

// 1) LEADS
export const leads = [
  {
    name: "Ayush Choudhary",
    role: "Web Development Lead",
    linkedin: "https://www.linkedin.com/in/ayush-choudhary-29aa01325/",
    image: img10,
  },
  {
    name: "Riya",
    role: "Web Development Lead",
    linkedin: "https://www.linkedin.com/in/riya-mittal-94a152326/",
    image: img13,
  },
  {
    name: "Sahil Choudhary",
    role: "Marketing Lead",
    linkedin:
      "https://www.linkedin.com/in/shahil-choudhary-552a37276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: img8,
  },
  {
    name: "Yash",
    role: "Marketing Lead",
    linkedin: "https://www.linkedin.com/in/yashchoprapython/",
    image: img3,
  },
  {
    name: "Aditi Mishra",
    role: "PR Lead",
    linkedin: "https://www.linkedin.com/in/aditi-mishra-a9aa6b328",
    image: img4,
  },
  {
    name: "Mohit Aggarwal",
    role: "PR Lead",
    linkedin:
      "https://www.linkedin.com/in/mohitaggarwal551?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: img2,
  },
  {
    name: "Preksha Dixit",
    role: "Graphics Lead",
    linkedin:
      "https://www.linkedin.com/in/preksha-dixit-709a13278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: img6,
  },
  {
    name: "Granth",
    role: "Graphics Lead",
    linkedin: "#",
    image: "", // Add when you get image
  },
  {
    name: "Animesh",
    role: "Social Media Lead",
    linkedin: "https://www.linkedin.com/in/animesh-2006-sharma/",
    image: img1,
  },
];

// 2) COORDINATORS
export const coordinators = [
  {
    name: "Revant",
    role: "Event Coordinator",
    linkedin:
      "https://www.linkedin.com/in/revant-jain-833835338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: img7,
  },
  {
    name: "Mahak",
    role: "Event Coordinator",
    linkedin:
      "https://www.linkedin.com/in/mahak-68840b329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: img5,
  },
];

// 3) ADVISORY
export const advisory = [
  {
    name: "Sumit Thakur",
    role: "Ex-President",
    linkedin: "https://www.linkedin.com/in/sumit-thakur-80ba72278/",
    image: img9,
  },
  {
    name: "Shaurya Pratap Singh",
    role: "President",
    linkedin: "https://www.linkedin.com/in/shaurya-pratap-singh-7425822a8/",
    image: img15,
  },
  {
    name: "Sampreeti Rastogi",
    role: "Vice President",
    linkedin:
      "https://www.linkedin.com/in/sampreeti-rastogi-868612325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: img14,
  },
  {
    name: "Chetan Kumar",
    role: "General Secretary",
    linkedin: "https://www.linkedin.com/in/chetan-kumar-12922a322/",
    image: img11,
  },
  {
    name: "Nikhil Sood",
    role: "Graphics Head",
    linkedin: "https://www.linkedin.com/in/nikhils00d",
    image: img12,
  },
];

const currentMap1 = {
  Leads: leads,
  Coordinators: coordinators,
};

// Book 2: Advisory only
const currentMap2 = {
  Advisory: advisory,
};

const Header = () => {
  // Book 1: Leads & Coordinators
  const [book1ActiveTab, setBook1ActiveTab] = useState("Leads");
  const [book1CurrentPage, setBook1CurrentPage] = useState(0);

  // Book 2: Advisory
  const [book2CurrentPage, setBook2CurrentPage] = useState(0);

  const nextPageBook1 = () => {
    const map = currentMap1;
    setBook1CurrentPage((prev) => (prev + 1) % map[book1ActiveTab].length);
  };

  const prevPageBook1 = () => {
    const map = currentMap1;
    setBook1CurrentPage((prev) =>
      prev === 0 ? map[book1ActiveTab].length - 1 : prev - 1
    );
  };

  const nextPageBook2 = () => {
    setBook2CurrentPage((prev) => (prev + 1) % currentMap2["Advisory"].length);
  };

  const prevPageBook2 = () => {
    setBook2CurrentPage((prev) =>
      prev === 0 ? currentMap2["Advisory"].length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-cosmic-900 text-white">
      {/* Hero Section - Like Second Image */}
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 md:py-20 gap-8">
        {/* Left Side - Text Content */}
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mb-6 md:mb-8 mx-auto md:mx-0"></div>

          <div className="space-y-3 md:space-y-4 text-base md:text-xl">
            <p className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">🔱</span>
              <span className="text-yellow-500 font-bold">
                Code Veda Hackathon
              </span>
            </p>
            <p className="text-yellow-500 font-bold text-2xl">
              The Council of Leads
            </p>
            <p className="text-gray-300 italic text-lg mt-4">
              "Infusing ancient wisdom with modern innovation"
            </p>
          </div>
        </div>

        {/* Right Side - Chakra Image */}
        <div className="flex-1 relative flex justify-center md:justify-end items-center z-10">
          <div className="relative">
            {/* Chakra Meditation Image */}
            <img
              src={meditationImg}
              alt="Chakra Meditation"
              className="w-[280px] md:w-[400px] lg:w-[500px] h-auto relative z-20"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* BOOK 1: LEADS & COORDINATORS */}
      <div className="min-h-screen flex items-center justify-center px-8 py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-9xl text-yellow-600">
            ॐ
          </div>
          <div className="absolute bottom-20 right-20 text-9xl text-yellow-600">
            🕉
          </div>
          <div className="absolute top-1/2 left-10 text-6xl text-yellow-600">
            🔱
          </div>
          <div className="absolute top-1/3 right-10 text-6xl text-yellow-600">
            🔱
          </div>
        </div>

        <div className="relative max-w-6xl w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-yellow-500 font-serif">
            पत्रिका (The Sacred Records) - Book 1
          </h2>

          <div className="flex justify-center gap-6 my-6">
            {["Leads", "Coordinators"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setBook1ActiveTab(tab);
                  setBook1CurrentPage(0);
                }}
                className={`px-6 py-2 rounded-xl text-lg font-bold transition-all duration-300 ${
                  book1ActiveTab === tab
                    ? "bg-yellow-600 text-black shadow-lg"
                    : "bg-black/40 text-yellow-400 border border-yellow-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Desktop Book View - Hidden on Mobile */}
          <div className="hidden md:block relative perspective-1000">
            <div className="relative bg-gradient-to-br from-amber-950/60 via-amber-900/60 to-amber-950/60 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8 border-4 border-yellow-600/40 backdrop-blur-sm">
              {/* Subtle Golden Border Glow */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
              {/* Sanskrit Decorative Border Top */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-amber-900/30 to-transparent rounded-t-3xl flex items-center justify-center gap-4 text-yellow-500/80 text-sm z-10">
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
                <span className="text-lg">🔱</span>
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
              </div>

              {/* Sanskrit Decorative Border Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-900/30 to-transparent rounded-b-3xl flex items-center justify-center gap-4 text-yellow-500/80 text-sm z-10">
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
                <span className="text-lg">🔱</span>
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
              </div>

              {/* Book Spine Shadow with decorative elements */}
              <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 via-black/80 to-black/60 transform -translate-x-1/2 z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-yellow-600/70 text-xs">
                  🕉
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-yellow-600/70 text-xs">
                  🔱
                </div>
                <div className="absolute top-3/4 left-1/2 -translate-x-1/2 text-yellow-600/70 text-xs">
                  🕉
                </div>
              </div>

              {/* Two Page Layout */}
              <div className="grid grid-cols-2 gap-8 min-h-[500px] mt-8 mb-8">
                {/* Left Page - Image */}
                <div className="flex items-center justify-center p-8 bg-gradient-to-br from-amber-100/20 via-amber-200/15 to-amber-100/20 rounded-l-2xl relative overflow-hidden shadow-inner backdrop-blur-sm border border-yellow-600/30">
                  {/* Paper Texture & Aged Effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-30"></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute top-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>

                  <div className="relative">
                    <img
                      src={currentMap1[book1ActiveTab][book1CurrentPage]?.image || ""}
                      alt={currentMap1[book1ActiveTab][book1CurrentPage]?.name}
                      className="w-80 h-80 object-cover rounded-lg shadow-2xl border-4 border-yellow-600/50"
                    />
                    {/* Vintage Frame Effect with Sanskrit touch */}
                    <div className="absolute -inset-2 border-4 border-yellow-600/40 rounded-lg pointer-events-none"></div>
                    <div className="absolute -inset-4 border-2 border-yellow-600/20 rounded-lg pointer-events-none"></div>
                  </div>
                </div>

                {/* Right Page - Details */}
                <div className="flex flex-col justify-center p-12 bg-gradient-to-br from-amber-100/20 via-amber-200/15 to-amber-100/20 rounded-r-2xl relative shadow-inner backdrop-blur-sm border border-yellow-600/30">
                  {/* Paper Texture & Aged Effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-30 rounded-r-2xl"></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute top-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>

                  {/* Side Decorative Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col items-center justify-around text-yellow-600/30 text-xs">
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                  </div>

                  <div className="relative space-y-6 z-10">
                    {/* Decorative Element - Om Symbol */}
                    <div className="text-6xl text-yellow-600/70 mb-4">🕉</div>

                    <h3 className="text-4xl font-bold text-yellow-500 font-serif drop-shadow-lg">
                      {currentMap1[book1ActiveTab][book1CurrentPage]?.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-yellow-600"></div>
                      <span className="text-yellow-600">॰॰॰</span>
                    </div>

                    <p className="text-xl text-amber-200 font-serif leading-relaxed italic">
                      {currentMap1[book1ActiveTab][book1CurrentPage]?.role}
                    </p>

                    {/* LinkedIn Button with Veda styling */}
                    <a
                      href={currentMap1[book1ActiveTab][book1CurrentPage]?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-amber-700/90 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-8 border-2 border-yellow-600/40"
                    >
                      <FaLinkedin size={24} />
                      <span className="font-semibold">Connect on LinkedIn</span>
                    </a>

                    {/* Decorative Element - Trishul */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <span className="text-yellow-600">॰॰॰</span>
                      <span className="text-4xl text-yellow-600/70">🔱</span>
                      <span className="text-yellow-600">॰॰॰</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows with Veda styling */}
              <button
                onClick={prevPageBook1}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-amber-800/80 to-amber-900/80 hover:from-amber-700 hover:to-amber-800 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 z-10 border-2 border-yellow-600/40 backdrop-blur-sm"
                aria-label="Previous member"
              >
                ‹
              </button>

              <button
                onClick={nextPageBook1}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-amber-800/80 to-amber-900/80 hover:from-amber-700 hover:to-amber-800 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 z-10 border-2 border-yellow-600/40 backdrop-blur-sm"
                aria-label="Next member"
              >
                ›
              </button>
            </div>

            {/* Page Indicators with Veda styling */}
            <div className="flex justify-center gap-3 mt-8">
              {currentMap1[book1ActiveTab]?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setBook1CurrentPage(index)}
                  className={`h-3 rounded-full transition-all duration-300 border-2 ${
                    index === book1CurrentPage
                      ? "bg-yellow-500 w-8 border-yellow-600"
                      : "bg-amber-900/50 w-3 border-amber-800 hover:bg-amber-800"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Card Grid - Hidden on Desktop */}
          <div className="md:hidden grid grid-cols-1 gap-6 px-4">
            {currentMap1[book1ActiveTab]?.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-950/80 via-amber-900/70 to-amber-950/80 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden border-2 border-yellow-600/30 backdrop-blur-sm"
              >
                {/* Card Header with Om Symbol */}
                <div className="bg-gradient-to-b from-amber-900/40 to-transparent p-3 text-center border-b border-yellow-600/20">
                  <span className="text-2xl text-yellow-600/70">🕉</span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Member Image */}
                  <div className="relative mx-auto w-48 h-48">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg shadow-xl border-3 border-yellow-600/40"
                    />
                    {/* Decorative Corners */}
                    <div className="absolute -top-2 -left-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                    <div className="absolute -top-2 -right-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                    <div className="absolute -bottom-2 -left-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-yellow-500 font-serif">
                      {member.name}
                    </h3>

                    <div className="flex items-center justify-center gap-2">
                      <div className="w-12 h-0.5 bg-yellow-600"></div>
                      <span className="text-yellow-600 text-sm">॰॰॰</span>
                      <div className="w-12 h-0.5 bg-yellow-600"></div>
                    </div>

                    <p className="text-lg text-amber-200 font-serif italic">
                      {member.role}
                    </p>

                    {/* LinkedIn Button */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700/90 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-yellow-600/40 mt-4"
                    >
                      <FaLinkedin size={20} />
                      <span className="font-semibold text-sm">Connect</span>
                    </a>
                  </div>
                </div>

                {/* Card Footer with Trishul */}
                <div className="bg-gradient-to-t from-amber-900/40 to-transparent p-3 text-center border-t border-yellow-600/20">
                  <span className="text-2xl text-yellow-600/70">🔱</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOOK 2: ADVISORY */}
      <div className="min-h-screen flex items-center justify-center px-8 py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-9xl text-yellow-600">
            ॐ
          </div>
          <div className="absolute bottom-20 right-20 text-9xl text-yellow-600">
            🕉
          </div>
          <div className="absolute top-1/2 left-10 text-6xl text-yellow-600">
            🔱
          </div>
          <div className="absolute top-1/3 right-10 text-6xl text-yellow-600">
            🔱
          </div>
        </div>

        <div className="relative max-w-6xl w-full">
          

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400 font-serif">
            Advisory Council
          </h3>

          {/* Desktop Book View - Hidden on Mobile */}
          <div className="hidden md:block relative perspective-1000">
            <div className="relative bg-gradient-to-br from-amber-950/60 via-amber-900/60 to-amber-950/60 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8 border-4 border-yellow-600/40 backdrop-blur-sm">
              {/* Subtle Golden Border Glow */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
              {/* Sanskrit Decorative Border Top */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-amber-900/30 to-transparent rounded-t-3xl flex items-center justify-center gap-4 text-yellow-500/80 text-sm z-10">
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
                <span className="text-lg">🔱</span>
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
              </div>

              {/* Sanskrit Decorative Border Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-900/30 to-transparent rounded-b-3xl flex items-center justify-center gap-4 text-yellow-500/80 text-sm z-10">
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
                <span className="text-lg">🔱</span>
                <span>॰॰॰</span>
                <span className="text-lg">🕉</span>
                <span>॰॰॰</span>
              </div>

              {/* Book Spine Shadow with decorative elements */}
              <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 via-black/80 to-black/60 transform -translate-x-1/2 z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-yellow-600/70 text-xs">
                  🕉
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-yellow-600/70 text-xs">
                  🔱
                </div>
                <div className="absolute top-3/4 left-1/2 -translate-x-1/2 text-yellow-600/70 text-xs">
                  🕉
                </div>
              </div>

              {/* Two Page Layout */}
              <div className="grid grid-cols-2 gap-8 min-h-[500px] mt-8 mb-8">
                {/* Left Page - Image */}
                <div className="flex items-center justify-center p-8 bg-gradient-to-br from-amber-100/20 via-amber-200/15 to-amber-100/20 rounded-l-2xl relative overflow-hidden shadow-inner backdrop-blur-sm border border-yellow-600/30">
                  {/* Paper Texture & Aged Effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-30"></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute top-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>

                  <div className="relative">
                    <img
                      src={currentMap2["Advisory"][book2CurrentPage]?.image || ""}
                      alt={currentMap2["Advisory"][book2CurrentPage]?.name}
                      className="w-80 h-80 object-cover rounded-lg shadow-2xl border-4 border-yellow-600/50"
                    />
                    {/* Vintage Frame Effect with Sanskrit touch */}
                    <div className="absolute -inset-2 border-4 border-yellow-600/40 rounded-lg pointer-events-none"></div>
                    <div className="absolute -inset-4 border-2 border-yellow-600/20 rounded-lg pointer-events-none"></div>
                  </div>
                </div>

                {/* Right Page - Details */}
                <div className="flex flex-col justify-center p-12 bg-gradient-to-br from-amber-100/20 via-amber-200/15 to-amber-100/20 rounded-r-2xl relative shadow-inner backdrop-blur-sm border border-yellow-600/30">
                  {/* Paper Texture & Aged Effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-30 rounded-r-2xl"></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute top-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 left-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>
                  <div className="absolute bottom-4 right-4 text-2xl text-yellow-600/40">
                    ❀
                  </div>

                  {/* Side Decorative Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col items-center justify-around text-yellow-600/30 text-xs">
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                    <span>॰</span>
                  </div>

                  <div className="relative space-y-6 z-10">
                    {/* Decorative Element - Om Symbol */}
                    <div className="text-6xl text-yellow-600/70 mb-4">🕉</div>

                    <h3 className="text-4xl font-bold text-yellow-500 font-serif drop-shadow-lg">
                      {currentMap2["Advisory"][book2CurrentPage]?.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-yellow-600"></div>
                      <span className="text-yellow-600">॰॰॰</span>
                    </div>

                    <p className="text-xl text-amber-200 font-serif leading-relaxed italic">
                      {currentMap2["Advisory"][book2CurrentPage]?.role}
                    </p>

                    {/* LinkedIn Button with Veda styling */}
                    <a
                      href={currentMap2["Advisory"][book2CurrentPage]?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-amber-700/90 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-8 border-2 border-yellow-600/40"
                    >
                      <FaLinkedin size={24} />
                      <span className="font-semibold">Connect on LinkedIn</span>
                    </a>

                    {/* Decorative Element - Trishul */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <span className="text-yellow-600">॰॰॰</span>
                      <span className="text-4xl text-yellow-600/70">🔱</span>
                      <span className="text-yellow-600">॰॰॰</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows with Veda styling */}
              <button
                onClick={prevPageBook2}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-amber-800/80 to-amber-900/80 hover:from-amber-700 hover:to-amber-800 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 z-10 border-2 border-yellow-600/40 backdrop-blur-sm"
                aria-label="Previous member"
              >
                ‹
              </button>

              <button
                onClick={nextPageBook2}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-amber-800/80 to-amber-900/80 hover:from-amber-700 hover:to-amber-800 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 z-10 border-2 border-yellow-600/40 backdrop-blur-sm"
                aria-label="Next member"
              >
                ›
              </button>
            </div>

            {/* Page Indicators with Veda styling */}
            <div className="flex justify-center gap-3 mt-8">
              {currentMap2["Advisory"]?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setBook2CurrentPage(index)}
                  className={`h-3 rounded-full transition-all duration-300 border-2 ${
                    index === book2CurrentPage
                      ? "bg-yellow-500 w-8 border-yellow-600"
                      : "bg-amber-900/50 w-3 border-amber-800 hover:bg-amber-800"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Card Grid - Hidden on Desktop */}
          <div className="md:hidden grid grid-cols-1 gap-6 px-4">
            {currentMap2["Advisory"]?.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-950/80 via-amber-900/70 to-amber-950/80 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden border-2 border-yellow-600/30 backdrop-blur-sm"
              >
                {/* Card Header with Om Symbol */}
                <div className="bg-gradient-to-b from-amber-900/40 to-transparent p-3 text-center border-b border-yellow-600/20">
                  <span className="text-2xl text-yellow-600/70">🕉</span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Member Image */}
                  <div className="relative mx-auto w-48 h-48">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg shadow-xl border-3 border-yellow-600/40"
                    />
                    {/* Decorative Corners */}
                    <div className="absolute -top-2 -left-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                    <div className="absolute -top-2 -right-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                    <div className="absolute -bottom-2 -left-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-xl text-yellow-600/60">
                      ❀
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-yellow-500 font-serif">
                      {member.name}
                    </h3>

                    <div className="flex items-center justify-center gap-2">
                      <div className="w-12 h-0.5 bg-yellow-600"></div>
                      <span className="text-yellow-600 text-sm">॰॰॰</span>
                      <div className="w-12 h-0.5 bg-yellow-600"></div>
                    </div>

                    <p className="text-lg text-amber-200 font-serif italic">
                      {member.role}
                    </p>

                    {/* LinkedIn Button */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700/90 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-yellow-600/40 mt-4"
                    >
                      <FaLinkedin size={20} />
                      <span className="font-semibold text-sm">Connect</span>
                    </a>
                  </div>
                </div>

                {/* Card Footer with Trishul */}
                <div className="bg-gradient-to-t from-amber-900/40 to-transparent p-3 text-center border-t border-yellow-600/20">
                  <span className="text-2xl text-yellow-600/70">🔱</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;