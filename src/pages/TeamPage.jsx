import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Headerpage';
import Particles from '../Particles';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TeamPage = () => {
  useGSAP(() => {
    gsap.to(".header", {
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <div className="app-container bg-cosmic-900 text-divine-silver min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-grow relative">
        <Particles />
        <div className="relative z-10 pt-20">
            <Header />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
