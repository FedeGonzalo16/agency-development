"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$497",
    period: "/mes",
    description:
      "Ideal para equipos pequeños que quieren automatizar sus primeras tareas.",
    features: [
      "Hasta 3 workflows automatizados",
      "Integración con 5 herramientas",
      "1.000 ejecuciones/mes",
      "Soporte por email (48h)",
      "Dashboard de métricas básico",
    ],
    cta: "Comenzar ahora",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$997",
    period: "/mes",
    description:
      "Para empresas en crecimiento que necesitan escalar sus operaciones.",
    features: [
      "Workflows ilimitados",
      "Integración con herramientas ilimitadas",
      "10.000 ejecuciones/mes",
      "Soporte prioritario (4h)",
      "Agentes de IA personalizados",
      "Onboarding dedicado",
    ],
    cta: "Empezar a escalar",
    highlighted: true,
    badge: "Más popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "Soluciones a medida para grandes organizaciones con necesidades complejas.",
    features: [
      "Todo lo de Growth, más:",
      "Ejecuciones ilimitadas",
      "SLA garantizado 99.9%",
      "Soporte 24/7 dedicado",
      "Arquitectura personalizada",
      "Capacitación del equipo",
    ],
    cta: "Hablar con ventas",
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="precios" className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Inversión que se paga sola
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed text-center">
            Planes transparentes, sin contratos largos. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Cards — no transforms, visual emphasis via bg gradient + glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col transition-all duration-300",
                plan.highlighted
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-600/12 via-[#0d0d10] to-[#0d0d10] shadow-[0_0_60px_rgba(139,92,246,0.22)]"
                  : "border-white/[0.07] bg-[#0d0d10] hover:border-violet-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.07)]"
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold shadow-[0_0_16px_rgba(139,92,246,0.5)] whitespace-nowrap">
                  <Zap size={11} fill="white" />
                  {plan.badge}
                </div>
              )}

              {/* Plan name + description */}
              <div className="mb-6">
                <h3
                  className={cn(
                    "font-bold text-2xl mb-2",
                    plan.highlighted ? "text-violet-200" : "text-white"
                  )}
                >
                  {plan.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1.5 mb-8 pb-8 border-b border-white/[0.06]">
                <span
                  className={cn(
                    "text-5xl font-extrabold tracking-tight",
                    plan.highlighted ? "text-violet-300" : "text-white"
                  )}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-zinc-500 text-base mb-1.5">{plan.period}</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={15}
                      className={cn(
                        "mt-0.5 shrink-0",
                        plan.highlighted ? "text-violet-400" : "text-zinc-500"
                      )}
                    />
                    <span className="text-zinc-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={cn(
                  "mt-auto block w-full text-center py-3.5 rounded-xl text-base font-semibold transition-all duration-200",
                  plan.highlighted
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
                    : "border border-white/10 hover:border-violet-500/30 text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.07]"
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
