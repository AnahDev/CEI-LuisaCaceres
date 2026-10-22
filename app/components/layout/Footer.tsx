import Link from 'next/link';
import {
  Camera,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  ThumbsUp,
} from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import PeekingKid from '../ui/PeekingKid';

const EXPLORE_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros/historia' },
  { label: 'Cartelera', href: '/cartelera' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Admisiones', href: '/admisiones' },
  { label: 'Contacto', href: '/contacto' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: ThumbsUp },
  { label: 'Instagram', href: '#', icon: Camera },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="relative mt-16 w-full">
      <PeekingKid kid="nino" width={120} delay={0} duration={18} className="left-[14%]" />


      <footer className="relative w-full overflow-hidden rounded-t-[2.5rem] border-t border-outline-variant/40 bg-surface-container-low">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="blob-shape -left-24 top-10 h-72 w-72 bg-primary-container/50 blur-3xl" />
          <div className="blob-shape -right-20 bottom-0 h-64 w-64 bg-sun-container/60 blur-3xl" />
          <Sparkles className="absolute right-[18%] top-12 size-8 rotate-12 text-tertiary/30" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.15fr] lg:px-8">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm font-medium leading-relaxed text-on-surface-variant">
              Un espacio seguro y alegre donde los primeros pasos de aprendizaje se
              construyen con amor, juego y valores.
            </p>

            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full border border-outline-variant/60 bg-surface-container-lowest text-on-surface-variant transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Enlaces del sitio" className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Explorar
            </h4>
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Contacto
            </h4>
            <a
              href="https://maps.google.com/?q=Centro+de+Educacion+Inicial+Luisa+Caceres+de+Arismendi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-tertiary" aria-hidden="true" />
              <span>
                Calle India, Ciudad Guayana 8050,
                <br />
                Bolívar
              </span>
            </a>
            <a
              href="tel:+582861234567"
              className="flex items-center gap-3 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              <Phone className="size-4 shrink-0 text-tertiary" aria-hidden="true" />
              +58 (0286) 123-4567
            </a>
            <a
              href="mailto:info@luisacaceres.edu.ve"
              className="flex items-center gap-3 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              <Mail className="size-4 shrink-0 text-tertiary" aria-hidden="true" />
              info@luisacaceres.edu.ve
            </a>
          </div>

          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-sun/40 bg-sun-container p-6 text-on-sun-container shadow-[0_18px_36px_-24px_rgba(62,42,0,0.45)]">
            <Sparkles className="size-7" aria-hidden="true" />
            <p className="font-display text-2xl font-extrabold leading-tight">
              ¿Conocemos a tu peque?
            </p>
            <p className="text-sm font-semibold leading-relaxed opacity-85">
              Agenda una visita y descubre nuestro jardín por dentro.
            </p>
            <Link href="/contacto" className="btn btn-primary btn-sm mt-1 w-full">
              Agendar visita
            </Link>
          </div>
        </div>

        <div className="relative border-t border-outline-variant/40">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">
            <p className="text-xs font-semibold text-on-surface-variant">
              © {year} UEC Luisa Cáceres de Arismendi. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-xs font-bold text-on-surface-variant transition-colors hover:text-primary"
              >
                Administración
              </Link>
              <ThemeToggle />
              <span className="hidden items-center gap-1 text-xs font-semibold text-on-surface-variant sm:flex">
                Hecho con
                <Heart className="size-3.5 fill-tertiary text-tertiary" aria-hidden="true" />
                para crecer felices
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}