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
  { id: "testimonials", Component: Testimonials, bg: "default" },
  { id: "pricing",      Component: Pricing,      bg: "raised"  },
  { id: "cta",          Component: CTA,          bg: "raised"  },
  { id: "contact",      Component: Contact,      bg: "default" },
  { id: "footer",       Component: Footer,       bg: "raised"  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden bg-[#050505]">
      <Navbar />

      <div className="container">
        {sections.map(({ id, Component, bg }) => (
          <motion.section
            id={id}
            key={id}
            {...fadeInUp}
            className={cn(
              "py-16 md:py-24",
              "border-b border-white/[0.04]",
            )}
          >
            <Component />
          </motion.section>
        ))}
      </div>
    </main>
  );
}
