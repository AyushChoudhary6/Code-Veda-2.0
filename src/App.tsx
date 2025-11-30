import Navbar from "./components/NavBar";
import HackathonSchedule from "./components/Page";
import Shuffle from "./components/Title";


function App() {
  return (
  <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{
      backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
    }} >

    <div>
      <Navbar/>
    </div>

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
        // className="text-6xl font-bold transition duration-200 cursor-pointer  hover:[text-shadow:0_0_8px_rgba(255,255,255,0.6)]  "
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
}

export default App;
