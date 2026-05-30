import FeatureCard from "../ui/FeatureCard";

const FEATURES_DATA = [
  { icon: "diversity_1", iconColor: "text-[#006789]", iconBg: "bg-[#62ccff]/20", title: "Atención personalizada", description: "Grupos reducidos para garantizar la atención individual que cada niño merece." },
  { icon: "extension", iconColor: "text-[#8e4d39]", iconBg: "bg-[#f7a48b]/20", title: "Aprendizaje divertido", description: "Metodologías basadas en el juego que estimulan la curiosidad y la alegría de aprender." },
  { icon: "health_and_safety", iconColor: "text-[#3c6942]", iconBg: "bg-[#cbfecc]/30", title: "Ambiente seguro", description: "Instalaciones diseñadas pensando en la seguridad física y emocional de los niños." },
  { icon: "psychology", iconColor: "text-[#005a78]", iconBg: "bg-[#4abff3]/20", title: "Desarrollo integral", description: "Fomentamos habilidades cognitivas, sociales, motoras y emocionales en equilibrio." }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f4f4f0] py-24 rounded-xl mx-4 lg:mx-12 mb-32 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="text-[#8e4d39] font-bold tracking-wider uppercase text-sm">¿Por qué elegirnos?</span>
          <h2 className="font-extrabold text-4xl md:text-5xl text-[#303330] tracking-tight">
            Lo mejor para tus pequeños
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}