'use client';

import { useRef } from 'react';
import Image from 'next/image';

const GALLERY_IMAGES = [
  "/images/imagen 11.jpg",
  "/images/imagen 1.jpg",
  "/images/imagen 6.jpg",
  "/images/imagen 8.jpg",
  "/images/imagen 9.jpg",
  "/images/imagen 10.jpg",
  "/images/imagen 2.jpg",
  "/images/imagen 3.jpg",
  "/images/imagen 4.jpg",
  "/images/imagen 5.jpg",
];

export default function Gallery() {
  // Creamos una referencia al contenedor del scroll de imágenes
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Función genérica para manejar el desplazamiento
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      // Determinamos cuánto se va a desplazar. 
      // container.clientWidth toma el ancho visible del contenedor para rodar una sección completa.
      const scrollAmount = direction === 'left' ? -container.clientWidth * 0.75 : container.clientWidth * 0.75;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Desplazamiento animado y suave
      });
    }
  };

  return (
    <section className="mb-32 overflow-hidden font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-extrabold text-4xl text-[#006789] tracking-tight mb-2">Momentos Inolvidables</h2>
          <p className="text-[#5d605c] text-lg">Un vistazo a nuestro día a día lleno de alegría.</p>
        </div>
        
        {/* Botones de control con eventos onClick activos */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => handleScroll('left')}
            className="bg-[#f4f4f0] p-4 rounded-full text-[#303330] hover:bg-[#e1e3df] hover:scale-105 active:scale-95 transition-all shadow-sm outline-none cursor-pointer"
            aria-label="Desplazar hacia la izquierda"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={() => handleScroll('right')}
            className="bg-[#f4f4f0] p-4 rounded-full text-[#303330] hover:bg-[#e1e3df] hover:scale-105 active:scale-95 transition-all shadow-sm outline-none cursor-pointer"
            aria-label="Desplazar hacia la derecha"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Contenedor asignado con la referencia ref y estilos optimizados */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 px-6 md:px-12 pb-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {GALLERY_IMAGES.map((src, idx) => (
          <div 
            key={idx} 
            className="w-80 h-64 relative shrink-0 snap-center rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(48,51,48,0.05)]"
          >
            {/* Reemplazado por Next Image para mejorar el rendimiento del renderizado de la galería */}
            <Image 
              src={src}
              alt={`Gallery image ${idx + 1}`} 
              fill
              sizes="(max-width: 768px) 320px, 320px"
              className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}