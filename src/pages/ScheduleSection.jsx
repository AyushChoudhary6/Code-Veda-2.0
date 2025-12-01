import React from 'react';
import HackathonSchedule from "../components/HackathonSchedule";
import Shuffle from "../components/Shuffle";

const ScheduleSection = () => {
  return (
    <div id="schedule" className="min-h-screen text-white bg-[linear-gradient(135deg,#140724_0%,#0f0622_50%,#1a0b2e_100%)] overflow-x-hidden">
      <div className="mt-16 flex justify-center items-center p-6 " >
        <Shuffle
          text="Hackathon Schedule"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          tag={"h4"}
          className="relative text-6xl text-[#FFD700] font-bold cursor-pointer transition duration-500
              after:absolute after:left-1/2 after:bottom-0
              after:h-[3px] after:w-0 after:bg-[#FFC857]
              after:transition-all after:duration-800 after:ease-out
              hover:after:left-0 hover:after:w-full
              hover:[text-shadow:0_0_12px_rgba(255,215,0,0.5)]
              hover:filter:[drop-shadow(0_0_6px_rgba(255,200,87,0.3))]"
        />
      </div>

      <div className="" >
        <HackathonSchedule/>
      </div>
    </div>
  );
};

export default ScheduleSection;
