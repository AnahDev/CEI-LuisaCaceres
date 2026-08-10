'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const CAROUSEL_SLIDES = [
  {
    id: 1,
    imageSrc: "/images/imagen 10.jpg",
    alt: "Niños de la UEC Luisa Cáceres de Arismendi participando en actividades culturales",
    title: "Educando con amor y valores",
    description: "Un espacio seguro y estimulante donde cada niño descubre su potencial a través del juego y la exploración."
  },
  {
    id: 2,
    imageSrc: "/images/imagen 3.jpg",
    alt: "Niños jugando en las aulas del preescolar",
    title: "Ambientes de aprendizaje",
    description: "Fomentamos la curiosidad natural mediante dinámicas innovadoras diseñadas para el desarrollo cognitivo y motriz."
  },
  {
    id: 3,
    imageSrc: "/images/imagen 8.jpg",
    alt: "Docentes guiando actividades recreativas",
    title: "Atención y cuidado personalizado",
    description: "Contamos con un equipo docente altamente calificado y comprometido con el bienestar emocional de tus pequeños."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Función para avanzar de diapositiva (enlazada en useCallback para optimizar rendimiento)
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  // Función para retroceder de diapositiva
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  // // Efecto para el Auto-play automático (cambia cada 10 segundos)
  // useEffect(() => {
  //   const slideInterval = setInterval(nextSlide, 10000);

  //   // Limpieza del intervalo cuando el componente se desmonte para prevenir fugas de memoria
  //   return () => clearInterval(slideInterval);
  // }, [nextSlide]);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24 mt-8 relative font-['Plus_Jakarta_Sans']">
      <div className="relative rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(48,51,48,0.08)] bg-[#f4f4f0] h-[600px] flex items-center justify-center">

        {/* Renderizado dinámico de las imágenes con transiciones fluidas de opacidad */}
        {CAROUSEL_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
              }`}
          >
            {/* Implementación nativa de <Image /> de Next.js para optimización automática */}
            <Image
              src={slide.imageSrc}
              alt={slide.alt}
              fill
              priority={idx === 0} // Da prioridad de carga a la primera imagen
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover rounded-xl"
            />
          </div>
        ))}

        {/* Capas superpuestas de gradiente difuminado (Overlays) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#006789]/80 to-transparent mix-blend-multiply rounded-xl z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#006789]/60 to-transparent rounded-xl z-10"></div>

        {/* Bloque de Contenido textual dinámico */}
        <div className="relative z-20 text-center px-8 md:px-16 lg:w-2/3 mx-auto flex flex-col items-center gap-8">
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#ffffff] tracking-tight text-balance leading-tight drop-shadow-md transition-all duration-500">
            {CAROUSEL_SLIDES[currentSlide].title}
          </h1>
          <p className="text-xl text-[#ffffff]/90 font-medium max-w-xl mx-auto text-balance transition-all duration-500">
            {CAROUSEL_SLIDES[currentSlide].description}
          </p>
          <button className="mt-4 bg-gradient-to-br from-[#f7a48b] to-[#f7a48b] text-[#5c2615] px-10 py-4 rounded-full font-bold text-lg shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_8px_20px_rgba(247,164,139,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
            Conoce más
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        </div>

        {/* Botón de control Izquierdo (Retroceder) */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#faf9f6]/80 backdrop-blur-md p-3 rounded-full text-[#006789] hover:bg-[#faf9f6] hover:scale-110 active:scale-90 transition-all shadow-sm z-30 outline-none"
          aria-label="Anterior diapositiva"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        {/* Botón de control Derecho (Avanzar) */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#faf9f6]/80 backdrop-blur-md p-3 rounded-full text-[#006789] hover:bg-[#faf9f6] hover:scale-110 active:scale-90 transition-all shadow-sm z-30 outline-none"
          aria-label="Siguiente diapositiva"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Indicadores inferiores de posición (Puntos/Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full shadow-sm transition-all duration-300 outline-none ${idx === currentSlide
                  ? 'bg-[#ffffff] scale-125'
                  : 'bg-[#ffffff]/50 hover:bg-[#ffffff]/80 cursor-pointer'
                }`}
              aria-label={`Ir a la diapositiva ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}