const records = [
  {
    degree: "B.E. Computer Engineering (Software Engineering)",
    institution: "MIT Academy of Engineering",
    period: "Expected 2028",
    status: "IN PROGRESS",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Decent School, Kota",
    period: "2023",
    status: "COMPLETE",
  },
];

const EducationRecords = () => {
  return (
    <div>
      <div className="panel-header mb-6">// EDUCATION RECORDS — TRAINING MODULES</div>

      <div className="space-y-4">
        {records.map((record, i) => (
          <div key={i} className="panel p-5 border-l-2 border-l-primary/30">
            <div className="flex flex-wrap items-center justify-between mb-2">
              <span className="font-mono text-xs text-primary tracking-wider">{record.period}</span>
              <span className="system-text text-[10px] px-2 py-0.5 border border-border rounded-sm">
                {record.status}
              </span>
            </div>
            <h3 className="font-mono text-sm text-foreground mb-1">{record.degree}</h3>
            <p className="text-sm text-muted-foreground font-mono">
              &gt; {record.institution}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 system-text text-[10px] text-muted-foreground/50">
        — TRAINING LOG COMPLETE —
      </div>
    </div>
  );
};

export default EducationRecords;
