export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-block bg-[#cbfecc]/50 text-[#38643e] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-[#cbfecc]">
            Nuestra Misión
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl text-[#006789] tracking-tight text-balance leading-tight">
            Creciendo juntos en un ambiente de cariño
          </h2>
          <div className="space-y-6 text-[#5d605c] text-lg leading-relaxed font-medium">
            <p>
              En la UEC Luisa Cáceres de Arismendi, creemos que los primeros años son fundamentales. Nuestro compromiso es brindar una educación integral que fomente la curiosidad natural, el respeto mutuo y la alegría de aprender.
            </p>
            <p>
              A través de metodologías innovadoras y un enfoque centrado en el bienestar emocional, preparamos a nuestros pequeños para ser individuos seguros, creativos y empáticos.
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-3 bg-[#ffffff] p-4 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)]">
              <div className="bg-[#62ccff]/30 p-3 rounded-full text-[#006789]">
                <span className="material-symbols-outlined fill text-3xl">favorite</span>
              </div>
              <div>
                <h4 className="font-bold text-[#303330]">Amor y Respeto</h4>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#ffffff] p-4 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)]">
              <div className="bg-[#f7a48b]/30 p-3 rounded-full text-[#8e4d39]">
                <span className="material-symbols-outlined fill text-3xl">palette</span>
              </div>
              <div>
                <h4 className="font-bold text-[#303330]">Creatividad</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#62ccff]/20 rounded-xl transform rotate-3 scale-105 -z-10"></div>
          <img alt="Children painting in a colorful classroom" className="w-full h-[500px] object-cover rounded-xl shadow-[0_8px_30px_rgba(48,51,48,0.08)]" src="/images/imagen 5.jpg" />
          <div className="absolute -bottom-6 -left-6 bg-[#ffffff] p-6 rounded-xl shadow-[0_12px_40px_rgba(48,51,48,0.1)] flex items-center gap-4">
            <span className="text-4xl font-extrabold text-[#006789]">XX+</span>
            <span className="text-sm font-bold text-[#5d605c] leading-tight">Años de<br />experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
}