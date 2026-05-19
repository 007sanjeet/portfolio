"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars, useTexture, Text } from "@react-three/drei"
import * as THREE from "three"

function FloatingLaptop() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} position={[0, 0, 0]}>
        {/* Laptop base */}
        <mesh position={[0, -0.1, 0]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[2.4, 0.1, 1.6]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Laptop screen */}
        <mesh position={[0, 0.7, -0.7]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[2.2, 1.4, 0.05]} />
          <meshStandardMaterial color="#0f0f1a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Screen glow */}
        <mesh position={[0, 0.7, -0.65]} rotation={[0.3, 0, 0]}>
          <planeGeometry args={[2, 1.2]} />
          <meshBasicMaterial color="#22d3ee" opacity={0.3} transparent />
        </mesh>
      </group>
    </Float>
  )
}

function CodeParticles() {
  const count = 100
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#22d3ee"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingCard({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={[0.8, 0.5, 0.02]} />
        <meshStandardMaterial 
          color="#1e1e3a" 
          metalness={0.5} 
          roughness={0.3}
          emissive="#22d3ee"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

function GeometricShapes() {
  const torusRef = useRef<THREE.Mesh>(null)
  const icosaRef = useRef<THREE.Mesh>(null)
  const octaRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = state.clock.elapsedTime * 0.15
      icosaRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = state.clock.elapsedTime * 0.25
      octaRef.current.rotation.z = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={torusRef} position={[-4, 2, -3]}>
          <torusGeometry args={[0.5, 0.15, 16, 32]} />
          <meshStandardMaterial
            color="#22d3ee"
            metalness={0.8}
            roughness={0.2}
            emissive="#22d3ee"
            emissiveIntensity={0.2}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={icosaRef} position={[4, -1, -2]}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.7}
            roughness={0.3}
            emissive="#3b82f6"
            emissiveIntensity={0.15}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh ref={octaRef} position={[3, 3, -4]}>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.9}
            roughness={0.1}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
            wireframe
          />
        </mesh>
      </Float>
    </>
  )
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#22d3ee"
      />
      
      <FloatingLaptop />
      <CodeParticles />
      <GeometricShapes />
      
      <FloatingCard position={[-2.5, 1.5, -1]} rotation={[0, 0.3, 0.1]} />
      <FloatingCard position={[2.5, -0.5, -1]} rotation={[0, -0.3, -0.1]} />
      <FloatingCard position={[-1.5, -1.5, -2]} rotation={[0.1, 0.2, 0]} />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <fog attach="fog" args={['#0a0a12', 5, 20]} />
    </Canvas>
  )
}
