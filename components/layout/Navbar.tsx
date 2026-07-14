"use client";

import Link from "next/link";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight hover:text-primary transition"
        >
          meraipu
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition"
          >
            Privacy
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggleButton />
      </div>

      {/* Mobile Menu (Optional - for mobile responsiveness) */}
      <div className="md:hidden border-t border-border px-4 py-3">
        <nav className="flex flex-col gap-3">
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}