"use client";

import { Canvas } from "@react-three/fiber";
import { Particles } from "./Particles";
import { Suspense } from "react";

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={[1, 1.5]}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "auto",
      }}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
    </Canvas>
  );
}
