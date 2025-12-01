// import React from 'react';
// import { FaSun, FaCloud, FaMoon, FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import CosmicBackground from '../components/CosmicBackground';

// const sponsorData = [
//   {
//     tier: "Brahma Tier",
//     sponsors: [
//       {
//         name: "TechGiant Corp",
//         logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "InnovateX",
//         logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "Future Systems",
//         logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//     ],
//   },
//   {
//     tier: "Vishnu Tier",
//     sponsors: [
//       {
//         name: "CloudNine",
//         logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "DataFlow",
//         logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "StreamLine",
//         logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "NetWorks",
//         logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//     ],
//   },
//   {
//     tier: "Shiva Tier",
//     sponsors: [
//       {
//         name: "CodeCraft",
//         logo: "https://images.unsplash.com/photo-1572044162444-ad6021194362?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "PixelPerfect",
//         logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "DevOps Pro",
//         logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "SecurityPlus",
//         logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//       {
//         name: "AI Solutions",
//         logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=300&auto=format&fit=crop",
//         website: "https://example.com",
//       },
//     ],
//   },
// ];

// const tierConfig = {
//   "Brahma Tier": {
//     icon: FaSun,
//     gradientFrom: "from-yellow-500",
//     gradientTo: "to-orange-600",
//     textColor: "text-yellow-400",
//     badgeGradient: "from-yellow-400 to-orange-500",
//     descriptionColor: "text-yellow-200",
//     borderColor: "border-yellow-500/30",
//     shadowColor: "shadow-yellow-500/20",
//   },
//   "Vishnu Tier": {
//     icon: FaCloud,
//     gradientFrom: "from-blue-500",
//     gradientTo: "to-cyan-600",
//     textColor: "text-blue-400",
//     badgeGradient: "from-blue-400 to-cyan-500",
//     descriptionColor: "text-blue-200",
//     borderColor: "border-blue-500/30",
//     shadowColor: "shadow-blue-500/20",
//   },
//   "Shiva Tier": {
//     icon: FaMoon,
//     gradientFrom: "from-purple-500",
//     gradientTo: "to-indigo-600",
//     textColor: "text-purple-400",
//     badgeGradient: "from-purple-400 to-indigo-500",
//     descriptionColor: "text-purple-200",
//     borderColor: "border-purple-500/30",
//     shadowColor: "shadow-purple-500/20",
//   },
// };

// const tierDescriptions = {
//   "Brahma Tier": "Creators of our cosmic reality",
//   "Vishnu Tier": "Sustainers of our galactic balance",
//   "Shiva Tier": "Transformers of cosmic energy",
// };

// export default function SponsorPage() {
//   return (
//     <div className="min-h-screen bg-cosmic-900 text-white font-sans selection:bg-cosmic-500 selection:text-white overflow-x-hidden">
//       <CosmicBackground />
//       <Navbar />
      
//       <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <header className="text-center mb-20">
//           <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-divine-gold via-yellow-300 to-divine-gold mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
//             Our Cosmic Sponsors
//           </h1>
//           <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto font-light">
//             Celestial beings supporting our galactic journey
//           </p>
//           <div className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-divine-gold to-transparent opacity-70" />
//         </header>

//         <div className="space-y-24">
//           {sponsorData.map((tierData) => {
//             const config = tierConfig[tierData.tier];
//             const Icon = config.icon;

//             return (
//               <section key={tierData.tier} className="relative">
//                 {/* Tier Header */}
//                 <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-6">
//                   <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10`}>
//                     <Icon className="text-3xl text-white drop-shadow-md" />
//                   </div>
//                   <div className="text-center md:text-left">
//                     <h2 className={`text-4xl md:text-5xl font-bold ${config.textColor} drop-shadow-sm`}>
//                       {tierData.tier}
//                     </h2>
//                     <p className={`${config.descriptionColor} text-lg italic mt-2`}>
//                       {tierDescriptions[tierData.tier]}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Sponsors Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {tierData.sponsors.map((sponsor, index) => (
//                     <a
//                       key={`${tierData.tier}-${index}`}
//                       href={sponsor.website}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border ${config.borderColor} hover:border-opacity-80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${config.shadowColor}`}
//                     >
//                       {/* Card Glow Effect */}
//                       <div className={`absolute inset-0 bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
//                       {/* Badge */}
//                       <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${config.badgeGradient} text-white flex items-center justify-center font-bold text-sm shadow-lg z-20`}>
//                         {index + 1}
//                       </div>

//                       {/* Logo Container */}
//                       <div className="h-48 p-8 flex items-center justify-center relative z-10">
//                         <img
//                           src={sponsor.logo}
//                           alt={sponsor.name}
//                           className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500"
//                         />
//                       </div>

//                       {/* Content */}
//                       <div className="p-4 bg-black/40 border-t border-white/5 group-hover:bg-black/60 transition-colors">
//                         <h3 className={`text-xl font-bold text-center ${config.textColor} group-hover:text-white transition-colors`}>
//                           {sponsor.name}
//                         </h3>
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//               </section>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <section className="mt-32 text-center relative overflow-hidden rounded-3xl bg-gradient-to-br from-cosmic-800 to-cosmic-900 border border-divine-gold/20 p-12 shadow-2xl">
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
//           <div className="relative z-10">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               Become a <span className="text-divine-gold">Sponsor</span>
//             </h2>
//             <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
//               Join our cosmic community and showcase your brand alongside industry leaders. Support innovation and gain visibility in the tech ecosystem.
//             </p>
//             <button className="px-10 py-4 bg-gradient-to-r from-divine-gold to-yellow-600 text-black font-bold text-lg rounded-full hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
//               Apply Now
//             </button>
//           </div>
//         </section>
//       </div>
      
//       <Footer />
//     </div>
//   );
// }


// To be annouced later

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CosmicBackground from '../components/CosmicBackground'

const SponsorPage = () => {
    return (
        <div className="app-container bg-cosmic-900 text-divine-silver min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow pt-20">
                <CosmicBackground>
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-divine-gold via-yellow-200 to-divine-gold mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] animate-pulse">
                            To Be Announced Later
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto font-light tracking-wide">
                            Our cosmic partners are aligning their constellations...
                        </p>
                        <div className="mt-12 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-divine-gold to-transparent opacity-70" />
                    </div>
                </CosmicBackground>
            </div>
            <Footer />
        </div>
    )
}

export default SponsorPage;