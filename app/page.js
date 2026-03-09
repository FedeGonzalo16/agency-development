"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* Shared scroll animation */
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" },
};

/*
  bg:
    "default" → #050505  (base)
    "raised"  → #070709  (barely perceptible lift — breaks visual monotony)
*/
const sections = [
  { id: "hero",         Component: Hero,         bg: "default" },
  { id: "services",     Component: Services,     bg: "raised"  },
  { id: "process",      Component: Process,      bg: "default" },
  { id: "testimonials", Component: Testimonials, bg: "raised"  },
  { id: "pricing",      Component: Pricing,      bg: "default" },
  { id: "cta",          Component: CTA,          bg: "raised"  },
  { id: "contact",      Component: Contact,      bg: "default" },
  { id: "footer",       Component: Footer,       bg: "raised"  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden bg-[#050505]">
      <Navbar />

      {sections.map(({ id, Component, bg }) => (
        <motion.section
          key={id}
          {...fadeInUp}
          className={cn(
            /* ── physical gap: space OUTSIDE each component's own py ── */
            "py-8 md:py-14",
            /* ── visual separator ── */
            "border-b border-white/[0.05]",
            /* ── subtle background alternation ── */
            bg === "raised" ? "bg-[#070709]" : "bg-[#050505]"
          )}
        >
          <Component />
        </motion.section>
      ))}
    </main>
  );
}
