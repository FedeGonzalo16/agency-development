"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Cpu, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tus procesos actuales, identificamos cuellos de botella y calculamos el ROI potencial de automatizarlos.",
  },
  {
    icon: Cpu,
    title: "Diseño del sistema",
    description:
      "Mapeamos cada flujo, elegimos las herramientas correctas y construimos la arquitectura de automatización a medida.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    description:
      "Desplegamos los workflows, integramos tus sistemas y entrenamos a tu equipo. Todo listo en menos de 2 semanas.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte continuo",
    description:
      "Monitoreamos, optimizamos y escalamos tus automatizaciones mes a mes para que siempre rindan al máximo.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="proceso" className="relative py-16 md:py-24 px-6 md:px-10">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/6 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            De cero a automatizado{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              en 4 pasos
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            Un método probado que minimiza riesgos y maximiza resultados desde
            el día uno.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }}
                className="group relative rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-7 flex flex-col items-center text-center hover:border-violet-500/25 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all duration-300"
              >
                {/* Step badge */}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-violet-600 text-white text-xs font-bold mb-5 shadow-[0_0_14px_rgba(139,92,246,0.5)]">
                  {i + 1}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/15 group-hover:border-violet-500/30 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-violet-400"
                    style={{ filter: "drop-shadow(0 0 6px rgba(139,92,246,0.5))" }}
                  />
                </div>

                <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-[1.75]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
