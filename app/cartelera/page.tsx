import EventItem from "../components/cartelera/EventItem";
import EfemerideCard from "../components/cartelera/EfemerideCard";
// import DocumentItem from "../components/cartelera/DocumentItem";
import QuickLinkCard from "../components/cartelera/QuickLinkCard";

// ============================================================
// DATOS MOCK (temporales) — mientras no esté conectado el backend.
// Cuando el backend esté listo, reemplaza cada const de acá por
// un fetch/query que devuelva EXACTAMENTE esta misma forma de datos,
// y no hace falta tocar nada del JSX ni de los componentes de abajo.
//
// Ej. futuro:
//   const eventos = await fetch(`${API_URL}/eventos`).then(r => r.json());
//   const efemerides = await fetch(`${API_URL}/efemerides`).then(r => r.json());
// (y esta función pasaría a ser `async function CarteleraPage()`,
// ya que Next.js App Router soporta Server Components async por defecto)
// ============================================================
const AVISO_URGENTE = {
    active: true,
    text: "Reunión de padres y representantes: Viernes 15 de agosto, 8:00 AM en el auditorio principal.",
};

const EVENTOS = [
    { day: "15", month: "Ago", title: "Reunión de Padres", category: "Reunión", categoryColor: "bg-[#62ccff]/20 text-[#006789]" },
    { day: "22", month: "Ago", title: "Examen de Matemática", category: "Exámenes", categoryColor: "bg-[#f7a48b]/20 text-[#8e4d39]" },
    { day: "05", month: "Sep", title: "Olimpiadas Deportivas", category: "Deportivo", categoryColor: "bg-[#cbfecc]/40 text-[#38643e]" },
    { day: "12", month: "Sep", title: "Día Feriado - Independencia", category: "Feriado", categoryColor: "bg-[#b1b2af]/20 text-[#5d605c]" },
];

const EFEMERIDES = [
    {
        image: "/images/imagen 6.jpg",
        day: "22",
        month: "Abr",
        title: "Día de la Tierra",
        description: "Reflexionamos junto a nuestros alumnos sobre el cuidado del planeta y la naturaleza.",
    },
    {
        image: "/images/imagen 8.jpg",
        day: "15",
        month: "Jul",
        title: "Día de la Batalla de Carabobo",
        description: "Conmemoramos uno de los hechos históricos más importantes de la independencia venezolana.",
    },
    {
        image: "/images/imagen 9.jpg",
        day: "12",
        month: "Oct",
        title: "Día de la Resistencia Indígena",
        description: "Honramos la memoria y el legado de nuestros pueblos originarios.",
    },
];

// const DOCUMENTOS = [
//     { title: "Autorización de Salida", fileType: "PDF", fileSize: "180 KB", href: "/documentos/autorizacion-salida.pdf" },
//     { title: "Circular - Inicio de Año Escolar", fileType: "PDF", fileSize: "220 KB", href: "/documentos/circular-inicio.pdf" },
//     { title: "Horario de Clases 2026-2027", fileType: "PDF", fileSize: "310 KB", href: "/documentos/horario-clases.pdf" },
// ];

const ENLACES = [
    // { icon: "school", title: "Aula Virtual", href: "#", iconColor: "text-[#006789]", bgColor: "bg-[#62ccff]/20" },
    { icon: "mail", title: "Correo Institucional", href: "#", iconColor: "text-[#8e4d39]", bgColor: "bg-[#f7a48b]/20" },
    // { icon: "auto_stories", title: "Libros Digitales", href: "#", iconColor: "text-[#38643e]", bgColor: "bg-[#cbfecc]/40" },
    { icon: "menu_book", title: "Libros Didácticos", href: "/material/libros-didacticos", iconColor: "text-[#006789]", bgColor: "bg-[#62ccff]/20" },
    { icon: "palette", title: "Para Pintar", href: "/material/para-pintar", iconColor: "text-[#8e4d39]", bgColor: "bg-[#f7a48b]/20" },
];

export default function CarteleraPage() {
    return (
        <main className="pt-24 pb-24 font-['Plus_Jakarta_Sans']">

            {/* Cintillo de avisos urgentes */}
            {AVISO_URGENTE.active && (
                <div className="bg-gradient-to-r from-[#f7a48b] to-[#f4a58c] text-[#5c2615] px-6 py-3">
                    <div className="max-w-7xl mx-auto flex items-center gap-3">
                        <span className="material-symbols-outlined shrink-0">campaign</span>
                        <p className="text-sm md:text-base font-bold">{AVISO_URGENTE.text}</p>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}
                <div className="mt-12 mb-16 text-center flex flex-col items-center gap-4">
                    <div className="inline-block bg-[#cbfecc]/50 text-[#38643e] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-[#cbfecc]">
                        Publicaciones
                    </div>
                    <h1 className="font-extrabold text-4xl md:text-5xl text-[#006789] tracking-tight">
                        Cartelera Informativa
                    </h1>
                    <p className="text-[#5d605c] text-lg max-w-2xl">
                        Mantente al día con las novedades, fechas importantes y recursos de nuestra institución.
                    </p>
                </div>

                {/* Calendario escolar */}
                <section className="mb-20">
                    <h2 className="font-extrabold text-2xl md:text-3xl text-[#303330] mb-6">Calendario Escolar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {EVENTOS.map((evento, idx) => (
                            <EventItem key={idx} {...evento} />
                        ))}
                    </div>
                </section>

                {/* Efemérides */}
                <section className="mb-20">
                    <h2 className="font-extrabold text-2xl md:text-3xl text-[#303330] mb-6">Efemérides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {EFEMERIDES.map((efemeride, idx) => (
                            <EfemerideCard key={idx} {...efemeride} />
                        ))}
                    </div>
                </section>

                {/* Documentos y descargas */}
                {/* <section className="mb-20">
                    <h2 className="font-extrabold text-2xl md:text-3xl text-[#303330] mb-6">Documentos y Descargas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {DOCUMENTOS.map((doc, idx) => (
                            <DocumentItem key={idx} {...doc} />
                        ))}
                    </div>
                </section> */}

                {/* Enlaces de interés */}
                <section>
                    <h2 className="font-extrabold text-2xl md:text-3xl text-[#303330] mb-6">Enlaces de Interés</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {ENLACES.map((enlace, idx) => (
                            <QuickLinkCard key={idx} {...enlace} />
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}