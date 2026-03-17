"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── WhatsApp SVG icon (lucide-react no lo incluye) ─────────────────────── */
function WhatsAppIcon({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Services list (matches Services.jsx) ───────────────────────────────── */
const SERVICE_OPTIONS = [
  { value: "", label: "Selecciona un servicio..." },
  { value: "web", label: "Web Development (Next.js)" },
  { value: "n8n", label: "n8n Automations" },
  { value: "python", label: "Python Custom Scripts" },
];

const WA_NUMBER = "TU_NUMERO"; // ← reemplaza con tu número (ej: 5491112345678)

/* ─── Input field wrapper ────────────────────────────────────────────────── */
function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-zinc-300">
        {label}
        {required && <span className="text-violet-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

/* ─── Shared input class builder ─────────────────────────────────────────── */
function inputCls(hasError) {
  return cn(
    "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600",
    "bg-[#0d0d10] border transition-all duration-200 outline-none",
    "focus:ring-2 focus:ring-violet-500/25",
    hasError
      ? "border-red-500/50 focus:border-red-500"
      : "border-white/10 focus:border-[#8b5cf6]"
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", email: "", service: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  /* ── Validation ── */
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      e.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Introduce un email válido.";
    }
    if (!form.service) e.service = "Elige un servicio.";
    return e;
  }

  /* ── Field change ── */
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  /* ── Submit ── */
  async function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setStatus("loading");
    // Simula envío (reemplaza con tu endpoint real)
    await new Promise((res) => setTimeout(res, 1600));
    setStatus("success");
  }

  /* ── WhatsApp URL ── */
  const selectedLabel =
    SERVICE_OPTIONS.find((o) => o.value === form.service)?.label ?? "tu servicio";
  const waText = encodeURIComponent(
    `Hola! Vengo de tu web y me interesa el servicio de ${selectedLabel}`
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  /* ── Section title animation ── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contacto" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-violet-700/7 blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-xl mx-auto text-center xl:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Contacto
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]"
            >
              Hablemos de tu{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                próximo proyecto
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg leading-[1.8] mb-12 max-w-lg mx-auto xl:mx-0"
            >
              Cuéntanos qué necesitas. Te respondemos en menos de 24 h con un
              diagnóstico gratuito y un plan de acción personalizado.
            </motion.p>

            {/* Trust badges */}
            <motion.ul variants={itemVariants} className="space-y-4">
              {[
                "Sin compromiso · consulta 100% gratuita",
                "Presupuesto detallado en 48 h",
                "Soporte en español, sin tecnicismos",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center xl:justify-start gap-3 text-sm text-zinc-400"
                >
                  <CheckCircle2
                    size={15}
                    className="text-violet-400 shrink-0"
                    style={{ filter: "drop-shadow(0 0 4px rgba(139,92,246,0.6))" }}
                  />
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="relative rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-10 md:p-14 overflow-hidden"
          >
            {/* Corner glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-violet-600/12 blur-[60px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-10 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
                    <CheckCircle2
                      size={30}
                      className="text-violet-400"
                      style={{ filter: "drop-shadow(0 0 8px rgba(139,92,246,0.8))" }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-2xl">¡Mensaje recibido!</h3>
                  <p className="text-zinc-400 text-base max-w-xs">
                    Te contactaremos en menos de 24 h. También puedes escribirnos por
                    WhatsApp si lo prefieres.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", service: "" });
                    }}
                    className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                /* ── Form state ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="relative z-10 flex flex-col gap-6"
                >
                  {/* Name */}
                  <Field label="Nombre completo" required>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="ej: Federico García"
                      autoComplete="name"
                      className={inputCls(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </Field>

                  {/* Email */}
                  <Field label="Email de contacto" required>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ej: hola@empresa.com"
                      autoComplete="email"
                      className={inputCls(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </Field>

                  {/* Service select */}
                  <Field label="Servicio de interés" required>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={cn(
                          inputCls(!!errors.service),
                          "appearance-none cursor-pointer pr-10",
                          !form.service && "text-zinc-600"
                        )}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            disabled={opt.value === ""}
                            className="bg-[#0d0d10] text-white"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {/* Custom caret */}
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle size={12} /> {errors.service}
                      </p>
                    )}
                  </Field>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-200 mt-2",
                      status === "loading"
                        ? "bg-violet-700/60 cursor-not-allowed"
                        : "bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_32px_rgba(139,92,246,0.55)]"
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-white/[0.06]" />
                    <span className="text-zinc-600 text-xs">o contacta directo</span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>

                  {/* WhatsApp button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl text-base font-semibold text-white bg-emerald-600/80 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-200 shadow-[0_0_16px_rgba(16,185,129,0.15)] hover:shadow-[0_0_28px_rgba(16,185,129,0.3)]"
                  >
                    <WhatsAppIcon size={18} />
                    Escribir por WhatsApp
                  </a>

                  <p className="text-center text-zinc-700 text-xs mt-2">
                    Sin spam · Solo te contactaremos para responder tu consulta.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
