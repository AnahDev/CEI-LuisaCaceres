'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Images } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const GALLERY_IMAGES = [
  {
    src: '/images/imagen 11.jpg',
    alt: 'Niños compartiendo durante una actividad en el preescolar',
    caption: 'Compartir y jugar',
  },
  {
    src: '/images/imagen 1.jpg',
    alt: 'Actividad artística con los niños del preescolar',
    caption: 'Manos creativas',
  },
  {
    src: '/images/imagen 6.jpg',
    alt: 'Celebración escolar con los niños y docentes',
    caption: 'Días especiales',
  },
  {
    src: '/images/imagen 8.jpg',
    alt: 'Docente acompañando una actividad recreativa',
    caption: 'Acompañar siempre',
  },
  {
    src: '/images/imagen 9.jpg',
    alt: 'Niños explorando y aprendiendo juntos',
    caption: 'Descubrir juntos',
  },
  {
    src: '/images/imagen 10.jpg',
    alt: 'Presentación cultural de los estudiantes',
    caption: 'Talento en escena',
  },
  {
    src: '/images/imagen 2.jpg',
    alt: 'Juegos y aprendizaje en el aula',
    caption: 'Aprender jugando',
  },
  {
    src: '/images/imagen 3.jpg',
    alt: 'Rincón de lectura y juego del preescolar',
    caption: 'Rincones de juego',
  },
];

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount =
      direction === 'left' ? -container.clientWidth * 0.75 : container.clientWidth * 0.75;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Momentos"
            title={
              <>
                Recuerdos que <span className="text-primary">brillan</span>
              </>
            }
            description="Un vistazo a nuestro día a día lleno de juego, arte y amistad."
            icon={Images}
            align="left"
          />

          <div className="flex items-center gap-2">
            <Link
              href="/galeria"
              className="btn btn-ghost btn-sm mr-1 hidden sm:inline-flex"
            >
              Ver galería
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="grid size-11 place-items-center rounded-full border border-outline-variant/60 bg-surface-container-lowest text-on-surface-variant transition-all hover:border-primary/40 hover:text-primary active:scale-95"
              aria-label="Ver imágenes anteriores"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="grid size-11 place-items-center rounded-full border border-outline-variant/60 bg-surface-container-lowest text-on-surface-variant transition-all hover:border-primary/40 hover:text-primary active:scale-95"
              aria-label="Ver más imágenes"
            >
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:-mx-8 md:px-8"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className="group relative h-[270px] w-[76vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border-[5px] border-surface-container-lowest bg-surface-container-high shadow-[0_22px_44px_-30px_rgba(31,48,56,0.45)] sm:h-[300px] sm:w-[320px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 76vw, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03212c]/75 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

              <span className="absolute left-4 top-4 rounded-full bg-white/18 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-[0.12em] text-white backdrop-blur-md">
                {String(index + 1).padStart(2, '0')}
              </span>

              <figcaption className="absolute inset-x-4 bottom-4 translate-y-1 font-display text-lg font-extrabold text-white transition-transform duration-300 group-hover:translate-y-0">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-on-surface-variant sm:hidden">
          Desliza para ver más
        </p>

        <Link href="/galeria" className="btn btn-ghost btn-sm mt-6 w-full sm:hidden">
          Ver galería completa
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
