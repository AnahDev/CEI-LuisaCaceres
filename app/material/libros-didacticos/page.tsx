import Link from 'next/link';
import { ArrowRight, BookOpen, Languages, Sparkles } from 'lucide-react';
import ResourceCard from '../../components/material/ResourceCard';
import PageHero from '../../components/ui/PageHero';
import SectionHeading from '../../components/ui/SectionHeading';
import Reveal from '../../components/ui/Reveal';

const LIBROS = [
  {
    icon: BookOpen,
    title: 'Cuaderno de Matemática — Nivel Inicial',
    description:
      'Ejercicios de números, formas y conteo para los más pequeños del preescolar.',
    href: '/documentos/libro-matematica-inicial.pdf',
    tone: 'primary' as const,
  },
  {
    icon: Sparkles,
    title: 'Lecturas Cortas para Preescolar',
    description:
      'Cuentos ilustrados pensados para fomentar el hábito de la lectura desde temprana edad.',
    href: '/documentos/lecturas-preescolar.pdf',
    tone: 'tertiary' as const,
  },
  {
    icon: Languages,
    title: 'Vocabulario Básico en Inglés',
    description:
      'Palabras y frases sencillas para introducir a los niños al segundo idioma.',
    href: '/documentos/ingles-basico.pdf',
    tone: 'secondary' as const,
  },
];

export default function LibrosDidacticosPage() {
  return (
    <main className="flex-grow">
      <PageHero
        badge="Material"
        title={
          <>
            Libros <span className="text-primary">didácticos</span>
          </>
        }
        description="Recursos educativos para reforzar el aprendizaje en casa, con actividades pensadas para disfrutar en familia."
        icon={BookOpen}
        tone="primary"
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Descargables"
            title="Aprender también en casa"
            description="Elige un recurso, descárgalo e imprímelo cuando lo necesites."
            icon={Sparkles}
            align="left"
            tone="primary"
            className="mb-8"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {LIBROS.map((libro, index) => (
            <Reveal key={libro.title} delay={index * 90}>
              <ResourceCard {...libro} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-low p-5 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-on-surface-variant">
              ¿No encuentras lo que buscas? Podemos ayudarte.
            </p>
            <Link href="/contacto" className="btn btn-ghost btn-sm shrink-0">
              Contactar al colegio
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
