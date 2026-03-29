import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

/** Wireframe tori — spaced across the left / depth (the look you liked) */
const TORI: { pos: [number, number, number]; rot: [number, number, number]; tube: [number, number, number, number] }[] = [
  { pos: [-2.1, -0.4, -0.8], rot: [0.4, 0.6, 0], tube: [0.9, 0.26, 16, 64] },
  { pos: [-3.95, 0.55, 0.35], rot: [0.25, 1.05, 0.35], tube: [0.58, 0.17, 14, 48] },
  { pos: [-4.85, -0.9, 1.15], rot: [0.55, 0.35, 0.75], tube: [0.72, 0.2, 14, 56] },
  { pos: [-1.35, 1.25, -1.35], rot: [0.85, 0.25, 0.45], tube: [0.42, 0.13, 12, 40] },
  { pos: [-5.15, 0.2, -0.45], rot: [0.18, 0.65, 0.22], tube: [1.02, 0.21, 16, 64] },
  { pos: [-3.2, -1.35, 0.9], rot: [0.5, 0.9, 0.15], tube: [0.5, 0.16, 12, 44] },
]

function Scene() {
  const group = useRef<Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.045
  })

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.5}>
        {/* Right: solid icosahedron (keep one anchor) */}
        <mesh position={[2.5, 0.15, 0]}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#0c1222"
            emissive="#0891b2"
            emissiveIntensity={0.55}
            metalness={0.88}
            roughness={0.22}
          />
        </mesh>

        {/* Left field: multiple wireframe tori, spaced out */}
        {TORI.map((t, i) => (
          <mesh key={i} position={t.pos} rotation={t.rot}>
            <torusGeometry args={t.tube} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={0.22 + (i % 3) * 0.05}
              metalness={0.92}
              roughness={0.18}
              wireframe
            />
          </mesh>
        ))}

        {/* One small wireframe octahedron, left-upper for variety */}
        <mesh position={[-0.2, 1.65, -1.6]} rotation={[1.05, 0.4, 0.35]}>
          <octahedronGeometry args={[0.48, 0]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.38}
            metalness={0.75}
            roughness={0.35}
            wireframe
          />
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
        <ambientLight intensity={0.28} />
        <pointLight position={[8, 6, 8]} intensity={90} color="#22d3ee" />
        <pointLight position={[-7, -3, 5]} intensity={45} color="#6366f1" />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
