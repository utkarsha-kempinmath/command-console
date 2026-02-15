import { useEffect, useRef, useCallback } from "react";

interface StarfieldProps {
  warp?: boolean;
}

const Starfield = ({ warp = false }: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<{ x: number; y: number; z: number; size: number; opacity: number; baseSpeed: number }[]>([]);
  const warpRef = useRef(false);
  const warpProgressRef = useRef(0);

  useEffect(() => {
    warpRef.current = warp;
    if (warp) {
      warpProgressRef.current = 0;
    }
  }, [warp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let cx = 0;
    let cy = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cx = canvas.width / 2;
      cy = canvas.height / 2;
    };

    const initStars = () => {
      starsRef.current = [];
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < count; i++) {
        starsRef.current.push({
          x: (Math.random() - 0.5) * canvas.width * 2,
          y: (Math.random() - 0.5) * canvas.height * 2,
          z: Math.random() * 1500 + 100,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.5 + 0.15,
          baseSpeed: Math.random() * 0.8 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(12, 17, 28, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const isWarping = warpRef.current;
      if (isWarping && warpProgressRef.current < 1) {
        warpProgressRef.current = Math.min(1, warpProgressRef.current + 0.04);
      } else if (!isWarping && warpProgressRef.current > 0) {
        warpProgressRef.current = Math.max(0, warpProgressRef.current - 0.02);
      }

      const warpFactor = warpProgressRef.current;
      const speed = 0.5 + warpFactor * 25;

      for (const star of starsRef.current) {
        star.z -= speed * star.baseSpeed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.z = 1500;
        }

        const sx = (star.x / star.z) * 400 + cx;
        const sy = (star.y / star.z) * 400 + cy;

        if (sx < -10 || sx > canvas.width + 10 || sy < -10 || sy > canvas.height + 10) continue;

        const depthFactor = 1 - star.z / 1600;
        const size = star.size * (1 + depthFactor * 2);
        const alpha = star.opacity * (0.3 + depthFactor * 0.7);

        // During warp, draw streaks
        if (warpFactor > 0.1) {
          const prevZ = star.z + speed * star.baseSpeed;
          const prevSx = (star.x / prevZ) * 400 + cx;
          const prevSy = (star.y / prevZ) * 400 + cy;

          const streakLength = Math.min(warpFactor * 1.0, 1);
          const mx = sx + (sx - prevSx) * streakLength * 3;
          const my = sy + (sy - prevSy) * streakLength * 3;

          ctx.beginPath();
          ctx.moveTo(prevSx, prevSy);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(160, 185, 220, ${alpha * warpFactor * 0.8})`;
          ctx.lineWidth = size * 0.6;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 230, ${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initStars();
    // Clear canvas fully once
    ctx.fillStyle = "rgb(12, 17, 28)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();

    const handleResize = () => {
      resize();
      initStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Starfield;
