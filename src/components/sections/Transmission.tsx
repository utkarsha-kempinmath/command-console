import { Mail, Linkedin, Github } from "lucide-react";

const Transmission = () => {
  return (
    <div>
      <div className="panel-header mb-6">// TRANSMISSION — OPEN COMMUNICATION CHANNEL</div>

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
    </div>
  );
};

export default Transmission;
