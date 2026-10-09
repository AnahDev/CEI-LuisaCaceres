import Link from "next/link";

interface PublishedBannerProps {
  onDismiss: () => void;
}

/**
 * Confirms the publish actually reached the public page, with a direct
 * link to go check — without this, "Publicar" looked identical whether it
 * worked or not, which is exactly the kind of thing that erodes trust in
 * an admin tool.
 */
export default function PublishedBanner({ onDismiss }: PublishedBannerProps) {
  return (
    <div className="flex items-center justify-between gap-4 bg-[rgba(203,254,204,0.5)] border border-[#cbfecc] text-[#38643e] rounded-[1rem] px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <div>
          <p className="font-bold text-sm">¡Publicado en la Cartelera!</p>
          <p className="text-xs text-[#5d605c]">Ya es visible para las familias.</p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Link
          href="/cartelera"
          target="_blank"
          className="px-4 py-2 rounded-full bg-[#38643e] text-white text-xs font-bold hover:opacity-90 transition-opacity"
        >
          Ver en la Cartelera
        </Link>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Cerrar aviso"
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#38643e] hover:bg-[rgba(56,100,62,0.1)] transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </div>
  );
}
