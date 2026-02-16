import { useState } from "react";

interface LandingDeckProps {
  onEnter: (sectionIndex?: number) => void;
}

const navItems = [
  { id: 0, label: "PROJECT ARCHIVE", position: "top-left" },
  { id: 1, label: "MISSION LOGS", position: "top-right" },
  { id: 2, label: "SYSTEM CAPABILITIES", position: "bottom-left" },
  { id: 3, label: "EDUCATION RECORDS", position: "bottom-right" },
  { id: 4, label: "TRANSMISSION", position: "bottom-center" },
];

const LandingDeck = ({ onEnter }: LandingDeckProps) => {
  const [exiting, setExiting] = useState(false);

  const handleNav = (index: number) => {
    setExiting(true);
    setTimeout(() => onEnter(index), 600);
  };

  const handleEnter = () => {
    setExiting(true);
    setTimeout(() => onEnter(0), 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Deck frame */}
      <div className="relative w-[90vw] max-w-4xl aspect-[16/9] flex items-center justify-center">
        {/* HUD border frame */}
        <div className="absolute inset-0 border border-border/60 rounded-sm">
          {/* Corner accents */}
          <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-sm" />
          <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-sm" />
          <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-sm" />
          <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-sm" />

          {/* Top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] rounded-sm overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180,200,230,0.04) 2px, rgba(180,200,230,0.04) 4px)",
            }}
          />
        </div>

        {/* Navigation items spread around the deck */}
        {/* Top-left */}
        <button
          onClick={() => handleNav(0)}
          className="absolute top-4 left-4 md:top-6 md:left-6 group cursor-pointer text-left"
        >
          <span className="system-text text-[9px] md:text-[10px] text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
            <span className="text-primary/50 group-hover:text-primary/80 mr-1">01</span>
            PROJECT ARCHIVE
          </span>
          <div className="h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-300 mt-1" />
        </button>

        {/* Top-right */}
        <button
          onClick={() => handleNav(1)}
          className="absolute top-4 right-4 md:top-6 md:right-6 group cursor-pointer text-right"
        >
          <span className="system-text text-[9px] md:text-[10px] text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
            MISSION LOGS
            <span className="text-primary/50 group-hover:text-primary/80 ml-1">02</span>
          </span>
          <div className="h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-300 mt-1 ml-auto" />
        </button>

        {/* Bottom-left */}
        <button
          onClick={() => handleNav(2)}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 group cursor-pointer text-left"
        >
          <div className="h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-300 mb-1" />
          <span className="system-text text-[9px] md:text-[10px] text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
            <span className="text-primary/50 group-hover:text-primary/80 mr-1">03</span>
            SYSTEM CAPABILITIES
          </span>
        </button>

        {/* Bottom-right */}
        <button
          onClick={() => handleNav(3)}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 group cursor-pointer text-right"
        >
          <div className="h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-300 mb-1 ml-auto" />
          <span className="system-text text-[9px] md:text-[10px] text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
            EDUCATION RECORDS
            <span className="text-primary/50 group-hover:text-primary/80 ml-1">04</span>
          </span>
        </button>

        {/* Bottom-center */}
        <button
          onClick={() => handleNav(4)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 group cursor-pointer text-center"
        >
          <div className="h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-300 mb-1 mx-auto" />
          <span className="system-text text-[9px] md:text-[10px] text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
            <span className="text-primary/50 group-hover:text-primary/80 mr-1">05</span>
            TRANSMISSION
          </span>
        </button>

        {/* Center content */}
        <div className="text-center z-10 flex flex-col items-center gap-4 md:gap-6 px-4">
          <div className="system-text text-[10px] text-muted-foreground/50 tracking-[0.3em] animate-pulse">
            SYSTEM ONLINE
          </div>

          <h1 className="font-mono text-lg md:text-2xl lg:text-3xl tracking-[0.15em] uppercase text-foreground font-light">
            Navigation Deck
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <p className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase max-w-xs">
            Utkarsha Kempinmath
          </p>

          <button
            onClick={handleEnter}
            className="mt-4 md:mt-6 command-button text-[10px] md:text-xs"
          >
            Initialize Interface
          </button>

          <div className="system-text text-[9px] text-muted-foreground/30 tracking-[0.2em] mt-2">
            SELECT A SECTOR OR INITIALIZE
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDeck;
