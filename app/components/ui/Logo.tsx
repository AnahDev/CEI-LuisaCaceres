import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export default function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="UEC Luisa Cáceres de Arismendi — Inicio"
      className={`group flex items-center gap-3 ${className}`}
    >
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_6px_18px_-10px_rgba(31,48,56,0.55)] ring-2 ring-primary/15 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
        <Image
          src="/images/Logo.jpg"
          alt=""
          width={44}
          height={44}
          className="size-full object-cover"
        />
      </span>

      {!compact && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-[1.05rem] font-extrabold leading-tight text-primary">
            UEC Luisa Cáceres
          </span>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
            Educación Inicial
          </span>
        </span>
      )}
    </Link>
  );
}
