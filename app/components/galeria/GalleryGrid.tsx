'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const PHOTOS = [
  { src: '/images/imagen 11.jpg', alt: 'Niños compartiendo durante una actividad', caption: 'Compartir y jugar', ratio: 'aspect-[4/5]' },
  { src: '/images/imagen 1.jpg', alt: 'Actividad artística en el preescolar', caption: 'Manos creativas', ratio: 'aspect-square' },
  { src: '/images/imagen 6.jpg', alt: 'Celebración escolar con niños y docentes', caption: 'Días especiales', ratio: 'aspect-[4/3]' },
  { src: '/images/imagen 8.jpg', alt: 'Docente acompañando una actividad recreativa', caption: 'Acompañar siempre', ratio: 'aspect-[4/5]' },
  { src: '/images/imagen 9.jpg', alt: 'Niños explorando y aprendiendo juntos', caption: 'Descubrir juntos', ratio: 'aspect-[4/3]' },
  { src: '/images/imagen 10.jpg', alt: 'Presentación cultural de los estudiantes', caption: 'Talento en escena', ratio: 'aspect-square' },
  { src: '/images/imagen 2.jpg', alt: 'Juegos y aprendizaje en el aula', caption: 'Aprender jugando', ratio: 'aspect-[4/5]' },
  { src: '/images/imagen 3.jpg', alt: 'Rincón de lectura y juego del preescolar', caption: 'Rincones de juego', ratio: 'aspect-[4/3]' },
  { src: '/images/imagen 4.jpg', alt: 'Niños y docentes en una actividad grupal', caption: 'Somos comunidad', ratio: 'aspect-square' },
  { src: '/images/imagen 5.jpg', alt: 'Niños celebrando con la bandera en el escenario', caption: 'Orgullo y alegría', ratio: 'aspect-[4/5]' },
  { src: '/images/imagen 7.jpg', alt: 'Actividad al aire libre del preescolar', caption: 'Jugar al aire libre', ratio: 'aspect-[4/3]' },
  { src: '/images/imagen 12.jpg', alt: 'Momento de convivencia en el preescolar', caption: 'Pequeños momentos', ratio: 'aspect-square' },
  { src: '/images/imagen 13.jpg', alt: 'Actividad pedagógica con los niños', caption: 'Aprender haciendo', ratio: 'aspect-[4/5]' },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  const previous = useCallback(() => {
    setSelected((current) =>
      current === null ? null : current === 0 ? PHOTOS.length - 1 : current - 1,
    );
  }, []);

  const next = useCallback(() => {
    setSelected((current) =>
      current === null ? null : current === PHOTOS.length - 1 ? 0 : current + 1,
    );
  }, []);

  useEffect(() => {
    if (selected === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selected, close, previous, next]);

  const currentPhoto = selected === null ? null : PHOTOS[selected];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {PHOTOS.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setSelected(index)}
            aria-label={`Ampliar imagen: ${photo.caption}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border-[5px] border-surface-container-lowest bg-surface-container-high text-left shadow-[0_20px_40px_-30px_rgba(31,48,56,0.45)]"
          >
            <span className={`relative block w-full ${photo.ratio}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </span>
            <span className="absolute inset-0 bg-gradient-to-t from-[#03212c]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 translate-y-2 font-display text-base font-extrabold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </span>
            <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
              <ZoomIn className="size-4" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {currentPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.caption}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#051820]/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[68vh] w-full overflow-hidden rounded-[1.5rem] border-4 border-white/10 bg-black/30">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="font-display text-lg font-extrabold text-white">
                {currentPhoto.caption}
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                {selected! + 1} / {PHOTOS.length}
              </span>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Cerrar imagen"
              className="absolute -right-1 -top-12 grid size-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={previous}
              aria-label="Imagen anterior"
              className="absolute -left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 sm:-left-14"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente imagen"
              className="absolute -right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 sm:-right-14"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
