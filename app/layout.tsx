import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: "UEC Luisa Cáceres de Arismendi - Preescolar",
  description: "Sistema de gestión y landing page del preescolar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
        {/* Estilos base de los iconos y la tipografía */}
        <style>{`
          body { background-color: #faf9f6; color: #303330; }
          .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
          .material-symbols-outlined.fill { font-variation-settings: 'FILL' 1; }
          .text-balance { text-wrap: balance; }
        `}</style>
      </head>
      <body className={`${plusJakarta.variable} font-body antialiased min-h-screen flex flex-col pt-24`}>
        {children}
      </body>
    </html>
  );
}