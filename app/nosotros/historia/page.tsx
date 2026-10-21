import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Eye,
  Heart,
  Palette,
  Sparkles,
  Star,
  Target,
} from 'lucide-react';
import About from '../../components/about/About';
import InfoCard from '../../components/about/InfoCard';
import PageHero from '../../components/ui/PageHero';
import SectionHeading from '../../components/ui/SectionHeading';
import Reveal from '../../components/ui/Reveal';

const TIMELINE = [
  {
    year: '1799',
    title: 'Nace en Caracas',
    text: 'Luisa Cáceres Díaz de Arismendi nace el 25 de septiembre.',
  },
  {
    year: '1814',
    title: 'Se casa con Arismendi',
    text: 'Contrae matrimonio con el general Juan Bautista Arismendi el 4 de diciembre.',
  },
  {
    year: '1815',
    title: 'Es detenida',
    text: 'Las autoridades españolas la apresan para presionar a su esposo y la envían a España.',
  },
  {
    year: '1818',
    title: 'Regresa a Venezuela',
    text: 'Liberada, vuelve al país el 26 de julio y continúa apoyando la independencia.',
  },
  {
    year: '1866',
    title: 'Su legado',
    text: 'Fallece en Caracas. En 1876 sus restos son sepultados en el Panteón Nacional.',
  },
];

export default function HistoriaPage() {
  return (
    <main className="flex-grow">
      <PageHero
        badge="Nosotros"
        title={
          <>
            Nuestra <span className="text-tertiary">historia</span>
          </>
        }
        description="Un nombre que honra a una mujer valiente y un proyecto educativo que crece con amor desde nuestros primeros días."
        icon={BookOpen}
        tone="tertiary"
      />

      <About
        badge="Quiénes somos"
        title={
          <>
            Creciendo juntos en un ambiente de{' '}
            <span className="text-tertiary">cariño</span>
          </>
        }
        paragraphs={[
          'En la UEC Luisa Cáceres de Arismendi, creemos que los primeros años son fundamentales. Nuestro compromiso es brindar una educación integral que fomente la curiosidad natural, el respeto mutuo y la alegría de aprender.',
          'A través de metodologías innovadoras y un enfoque centrado en el bienestar emocional, preparamos a nuestros pequeños para ser individuos seguros, creativos y empáticos.',
        ]}
        features={[
          {
            icon: Heart,
            title: 'Amor y respeto',
            bgColor: 'bg-primary-container',
            iconColor: 'text-primary',
          },
          {
            icon: Palette,
            title: 'Creatividad',
            bgColor: 'bg-tertiary-container',
            iconColor: 'text-tertiary',
          },
        ]}
        imageSrc="/images/imagen 5.jpg"
        imageAlt="Niños con la bandera en el escenario"
        stat={{
          value: '100%',
          label: 'Atención cercana',
        }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal>
          <SectionHeading
            eyebrow="Misión y visión"
            title="Lo que nos mueve cada día"
            description="Dos brújulas que guían nuestro trabajo con los niños y sus familias."
            icon={Sparkles}
            align="center"
            tone="primary"
            className="mb-10"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal delay={80}>
            <InfoCard
              title="Nuestra misión"
              icon={Target}
              tone="primary"
              description="Somos una institución con un firme compromiso con nuestros alumnos, a quienes brindamos un programa educativo integral de calidad. Día con día, mediante un aprendizaje significativo, adquieren una formación con alto rendimiento académico."
            />
          </Reveal>

          <Reveal delay={160}>
            <InfoCard
              title="Nuestra visión"
              icon={Eye}
              tone="secondary"
              description="Ser una escuela que aproveche al máximo su experiencia y prestigio para seguir brindando a las familias una de las mejores opciones educativas de nuestra comunidad, guiando a nuestros niños a vivir en paz."
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-container-low py-16 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="blob-shape -left-20 top-16 h-64 w-64 bg-sun-container/50 blur-3xl" />
          <Star className="absolute right-[12%] top-16 size-7 rotate-12 text-primary/25" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Línea de tiempo"
              title={
                <>
                  La vida de <span className="text-primary">Luisa Cáceres</span>
                </>
              }
              description="Una vida marcada por el coraje y el compromiso con la libertad."
              icon={BookOpen}
              align="center"
              tone="primary"
              className="mb-12"
            />
          </Reveal>

          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            <span
              aria-hidden="true"
              className="absolute left-[21px] top-2 h-[calc(100%-1rem)] w-0.5 rounded-full bg-outline-variant/70 md:left-0 md:top-[21px] md:h-0.5 md:w-full"
            />

            {TIMELINE.map((item, index) => (
              <li key={item.year} className="relative pl-14 md:pl-0 md:pr-3">
                <span
                  className={`absolute left-0 top-0 z-10 grid size-11 place-items-center rounded-full border-2 border-background font-display text-xs font-extrabold shadow-sm md:static md:mb-5 ${
                    index === TIMELINE.length - 1
                      ? 'bg-tertiary text-on-tertiary'
                      : 'bg-sun-container text-on-sun-container'
                  }`}
                  aria-hidden="true"
                >
                  <Star className="size-4 fill-current" />
                </span>

                <span className="font-display text-3xl font-extrabold leading-none text-primary">
                  {item.year}
                </span>
                <h3 className="mt-2 font-display text-base font-extrabold text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium leading-relaxed text-on-surface-variant">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <About
        badge="Algo de historia"
        title={
          <>
            Luisa Cáceres, una mujer de <span className="text-primary">coraje</span>
          </>
        }
        paragraphs={[
          'Luisa Cáceres Díaz de Arismendi nació en Caracas el 25 de septiembre de 1799. Su padre, Domingo Cáceres, y su hermano Félix fueron asesinados por los realistas en el pueblo de Ocumare en 1814, lo que la llevó a participar en el Éxodo de Caracas y emigrar con el resto de su familia a la Isla de Margarita. Se casó con el general Juan Bautista Arismendi el 4 de diciembre de 1814.',
          'En 1815 fue detenida por las autoridades españolas con el propósito de presionar a su esposo, quien para entonces libraba una campaña contra las fuerzas realistas. Fue llevada a Cádiz; sin embargo, en el camino el barco en el que viajaba fue atacado por un buque corsario y ella y otros pasajeros quedaron varados en la Isla Santa María, en las Azores. Finalmente llegó a Cádiz el 17 de enero de 1817.',
          'Nunca abandonó sus ideales independentistas. Después de ser liberada regresó a Venezuela el 26 de julio de 1818 y continuó apoyando las ideas de libertad y soberanía del pueblo americano. Vivió en Caracas hasta su muerte el 2 de junio de 1866. En reconocimiento a su lucha, sus restos fueron sepultados en el Panteón Nacional en 1876.',
        ]}
        imageSrc="/images/luisa-caceres-arismendi.jpg"
        imageAlt="Retrato de Luisa Cáceres de Arismendi"
        stat={{
          value: '1876',
          label: 'Panteón Nacional',
        }}
        reverse
      />

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-outline-variant/40 bg-surface-container-low p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-on-surface">
                ¿Quieres ser parte de nuestra historia?
              </h2>
              <p className="mt-1 text-sm font-semibold text-on-surface-variant">
                Conoce el jardín y descubre cómo acompañamos a cada familia.
              </p>
            </div>
            <Link href="/contacto" className="btn btn-primary shrink-0">
              Agendar visita
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
