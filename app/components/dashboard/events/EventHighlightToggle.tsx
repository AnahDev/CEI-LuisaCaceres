interface EventHighlightToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function EventHighlightToggle({ checked, onChange }: EventHighlightToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#f4f4f0] p-4 rounded-[1rem]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#cbfecc] text-[#38643e] flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-xl">campaign</span>
        </div>
        <div>
          <span className="text-sm font-bold text-[#303330] block">Aviso urgente</span>
          <span className="text-xs text-[#5d605c]">Mostrarlo también arriba de toda la cartelera pública</span>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
        <input checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" type="checkbox" />
        <div className="w-12 h-6 bg-[#e1e3df] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#006789]" />
      </label>
    </div>
  );
}
