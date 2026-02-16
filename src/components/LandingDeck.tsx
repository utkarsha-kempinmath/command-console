import { useState, useEffect } from "react";
import ProjectArchive from "@/components/sections/ProjectArchive";
import MissionLogs from "@/components/sections/MissionLogs";
import SystemCapabilities from "@/components/sections/SystemCapabilities";
import EducationRecords from "@/components/sections/EducationRecords";
import Transmission from "@/components/sections/Transmission";

const sections = [
  { id: 0, label: "PROJECT ARCHIVE", sector: "SECTOR 01" },
  { id: 1, label: "MISSION LOGS", sector: "SECTOR 02" },
  { id: 2, label: "SYSTEM CAPABILITIES", sector: "SECTOR 03" },
  { id: 3, label: "EDUCATION RECORDS", sector: "SECTOR 04" },
  { id: 4, label: "TRANSMISSION", sector: "SECTOR 05" },
];

const sectionComponents = [
  ProjectArchive,
  MissionLogs,
  SystemCapabilities,
  EducationRecords,
  Transmission,
];

interface LandingDeckProps {
  onWarp: () => void;
}

const LandingDeck = ({ onWarp }: LandingDeckProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor
  useEffect(() => {
    if (activeSection !== null) return;
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [activeSection]);

  const handleNav = (index: number) => {
    if (activeSection === index) return;
    onWarp();
    setVisible(false);
    setTimeout(() => {
      setActiveSection(index);
      setVisible(true);
    }, 350);
  };

  const handleBack = () => {
    onWarp();
    setVisible(false);
    setTimeout(() => {
      setActiveSection(null);
      setVisible(true);
    }, 350);
  };

  const ActiveComponent = activeSection !== null ? sectionComponents[activeSection] : null;

  // Nav positions for desktop: edges of viewport
  const navPositions = [
    "top-6 left-6 md:top-8 md:left-10 items-start text-left",       // top-left
    "top-6 right-6 md:top-8 md:right-10 items-end text-right",      // top-right
    "bottom-6 left-6 md:bottom-8 md:left-10 items-start text-left", // bottom-left
    "bottom-6 right-6 md:bottom-8 md:right-10 items-end text-right",// bottom-right
    "bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 items-center text-center", // bottom-center
  ];

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      {/* Edge navigation labels — hidden on mobile when section is active */}
      <div className="hidden md:block">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => handleNav(i)}
            className={`fixed ${navPositions[i]} flex flex-col gap-1 group cursor-pointer z-20`}
          >
            {/* Line accent */}
            <div
              className={`h-px bg-primary/20 group-hover:bg-primary/50 transition-all duration-500
                ${i <= 1 ? "mb-1" : "order-first mb-1"}
                ${activeSection === i ? "w-12 bg-primary/50" : "w-6 group-hover:w-12"}
                ${i === 1 || i === 3 ? "ml-auto" : ""}
                ${i === 4 ? "mx-auto" : ""}
              `}
            />
            <span
              className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300
                ${activeSection === i
                  ? "text-foreground"
                  : "text-muted-foreground/40 group-hover:text-muted-foreground"
                }
              `}
            >
              <span className="text-primary/40 group-hover:text-primary/60 mr-1.5 transition-colors duration-300">
                {String(s.id + 1).padStart(2, "0")}
              </span>
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* Central Panel */}
      <div className="relative w-[92vw] max-w-3xl mx-auto">
        {/* Panel frame */}
        <div className="relative border border-border/40 bg-card/30 backdrop-blur-sm overflow-hidden">
          {/* Corner accents */}
          <div className="absolute -top-px -left-px w-10 h-10 border-t border-l border-primary/30" />
          <div className="absolute -top-px -right-px w-10 h-10 border-t border-r border-primary/30" />
          <div className="absolute -bottom-px -left-px w-10 h-10 border-b border-l border-primary/30" />
          <div className="absolute -bottom-px -right-px w-10 h-10 border-b border-r border-primary/30" />

          {/* Top accent line */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {/* Subtle inner glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(ellipse at center, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
            }}
          />

          {/* Scanline texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.015]"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180,200,230,0.04) 2px, rgba(180,200,230,0.04) 4px)",
            }}
          />

          {/* Panel top bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/30">
            <span className="system-text text-[9px] text-muted-foreground/40">
              {activeSection !== null ? sections[activeSection].sector : "SYS.READY"}
            </span>
            <span className="system-text text-[9px] text-muted-foreground/40">
              STATUS: OPERATIONAL
            </span>
          </div>

          {/* Panel content */}
          <div
            className="relative z-10 px-6 py-8 md:px-10 md:py-10 min-h-[50vh] max-h-[70vh] overflow-y-auto"
          >
            <div
              key={activeSection ?? "home"}
              className={visible ? "section-fade-enter" : "section-fade-exit"}
            >
              {activeSection === null ? (
                /* Welcome state */
                <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-5">
                  <div className="system-text text-[9px] text-muted-foreground/30 tracking-[0.4em]">
                    INTERFACE INITIALIZED
                  </div>

                  <h1 className="font-mono text-xl md:text-2xl lg:text-3xl tracking-[0.12em] uppercase text-foreground font-light leading-relaxed">
                    Command Interface Online
                  </h1>

                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <p className="font-mono text-xs md:text-sm text-muted-foreground tracking-[0.15em] uppercase">
                    Commander: Utkarsha Kempinmath
                  </p>

                  <div className="font-mono text-sm text-muted-foreground/50 h-5">
                    <span className="text-primary/40">{'>'}</span>
                    <span className={cursorVisible ? "opacity-100" : "opacity-0"}>_</span>
                  </div>

                  <div className="system-text text-[9px] text-muted-foreground/25 tracking-[0.3em] mt-4">
                    SELECT A SECTOR TO NAVIGATE
                  </div>

                  {/* Mobile nav */}
                  <div className="md:hidden mt-6 w-full max-w-xs space-y-2">
                    {sections.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => handleNav(i)}
                        className="w-full flex items-center gap-3 py-2.5 px-3 group cursor-pointer text-left border border-transparent hover:border-border/30 transition-colors"
                      >
                        <span className="font-mono text-[10px] text-primary/40 group-hover:text-primary/60 transition-colors">
                          {String(s.id + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                          {s.label}
                        </span>
                        <div className="ml-auto h-px w-0 group-hover:w-4 bg-primary/30 transition-all duration-300" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Section content */
                <div>
                  {/* Back button */}
                  <button
                    onClick={handleBack}
                    className="mb-4 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-primary/40">{'<'}</span> BACK TO DECK
                  </button>

                  {/* Mobile section nav */}
                  <div className="md:hidden mb-4 flex flex-wrap gap-2">
                    {sections.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => handleNav(i)}
                        className={`font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-1 border transition-colors
                          ${activeSection === i
                            ? "border-primary/40 text-foreground"
                            : "border-transparent text-muted-foreground/40 hover:text-muted-foreground/60"
                          }
                        `}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  {ActiveComponent && <ActiveComponent />}
                </div>
              )}
            </div>
          </div>

          {/* Panel bottom bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-border/30">
            <span className="system-text text-[9px] text-muted-foreground/30">
              UTKARSHA.DECK v1.0
            </span>
            <span className="system-text text-[9px] text-muted-foreground/30">
              MISSION STATUS: ACTIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDeck;
