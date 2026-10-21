import Link from 'next/link';
import { ArrowRight, Leaf, Palette, Shapes, Sparkles } from 'lucide-react';
import ResourceCard from '../../components/material/ResourceCard';
import PageHero from '../../components/ui/PageHero';
import SectionHeading from '../../components/ui/SectionHeading';
import Reveal from '../../components/ui/Reveal';

const PARA_PINTAR = [
  {
    icon: Palette,
    title: 'Animales de la Granja',
    description:
      'Dibujos sencillos de vaca, gallina y caballo, ideales para colorear en familia.',
    href: '/documentos/pintar-animales-granja.pdf',
    tone: 'tertiary' as const,
  },
  {
    icon: Shapes,
    title: 'Figuras Geométricas',
    description:
      'Círculos, cuadrados y triángulos para reforzar formas mientras se colorea.',
    href: '/documentos/pintar-figuras.pdf',
    tone: 'primary' as const,
  },
  {
    icon: Leaf,
    title: 'Naturaleza y Plantas',
    description:
      'Flores, árboles y paisajes pensados para estimular la creatividad al aire libre.',
    href: '/documentos/pintar-naturaleza.pdf',
    tone: 'secondary' as const,
  },
];

export default function ParaPintarPage() {
  return (
    <main className="flex-grow">
      <PageHero
        badge="Material"
        title={
          <>
            Láminas para <span className="text-tertiary">pintar</span>
          </>
        }
        description="Dibujos listos para imprimir y colorear. Una actividad tranquila para crear, practicar y compartir."
        icon={Palette}
        tone="tertiary"
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Descargables"
            title="Colorear, crear y disfrutar"
            description="Imprime las láminas que más te gusten y deja volar la imaginación."
            icon={Sparkles}
            align="left"
            tone="tertiary"
            className="mb-8"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PARA_PINTAR.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <ResourceCard {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-low p-5 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-on-surface-variant">
              ¿Quieres compartir tu creación con nosotros?
            </p>
            <Link href="/contacto" className="btn btn-ghost btn-sm shrink-0">
              Escríbenos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
