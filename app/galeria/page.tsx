import Link from 'next/link';
import { ArrowRight, Images, Sparkles } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GalleryGrid from '../components/galeria/GalleryGrid';

export default function GaleriaPage() {
  return (
    <main className="flex-grow">
      <PageHero
        badge="Momentos"
        title={
          <>
            Nuestra galería de <span className="text-tertiary">recuerdos</span>
          </>
        }
        description="Juegos, arte, celebraciones y aprendizajes: un pedacito de nuestro día a día en el jardín."
        icon={Images}
        tone="tertiary"
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <GalleryGrid />
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-sun-container p-7 text-on-sun-container sm:p-9">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-dots opacity-25" />
            <Sparkles className="absolute right-8 top-6 size-8 text-on-sun-container/30" />
          </div>
          <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                ¿Quieres verlo en persona?
              </h2>
              <p className="mt-1 text-sm font-semibold opacity-85">
                Agenda una visita y recorre nuestras aulas con nosotros.
              </p>
            </div>
            <Link href="/contacto" className="btn btn-primary shrink-0">
              Agendar visita
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
