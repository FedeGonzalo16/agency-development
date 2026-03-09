"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stats = [
  { value: "10x", label: "Más rápido" },
  { value: "98%", label: "Menos errores" },
  { value: "3h", label: "Setup promedio" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden pt-20">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-700/8 blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-sm font-medium mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shrink-0" />
          Automatización con IA para empresas modernas
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-[88px] font-extrabold tracking-[-0.03em] leading-[1.04] mb-8"
        >
          <span className="text-white">Automatiza tu</span>
          <br />
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 45%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            negocio
          </span>
          <span className="text-white"> en tiempo</span>
          <br />
          <span className="italic font-black text-white">récord</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-[1.75] mb-12"
        >
          Construimos workflows inteligentes con IA que eliminan tareas
          repetitivas, reducen costos operacionales y escalan con tu empresa —
          sin fricción.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all duration-200 shadow-[0_0_32px_rgba(139,92,246,0.45)] hover:shadow-[0_0_48px_rgba(139,92,246,0.65)]"
          >
            Empezar ahora
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="#proceso"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-zinc-300 border border-white/10 hover:border-white/20 hover:text-white bg-white/[0.04] hover:bg-white/[0.07] transition-all duration-200"
          >
            <Play size={15} className="text-violet-400" fill="#a78bfa" />
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="inline-flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm overflow-hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-10 py-5">
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
