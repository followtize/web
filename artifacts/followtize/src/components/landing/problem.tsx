import React from "react";
import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Building is easy. Distribution is not.</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-16 text-left">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">For Founders</h3>
              <p className="text-muted-foreground">You built a great product, but acquiring users is expensive. Ads are saturated, and traditional marketing channels are exhausted.</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">For Creators</h3>
              <p className="text-muted-foreground">You have attention, but you are trading it for one-off sponsorships. You want to build wealth by owning a piece of the next big thing.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
