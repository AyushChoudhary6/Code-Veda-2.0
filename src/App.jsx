import React from "react";
import Particles from "./Particles.jsx";
import Header from "./components/Headerpage.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const App = () => {
  useGSAP(() => {
    gsap.to(".header", {
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <div className="w-full h-screen relative bg-black flex justify-center items-center">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#1e003e", "#06000c"]}
          particleCount={30000}
          particleSpread={50}
          speed={0.09}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        {/* White glow overlay at the top */}
        <div
          style={{
            position: "absolute",
            top: "-5%", // center vertically
            left: "50%", // center horizontally
            width: "900px", // size of glow
            height: "900px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
            transform: "translate(-50%, -50%)", // center the div
            pointerEvents: "none",
            borderRadius: "50%",
            filter: "blur(200px)", // optional, makes it more glow-like
          }}
        />

        <Header />

        <div style={{ height: "200vh", background: "#000", color: "white" }}>
          <h1 style={{ padding: "50px", textAlign: "center" }}></h1>
        </div>
      </div>
    </div>
  );
};

export default App;
