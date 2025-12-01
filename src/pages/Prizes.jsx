import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, useMatcapTexture, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Trophy Component
const Trophy3D = ({ position = [0, 0, 0], scale = 1, color = '#ffd700', rotation = [0, 0, 0] }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(scale * 1.2, scale * 1.2, scale * 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
      }
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group
        ref={meshRef}
        position={position}
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Cup Base */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.3, 32]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Cup Stem */}
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.15, 0.3, 0.5, 32]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Cup Body */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.6, 0.3, 1, 32]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.95} 
            roughness={0.05}
            envMapIntensity={2}
          />
        </mesh>

        {/* Handles */}
        <mesh position={[0.75, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.75, 0.3, 0]} rotation={[0, Math.PI, Math.PI / 2]}>
          <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Star on top */}
        <mesh position={[0, 0.95, 0]}>
          <octahedronGeometry args={[0.15]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffd700"
            emissiveIntensity={hovered ? 2 : 0.5}
          />
        </mesh>

        {/* Glow effect */}
        <pointLight
          position={[0, 0.5, 0]}
          color={color}
          intensity={hovered ? 2 : 0.5}
          distance={3}
        />
      </group>
    </Float>
  );
};

// Floating Coins
const FloatingCoins = ({ count = 10 }) => {
  const coins = useRef([]);
  
  useFrame((state) => {
    coins.current.forEach((coin, i) => {
      if (coin) {
        coin.rotation.y = state.clock.getElapsedTime() * (1 + i * 0.1);
        coin.position.y = Math.sin(state.clock.getElapsedTime() + i) * 0.2 + coin.userData.baseY;
      }
    });
  });

  return (
    <>
      {[...Array(count)].map((_, i) => {
        const x = (Math.random() - 0.5) * 8;
        const y = (Math.random() - 0.5) * 4;
        const z = (Math.random() - 0.5) * 4 - 2;
        
        return (
          <mesh
            key={i}
            ref={(el) => {
              coins.current[i] = el;
              if (el) el.userData.baseY = y;
            }}
            position={[x, y, z]}
            scale={0.15 + Math.random() * 0.1}
          >
            <cylinderGeometry args={[1, 1, 0.2, 32]} />
            <meshStandardMaterial
              color="#ffd700"
              metalness={0.95}
              roughness={0.05}
              emissive="#ffa500"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </>
  );
};

// Prize Amount Display
const PrizeAmount = ({ amount, position, color = '#ffd700' }) => {
  return (
    <Center position={position}>
      <Float speed={1.5} floatIntensity={0.3}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.3}
          height={0.1}
          curveSegments={12}
        >
          {amount}
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Float>
    </Center>
  );
};

// Scene Component
const PrizeScene = () => {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <spotLight
        position={[0, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#ffd700"
      />
      <pointLight position={[-5, 5, -5]} color="#9d4edd" intensity={0.5} />
      <pointLight position={[5, 5, -5]} color="#00d9ff" intensity={0.5} />

      {/* Main Trophy */}
      <Trophy3D position={[0, 0, 0]} scale={1.5} color="#ffd700" />
      
      {/* Second Place */}
      <Trophy3D position={[-2.5, -0.5, -1]} scale={1} color="#c0c0c0" />
      
      {/* Third Place */}
      <Trophy3D position={[2.5, -0.5, -1]} scale={0.9} color="#cd7f32" />

      {/* Floating Coins */}
      <FloatingCoins count={15} />
    </>
  );
};

// Prize Card Component
const PrizeCard = ({ rank, amount, perks, color, delay = 0 }) => {
  const gradients = {
    gold: 'from-yellow-500 via-yellow-400 to-yellow-600',
    silver: 'from-gray-300 via-gray-200 to-gray-400',
    bronze: 'from-amber-600 via-amber-500 to-amber-700',
  };

  const bgGradients = {
    gold: 'from-yellow-500/20 to-yellow-900/20',
    silver: 'from-gray-500/20 to-gray-900/20',
    bronze: 'from-amber-500/20 to-amber-900/20',
  };

  const rankLabels = {
    1: '1st Place',
    2: '2nd Place',
    3: '3rd Place',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`
        relative overflow-hidden rounded-3xl p-8
        bg-gradient-to-br ${bgGradients[color]}
        backdrop-blur-xl border border-white/10
        ${rank === 1 ? 'md:-mt-8 md:scale-110 z-10' : ''}
      `}
    >
      {/* Rank Badge */}
      <div className={`
        absolute -top-4 left-1/2 -translate-x-1/2
        px-6 py-2 rounded-full
        bg-gradient-to-r ${gradients[color]}
        text-black font-bold text-sm uppercase tracking-wider
        shadow-lg
      `}>
        {rankLabels[rank]}
      </div>

      {/* Trophy Icon */}
      <div className="flex justify-center mt-8 mb-6">
        <motion.div
          className={`
            w-24 h-24 rounded-full
            bg-gradient-to-br ${gradients[color]}
            flex items-center justify-center
            shadow-2xl
          `}
          animate={{
            boxShadow: [
              `0 0 20px ${color === 'gold' ? '#ffd700' : color === 'silver' ? '#c0c0c0' : '#cd7f32'}40`,
              `0 0 40px ${color === 'gold' ? '#ffd700' : color === 'silver' ? '#c0c0c0' : '#cd7f32'}60`,
              `0 0 20px ${color === 'gold' ? '#ffd700' : color === 'silver' ? '#c0c0c0' : '#cd7f32'}40`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-4xl">🏆</span>
        </motion.div>
      </div>

      {/* Amount */}
      <div className="text-center mb-6">
        <motion.div
          className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradients[color]} bg-clip-text text-transparent`}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {amount}
        </motion.div>
        <p className="text-gray-400 text-sm mt-2">Prize Money</p>
      </div>

      {/* Perks */}
      <div className="space-y-3">
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className={`text-lg bg-gradient-to-r ${gradients[color]} bg-clip-text text-transparent`}>✦</span>
            <span className="text-gray-300 text-sm">{perk}</span>
          </motion.div>
        ))}
      </div>

      {/* Shine Effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, transparent 50%)',
        }}
      />
    </motion.div>
  );
};

// Main Prizes Page
const PrizesPage = () => {
  const prizes = [
    {
      rank: 2,
      amount: '₹50,000',
      color: 'silver',
      perks: [
        'Internship Opportunities',
        'Premium Swag Kit',
        'Mentorship Sessions',
        'Industry Recognition',
      ],
    },
    {
      rank: 1,
      amount: '₹1,00,000',
      color: 'gold',
      perks: [
        'Grand Prize Trophy',
        'Internship + Job Offers',
        'Premium Developer Kit',
        'Featured in Tech Media',
        'Exclusive Networking Event',
      ],
    },
    {
      rank: 3,
      amount: '₹25,000',
      color: 'bronze',
      perks: [
        'Recognition Certificate',
        'Swag Kit',
        'Mentorship Sessions',
        'Community Access',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-900 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <PrizeScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 pt-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-4"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 215, 0, 0.2)',
                '0 0 40px rgba(255, 215, 0, 0.4)',
                '0 0 20px rgba(255, 215, 0, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💎 Prizes Worth ₹3,00,000+
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Prizes
            </span>
            <br />
            <span className="text-white">& Rewards</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Compete for glory and win amazing prizes. Top performers receive cash prizes,
            internship opportunities, and exclusive tech goodies.
          </p>
        </motion.div>

        {/* Prize Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
            {prizes.map((prize, index) => (
              <PrizeCard
                key={prize.rank}
                {...prize}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Special Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Special Category Awards
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🌟', title: 'Best UI/UX', prize: '₹15,000' },
              { icon: '🚀', title: 'Most Innovative', prize: '₹15,000' },
              { icon: '🌍', title: 'Best Social Impact', prize: '₹15,000' },
              { icon: '👶', title: 'Best Fresher Team', prize: '₹10,000' },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
              >
                <span className="text-3xl mb-3 block">{category.icon}</span>
                <h3 className="text-white font-semibold mb-1">{category.title}</h3>
                <p className="text-yellow-400 font-bold">{category.prize}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrizesPage;
