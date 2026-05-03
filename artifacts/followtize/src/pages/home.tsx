import React, { useEffect } from "react";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Preview } from "@/components/landing/preview";
import { SocialProof } from "@/components/landing/social-proof";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Preview />
      <CTA />
      <Footer />
    </div>
  );
}
