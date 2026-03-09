import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(loadSlim).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        background: { color: "#ffffff" },
        particles: {
          number: { value: 50 },
          color: { value: ["#fff5e0","#f4dede"] },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.6 },
        },
      }}
    />
  );
}
