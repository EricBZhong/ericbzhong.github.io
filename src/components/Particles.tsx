"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export function Particles() {
  const count = useMemo(() => (isMobile() ? 800 : 1500), []);
  const ref = useRef<THREE.Points>(null!);
  const mouseSmooth = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    random.inSphere(pos, { radius: 2.5 });
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const blue = new THREE.Color("#3b82f6");
    const cyan = new THREE.Color("#06b6d4");
    for (let i = 0; i < count; i++) {
      const z = positions[i * 3 + 2];
      const t = (z + 2.5) / 5;
      const color = blue.clone().lerp(cyan, t);
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, [count, positions]);

  useFrame(({ pointer, clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();

    mouseSmooth.current.x += (pointer.x * 0.3 - mouseSmooth.current.x) * 0.05;
    mouseSmooth.current.y += (pointer.y * 0.3 - mouseSmooth.current.y) * 0.05;

    ref.current.rotation.x = Math.sin(t * 0.1) * 0.15 + mouseSmooth.current.y * 0.3;
    ref.current.rotation.y = t * 0.05 + mouseSmooth.current.x * 0.3;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}
