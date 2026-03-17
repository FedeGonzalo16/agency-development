"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "CEO, RetailTech",
    avatar: "MG",
    content:
      "Redujimos el tiempo de procesamiento de pedidos de 4 horas a 8 minutos. El ROI fue visible desde la primera semana. Increíble equipo.",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Operations Manager, FinServ",
    avatar: "CR",
    content:
      "Automatizaron todo nuestro proceso de onboarding de clientes. Pasamos de 3 días a menos de 2 horas. Un cambio brutal para nuestro equipo.",
    stars: 5,
  },
  {
    name: "Sofía Martínez",
    role: "Fundadora, EduScale",
    avatar: "SM",
    content:
      "Nunca imaginé que se pudiera hacer tanto en tan poco tiempo. Los agentes de IA manejan el 80% de las consultas de soporte solos.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="resultados" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Resultados
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed text-center">
            Empresas reales con resultados reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-8 hover:border-violet-500/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className="text-violet-400"
                    fill="#a78bfa"
                  />
                ))}
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-600/30 border border-violet-500/30 flex items-center justify-center text-violet-300 font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-base">{t.name}</div>
                  <div className="text-zinc-500 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
