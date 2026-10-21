import { Puzzle, ShieldCheck, Sparkles, Sprout, Users } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';
import WaveDivider from '../ui/WaveDivider';
import Reveal from '../ui/Reveal';

const FEATURES_DATA = [
  {
    icon: Users,
    iconColor: 'text-primary',
    iconBg: 'bg-primary-container',
    title: 'Atención personalizada',
    description:
      'Grupos reducidos para garantizar la atención individual que cada niño merece.',
  },
  {
    icon: Puzzle,
    iconColor: 'text-on-sun-container',
    iconBg: 'bg-sun-container',
    title: 'Aprendizaje divertido',
    description:
      'Metodologías basadas en el juego que estimulan la curiosidad y la alegría de aprender.',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary-container',
    title: 'Ambiente seguro',
    description:
      'Instalaciones diseñadas pensando en la seguridad física y emocional de los niños.',
  },
  {
    icon: Sprout,
    iconColor: 'text-tertiary',
    iconBg: 'bg-tertiary-container',
    title: 'Desarrollo integral',
    description:
      'Fomentamos habilidades cognitivas, sociales, motoras y emocionales en equilibrio.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low">
      <WaveDivider flip className="-mt-px text-background" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob-shape -left-20 top-24 h-64 w-64 bg-primary-container/40 blur-3xl" />
        <div className="blob-shape -right-24 bottom-10 h-72 w-72 bg-tertiary-container/35 blur-3xl" />
        <Sparkles className="absolute left-[12%] top-24 size-7 rotate-12 text-tertiary/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 md:pb-24 md:pt-10">
        <Reveal>
          <SectionHeading
            eyebrow="¿Por qué elegirnos?"
            title={
              <>
                Lo mejor para tus <span className="text-tertiary">pequeños</span>
              </>
            }
            description="Cada rincón, cada actividad y cada persona está pensada para que aprender se sienta como jugar."
            icon={Sparkles}
            tone="tertiary"
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES_DATA.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 90}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider className="text-background" />
    </section>
  );
}
