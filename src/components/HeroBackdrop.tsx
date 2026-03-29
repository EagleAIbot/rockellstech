import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

/** Big cyan torus — the “circle with a hole” look you liked */
function Donut({
  position,
  rotation,
  radius,
  tube,
  wireframe = false,
  emissiveBoost = 0.5,
}: {
  position: [number, number, number]
  rotation?: [number, number, number]
  radius: number
  tube: number
  wireframe?: boolean
  emissiveBoost?: number
}) {
  return (
    <mesh position={position} rotation={rotation}>
      {/* Coarse segments on wireframe = fewer lines, less “buzz” than before */}
      <torusGeometry args={[radius, tube, wireframe ? 10 : 40, wireframe ? 32 : 72]} />
      {wireframe ? (
        <meshBasicMaterial color="#5ee9f4" wireframe />
      ) : (
        <meshStandardMaterial
          color="#061018"
          emissive="#22d3ee"
          emissiveIntensity={emissiveBoost}
          metalness={0.78}
          roughness={0.22}
        />
      )}
    </mesh>
  )
}

function Scene() {
  const group = useRef<Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.022
  })

  return (
    <group ref={group}>
      <Float speed={0.55} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Hero: main donut — large, glowing, hole reads clearly */}
        <Donut
          position={[-2.15, 0.15, 0.2]}
          rotation={[0.55, 0.75, 0.18]}
          radius={1.18}
          tube={0.34}
          emissiveBoost={0.72}
        />

        {/* Second ring, slightly back — same vibe, smaller */}
        <Donut
          position={[-3.65, -0.45, -0.4]}
          rotation={[0.35, 0.5, -0.25]}
          radius={0.72}
          tube={0.2}
          emissiveBoost={0.48}
        />

        {/* Third — thin ring, upper left */}
        <Donut
          position={[-1.1, 1.05, -1.1]}
          rotation={[1.0, 0.3, 0.45]}
          radius={0.52}
          tube={0.12}
          emissiveBoost={0.4}
        />

        {/* The “sick” wireframe donut — low-poly, intentional, not triangle soup */}
        <Donut
          position={[-4.2, 0.35, 0.85]}
          rotation={[0.2, 1.15, 0.1]}
          radius={0.62}
          tube={0.16}
          wireframe
        />

        {/* Right: solid icosa (anchor) */}
        <mesh position={[2.35, 0.05, 0]}>
          <icosahedronGeometry args={[1.0, 1]} />
          <meshStandardMaterial
            color="#0a1224"
            emissive="#0891b2"
            emissiveIntensity={0.48}
            metalness={0.9}
            roughness={0.22}
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
        camera={{ position: [0, 0, 9], fov: 40 }}
        onCreated={({ gl, scene }) => {
          scene.background = null
          gl.setClearColor(0x000000, 0)
        }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <ambientLight intensity={0.38} />
        <pointLight position={[6, 8, 10]} intensity={100} color="#22d3ee" />
        <pointLight position={[-8, -2, 6]} intensity={55} color="#67e8f9" />
        <pointLight position={[2, -4, 4]} intensity={35} color="#6366f1" />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
