'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  ClipboardCheck,
  House,
  Images,
  LockKeyhole,
  Menu,
  MessageCircleHeart,
  Newspaper,
  Users,
  X,
} from 'lucide-react';
import NavDropdown from './NavDropdown';
import NavAccordionItem from './NavAccordionItem';
import ThemeToggle from '../ui/ThemeToggle';
import Logo from '../ui/Logo';

type SubLink = { label: string; href: string };
type NavLinkItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  children?: SubLink[];
};

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Inicio', href: '/', icon: House },
  {
    label: 'Nosotros',
    href: '/nosotros',
    icon: Users,
    children: [
      { label: 'Reseña Histórica', href: '/nosotros/historia' },
      { label: 'Organigrama', href: '#' },
      { label: 'PEIC', href: '#' },
    ],
  },
  { label: 'Cartelera', href: '/cartelera', icon: Newspaper },
  { label: 'Galería', href: '/galeria', icon: Images },
  { label: 'Admisiones', href: '/admisiones', icon: ClipboardCheck },
  { label: 'Contacto', href: '/contacto', icon: MessageCircleHeart },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href !== '#' &&
    (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-primary px-5 py-3 font-bold text-on-primary focus:not-sr-only"
      >
        Saltar al contenido
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
        <div
          className={`mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 rounded-[1.6rem] border px-3 transition-all duration-300 sm:px-5 ${
            isScrolled
              ? 'border-outline-variant/70 bg-background/92 shadow-[0_18px_40px_-28px_rgba(31,48,56,0.55)] backdrop-blur-xl'
              : 'border-transparent bg-background/70 backdrop-blur-md'
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navegación principal">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <NavDropdown
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  items={link.children}
                />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-primary-container text-on-primary-container shadow-[inset_0_-2px_0_rgba(12,108,139,0.16)]'
                      : 'text-on-surface-variant hover:bg-primary-container/45 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />

            <Link
              href="/login"
              aria-label="Acceso administrativo"
              title="Acceso administrativo"
              className="hidden size-11 place-items-center rounded-full border border-outline-variant/60 text-on-surface-variant transition-colors hover:border-primary/40 hover:bg-primary-container/40 hover:text-primary md:grid"
            >
              <LockKeyhole className="size-[18px]" aria-hidden="true" />
            </Link>

            <Link href="/admisiones" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Solicitar cupo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              aria-controls="menu-movil"
              className="grid size-11 place-items-center rounded-full border border-outline-variant/60 text-on-surface-variant transition-colors hover:border-primary/40 hover:bg-primary-container/40 hover:text-primary lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <button
          type="button"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Cerrar menú"
          className={`absolute inset-0 h-full w-full cursor-default bg-inverse-surface/55 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col rounded-l-[2rem] border-l border-outline-variant/40 bg-background shadow-[-24px_0_60px_-30px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-outline-variant/40 px-5 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
              className="grid size-11 place-items-center rounded-full border border-outline-variant/60 text-on-surface-variant transition-colors hover:bg-primary-container/50 hover:text-primary"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Menú móvil">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;

              return link.children ? (
                <NavAccordionItem
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  icon={Icon}
                  items={link.children}
                  onNavigate={() => setIsMenuOpen(false)}
                />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`flex min-h-12 items-center gap-3 rounded-2xl px-3 py-3 text-[0.95rem] font-bold transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary-container text-on-primary-container'
                      : 'text-on-surface-variant hover:bg-primary-container/40 hover:text-primary'
                  }`}
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-surface-container-high/70">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-2 border-t border-outline-variant/40 p-4">
            <Link
              href="/admisiones"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-primary w-full"
            >
              Solicitar cupo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <div className="flex items-center justify-between rounded-2xl bg-surface-container-low px-3 py-2">
              <span className="text-xs font-bold text-on-surface-variant">
                Acceso administrativo
              </span>
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="grid size-9 place-items-center rounded-full text-primary transition-colors hover:bg-primary-container/60"
                aria-label="Ir al inicio de sesión administrativo"
              >
                <LockKeyhole className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
