import React from "react";
import { motion } from "framer-motion";

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
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">For Founders</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full border border-primary text-primary flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-semibold text-lg">List your startup</h4>
                    <p className="text-muted-foreground">Detail your product, traction, and vision.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full border border-primary text-primary flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-semibold text-lg">Set your offer</h4>
                    <p className="text-muted-foreground">Offer equity options or percentage of revenue share.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full border border-primary text-primary flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-semibold text-lg">Get matched</h4>
                    <p className="text-muted-foreground">Review creator profiles and select the best partners.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-500">For Creators</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-semibold text-lg">Browse opportunities</h4>
                    <p className="text-muted-foreground">Find startups that align with your audience and brand.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-semibold text-lg">Promote what you believe in</h4>
                    <p className="text-muted-foreground">Drive traffic using your unique voice and channels.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-semibold text-lg">Earn ownership</h4>
                    <p className="text-muted-foreground">Stop trading time for money. Build a portfolio of equity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
