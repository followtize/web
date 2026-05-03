import React from "react";
import { motion } from "framer-motion";

export function Solution() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">A new way to collaborate</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Startups list product", desc: "Founders create a profile and set an offer, like 1% equity or 20% rev share." },
            { step: "02", title: "Creators discover", desc: "Influencers browse opportunities and apply to promote products they believe in." },
            { step: "03", title: "Grow together", desc: "Creators drive traffic, startups get users, and everyone shares the upside." }
          ].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-background border border-border flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">{s.step}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
