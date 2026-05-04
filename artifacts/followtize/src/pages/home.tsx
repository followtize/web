import React, { useEffect } from "react";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Preview } from "@/components/landing/preview";
import { SocialProof } from "@/components/landing/social-proof";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Drifting dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(216,165,22,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          animation: "dot-drift 12s linear infinite",
        }}
      />

      {/* Orb 1 — upper-left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(216,165,22,0.18) 0%, transparent 70%)",
          animation: "bg-float-1 22s ease-in-out infinite",
        }}
      />

      {/* Orb 2 — lower-right */}
      <div
        className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(184,133,14,0.14) 0%, transparent 70%)",
          animation: "bg-float-2 28s ease-in-out infinite",
        }}
      />

      {/* Orb 3 — center drift */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,192,80,0.08) 0%, transparent 70%)",
          animation: "bg-float-3 18s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <Preview />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
