"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, Terminal, CheckCircle2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Card data ─────────────────────────────────────────────────────────── */
const cards = [
  {
    id: "web",
    icon: Globe,
    tag: "Next.js · Vercel",
    title: "Web Development",
    subtitle: "Sitios de alto rendimiento en Vercel",
    description:
      "Construimos aplicaciones web ultra-rápidas con Next.js App Router, desplegadas en Vercel con CDN global. Desde landing pages hasta SaaS complejos.",
    highlights: ["Hosting incluido", "Escalabilidad automática", "Core Web Vitals perfectos"],
    gradient: "radial-gradient(ellipse at top right, rgba(139,92,246,0.18) 0%, transparent 65%)",
    accentBorder: "hover:border-violet-500/40",
    badge: "Full-Stack",
  },
  {
    id: "n8n",
    icon: Zap,
    tag: "n8n · Make · Zapier",
    title: "n8n Automations",
    subtitle: "Flujos de trabajo e integraciones API",
    description:
      "Diseñamos y desplegamos workflows en n8n self-hosted que conectan todas tus herramientas. Integramos APIs REST, webhooks y bases de datos sin código innecesario.",
    highlights: ["Escalabilidad sin límites", "Self-hosted o cloud", "Integración con +400 apps"],
    gradient: "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.18) 0%, transparent 65%)",
    accentBorder: "hover:border-violet-500/40",
    badge: "Automatización",
  },
  {
    id: "python",
    icon: Terminal,
    tag: "Python · Playwright · BeautifulSoup",
    title: "Python Custom Scripts",
    subtitle: "Scraping, Bots y procesamiento de datos",
    description:
      "Desarrollamos scripts a medida para extracción de datos, bots de Telegram/Discord, procesamiento batch y automatizaciones de escritorio.",
    highlights: ["Scripts eficientes", "Ejecución cloud o local", "Mantenimiento incluido"],
    gradient: "radial-gradient(ellipse at top left, rgba(99,102,241,0.18) 0%, transparent 65%)",
    accentBorder: "hover:border-indigo-500/40",
    badge: "Data & Bots",
  },
];

/* ─── Single Bento Card ──────────────────────────────────────────────────── */
function BentoCard({ card, className, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative rounded-2xl border border-white/[0.07] bg-[#0d0d10] overflow-hidden",
        "transition-all duration-400",
        card.accentBorder,
        "hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]",
        className
      )}
    >
      {/* ── Radial corner gradient (activates on hover) ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: card.gradient,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* ── Subtle top-edge shine ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Top row: icon + badge */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon with violet glow */}
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Icon
              size={24}
              className="text-violet-400 transition-all duration-300"
              style={{
                filter: hovered
                  ? "drop-shadow(0 0 8px rgba(139,92,246,0.9)) drop-shadow(0 0 16px rgba(139,92,246,0.4))"
                  : "drop-shadow(0 0 4px rgba(139,92,246,0.4))",
              }}
            />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-zinc-500 text-xs font-medium">
            {card.badge}
          </span>
        </div>

        {/* Tag */}
        <p className="text-violet-400/70 text-xs font-mono tracking-wider mb-2">
          {card.tag}
        </p>

        {/* Title */}
        <h3 className="text-white font-bold text-2xl tracking-tight mb-1">
          {card.title}
        </h3>

        {/* Subtitle */}
        <p className="text-violet-300/80 text-sm font-medium mb-3">
          {card.subtitle}
        </p>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {card.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {card.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <CheckCircle2
                size={14}
                className="text-violet-400 shrink-0"
                style={{ filter: "drop-shadow(0 0 4px rgba(139,92,246,0.6))" }}
              />
              <span className="text-zinc-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link mt-auto w-fit"
        >
          Saber más
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[400px] rounded-full bg-violet-700/6 blur-[100px] pointer-events-none" />

        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Todo lo que necesitas para
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              escalar sin límites
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed text-center">
            Tres servicios core, construidos sobre las mejores herramientas del mercado.
          </p>
        </motion.div>

        {/* ── Asymmetric Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Web Development — wide, top-left */}
          <BentoCard
            card={cards[0]}
            delay={0.1}
            className="lg:col-span-2"
          />

          {/* n8n Automations — tall, right column */}
          <BentoCard
            card={cards[1]}
            delay={0.2}
            className="lg:col-span-1"
          />

          {/* Python Scripts — wide, bottom-left */}
          <BentoCard
            card={cards[2]}
            delay={0.3}
            className="lg:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}
