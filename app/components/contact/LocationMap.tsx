import { ExternalLink, MapPin } from 'lucide-react';

interface LocationMapProps {
  embedSrc: string;
  title?: string;
  mapsHref?: string;
}

export default function LocationMap({
  embedSrc,
  title = 'Ubicación de la institución',
  mapsHref = 'https://maps.google.com/?q=Centro+de+Educacion+Inicial+Luisa+Caceres+de+Arismendi',
}: LocationMapProps) {
  return (
    <figure className="overflow-hidden rounded-[2rem] border-[5px] border-surface-container-lowest bg-surface-container-lowest shadow-[0_24px_50px_-34px_rgba(31,48,56,0.45)]">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-surface-container-low px-5 py-4">
        <span className="flex items-center gap-2 font-display text-base font-extrabold text-on-surface">
          <span className="grid size-8 place-items-center rounded-lg bg-tertiary-container text-tertiary">
            <MapPin className="size-4" aria-hidden="true" />
          </span>
          {title}
        </span>

        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary-dim"
        >
          Abrir en Google Maps
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </figcaption>

      <div className="relative aspect-[16/10] w-full">
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 block h-full w-full border-0"
        />
      </div>
    </figure>
  );
}
