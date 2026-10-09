import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicaciones - Calendario - UEC Luisa Cáceres",
};

export default function SchedulePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-[0.14em] text-[#006789]">
          Calendario
        </p>
        <h1 className="mb-3 font-['Plus_Jakarta_Sans'] text-[2rem] font-extrabold tracking-tight text-[#303330]">
          Publicaciones
        </h1>
        <p className="font-['Plus_Jakarta_Sans'] text-[1.0625rem] leading-relaxed text-[#5d605c]">
          Consulta las publicaciones que compartes con la comunidad escolar.
        </p>
      </div>

      <section className="rounded-[1.5rem] border border-[#e5e7e2] bg-white px-6 py-14 text-center shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] md:px-12">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf8fd] text-[#006789]">
          <span className="material-symbols-outlined text-3xl" aria-hidden="true">
            campaign
          </span>
        </div>
        <h2 className="mb-2 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#303330]">
          Todavía no hay publicaciones
        </h2>
        <p className="mx-auto mb-7 max-w-md font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-[#5d605c]">
          Cuando haya publicaciones disponibles, podrás consultarlas desde aquí.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/dashboard/schedule/nueva-publicacion"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#006789] to-[#62ccff] px-6 py-3 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#f4faff] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] transition-opacity hover:opacity-90"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              add
            </span>
            Nueva publicación
          </Link>
          <Link
            href="/dashboard/schedule/nuevo-evento"
            className="inline-flex items-center gap-2 rounded-full border border-[#c9dce2] px-6 py-3 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#006789] transition-colors hover:bg-[#eaf8fd]"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              event
            </span>
            Nuevo evento
          </Link>
        </div>
      </section>
    </div>
  );
}
