import React from "react";
import { motion } from "framer-motion";

const startups = [
  { name: "AeroFinance", category: "Fintech", offer: "0.5% equity", audience: "Fintech, 50K+" },
  { name: "Lumina AI", category: "AI Tool", offer: "20% rev share", audience: "Tech, 100K+" },
  { name: "Orbit Social", category: "Social App", offer: "1% equity", audience: "Lifestyle, 500K+" },
];

const creators = [
  { name: "Alex Tech", niche: "AI & Dev", followers: "120K", engagement: "8.5%" },
  { name: "Sarah Invests", niche: "Personal Finance", followers: "340K", engagement: "6.2%" },
];

export function Preview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The marketplace of the future</h2>
          <p className="text-muted-foreground text-xl">Find your next co-owner or distribution partner.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold px-2">Top Opportunities</h3>
            {startups.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-colors group cursor-pointer"
                data-testid={`card-startup-${i}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{s.name}</h4>
                    <span className="text-sm text-muted-foreground">{s.category}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {s.offer}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Looking for: <span className="text-foreground">{s.audience}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-6 mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold px-2">Featured Creators</h3>
            {creators.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-blue-500/50 transition-colors group cursor-pointer"
                data-testid={`card-creator-${i}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{c.name}</h4>
                    <span className="text-sm text-muted-foreground">{c.niche}</span>
                  </div>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <div className="text-muted-foreground">Followers</div>
                    <div className="font-semibold text-foreground">{c.followers}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Engagement</div>
                    <div className="font-semibold text-foreground">{c.engagement}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
