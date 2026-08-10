interface BottomActionBarProps {
  onSaveDraft: () => void;
  onPublish: () => void;
  publishing?: boolean;
  sidebarCollapsed: boolean;
}

export default function BottomActionBar({
  onSaveDraft,
  onPublish,
  publishing = false,
  sidebarCollapsed,
}: BottomActionBarProps) {
  return (
    <div
      className={[
        "fixed bottom-0 right-0 bg-[rgba(250,249,246,0.8)] backdrop-blur-2xl border-t border-[rgba(177,178,175,0.1)] p-4 px-8 z-30 transition-[left] duration-300 ease-in-out",
        sidebarCollapsed ? "left-0 md:left-20" : "left-0 md:left-72",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto flex justify-end items-center gap-4">
        <button
          type="button"
          onClick={onSaveDraft}
          className="px-6 py-3 rounded-full text-[#5d605c] font-['Plus_Jakarta_Sans'] font-semibold text-[0.875rem] hover:bg-[#e8e8e4] transition-colors focus:ring-2 focus:ring-[rgba(177,178,175,0.5)] outline-none"
        >
          Guardar como borrador
        </button>
        <button
          type="button"
          onClick={onPublish}
          disabled={publishing}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#006789] to-[#62ccff] text-[#f4faff] font-['Plus_Jakarta_Sans'] font-bold text-[0.875rem] hover:opacity-90 active:scale-95 transition-all shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
          {publishing ? "Publicando…" : "Publicar ahora"}
        </button>
      </div>
    </div>
  );
}
