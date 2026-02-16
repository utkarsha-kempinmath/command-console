import { useState, useCallback } from "react";
import Starfield from "@/components/Starfield";
import LandingDeck from "@/components/LandingDeck";

const Index = () => {
  const [warping, setWarping] = useState(false);

  const handleWarp = useCallback(() => {
    setWarping(true);
    setTimeout(() => setWarping(false), 600);
  }, []);

  return (
    <div className="min-h-screen relative bg-background">
      <Starfield warp={warping} />

      {/* Warp vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500"
        style={{
          opacity: warping ? 0.5 : 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(12,17,28,0.9) 100%)",
        }}
      />

      <LandingDeck onWarp={handleWarp} />
    </div>
  );
};

export default Index;
