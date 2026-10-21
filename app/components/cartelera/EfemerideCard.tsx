interface EfemerideCardProps {
    image: string;
    day: string;
    month: string;
    title: string;
    description: string;
}

export default function EfemerideCard({ image, day, month, title, description }: EfemerideCardProps) {
    return (
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(48,51,48,0.05)] hover:-translate-y-1 transition-transform duration-300">
            <div className="relative w-full h-48 bg-surface-container">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-4xl">image</span>
                    </div>
                )}

                {/* Badge de fecha superpuesto */}
                <div className="absolute top-3 left-3 flex flex-col items-center justify-center bg-surface-container-lowest text-primary rounded-lg w-14 h-14 shadow-[0_4px_15px_rgba(48,51,48,0.15)]">
                    <span className="text-xl font-extrabold leading-none">{day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide">{month}</span>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-2">
                <h4 className="font-extrabold text-lg text-on-surface leading-snug">{title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
