import { Zap } from "lucide-react";

const links = {
  Servicios: ["Web Development", "n8n Automations", "Python Scripts", "Integraciones API"],
  Empresa: ["Sobre nosotros", "Blog", "Casos de éxito", "Contacto"],
  Legal: ["Privacidad", "Términos de uso"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center shadow-[0_0_16px_rgba(139,92,246,0.45)]">
                <Zap size={17} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Auto<span className="text-violet-400">Flow</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-[1.8] max-w-[210px]">
              Automatización inteligente para empresas que quieren crecer sin límites.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-500 hover:text-zinc-200 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {year} AutoFlow Agency. Todos los derechos reservados.
          </p>
          <p className="text-zinc-700 text-xs tracking-wide">
            Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
