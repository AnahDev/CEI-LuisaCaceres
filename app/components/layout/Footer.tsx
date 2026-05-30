import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[48px] mt-12 bg-[#f4f4f4] dark:bg-slate-950 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed border-t border-[#e8e8e4] dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined fill text-sky-700 dark:text-sky-400 text-2xl">school</span>
            <span className="text-lg font-bold text-sky-900 dark:text-sky-100">UEC Luisa Cáceres de Arismendi</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mt-4">
            © 20XX UEC Luisa Cáceres de Arismendi. Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <h4 className="text-sky-600 font-semibold mb-2 uppercase tracking-wider text-xs">Contacto</h4>
          <Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit">Ubicación</Link>
          <Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit">Teléfono</Link>
          <Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit">Email</Link>
        </div>
        
        <div className="flex flex-col gap-3">
          <h4 className="text-sky-600 font-semibold mb-2 uppercase tracking-wider text-xs">Redes Sociales</h4>
          <Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit">Facebook</Link>
          <Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit">Instagram</Link>
          <Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit">WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}