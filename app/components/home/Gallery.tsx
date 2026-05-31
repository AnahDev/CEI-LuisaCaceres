const GALLERY_IMAGES = [
  "/images/imagen 11.jpg",
  "/images/imagen 1.jpg",
  "/images/imagen 6.jpg",
  "/images/imagen 8.jpg",
  "/images/imagen 9.jpg"
];

export default function Gallery() {
  return (
    <section className="mb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-extrabold text-4xl text-[#006789] tracking-tight mb-2">Momentos Inolvidables</h2>
          <p className="text-[#5d605c] text-lg">Un vistazo a nuestro día a día lleno de alegría.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="bg-[#f4f4f0] p-4 rounded-full text-[#303330] hover:bg-[#e1e3df] transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="bg-[#f4f4f0] p-4 rounded-full text-[#303330] hover:bg-[#e1e3df] transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="flex gap-6 px-6 md:px-12 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {GALLERY_IMAGES.map((src, idx) => (
          <img key={idx} alt={`Gallery image ${idx + 1}`} className="w-80 h-64 object-cover rounded-xl snap-center shrink-0 shadow-[0_4px_15px_rgba(48,51,48,0.05)]" src={src}/>
        ))}
      </div>
    </section>
  );
}