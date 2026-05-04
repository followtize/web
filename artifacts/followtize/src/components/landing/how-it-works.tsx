import React from "react";
import { motion } from "framer-motion";

const SECONDARY = "#f59e0b";

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Founders */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">For Founders</h2>
              <ul className="space-y-6">
                {[
                  { n: "1", title: "List your startup",  desc: "Detail your product, traction, and vision." },
                  { n: "2", title: "Set your offer",     desc: "Offer equity options or percentage of revenue share." },
                  { n: "3", title: "Get matched",        desc: "Review creator profiles and select the best partners." },
                ].map(({ n, title, desc }) => (
                  <li key={n} className="flex gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full border border-primary text-primary flex items-center justify-center">{n}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{title}</h4>
                      <p className="text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Creators */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold" style={{ color: SECONDARY }}>For Creators</h2>
              <ul className="space-y-6">
                {[
                  { n: "1", title: "Browse opportunities",        desc: "Find startups that align with your audience and brand." },
                  { n: "2", title: "Promote what you believe in", desc: "Drive traffic using your unique voice and channels." },
                  { n: "3", title: "Earn ownership",              desc: "Stop trading time for money. Build a portfolio of equity." },
                ].map(({ n, title, desc }) => (
                  <li key={n} className="flex gap-4">
                    <div
                      className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center"
                      style={{ border: `1px solid ${SECONDARY}`, color: SECONDARY }}
                    >
                      {n}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{title}</h4>
                      <p className="text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
