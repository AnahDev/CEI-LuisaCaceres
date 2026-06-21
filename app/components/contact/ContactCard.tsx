import React from 'react';

// Definimos la estructura de cada fila de información (ej: un ícono de reloj + "Lunes a Viernes" + "7:00 AM - 1:00 PM")
export interface ContactDetail {
    icon: string;       // Ícono de Material Symbols (ej: 'location_on', 'schedule')
    label: string;      // Título del dato (ej: 'Dirección', 'Horario')
    value: string | React.ReactNode; // El valor (texto normal o elementos HTML si necesitas saltos de línea)
}

export interface ContactCardProps {
    title: string;
    mainIcon: string;
    details: ContactDetail[];
    colorHex?: string;
}

export default function ContactCard({
    title,
    mainIcon,
    details,
    colorHex = "#006789" // Color Teal por defecto
}: ContactCardProps) {
    return (
        <div
            className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(48,51,48,0.06)] flex flex-col gap-6 border-t-[6px] transition-transform hover:-translate-y-1 duration-300"
            style={{ borderTopColor: colorHex }}
        >
            {/* Encabezado: Ícono principal y Título */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: colorHex }}
                >
                    {mainIcon}
                </span>
                <h3 className="text-2xl font-extrabold text-[#303330]">
                    {title}
                </h3>
            </div>

            {/* Lista de Detalles */}
            <div className="flex flex-col gap-5 mt-2">
                {details.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        {/* Ícono secundario */}
                        <div className="bg-slate-50 p-2.5 rounded-full flex-shrink-0">
                            <span className="material-symbols-outlined text-[#006789] text-xl block">
                                {item.icon}
                            </span>
                        </div>

                        {/* Texto */}
                        <div className="flex flex-col mt-1">
                            <span className="font-bold text-[#303330] text-sm uppercase tracking-wide mb-1">
                                {item.label}
                            </span>
                            <div className="text-[#5d605c] leading-relaxed font-medium">
                                {item.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}