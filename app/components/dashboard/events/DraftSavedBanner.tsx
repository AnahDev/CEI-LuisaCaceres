interface DraftSavedBannerProps {
  onDismiss: () => void;
}

/**
 * Confirms the event was created as DRAFT in the backend. Different copy
 * from PublishedBanner so the admin knows it is not visible to families yet.
 */
export default function DraftSavedBanner({ onDismiss }: DraftSavedBannerProps) {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#eaf8fd] border border-[#c9dce2] text-[#006789] rounded-[1rem] px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <div>
          <p className="font-bold text-sm">Borrador guardado</p>
          <p className="text-xs text-[#5d605c]">Aún no es visible para las familias.</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Cerrar aviso"
        className="w-8 h-8 rounded-full flex items-center justify-center text-[#006789] hover:bg-[rgba(0,103,137,0.1)] transition-colors"
      >
        <span className="material-symbols-outlined text-lg">close</span>
      </button>
    </div>
  );
}
