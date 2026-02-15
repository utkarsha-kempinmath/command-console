import { useState, useEffect, useRef } from "react";
import Starfield from "@/components/Starfield";
import SystemBar from "@/components/SystemBar";
import CommandNav from "@/components/CommandNav";
import ProjectArchive from "@/components/sections/ProjectArchive";
import MissionLogs from "@/components/sections/MissionLogs";
import SystemCapabilities from "@/components/sections/SystemCapabilities";
import EducationRecords from "@/components/sections/EducationRecords";
import Transmission from "@/components/sections/Transmission";

const sections = [
  ProjectArchive,
  MissionLogs,
  SystemCapabilities,
  EducationRecords,
  Transmission,
];

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [visible, setVisible] = useState(true);
  const [warping, setWarping] = useState(false);

  const handleNavigate = (index: number) => {
    if (index === activeSection) return;
    setWarping(true);
    setVisible(false);
    setTimeout(() => {
      setActiveSection(index);
      setVisible(true);
    }, 400);
    setTimeout(() => {
      setWarping(false);
    }, 800);
  };

  const ActiveComponent = sections[activeSection];

  return (
    <div className="min-h-screen relative">
      <Starfield warp={warping} />

      {/* Warp vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500"
        style={{
          opacity: warping ? 0.6 : 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(12,17,28,0.9) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <SystemBar activeSection={activeSection} />

        <div className="flex flex-1 overflow-hidden">
          <CommandNav activeSection={activeSection} onNavigate={handleNavigate} />

          <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
            <div
              className={visible ? "section-fade-enter" : "section-fade-exit"}
              key={activeSection}
            >
              <ActiveComponent />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
