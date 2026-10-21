import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  Mail,
  Newspaper,
  Palette,
  Star,
} from 'lucide-react';
import EventItem from '../components/cartelera/EventItem';
import EfemerideCard from '../components/cartelera/EfemerideCard';
import QuickLinkCard from '../components/cartelera/QuickLinkCard';
import UrgentBanner from '../components/cartelera/UrgentBanner';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

const AVISO_URGENTE = {
  active: true,
  text: 'Reunión de padres y representantes: viernes 15 de agosto, 8:00 AM en el auditorio principal.',
};

const EVENTOS = [
  {
    day: '15',
    month: 'Ago',
    title: 'Reunión de Padres',
    category: 'Reunión',
    categoryColor: 'bg-primary-container text-on-primary-container',
  },
  {
    day: '22',
    month: 'Ago',
    title: 'Examen de Matemática',
    category: 'Exámenes',
    categoryColor: 'bg-tertiary-container text-on-tertiary-container',
  },
  {
    day: '05',
    month: 'Sep',
    title: 'Olimpiadas Deportivas',
    category: 'Deportivo',
    categoryColor: 'bg-secondary-container text-on-secondary-container',
  },
  {
    day: '12',
    month: 'Sep',
    title: 'Día Feriado — Independencia',
    category: 'Feriado',
    categoryColor: 'bg-surface-container-high text-on-surface-variant',
  },
];

const EFEMERIDES = [
  {
    image: '/images/imagen 6.jpg',
    day: '22',
    month: 'Abr',
    title: 'Día de la Tierra',
    description:
      'Reflexionamos junto a nuestros alumnos sobre el cuidado del planeta y la naturaleza.',
  },
  {
    image: '/images/imagen 8.jpg',
    day: '15',
    month: 'Jul',
    title: 'Batalla de Carabobo',
    description:
      'Conmemoramos uno de los hechos históricos más importantes de la independencia venezolana.',
  },
  {
    image: '/images/imagen 9.jpg',
    day: '12',
    month: 'Oct',
    title: 'Resistencia Indígena',
    description:
      'Honramos la memoria y el legado de nuestros pueblos originarios.',
  },
];

const ENLACES = [
  {
    icon: Mail,
    title: 'Correo Institucional',
    href: 'mailto:info@luisacaceres.edu.ve',
    iconColor: 'text-tertiary',
    bgColor: 'bg-tertiary-container',
  },
  {
    icon: BookOpen,
    title: 'Libros Didácticos',
    href: '/material/libros-didacticos',
    iconColor: 'text-primary',
    bgColor: 'bg-primary-container',
  },
  {
    icon: Palette,
    title: 'Para Pintar',
    href: '/material/para-pintar',
    iconColor: 'text-secondary',
    bgColor: 'bg-secondary-container',
  },
];

export default function CarteleraPage() {
  return (
    <main className="flex-grow">
      <PageHero
        badge="Publicaciones"
        title={
          <>
            Cartelera <span className="text-tertiary">informativa</span>
          </>
        }
        description="Novedades, fechas importantes y recursos para acompañar el día a día de nuestras familias."
        icon={Newspaper}
        tone="primary"
      />

      <UrgentBanner notice={AVISO_URGENTE} />

      <div className="mx-auto w-full max-w-7xl px-6">
        <section className="py-14 md:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Calendario escolar"
              title="Fechas para no perderse"
              description="Organiza la agenda familiar con nuestros próximos encuentros y actividades."
              icon={CalendarDays}
              align="left"
              tone="primary"
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {EVENTOS.map((evento, index) => (
              <Reveal key={evento.title} delay={index * 70}>
                <EventItem {...evento} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-outline-variant/40 py-14 md:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Efemérides"
              title="Fechas que nos unen"
              description="Momentos para recordar, aprender y compartir en comunidad."
              icon={Star}
              align="left"
              tone="tertiary"
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {EFEMERIDES.map((efemeride, index) => (
              <Reveal key={efemeride.title} delay={index * 90}>
                <EfemerideCard {...efemeride} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-outline-variant/40 py-14 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Recursos"
                title="Enlaces de interés"
                description="Material y canales listos para ti."
                icon={ExternalLink}
                align="left"
                tone="secondary"
              />
            </Reveal>

            <Link href="/contacto" className="btn btn-ghost btn-sm w-fit">
              ¿Necesitas ayuda?
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            {ENLACES.map((enlace, index) => (
              <Reveal key={enlace.title} delay={index * 80}>
                <QuickLinkCard {...enlace} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
