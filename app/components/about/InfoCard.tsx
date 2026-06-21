import React from 'react';

export interface InfoCardProps {
    title: string;
    description: string;
    icon: string;
    colorHex?: string; // Color personalizado para el borde y el ícono
}

export default function InfoCard({
    title,
    description,
    icon,
    colorHex = "#006789" // Color Teal por defecto (el de tu marca)
}: InfoCardProps) {
    return (
        <div
            className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(48,51,48,0.06)] flex flex-col gap-4 border-t-[6px] transition-transform hover:-translate-y-1 duration-300"
            style={{ borderTopColor: colorHex }} // Usamos style inline para que acepte cualquier HEX dinámicamente
        >
            {/* Encabezado de la tarjeta: Ícono + Título */}
            <div className="flex items-center gap-4">
                <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: colorHex }}
                >
                    {icon}
                </span>
                <h3 className="text-2xl font-extrabold text-[#303330]">
                    {title}
                </h3>
            </div>

            {/* Cuerpo de texto */}
            <p className="text-[#5d605c] leading-relaxed text-lg font-medium">
                {description}
            </p>
        </div>
    );
}