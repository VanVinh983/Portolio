'use client';

import React, { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Icosahedron, Torus, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/** Particle cloud that gently repels away from the pointer. */
function ReactiveParticles({ count = 600 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const base = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const positions = useMemo(() => base.slice(), [base]);

  useFrame((state) => {
    const pts = pointsRef.current;
    if (!pts) return;
    const arr = (pts.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    const px = (state.pointer.x * viewport.width) / 2;
    const py = (state.pointer.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const bx = base[ix];
      const by = base[ix + 1];
      const dx = bx - px;
      const dy = by - py;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = Math.max(0, 1.8 - dist) * 1.4;
      const tx = bx + (dx / dist) * force;
      const ty = by + (dy / dist) * force;
      arr[ix] += (tx - arr[ix]) * 0.1;
      arr[ix + 1] += (ty - arr[ix + 1]) * 0.1;
      arr[ix + 2] += (base[ix + 2] - arr[ix + 2]) * 0.1;
    }
    (pts.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    pts.rotation.y += 0.0008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#93c5fd" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/** Faceted crystal core that grows + brightens on hover. */
function Core() {
  const [hovered, setHovered] = useState(false);
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const target = hovered ? 1.18 : 1;
    if (inner.current) {
      inner.current.scale.x += (target - inner.current.scale.x) * 0.1;
      inner.current.scale.y = inner.current.scale.x;
      inner.current.scale.z = inner.current.scale.x;
      inner.current.rotation.y += delta * 0.25;
      inner.current.rotation.x += delta * 0.1;
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.9}>
      {/* Faceted gem core (flat shading shows crisp facets) */}
      <Icosahedron
        ref={inner}
        args={[1.25, 1]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'grab'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
      >
        <meshStandardMaterial
          color={hovered ? '#a5b4fc' : '#4f7dff'}
          emissive="#1e3a8a"
          emissiveIntensity={hovered ? 0.9 : 0.5}
          metalness={0.5}
          roughness={0.25}
          flatShading
        />
      </Icosahedron>

      {/* Wireframe shell */}
      <Icosahedron ref={shell} args={[1.7, 1]}>
        <meshBasicMaterial color="#7dd3fc" wireframe transparent opacity={0.45} />
      </Icosahedron>

      {/* Orbiting rings (sized to stay inside the frame) */}
      <Torus args={[2.2, 0.012, 16, 120]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshBasicMaterial color="#818cf8" transparent opacity={0.55} />
      </Torus>
      <Torus args={[2.55, 0.01, 16, 120]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
      </Torus>
    </Float>
  );
}

const Hero3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 6]} intensity={140} color="#93c5fd" />
      <pointLight position={[-6, -4, 2]} intensity={70} color="#c084fc" />
      <Suspense fallback={null}>
        <Core />
        <ReactiveParticles />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
};

export default Hero3D;
