import Link from 'next/link';

const NAV_LINKS = [
  { label: "Inicio", href: "#", active: true },
  { label: "Nosotros", href: "#", active: false },
  { label: "Publicaciones", href: "#", active: false },
  { label: "Material", href: "#", active: false },
  { label: "Admisiones", href: "#", active: false },
  { label: "Contacto", href: "#", active: false },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_4px_40px_rgba(48,51,48,0.06)] dark:shadow-none font-['Plus_Jakarta_Sans'] tracking-tight antialiased">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto border-b bg-slate-50/50 dark:bg-slate-800/50 border-transparent">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined fill text-sky-600 dark:text-sky-400 text-3xl">school</span>
          <span className="text-xl font-extrabold text-sky-900 dark:text-sky-100">UEC Luisa Cáceres de Arismendi</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className={link.active 
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

        <button className="md:hidden text-sky-600 p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}