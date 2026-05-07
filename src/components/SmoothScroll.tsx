"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
