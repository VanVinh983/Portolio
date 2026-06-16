'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

/** Shared scroll progress (0..1), updated outside React to avoid re-renders. */
const scroll = { progress: 0 };

function useScrollTracker() {
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.progress = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}

/** A spiral galaxy made of colored particles. */
function Galaxy({
  count = 9000,
  position = [0, 0, 0],
  scale = 1,
  scrollSpin = 1,
  scrollTilt = 0.6,
}: {
  count?: number;
  position?: [number, number, number];
  scale?: number;
  scrollSpin?: number;
  scrollTilt?: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const radius = 6;
    const branches = 4;
    const spin = 1.1;
    const randomness = 0.45;
    const randomnessPower = 2.6;
    const inside = new THREE.Color('#ff8a5c');
    const outside = new THREE.Color('#5b8cff');

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * radius;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin;

      const rand = () =>
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + rand();
      positions[i3 + 1] = rand() * 0.5;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + rand();

      const mixed = inside.clone().lerp(outside, r / radius);
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // constant slow spin + scroll-driven extra spin and tilt
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.y += scroll.progress * scrollSpin * delta * 4;
    const targetTilt = 0.4 + scroll.progress * scrollTilt * Math.PI;
    ref.current.rotation.x += (targetTilt - ref.current.rotation.x) * 0.05;
    // gentle mouse parallax
    ref.current.position.x = position[0] + state.pointer.x * 0.4;
  });

  return (
    <points ref={ref} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        transparent
        opacity={0.9}
      />
    </points>
  );
}

/** Camera & starfield rig that drifts as the user scrolls. */
function Rig() {
  const group = useRef<THREE.Group>(null);
  const stars = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = scroll.progress;
    // ease camera downward + closer as we scroll
    state.camera.position.y += (-p * 6 - state.camera.position.y) * 0.05;
    state.camera.position.z += (12 - p * 4 - state.camera.position.z) * 0.05;
    state.camera.lookAt(0, -p * 4, 0);

    if (stars.current) {
      stars.current.rotation.y += 0.0004;
      stars.current.rotation.x = p * 0.6;
    }
    if (group.current) {
      // subtle mouse parallax for the whole scene
      group.current.rotation.y += (state.pointer.x * 0.15 - group.current.rotation.y) * 0.03;
      group.current.rotation.x += (-state.pointer.y * 0.1 - group.current.rotation.x) * 0.03;
    }
  });

  return (
    <group ref={group}>
      <group ref={stars}>
        <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={0.6} />
      </group>
      <Galaxy position={[3, 1, -6]} scale={1.1} scrollSpin={1.2} scrollTilt={0.8} />
      <Galaxy position={[-7, -3, -14]} scale={0.6} count={5000} scrollSpin={-0.8} scrollTilt={0.5} />
    </group>
  );
}

export default function SpaceBackground() {
  const [mounted, setMounted] = useState(false);
  useScrollTracker();
  useEffect(() => setMounted(true), []);

  // Solid space-colored fallback until the WebGL canvas is ready (and for SSR).
  if (!mounted) {
    return <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: '#05060d' }} aria-hidden />;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#05060d']} />
        <fog attach="fog" args={['#05060d', 18, 40]} />
        <Suspense fallback={null}>
          <Rig />
        </Suspense>
      </Canvas>
    </div>
  );
}
