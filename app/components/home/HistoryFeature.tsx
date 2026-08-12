interface HistoryFeatureProps {
    badge?: string;
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    imageMaxWidth?: string; // ej: "max-w-sm", "max-w-md", "max-w-xl" — default: "max-w-lg" (mediana)
}

export default function HistoryFeature({ badge, title, paragraphs, imageSrc, imageAlt, imageMaxWidth = "max-w-lg" }: HistoryFeatureProps) {
    return (
        <section className="max-w-4xl mx-auto px-6 mb-32">

            {/* Encabezado centrado */}
            <div className="flex flex-col items-center text-center gap-4 mb-10">
                {badge && (
                    <div className="inline-block bg-[#cbfecc]/50 text-[#38643e] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-[#cbfecc]">
                        {badge}
                    </div>
                )}
                <h2 className="font-extrabold text-4xl md:text-5xl text-[#006789] tracking-tight text-balance leading-tight">
                    {title}
                </h2>
            </div>

            {/* Imagen mediana y centrada por defecto */}
            <div className={`relative mb-10 mx-auto ${imageMaxWidth}`}>
                <div className="absolute inset-0 bg-[#62ccff]/20 rounded-xl transform rotate-1 scale-[1.02] -z-10"></div>
                <img
                    alt={imageAlt}
                    className="w-full h-[220px] md:h-[280px] object-cover rounded-xl shadow-[0_8px_30px_rgba(48,51,48,0.08)]"
                    src={imageSrc}
                />
            </div>

            {/* Texto debajo, en columna legible (no ancho completo) */}
            <div className="space-y-6 text-[#5d605c] text-lg leading-relaxed font-medium">
                {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>

        </section>
    );
}