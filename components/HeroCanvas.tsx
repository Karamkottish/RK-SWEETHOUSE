"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

// Individual candy sphere
function CandySphere({
  position,
  scale,
  color,
  speed,
  distort,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.4;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere ref={meshRef} position={position} args={[1, 64, 64]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.05}
          metalness={0.3}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

// Floating sparkle particles
function SparkleParticles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FF4D9E"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Scene with all candy elements
function Scene() {
  const candies = useMemo(
    () => [
      { position: [0, 0, 0] as [number,number,number], scale: 1.8, color: "#FF4D9E", speed: 0.8, distort: 0.4 },
      { position: [2.8, 1.2, -1] as [number,number,number], scale: 0.9, color: "#FFB3D9", speed: 1.2, distort: 0.3 },
      { position: [-2.5, -1, -0.5] as [number,number,number], scale: 0.7, color: "#E91E8C", speed: 1.0, distort: 0.5 },
      { position: [1.5, -2, 0.5] as [number,number,number], scale: 0.6, color: "#FFD6EC", speed: 1.4, distort: 0.35 },
      { position: [-1.8, 2, 0] as [number,number,number], scale: 0.5, color: "#FF85C1", speed: 1.6, distort: 0.45 },
      { position: [3.2, -0.5, -0.5] as [number,number,number], scale: 0.4, color: "#FF4D9E", speed: 1.8, distort: 0.3 },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.6} color="#FFF0F7" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#FF4D9E"
        castShadow
      />
      <directionalLight
        position={[-5, -5, 2]}
        intensity={0.5}
        color="#FFD6EC"
      />
      <pointLight position={[0, 0, 3]} intensity={1} color="#FF85C1" />

      {candies.map((candy, i) => (
        <CandySphere key={i} {...candy} />
      ))}

      <SparkleParticles />

      <Stars
        radius={30}
        depth={20}
        count={300}
        factor={1}
        saturation={0.8}
        fade
        speed={0.5}
      />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
