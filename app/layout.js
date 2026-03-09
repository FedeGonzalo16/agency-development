import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AutoFlow Agency — Automatización Inteligente",
  description:
    "Transformamos procesos manuales en sistemas automatizados de alto rendimiento. Ahorra tiempo, reduce errores y escala sin límites.",
  keywords: ["automatización", "AI", "workflows", "agencia", "procesos"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
