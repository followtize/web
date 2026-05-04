import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  TrendingUp,
  Code2,
  Package,
  PieChart,
  Users,
  ShieldCheck,
  Handshake,
  Target,
  Users2,
} from "lucide-react";

const leftIcons = [Rocket, TrendingUp, Code2, Package, PieChart];

const rightCreators = [
  { count: "125K", img: "/influencer-1.png" },
  { count: "250K", img: "/influencer-2.png" },
  { count: "80K",  img: "/influencer-3.png" },
  { count: "160K", img: "/influencer-4.png" },
  { count: "300K", img: "/influencer-5.png" },
];

const features = [
  { Icon: ShieldCheck, title: "Aligned Incentives",     desc: "Creators earn when startups grow." },
  { Icon: Handshake,   title: "Long-term Partnerships", desc: "Equity or revenue share instead of one-time deals." },
  { Icon: Target,      title: "Better Growth",          desc: "Startups get distribution from trusted voices." },
  { Icon: Users2,      title: "Built for Both",         desc: "Powering growth for startups and creators." },
];

// viewBox 0 0 500 440
// Left node centers  (w-14=56px, gap-4=16px): x=28, y = 76 148 220 292 364
// Circle center (250,220), r=72 → left edge 178, right edge 322
// Right node centers (w-10=40px img, py-2): x=468, y = 84 152 220 288 356

const leftPaths = [
  "M 28 76  C 96 76  156 220 178 220",
  "M 28 148 C 96 148 156 220 178 220",
  "M 28 220 C 96 220 156 220 178 220",
  "M 28 292 C 96 292 156 220 178 220",
  "M 28 364 C 96 364 156 220 178 220",
];

const rightPaths = [
  "M 322 220 C 344 220 402 84  468 84",
  "M 322 220 C 344 220 402 152 468 152",
  "M 322 220 C 344 220 402 220 468 220",
  "M 322 220 C 344 220 402 288 468 288",
  "M 322 220 C 344 220 402 356 468 356",
];

const GOLD = "#d8a516";

export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen bg-background text-foreground overflow-hidden flex flex-col">

      {/* ── Hero animated background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Scrolling gold grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(216,165,22,0.045) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(216,165,22,0.045) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "80px 80px, 80px 80px",
            animation: "hero-grid-scroll 18s linear infinite",
          }}
        />


        {/* Warm glow — right (network area) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "560px",
            height: "560px",
            top: "50%",
            left: "65%",
            background: "radial-gradient(circle, rgba(216,165,22,0.12) 0%, transparent 70%)",
            animation: "hero-glow-breathe 6s ease-in-out infinite",
          }}
        />

        {/* Warm glow — left (copy area) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "420px",
            height: "420px",
            top: "45%",
            left: "22%",
            background: "radial-gradient(circle, rgba(216,165,22,0.06) 0%, transparent 70%)",
            animation: "hero-glow-breathe 9s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* Nav logo */}
      <div className="absolute top-6 left-8 z-20">
        <img src="/logo.png" alt="Followtize" className="h-10 w-auto" />
      </div>

      {/* ── Main two-column grid ── */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center pt-24 pb-6 px-6">

          {/* Left — copy */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-bold leading-tight">
              <span className="block text-5xl md:text-6xl text-foreground">Turn Attention</span>
              <span className="block text-4xl md:text-6xl bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Into Ownership
              </span>
            </h1>

            <p className="text-muted-foreground mt-6 max-w-md leading-relaxed">
              Followtize connects startups with creators. Creators promote products they
              believe in and get equity or revenue share in return.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                size="lg"
                onClick={scrollToWaitlist}
                className="rounded-xl font-semibold px-7 shadow-[0_0_32px_-6px_rgba(216,165,22,0.65)] hover:shadow-[0_0_48px_-6px_rgba(216,165,22,0.85)] transition-all duration-300"
                data-testid="button-join-waitlist"
              >
                Join Waitlist →
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToWaitlist}
                className="rounded-xl px-7 border-yellow-600/70 text-yellow-500 hover:bg-yellow-600 hover:text-black hover:border-yellow-600 transition-all duration-300"
                data-testid="button-im-a-founder"
              >
                I'm a Founder
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center mt-8 gap-3 sm:gap-4">
              <div className="flex -space-x-3 flex-shrink-0">
                {["/influencer-1.png", "/influencer-3.png", "/influencer-4.png", "/influencer-2.png"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Be early. Join the future of creator partnerships.
              </p>
            </div>
          </motion.div>

          {/* Right — network visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-center justify-center h-80 md:h-110"
          >
            {/* ── Curved glowy connecting lines ── */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 440"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <defs>
                <filter id="lineGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer glow pass */}
              {[...leftPaths, ...rightPaths].map((d, i) => (
                <path
                  key={`glow${i}`}
                  d={d}
                  stroke={GOLD}
                  strokeWidth="6"
                  strokeOpacity="0.14"
                  filter="url(#lineGlow)"
                />
              ))}
              {/* Crisp core line */}
              {[...leftPaths, ...rightPaths].map((d, i) => (
                <path
                  key={`line${i}`}
                  d={d}
                  stroke={GOLD}
                  strokeWidth="1.8"
                  strokeOpacity="0.65"
                />
              ))}
            </svg>

            {/* Ambient glow blob */}
            <div className="absolute w-48 h-48 rounded-full bg-yellow-500 opacity-[0.16] blur-3xl" />

            {/* Ripple rings — radiate outward from center circle */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "96px",
                  height: "96px",
                  top: "50%",
                  left: "50%",
                  border: "1px solid rgba(216,165,22,0.4)",
                  animation: "hero-ring-expand 7s linear infinite",
                  animationDelay: `${i * 1.75}s`,
                  animationFillMode: "backwards",
                }}
              />
            ))}

            {/* ── Center circle ── */}
            <div className="relative z-10 w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(245,185,66,0.55),0_0_100px_rgba(245,185,66,0.25),0_0_160px_rgba(245,185,66,0.1)]">
              <img
                src="/followtize-icon-logo.png"
                alt="Followtize icon"
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
              />
              <span className="mt-0.5 text-[9px] md:text-[11px] font-bold text-black/80 tracking-wide">Followtize</span>
            </div>

            {/* ── Left icon nodes ── */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-4">
              {leftIcons.map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.07 }}
                  className="w-9 h-9 md:w-14 md:h-14 rounded-full border border-yellow-500/55 flex items-center justify-center bg-background/75 backdrop-blur-sm shadow-[0_0_18px_rgba(216,165,22,0.18)]"
                >
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" strokeWidth={1.5} />
                </motion.div>
              ))}
            </div>

            {/* ── Right creator nodes (3 on mobile, 5 on desktop) ── */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3">
              {rightCreators.map(({ count, img }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.07 }}
                  className="flex items-center gap-1.5 md:gap-2.5 bg-background/75 border border-yellow-600/40 px-2 md:px-3 py-1 md:py-2 rounded-full backdrop-blur-sm shadow-[0_0_14px_rgba(216,165,22,0.12)]"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0 ring-1 ring-yellow-500/50"
                  />
                  <div className="flex items-center gap-0.5 md:gap-1 pr-0.5 md:pr-1">
                    <Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400" strokeWidth={1.5} />
                    <span className="text-yellow-400 text-xs md:text-sm font-semibold">{count}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom feature strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-6xl w-full mx-auto px-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 border border-yellow-900/50 rounded-xl p-6 bg-card/30 backdrop-blur-sm"
      >
        {features.map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Icon className="w-5 h-5 text-yellow-400 mb-0.5" strokeWidth={1.5} />
            <div className="text-yellow-400 font-semibold text-sm">{title}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
