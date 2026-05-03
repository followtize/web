import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export function CTA() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const existing = JSON.parse(localStorage.getItem('waitlist_emails') || '[]');
    localStorage.setItem('waitlist_emails', JSON.stringify([...existing, values.email]));
    toast({
      title: "You're on the list",
      description: "We'll be in touch soon.",
    });
    form.reset();
  }

  return (
    <section id="waitlist" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Be early to the future of creator partnerships</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join the waitlist to get early access to Followtize.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input 
                        placeholder="Enter your email" 
                        {...field} 
                        className="h-14 text-lg bg-card/50 border-border/50 focus:border-primary/50"
                        data-testid="input-waitlist-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="h-14 px-8 text-lg rounded-xl" data-testid="button-submit-waitlist">
                Join Waitlist
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
