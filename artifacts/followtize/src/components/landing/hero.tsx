import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "startup" | "creator";
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
  connections: number[];
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const nodes: Node[] = [];
    const NODE_COUNT = 40;
    const CONNECTION_DIST = 160;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const buildNodes = () => {
      nodes.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          type: i < NODE_COUNT / 2 ? "startup" : "creator",
          radius: 3 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          connections: [],
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("resize", () => { resize(); buildNodes(); });
    canvas.addEventListener("mousemove", onMouseMove);
    resize();
    buildNodes();

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.pulsePhase += node.pulseSpeed;

        const dx = node.x - mx;
        const dy = node.y - my;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 120) {
          const force = (120 - distToMouse) / 120 * 0.6;
          node.vx += (dx / distToMouse) * force * 0.05;
          node.vy += (dy / distToMouse) * force * 0.05;
        }
        node.vx *= 0.995;
        node.vy *= 0.995;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.35;
            const isCross = a.type !== b.type;

            if (isCross) {
              const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
              grad.addColorStop(0, `rgba(124, 58, 237, ${alpha})`);
              grad.addColorStop(1, `rgba(37, 99, 235, ${alpha})`);
              ctx.strokeStyle = grad;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(100, 100, 140, ${alpha * 0.5})`;
              ctx.lineWidth = 0.6;
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const glowRadius = node.radius * (2.5 + pulse * 1.5);

        const isStartup = node.type === "startup";
        const color = isStartup ? "124, 58, 237" : "37, 99, 235";

        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
        glow.addColorStop(0, `rgba(${color}, ${0.3 + pulse * 0.2})`);
        glow.addColorStop(1, `rgba(${color}, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        const coreGrad = ctx.createRadialGradient(
          node.x - node.radius * 0.3,
          node.y - node.radius * 0.3,
          0,
          node.x,
          node.y,
          node.radius
        );
        if (isStartup) {
          coreGrad.addColorStop(0, `rgba(167, 139, 250, ${0.9 + pulse * 0.1})`);
          coreGrad.addColorStop(1, `rgba(124, 58, 237, ${0.8 + pulse * 0.1})`);
        } else {
          coreGrad.addColorStop(0, `rgba(96, 165, 250, ${0.9 + pulse * 0.1})`);
          coreGrad.addColorStop(1, `rgba(37, 99, 235, ${0.8 + pulse * 0.1})`);
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", () => { resize(); buildNodes(); });
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ opacity: 0.55 }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Now accepting early signups
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8"
        >
          <span className="text-foreground">Creators Get Equity.</span>
          <br />
          <span className="bg-gradient-to-br from-violet-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Startups Get Distribution.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Followtize connects founders with creators who promote products in exchange for equity or revenue share. Turn attention into ownership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto text-base px-8 py-6 rounded-full font-semibold shadow-[0_0_40px_-8px_rgba(124,58,237,0.6)] hover:shadow-[0_0_60px_-8px_rgba(124,58,237,0.8)] transition-all duration-300"
            data-testid="button-join-waitlist"
          >
            Join Waitlist
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/30 font-medium"
            data-testid="button-im-a-founder"
          >
            I'm a Founder
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto text-base px-8 py-6 rounded-full hover:bg-muted/30 font-medium text-muted-foreground hover:text-foreground"
            data-testid="button-im-a-creator"
          >
            I'm a Creator
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-500" />
            <span>Startups</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Creators</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <span>Connected by equity</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}
