"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text } from "@react-three/drei"
import * as THREE from "three"

const skills = [
  { name: "React", color: "#61dafb", position: [0, 2, 0] as [number, number, number] },
  { name: "Next.js", color: "#ffffff", position: [2, 1, 1] as [number, number, number] },
  { name: "TypeScript", color: "#3178c6", position: [-2, 1, 1] as [number, number, number] },
  { name: "Django", color: "#092e20", position: [1.5, -1, 1.5] as [number, number, number] },
  { name: "Python", color: "#3776ab", position: [-1.5, -1, 1.5] as [number, number, number] },
  { name: "Tailwind", color: "#06b6d4", position: [0, 0, 2] as [number, number, number] },
  { name: "PostgreSQL", color: "#336791", position: [2.5, 0, -1] as [number, number, number] },
  { name: "Node.js", color: "#339933", position: [-2.5, 0, -1] as [number, number, number] },
  { name: "Git", color: "#f05032", position: [0, -2, 0] as [number, number, number] },
  { name: "Redux", color: "#764abc", position: [1, 1.5, -1.5] as [number, number, number] },
  { name: "REST API", color: "#22d3ee", position: [-1, 1.5, -1.5] as [number, number, number] },
  { name: "MongoDB", color: "#47a248", position: [0, -1, -2] as [number, number, number] },
]

function SkillNode({ name, color, position }: { name: string; color: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3 + position[1]) * 0.1
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        {/* Glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
        {/* Core sphere */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Text label */}
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter.woff"
        >
          {name}
        </Text>
      </group>
    </Float>
  )
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions: number[] = []
    
    // Create connections between nearby skills
    for (let i = 0; i < skills.length; i++) {
      for (let j = i + 1; j < skills.length; j++) {
        const dist = Math.sqrt(
          Math.pow(skills[i].position[0] - skills[j].position[0], 2) +
          Math.pow(skills[i].position[1] - skills[j].position[1], 2) +
          Math.pow(skills[i].position[2] - skills[j].position[2], 2)
        )
        if (dist < 3) {
          positions.push(...skills[i].position, ...skills[j].position)
        }
      }
    }
    
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#22d3ee" transparent opacity={0.2} />
    </lineSegments>
  )
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.3, 1]} />
      <meshStandardMaterial
        color="#22d3ee"
        metalness={0.9}
        roughness={0.1}
        emissive="#22d3ee"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  )
}

export function SkillsSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      
      <group rotation={[0.2, 0, 0]}>
        <CentralCore />
        <ConnectionLines />
        {skills.map((skill) => (
          <SkillNode key={skill.name} {...skill} />
        ))}
      </group>
      
      <fog attach="fog" args={['#0a0a12', 8, 20]} />
    </Canvas>
  )
}
