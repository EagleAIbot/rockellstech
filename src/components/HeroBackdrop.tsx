import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, Float } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

const edgeCyan = '#22d3ee'
const edgeBlue = '#38bdf8'

/** Solid bodies + Edges only — full wireframe = triangle soup that shimmers like “flies” when it rotates */
function Shape({
  position,
  rotation,
  children,
  edgeColor = edgeCyan,
}: {
  position: [number, number, number]
  rotation?: [number, number, number]
  children: React.ReactNode
  edgeColor?: string
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        {children}
        <meshStandardMaterial
          color="#070d18"
          emissive="#0e7490"
          emissiveIntensity={0.15}
          metalness={0.92}
          roughness={0.28}
        />
        <Edges color={edgeColor} threshold={18} />
      </mesh>
    </group>
  )
}

function Scene() {
  const group = useRef<Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.028
  })

  return (
    <group ref={group}>
      {/* Gentle float only — high speed + wireframe was reading as “buzzing” */}
      <Float speed={0.6} rotationIntensity={0.12} floatIntensity={0.22}>
        {/* Right anchor — solid icosa */}
        <mesh position={[2.45, 0.1, 0]}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial
            color="#0a1224"
            emissive="#0891b2"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.22}
          />
          <Edges color={edgeCyan} threshold={20} />
        </mesh>

        {/* Left cluster — varied primitives, spaced, no wireframe fill */}
        <Shape position={[-2.05, -0.35, -0.75]} rotation={[0.45, 0.55, 0.15]}>
          <torusGeometry args={[0.88, 0.24, 24, 64]} />
        </Shape>

        <Shape position={[-3.85, 0.5, 0.25]} rotation={[0.2, 1.0, 0.3]}>
          <torusKnotGeometry args={[0.62, 0.18, 120, 12]} />
        </Shape>

        <Shape position={[-4.7, -0.85, 1.05]} rotation={[0.5, 0.3, 0.7]} edgeColor={edgeBlue}>
          <dodecahedronGeometry args={[0.72, 0]} />
        </Shape>

        <Shape position={[-1.25, 1.2, -1.3]} rotation={[0.8, 0.2, 0.4]}>
          <octahedronGeometry args={[0.52, 0]} />
        </Shape>

        <Shape position={[-5.0, 0.15, -0.4]} rotation={[0.15, 0.6, 0.2]}>
          <torusGeometry args={[0.98, 0.2, 28, 72]} />
        </Shape>

        <mesh position={[-3.1, -1.25, 0.85]} rotation={[0.25, 0.85, 0.1]}>
          <coneGeometry args={[0.55, 1.1, 7]} />
          <meshStandardMaterial color="#070d18" emissive="#0e7490" emissiveIntensity={0.12} metalness={0.88} roughness={0.3} />
          <Edges color={edgeCyan} threshold={18} />
        </mesh>

        <mesh position={[-0.35, 1.55, -1.55]} rotation={[1.0, 0.35, 0.4]}>
          <tetrahedronGeometry args={[0.58, 0]} />
          <meshStandardMaterial color="#070d18" emissive="#0369a1" emissiveIntensity={0.18} metalness={0.85} roughness={0.32} />
          <Edges color={edgeBlue} threshold={16} />
        </mesh>

        <mesh position={[-4.2, 1.35, 0.1]} rotation={[0.5, 0.4, -0.3]}>
          <cylinderGeometry args={[0.35, 0.45, 1.15, 10]} />
          <meshStandardMaterial color="#070d18" emissive="#0e7490" emissiveIntensity={0.14} metalness={0.9} roughness={0.26} />
          <Edges color={edgeCyan} threshold={18} />
        </mesh>
      </Float>
    </group>
  )
}

export function HeroBackdrop() {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    setOk(true)
  }, [])

  if (!ok) return null

  return (
    <div className="hero-canvas-wrap" aria-hidden>
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 9], fov: 42 }}
        onCreated={({ gl, scene }) => {
          scene.background = null
          gl.setClearColor(0x000000, 0)
        }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <ambientLight intensity={0.32} />
        <pointLight position={[8, 6, 8]} intensity={85} color="#22d3ee" />
        <pointLight position={[-7, -3, 5]} intensity={40} color="#6366f1" />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
