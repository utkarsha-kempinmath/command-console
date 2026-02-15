interface SystemBarProps {
  activeSection: number;
}

const sectorLabels = [
  "SECTOR 01 — PROJECTS",
  "SECTOR 02 — MISSIONS",
  "SECTOR 03 — SYSTEMS",
  "SECTOR 04 — EDUCATION",
  "SECTOR 05 — COMMS",
];

const SystemBar = ({ activeSection }: SystemBarProps) => {
  return (
    <header className="relative z-10 border-b border-border">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        <span className="system-text text-primary hidden sm:block">
          MISSION STATUS: <span className="text-foreground">ACTIVE</span>
        </span>
        <span className="font-mono text-sm md:text-base tracking-[0.25em] uppercase text-foreground font-medium">
          UTKARSHA KEMPINMATH
        </span>
        <span className="system-text hidden sm:block">
          COORDINATES: {sectorLabels[activeSection]}
        </span>
      </div>
    </header>
  );
};

export default SystemBar;
