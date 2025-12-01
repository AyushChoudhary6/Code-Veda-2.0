import React, { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a sphere
function randomInSphere(count, radius) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

// Star Field Component
const StarField = ({ count = 5000 }) => {
  const ref = useRef();
  const positions = useMemo(() => randomInSphere(count, 1.5), [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// Nebula/Galaxy Spiral
const Nebula = () => {
  const ref = useRef();
  const count = 2000;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Spiral galaxy pattern
      const angle = (i / count) * Math.PI * 8;
      const radius = 0.1 + (i / count) * 0.8;
      const spread = (Math.random() - 0.5) * 0.3;
      
      pos[i * 3] = Math.cos(angle) * radius + spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      pos[i * 3 + 2] = Math.sin(angle) * radius + spread;
      
      // Color gradient: gold -> purple -> cyan
      const t = i / count;
      if (t < 0.33) {
        col[i * 3] = 1; // R
        col[i * 3 + 1] = 0.84; // G
        col[i * 3 + 2] = 0; // B (Gold)
      } else if (t < 0.66) {
        col[i * 3] = 0.62; // R
        col[i * 3 + 1] = 0.31; // G
        col[i * 3 + 2] = 0.87; // B (Purple)
      } else {
        col[i * 3] = 0; // R
        col[i * 3 + 1] = 0.85; // G
        col[i * 3 + 2] = 1; // B (Cyan)
      }
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 10;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Mouse-tracking light effect
const MouseLight = () => {
  const { viewport, mouse } = useThree();
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = (mouse.x * viewport.width) / 2;
      ref.current.position.y = (mouse.y * viewport.height) / 2;
    }
  });

  return (
    <pointLight
      ref={ref}
      intensity={0.5}
      color="#ffd700"
      distance={3}
      decay={2}
    />
  );
};

// Floating Planets/Orbs
const FloatingOrb = ({ position, color, size, speed }) => {
  const ref = useRef();
  const initialY = position[1];

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.1;
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
};

// Main Scene
const CosmicScene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <MouseLight />
      <StarField count={5000} />
      <Nebula />
      <FloatingOrb position={[-1.5, 0.5, -1]} color="#ffd700" size={0.08} speed={0.5} />
      <FloatingOrb position={[1.2, -0.3, -0.8]} color="#9d4edd" size={0.06} speed={0.7} />
      <FloatingOrb position={[0.8, 0.8, -1.2]} color="#00d9ff" size={0.05} speed={0.6} />
      <Preload all />
    </>
  );
};

// Main Component
const EnhancedCosmicBackground = ({ intensity = 'high' }) => {
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);

    const handler = (e) => setIsReduced(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (isReduced || intensity === 'low') {
    // Fallback to CSS-only background
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-cosmic-900 to-black" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-900/50 to-cosmic-900 z-10 pointer-events-none" />
      
      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: '#030008', pointerEvents: 'none' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <CosmicScene />
      </Canvas>
    </div>
  );
};

export default EnhancedCosmicBackground;
