import { Menu, X } from "lucide-react";
import { useState } from "react";

interface CommandNavProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const sections = [
  { id: 0, label: "PROJECT ARCHIVE" },
  { id: 1, label: "MISSION LOGS" },
  { id: 2, label: "SYSTEM CAPABILITIES" },
  { id: 3, label: "EDUCATION RECORDS" },
  { id: 4, label: "TRANSMISSION" },
];

const CommandNav = ({ activeSection, onNavigate }: CommandNavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: number) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-3 left-3 z-50 p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav
        className={`
          fixed md:relative z-40 top-0 left-0 h-full
          w-56 border-r border-border bg-card/80 backdrop-blur-md
          flex flex-col pt-14 md:pt-4
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="panel-header mb-2">NAVIGATION</div>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNav(section.id)}
            className={`nav-item text-left ${
              activeSection === section.id ? "nav-item-active" : ""
            }`}
          >
            <span className="text-muted-foreground mr-2">
              {String(section.id + 1).padStart(2, "0")}
            </span>
            {section.label}
          </button>
        ))}

        <div className="mt-auto px-4 py-4 border-t border-border">
          <div className="system-text text-[10px] leading-relaxed">
            SYS.VERSION 1.0.0
            <br />
            STATUS: OPERATIONAL
          </div>
        </div>
      </nav>
    </>
  );
};

export default CommandNav;
