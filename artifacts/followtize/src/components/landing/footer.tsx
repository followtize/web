import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="/logo.png" alt="Followtize" className="h-8 w-auto" />
        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors" data-testid="link-about">About</Link>
          <Link href="#" className="hover:text-foreground transition-colors" data-testid="link-contact">Contact</Link>
          <Link href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">Terms</Link>
          <Link href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
