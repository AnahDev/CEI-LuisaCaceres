import ResourceCard from "../../components/material/ResourceCard";

// Datos mock — reemplazar por fetch al backend cuando esté listo
const PARA_PINTAR = [
    {
        icon: "palette",
        title: "Animales de la Granja",
        description: "Dibujos sencillos de vaca, gallina y caballo, ideales para colorear en familia.",
        href: "/documentos/pintar-animales-granja.pdf",
    },
    {
        icon: "auto_awesome",
        title: "Figuras Geométricas",
        description: "Círculos, cuadrados y triángulos para reforzar formas mientras se colorea.",
        href: "/documentos/pintar-figuras.pdf",
    },
    {
        icon: "eco",
        title: "Naturaleza y Plantas",
        description: "Flores, árboles y paisajes pensados para estimular la creatividad al aire libre.",
        href: "/documentos/pintar-naturaleza.pdf",
    },
];

export default function ParaPintarPage() {
    return (
        <main className="pt-24 pb-24 font-['Plus_Jakarta_Sans']">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mt-12 mb-16 text-center flex flex-col items-center gap-4">
                    <div className="inline-block bg-[#f7a48b]/30 text-[#8e4d39] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-[#f7a48b]/50">
                        Material
                    </div>
                    <h1 className="font-extrabold text-4xl md:text-5xl text-[#006789] tracking-tight">
                        Para Pintar
                    </h1>
                    <p className="text-[#5d605c] text-lg max-w-2xl">
                        Láminas para imprimir y colorear en casa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PARA_PINTAR.map((item, idx) => (
                        <ResourceCard
                            key={idx}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                            iconColor="text-[#8e4d39]"
                            bgColor="bg-[#f7a48b]/20"
                        />
                    ))}
                </div>

            </div>
        </main>
    );
}