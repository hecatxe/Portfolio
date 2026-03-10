import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadHeartShape } from "@tsparticles/shape-heart";


export default function Background() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
    await loadHeartShape(engine);
  }).then(() => setReady(true));
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
          color: { value: ["#7b1d26", "#893a49","#ca99ab"] },
          shape: { type: "heart" },
          size: { value: { min: 2, max: 5 } },
          move: { enable: true, speed: 0.6 },
        },
      }}
    />
  );
}
