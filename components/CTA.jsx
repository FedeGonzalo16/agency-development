"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-500/10 via-[#0d0d10] to-[#0d0d10] p-14 md:p-20 text-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-violet-600/20 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-indigo-600/10 blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Empecemos
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              ¿Listo para automatizar
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
                tu empresa?
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed text-center">
              Agenda una consulta gratuita de 30 minutos. Te mostraremos exactamente
              qué procesos puedes automatizar y cuánto tiempo y dinero ahorrarás.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.65)]"
              >
                <Calendar size={18} />
                Agendar llamada gratuita
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <p className="text-zinc-600 text-sm mt-8">
              Sin compromiso · 100% gratuito · Respuesta en menos de 24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
