import { useState } from "react";
import { ExternalLink, X, Image as ImageIcon, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  stack: string[];
  status: string;
  features?: string[];
  image?: string[];
  github?: string;
  featured?: boolean;
  imageCount?: number;
}

const projects: Project[] = [
  {
    name: "MonthEnd — Behavioral Finance Platform",
    description:
      "Behavioral budgeting platform analyzing spending psychology. Backend built with Node.js, Express.js. MongoDB database design. JWT authentication. REST APIs. MVP stage. ML-ready architecture for behavioral insights.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    status: "MVP",
    featured: true,
    imageCount: 3,
    github: "https://github.com/utkarsha-kempinmath/MonthEnd",
    features: [
      "Behavioral budgeting engine analyzing spending psychology",
      "JWT secured REST API architecture",
      "MongoDB schema for user financial profiles",
      "ML ready pipeline for behavioral insights",
      "Emergence Pre-Incubation @ IIT Delhi",
    ],
  },
  {
    name: "Mini Twitter & Notes App",
    description:
      "Full-stack MERN social application with authentication, CRUD operations, and user authorization.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "COMPLETE",
    imageCount: 2,
    github: "https://github.com/utkarsha-kempinmath/mini-Social-Media-app",
    features: [
      "User authentication & authorization",
      "Tweet CRUD operations",
      "Notes management system",
    ],
  },
  {
    name: "Smart Attendance",
    description:
      "QR-based verification system with React frontend for streamlined attendance tracking.",
    stack: ["React", "QR Verification", "Node.js"],
    status: "COMPLETE",
    imageCount: 2,
    github: "https://github.com/utkarsha-kempinmath/Smart-Attencence-",
    features: [
      "QR code generation & scanning",
      "Real-time attendance verification",
      "React-based dashboard",
    ],
  },
  {
    name: "ReCraft",
    description:
      "A responsive Instagram-style upcycling social interface built using HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "COMPLETE",
    imageCount: 2,
    image: [
    "/projects/smartAttendence/image.png",
    "/projects/smartAttendence/img.png"
  ]
    github: "https://github.com/utkarsha-kempinmath/ReCraft",
    features: [
      "Responsive layout using Flexbox & Grid",
      "Clean card-based UI structure",
      "Interactive styling and transitions",
      "Strengthening frontend fundamentals",
    ],
  },
  {
    name: "Netflix Clone & Portfolio Website",
    description: "Responsive UI projects demonstrating frontend proficiency and design implementation.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    status: "COMPLETE",
    imageCount: 2,
    features: [
      "Pixel-perfect responsive layouts",
      "Component-based architecture",
      "Modern CSS techniques",
    ],
  },
];

const HudCorners = () => (
  <>
    <span className="hud-corner hud-corner-tl" />
    <span className="hud-corner hud-corner-tr" />
    <span className="hud-corner hud-corner-bl" />
    <span className="hud-corner hud-corner-br" />
  </>
);

const ProjectArchive = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative">
      <div className="panel-header mb-6">// PROJECT ARCHIVE — CATALOGUED DEPLOYMENTS</div>

      {/* Featured */}
      <div className="mb-8">
        <div className="system-text text-primary mb-3">▸ FEATURED TARGET</div>
        <div
          className="hud-panel p-5 cursor-pointer transition-all duration-200 hover:border-primary/40 border-primary/20"
          onClick={() => setSelectedProject(projects[0])}
        >
          <HudCorners />
          <div className="hud-scanline" />
          <div className="flex items-start justify-between mb-2">
            <span className="system-text text-primary">TARGET IDENTIFIED</span>
            <span className="system-text text-primary">{projects[0].status}</span>
          </div>
          <h3 className="font-mono text-base text-foreground mb-2">{projects[0].name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {projects[0].description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {projects[0].stack.map((tech) => (
              <span key={tech} className="system-text text-[10px] px-2 py-0.5 border border-border rounded-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="system-text text-primary/60 text-[10px]">Founder</span>
            <span className="system-text text-[10px] text-muted-foreground flex items-center gap-1">
              <ImageIcon size={10} /> {projects[0].imageCount} CAPTURES
            </span>
          </div>
        </div>
      </div>

      {/* Other projects */}
      <div className="system-text text-muted-foreground mb-3">▸ OTHER DEPLOYMENTS</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {projects.slice(1).map((project) => (
          <div
            key={project.name}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <HudCorners />
            <div className="flex items-start justify-between mb-1">
              <span className="system-text text-[10px] text-muted-foreground">TARGET IDENTIFIED</span>
              <span className="system-text text-[10px]">{project.status}</span>
            </div>
            <h4 className="font-mono text-sm text-foreground mb-1">{project.name}</h4>
            <div className="flex flex-wrap gap-1.5 mt-2 mb-2">
              {project.stack.map((tech) => (
                <span key={tech} className="system-text text-[10px] px-1.5 py-0.5 border border-border rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
            <span className="system-text text-[10px] text-muted-foreground flex items-center gap-1">
              <ImageIcon size={10} /> {project.imageCount} CAPTURES
            </span>
          </div>
        ))}
      </div>

      {/* Side panel */}
      {selectedProject && (
        <>
          <div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
            onClick={() => setSelectedProject(null)}
          />
          <div
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-card/95 backdrop-blur-md border-l border-border z-50 overflow-y-auto"
            style={{ animation: "sectionFadeIn 200ms ease-out" }}
          >
            <div className="hud-scanline" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="system-text text-primary">PROJECT DETAILS</span>
                <button onClick={() => setSelectedProject(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={16} />
                </button>
              </div>

              <h3 className="font-mono text-lg text-foreground mb-2">{selectedProject.name}</h3>
              <span className="system-text text-[10px] text-primary">{selectedProject.status}</span>

              {/* Image gallery placeholder */}
              <div className="border-t border-border mt-4 pt-4">
                <div className="system-text mb-3">VISUAL CAPTURES</div>
                <div className="grid grid-cols-2 gap-2">
                  {Array.from({ length: selectedProject.imageCount || 2 }).map((_, i) => (
                    <div
                      key={i}
                      className="hud-panel aspect-video flex items-center justify-center border-dashed border-border"
                    >
                      <HudCorners />
                      <div className="text-center">
                        <ImageIcon size={20} className="text-muted-foreground/30 mx-auto mb-1" />
                        <span className="system-text text-[9px] text-muted-foreground/40">
                          AWAITING UPLOAD
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border mt-4 pt-4">
                <div className="system-text mb-2">OVERVIEW</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.features && (
                <div className="border-t border-border mt-4 pt-4">
                  <div className="system-text mb-2">FEATURES</div>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground font-mono">
                        <span className="text-primary mr-2">—</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-border mt-4 pt-4">
                <div className="system-text mb-2">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="system-text text-[10px] px-2 py-1 border border-primary/30 rounded-sm text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border mt-4 pt-4 flex gap-3">
                <a
                  href="#"
                  className="command-button inline-flex items-center gap-2"
                  onClick={(e) => e.preventDefault()}
                >
                  <Github size={12} /> VIEW SOURCE
                </a>
              </div>
              <div className="system-text text-[9px] text-muted-foreground/40 mt-2">
                * Links will be updated soon
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectArchive;
