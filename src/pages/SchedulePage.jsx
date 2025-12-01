import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HackathonSchedule from "../components/HackathonSchedule";
import Shuffle from "../components/Shuffle";
import CosmicBackground from "../components/CosmicBackground";

const SchedulePage = () => {
  return (
    <div className="app-container bg-cosmic-900 text-divine-silver min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <CosmicBackground>
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
        </CosmicBackground>
      </div>
      <Footer />
    </div>
  );
};

export default SchedulePage;