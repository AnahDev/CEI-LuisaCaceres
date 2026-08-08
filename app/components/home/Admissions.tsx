import Link from "next/link";
import AdmissionItem from "../ui/AdmissionItem";

const ADMISSION_REQUIREMENTS = [
  { title: "Copia de Partida de Nacimiento", description: "Del niño o niña, legible y actualizada." },
  { title: "Copia de Cédula de Identidad", description: "De ambos padres o representantes legales." },
  { title: "Cartón de Vacunas", description: "Copia del control de vacunas al día." },
  { title: "Fotos tipo carnet", description: "4 fotos del niño(a) y 2 de cada representante." }
];

export default function Admissions() {
  return (
    <section className="max-w-5xl mx-auto px-6 mb-32">
      <div className="bg-[#cbfecc]/20 rounded-xl p-10 md:p-16 relative overflow-hidden shadow-[0_8px_30px_rgba(48,51,48,0.04)] border border-[#cbfecc]/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#cbfecc]/40 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f7a48b]/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-extrabold text-4xl md:text-5xl text-[#303330] tracking-tight mb-4">
              Proceso de Admisión
            </h2>
            <p className="text-[#5d605c] text-lg max-w-2xl mx-auto">
              Únete a nuestra familia. Aquí te detallamos los requisitos básicos para iniciar el proceso de inscripción.
            </p>
          </div>
          <div className="bg-[#ffffff] p-8 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12 border border-[#b1b2af]/10">
            {ADMISSION_REQUIREMENTS.map((req, idx) => (
              <AdmissionItem key={idx} title={req.title} description={req.description} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/admisiones">
              <button className="bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] px-10 py-4 rounded-full font-bold text-lg shadow-[inset_0_2px_0_rgba(255,255,255,0.2),0_8px_20px_rgba(0,103,137,0.2)] hover:-translate-y-1 transition-transform duration-300 flex items-center gap-2">
                Ver Admisiones Completas
                <span className="material-symbols-outlined">assignment</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}