
import ResourceCard from "../../components/material/ResourceCard";

// Datos mock — reemplazar por fetch al backend cuando esté listo
const LIBROS = [
    {
        icon: "menu_book",
        title: "Cuaderno de Matemática - Nivel Inicial",
        description: "Ejercicios de números, formas y conteo para los más pequeños del preescolar.",
        href: "/documentos/libro-matematica-inicial.pdf",
    },
    {
        icon: "auto_stories",
        title: "Lecturas Cortas para Preescolar",
        description: "Cuentos ilustrados pensados para fomentar el hábito de la lectura desde temprana edad.",
        href: "/documentos/lecturas-preescolar.pdf",
    },
    {
        icon: "language",
        title: "Vocabulario Básico en Inglés",
        description: "Palabras y frases sencillas para introducir a los niños al segundo idioma.",
        href: "/documentos/ingles-basico.pdf",
    },
];

export default function LibrosDidacticosPage() {
    return (
        <main className="pt-24 pb-24 font-['Plus_Jakarta_Sans']">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mt-12 mb-16 text-center flex flex-col items-center gap-4">
                    <div className="inline-block bg-[#cbfecc]/50 text-[#38643e] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-[#cbfecc]">
                        Material
                    </div>
                    <h1 className="font-extrabold text-4xl md:text-5xl text-[#006789] tracking-tight">
                        Libros Didácticos
                    </h1>
                    <p className="text-[#5d605c] text-lg max-w-2xl">
                        Recursos educativos para reforzar el aprendizaje en casa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {LIBROS.map((libro, idx) => (
                        <ResourceCard key={idx} {...libro} />
                    ))}
                </div>

            </div>
        </main>
    );
}