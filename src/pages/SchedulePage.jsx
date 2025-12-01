import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HackathonSchedule from "../components/HackathonSchedule";
import Shuffle from "../components/Shuffle";

const SchedulePage = () => {
  return (
    <div className="app-container bg-cosmic-900 text-divine-silver min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <div className="min-h-screen text-white bg-[linear-gradient(135deg,#140724_0%,#0f0622_50%,#1a0b2e_100%)] overflow-x-hidden">
            <div className="mt-16 flex justify-center items-center p-6 mb-10" >
                <Shuffle
                text="Hackathon Schedule"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                className="text-4xl md:text-6xl font-bold text-yellow-400 tracking-wide uppercase drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                />
            </div>
            <HackathonSchedule />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchedulePage;