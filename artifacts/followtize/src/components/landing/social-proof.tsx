import React from "react";
import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <section className="py-24 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-12 font-semibold"
        >
          Trusted by the next generation of founders and creators
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
          {['Nexus', 'Vela', 'Aura', 'Zephyr', 'Nova'].map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-bold text-foreground"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
