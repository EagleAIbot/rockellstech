import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

function Scene() {
  const group = useRef<Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.06
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.55}>
        <mesh position={[2.4, 0.2, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#0c1222"
            emissive="#0891b2"
            emissiveIntensity={0.55}
            metalness={0.88}
            roughness={0.22}
          />
        </mesh>
        <mesh position={[-2.1, -0.4, -0.8]} rotation={[0.4, 0.6, 0]}>
          <torusGeometry args={[0.9, 0.26, 16, 64]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.28}
            metalness={0.92}
            roughness={0.18}
            wireframe
          />
        </mesh>
        <mesh position={[0.2, 1.5, -1.5]} rotation={[1.1, 0, 0.5]}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.45}
            metalness={0.75}
            roughness={0.35}
            wireframe
          />
        </mesh>
      </Float>
      <Sparkles count={90} scale={[16, 12, 6]} size={2.4} speed={0.4} color="#67e8f9" opacity={0.38} />
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
        camera={{ position: [0, 0, 9], fov: 40 }}
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
