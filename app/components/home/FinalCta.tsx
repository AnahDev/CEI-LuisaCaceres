import Link from 'next/link';
import { ArrowRight, MessageCircleHeart, Phone, Sparkles, Star } from 'lucide-react';
import Reveal from '../ui/Reveal';

export default function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-primary px-6 py-12 text-on-primary shadow-[0_40px_80px_-46px_rgba(12,108,139,0.75)] sm:px-10 md:rounded-[2.75rem] md:px-14 md:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="blob-shape -right-20 -top-24 h-72 w-72 bg-primary-container/30 blur-2xl" />
            <div className="blob-shape -bottom-28 left-1/3 h-64 w-64 bg-sun/20 blur-3xl" />
            <Star className="absolute right-[28%] top-8 size-7 rotate-12 fill-sun/60 text-sun/60" />
            <Sparkles className="absolute bottom-10 right-12 size-8 text-primary-container/60" />
          </div>

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-on-primary/10 px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-on-primary backdrop-blur-sm">
                <Sparkles className="size-3.5 text-sun" aria-hidden="true" />
                Ven a conocernos
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-balance md:text-5xl">
                Un jardín para crecer felices
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-on-primary/90 md:text-lg">
                Agenda una visita, conoce nuestras aulas y déjanos responder todas tus
                preguntas. Te esperamos con los brazos abiertos.
              </p>
            </div>

            <div className="flex w-full max-w-sm flex-col gap-3">
              <Link href="/contacto" className="btn btn-sun w-full">
                <MessageCircleHeart className="size-5" aria-hidden="true" />
                Agendar una visita
              </Link>
              <Link
                href="/admisiones"
                className="btn btn-glass w-full"
              >
                Iniciar inscripción
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+582861234567"
                className="mt-1 flex items-center justify-center gap-2 text-sm font-bold text-on-primary/90 transition-colors hover:text-on-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                +58 (0286) 123-4567
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
