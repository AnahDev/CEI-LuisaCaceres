'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Pause,
  Play,
  Sparkles,
} from 'lucide-react';

const CAROUSEL_SLIDES = [
  {
    id: 1,
    imageSrc: '/images/imagen 10.jpg',
    alt: 'Niños de la UEC Luisa Cáceres de Arismendi participando en actividades culturales',
    title: 'Educando con',
    highlight: 'amor y valores',
    description:
      'Un espacio seguro y estimulante donde cada niño descubre su potencial a través del juego y la exploración.',
  },
  {
    id: 2,
    imageSrc: '/images/imagen 3.jpg',
    alt: 'Niños jugando y aprendiendo en las aulas del preescolar',
    title: 'Ambientes que despiertan',
    highlight: 'curiosidad',
    description:
      'Fomentamos la curiosidad natural con dinámicas pensadas para el desarrollo cognitivo, social y motriz.',
  },
  {
    id: 3,
    imageSrc: '/images/imagen 8.jpg',
    alt: 'Docentes acompañando actividades recreativas con los niños',
    title: 'Cuidado cercano para',
    highlight: 'crecer felices',
    description:
      'Un equipo docente comprometido con el bienestar emocional de tus pequeños y con cada familia.',
  },
];

const TRUST_IMAGES = ['/images/imagen 1.jpg', '/images/imagen 5.jpg', '/images/imagen 9.jpg'];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isHovered || !isAutoPlaying) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(nextSlide, 8000);
    return () => window.clearInterval(timer);
  }, [isHovered, isAutoPlaying, nextSlide]);

  const slide = CAROUSEL_SLIDES[currentSlide];

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-4 pt-2 sm:px-6 md:pt-4">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob-shape -left-10 top-24 h-52 w-52 bg-sun-container/80 blur-3xl" />
        <div className="blob-shape -right-16 bottom-0 h-64 w-64 bg-primary-container/60 blur-3xl" />
      </div>

      <div
        className="relative overflow-hidden rounded-[2rem] border-[6px] border-surface-container-lowest bg-surface-container-high shadow-[0_44px_90px_-46px_rgba(31,48,56,0.55)] md:rounded-[2.75rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setIsHovered(true)}
        onBlurCapture={() => setIsHovered(false)}
      >
        <div className="relative min-h-[600px] sm:min-h-[620px] md:min-h-[660px]">
          {CAROUSEL_SLIDES.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={item.imageSrc}
                alt={item.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className={`object-cover ${index === currentSlide ? 'kenburns' : ''}`}
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-[#03212c]/95 via-[#06303f]/70 to-[#06303f]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03212c]/85 via-transparent to-[#03212c]/25" />

          <div className="relative z-10 flex min-h-[600px] flex-col justify-end px-6 pb-32 pt-24 sm:min-h-[620px] sm:px-8 md:min-h-[660px] md:px-14 md:pb-28 lg:px-16">
            <div className="max-w-2xl">
              <span className="inline-flex animate-rise items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                <Sparkles className="size-3.5 text-sun" aria-hidden="true" />
                Inscripciones abiertas 2026–2027
              </span>

              <div key={slide.id} className="mt-5">
                <h1 className="animate-rise delay-1 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-balance text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.25)] sm:text-6xl lg:text-[4.4rem]">
                  {slide.title}{' '}
                  <span className="relative inline-block text-sun">
                    {slide.highlight}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 220 14"
                      className="absolute -bottom-1 left-0 h-3 w-full text-sun/60"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3 10C50 3 110 3 217 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="animate-rise delay-2 mt-5 max-w-xl text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                  {slide.description}
                </p>
              </div>

              <div className="animate-rise delay-3 mt-8 flex flex-wrap items-center gap-3">
                <Link href="/admisiones" className="btn btn-sun btn-lg">
                  Solicitar cupo
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
                <Link href="#nosotros" className="btn btn-glass btn-lg">
                  <HeartHandshake className="size-5" aria-hidden="true" />
                  Conócenos
                </Link>
              </div>

              <div className="animate-rise delay-4 mt-8 flex items-center gap-3">
                <div className="flex -space-x-3" aria-hidden="true">
                  {TRUST_IMAGES.map((src) => (
                    <span
                      key={src}
                      className="relative size-10 overflow-hidden rounded-full border-2 border-white/80 shadow-sm"
                    >
                      <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                  ))}
                </div>
                <p className="max-w-[15rem] text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                  Familias que crecen con nosotros
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 z-20 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
            <div className="flex gap-2" role="group" aria-label="Controles del carrusel">
              <button
                type="button"
                onClick={() => setIsAutoPlaying((current) => !current)}
                aria-label={isAutoPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
                aria-pressed={!isAutoPlaying}
                className="grid size-11 place-items-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
              >
                {isAutoPlaying ? (
                  <Pause className="size-4" aria-hidden="true" />
                ) : (
                  <Play className="size-4" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Diapositiva anterior"
                className="grid size-11 place-items-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-md transition-all hover:-translate-x-0.5 hover:bg-white/25 active:scale-95"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Siguiente diapositiva"
                className="grid size-11 place-items-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-md transition-all hover:translate-x-0.5 hover:bg-white/25 active:scale-95"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center gap-1">
              {CAROUSEL_SLIDES.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                  aria-current={index === currentSlide ? 'true' : undefined}
                  className="grid size-11 place-items-center rounded-full"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'h-2.5 w-8 bg-sun'
                        : 'h-2.5 w-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute right-6 top-6 z-20 hidden rotate-3 items-center gap-3 rounded-2xl border border-white/40 bg-surface-container-lowest/95 px-4 py-3 text-on-surface shadow-[0_18px_36px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md lg:flex">
            <span className="grid size-10 place-items-center rounded-xl bg-sun-container text-on-sun-container">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-extrabold">Cupos abiertos</span>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                Año escolar 2026–2027
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
