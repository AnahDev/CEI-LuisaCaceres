import React from 'react';

// Definimos las interfaces para mantener el código tipado y estructurado
export interface FeatureItem {
    icon: string;       // Nombre del ícono en Material Symbols (ej: 'favorite')
    title: string;      // Título de la característica
    iconColor?: string; // Color del texto del ícono (ej: 'text-[#006789]')
    bgColor?: string;   // Color de fondo del ícono (ej: 'bg-[#62ccff]/30')
}

export interface StatItem {
    value: string;      // Ej: 'XX+'
    label: React.ReactNode; // Ej: <>Años de<br />experiencia</>
}

export interface AboutProps {
    badge?: string;
    title: string;
    paragraphs: string[];
    features?: FeatureItem[];
    imageSrc: string;
    imageAlt: string;
    stat?: StatItem;
    reverse?: boolean; // Para alternar la imagen a la izquierda o derecha
}

export default function About({
    badge,
    title,
    paragraphs,
    features,
    imageSrc,
    imageAlt,
    stat,
    reverse = false,
}: AboutProps) {
    return (
        <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>

                {/* Columna de Texto */}
                <div className={`flex flex-col gap-8 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>

                    {badge && (
                        <div className="inline-block bg-[#cbfecc]/50 text-[#38643e] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-[#cbfecc]">
                            {badge}
                        </div>
                    )}

                    <h2 className="font-extrabold text-4xl md:text-5xl text-[#006789] tracking-tight text-balance leading-tight">
                        {title}
                    </h2>

                    <div className="space-y-6 text-[#5d605c] text-lg leading-relaxed font-medium">
                        {paragraphs.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>

                    {/* Renderizado dinámico de las tarjetas de características */}
                    {features && features.length > 0 && (
                        <div className="flex flex-wrap gap-4 mt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 bg-[#ffffff] p-4 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)]">
                                    <div className={`p-3 rounded-full ${feature.bgColor || 'bg-gray-100'} ${feature.iconColor || 'text-gray-800'}`}>
                                        <span className="material-symbols-outlined fill text-3xl">{feature.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#303330]">{feature.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Columna de Imagen */}
                <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="absolute inset-0 bg-[#62ccff]/20 rounded-xl transform rotate-3 scale-105 -z-10"></div>
                    <img
                        alt={imageAlt}
                        className="w-full h-[500px] object-cover rounded-xl shadow-[0_8px_30px_rgba(48,51,48,0.08)]"
                        src={imageSrc}
                    />

                    {/* Renderizado dinámico de la estadística flotante */}
                    {stat && (
                        <div className="absolute -bottom-6 -left-6 bg-[#ffffff] p-6 rounded-xl shadow-[0_12px_40px_rgba(48,51,48,0.1)] flex items-center gap-4 z-10">
                            <span className="text-4xl font-extrabold text-[#006789]">{stat.value}</span>
                            <span className="text-sm font-bold text-[#5d605c] leading-tight">{stat.label}</span>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}