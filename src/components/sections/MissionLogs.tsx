const logs = [
  {
    date: "2026.02 – Present",
    title: "Emergence Pre-Incubation Program — IIT Delhi",
    description: "Working with mentors and founders on milestone-based startup development for MonthEnd.",
    tag: "INCUBATION",
  },
  {
    date: "2026.02",
    title: "Startup Clinic Finalist — IIT Delhi",
    description: "Pitched startup to expert panel, received strategic mentorship and feedback.",
    tag: "ACHIEVEMENT",
  },
  {
    date: "2025 – Present",
    title: "10X Club MIT AOE — Technical Member",
    description: "Contributing to technical initiatives and community-driven engineering projects.",
    tag: "MEMBERSHIP",
  },
  {
    date: "2025.08 – 2025.12",
    title: "Google Campus Ambassador",
    description: "Represented Google on campus, organized tech events and developer outreach.",
    tag: "AMBASSADORSHIP",
  },
  {
    date: "2024.10",
    title: "NASA Space Apps Hackathon Participant",
    description: "Competed in global hackathon focused on space exploration challenges.",
    tag: "HACKATHON",
  },
];

const MissionLogs = () => {
  return (
    <div>
      <div className="panel-header mb-6">// MISSION LOGS — OPERATIONAL RECORDS</div>

      <div className="space-y-1">
        {logs.map((log, i) => (
          <div key={i} className="panel p-4 border-l-2 border-l-primary/30">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-xs text-primary tracking-wider">
                [{log.date}]
              </span>
              <span className="system-text text-[10px] px-2 py-0.5 border border-border rounded-sm">
                {log.tag}
              </span>
            </div>
            <h3 className="font-mono text-sm text-foreground mb-1">{log.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              &gt; {log.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 system-text text-[10px] text-muted-foreground/50">
        — END OF LOG ENTRIES —
      </div>
    </div>
  );
};

export default MissionLogs;
