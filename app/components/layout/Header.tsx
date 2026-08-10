'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: "Inicio", href: "/", active: true },
  { label: "Nosotros", href: "/nosotros", active: false },
  { label: "Publicaciones", href: "#", active: false },
  { label: "Material", href: "#", active: false },
  { label: "Admisiones", href: "/admisiones", active: false },
  { label: "Contacto", href: "/contacto", active: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // "/" solo debe marcarse activo en la home exacta; el resto compara con startsWith (útil si luego hay subrutas)
  const isActive = (href: string) =>
    href !== "#" && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_4px_40px_rgba(48,51,48,0.06)] dark:shadow-none font-['Plus_Jakarta_Sans'] tracking-tight antialiased">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto border-b bg-slate-50/50 dark:bg-slate-800/50 border-transparent">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined fill text-sky-600 dark:text-sky-400 text-3xl">school</span>
          <span className="text-xl font-extrabold text-sky-900 dark:text-sky-100">UEC Luisa Cáceres de Arismendi</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={isActive(link.href)
                ? "text-sky-700 dark:text-sky-300 border-b-2 border-sky-600 dark:border-sky-400 pb-1 font-bold hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2 active:scale-95 ease-in-out"
                : "text-slate-500 dark:text-slate-400 hover:text-sky-600 font-medium transition-colors hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/login"
            className="bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] px-6 py-2 rounded-full font-bold shadow-[inset_0_2px_0_rgba(255,255,255,0.2)] hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">login</span>
            Admin
          </Link>
        </div>

        {/* Botón hamburguesa ahora con estado y accesibilidad */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-sky-600 p-2"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Overlay oscuro detrás del drawer */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-[#1a1c1a]/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Drawer mobile deslizante */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#faf9f6] dark:bg-slate-900 shadow-[-8px_0_30px_rgba(48,51,48,0.25)] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#b1b2af]/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined fill text-sky-600 text-2xl">school</span>
            <span className="text-lg font-extrabold text-sky-900 dark:text-sky-100">Menú</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-500 dark:text-slate-300 p-2 hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-colors"
            aria-label="Cerrar menú"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={isActive(link.href)
                ? "text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-900/20 font-bold rounded-xl px-4 py-3 transition-colors"
                : "text-slate-600 dark:text-slate-300 font-medium hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-xl px-4 py-3 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#b1b2af]/20 mt-2">
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] px-6 py-3 rounded-full font-bold shadow-[inset_0_2px_0_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 w-full"
          >
            <span className="material-symbols-outlined text-[18px]">login</span>
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}