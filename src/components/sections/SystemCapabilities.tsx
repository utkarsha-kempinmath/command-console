const skillGroups = [
  {
    label: "LANGUAGES",
    items: ["JavaScript", "Python", "C++", "C"],
  },
  {
    label: "FRONTEND",
    items: ["React.js", "HTML", "CSS", "Tailwind", "EJS"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    label: "SYSTEM DESIGN",
    items: ["Microservices", "API Gateway", "Load Balancing", "Caching Strategies"],
  },
  {
    label: "ML INTEGRATION",
    items: ["Model Deployment", "Data Pipelines", "Feature Engineering", "Python ML Stack"],
  },
  {
    label: "AUTH & TOOLS",
    items: ["JWT", "Git", "MVC Architecture"],
  },
];

const SystemCapabilities = () => {
  return (
    <div>
      <div className="panel-header mb-6">// SYSTEM CAPABILITIES — DIAGNOSTIC OUTPUT</div>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label} className="panel p-4">
            <div className="system-text text-neon mb-3 text-[13px] tracking-[0.15em]">
              ▸ {group.label}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => (
                <div key={item} className="font-mono text-sm text-foreground flex items-center">
                  <span className="text-muted-foreground mr-3">—</span>
                  {item}
                  <span className="ml-auto system-text text-[10px] text-primary/50">OPERATIONAL</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 system-text text-[10px] text-muted-foreground/50">
        — ALL SYSTEMS NOMINAL —
      </div>
    </div>
  );
};

export default SystemCapabilities;
