import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Transmission = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", message: "" });
  };

  return (
    <div>
      <div className="panel-header mb-6">// TRANSMISSION — OPEN COMMUNICATION CHANNEL</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact links */}
        <div className="space-y-4">
          <div className="system-text text-primary mb-3 text-[11px]">▸ DIRECT CHANNELS</div>

          <a
            href="mailto:utkarshakempinmath@gmail.com"
            className="panel p-4 flex items-center gap-3 hover:border-primary/40 transition-colors group"
          >
            <Mail size={16} className="text-primary" />
            <div>
              <div className="system-text text-[10px] mb-0.5">EMAIL</div>
              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                utkarshakempinmath@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/utkarsha-kempinmath"
            target="_blank"
            rel="noopener noreferrer"
            className="panel p-4 flex items-center gap-3 hover:border-primary/40 transition-colors group"
          >
            <Linkedin size={16} className="text-primary" />
            <div>
              <div className="system-text text-[10px] mb-0.5">LINKEDIN</div>
              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                utkarsha-kempinmath
              </span>
            </div>
          </a>

          <a
            href="https://github.com/utkarsha-kempinmath"
            target="_blank"
            rel="noopener noreferrer"
            className="panel p-4 flex items-center gap-3 hover:border-primary/40 transition-colors group"
          >
            <Github size={16} className="text-primary" />
            <div>
              <div className="system-text text-[10px] mb-0.5">GITHUB</div>
              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                utkarsha-kempinmath
              </span>
            </div>
          </a>
        </div>

        {/* Contact form */}
        <div>
          <div className="system-text text-primary mb-3 text-[11px]">▸ MESSAGE INPUT</div>
          <form onSubmit={handleSubmit} className="panel p-4 space-y-3">
            <div>
              <label className="system-text text-[10px] block mb-1">CALLSIGN</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="command-input w-full"
                placeholder="Enter identification..."
                required
              />
            </div>
            <div>
              <label className="system-text text-[10px] block mb-1">MESSAGE</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="command-input w-full h-28 resize-none"
                placeholder="Compose transmission..."
                required
              />
            </div>
            <button type="submit" className="command-button w-full">
              INITIATE TRANSMISSION
            </button>

            {submitted && (
              <div className="font-mono text-xs text-primary text-center pt-2" style={{ animation: "sectionFadeIn 300ms ease-out" }}>
                ✓ Signal transmitted successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transmission;
