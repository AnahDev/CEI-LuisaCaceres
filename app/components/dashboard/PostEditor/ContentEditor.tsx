interface ToolbarAction {
  icon: string;
  label: string;
}

const TOOLBAR_ACTIONS: ToolbarAction[] = [
  { icon: "mood", label: "Añadir Emoji" },
  { icon: "tag", label: "Hashtags (#)" },
  { icon: "alternate_email", label: "Menciones" },
];

interface ContentEditorProps {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  onToolbarAction?: (action: ToolbarAction) => void;
}

export default function ContentEditor({ value, onChange, maxLength, onToolbarAction }: ContentEditorProps) {
  return (
    <section className="bg-white rounded-[1rem] p-2 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)]">
      <div className="p-6 pb-4">
        <label className="sr-only" htmlFor="post-content">
          Mensaje Principal
        </label>
        <textarea
          id="post-content"
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
          rows={6}
          placeholder="¿Qué quieres compartir con la comunidad escolar hoy?"
          className="w-full bg-transparent border-none focus:ring-0 resize-none font-['Plus_Jakarta_Sans'] text-[1.0625rem] text-[#303330] placeholder:text-[rgba(93,96,92,0.5)]"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3 bg-[#f4f4f0] rounded-[2.5rem] m-2">
        <div className="flex gap-1">
          {TOOLBAR_ACTIONS.map((action) => (
            <button
              key={action.icon}
              type="button"
              title={action.label}
              onClick={() => onToolbarAction?.(action)}
              className="p-2 rounded-full text-[#5d605c] hover:bg-[#e1e3df] hover:text-[#006789] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">{action.icon}</span>
            </button>
          ))}
        </div>
        <span className="text-[0.875rem] text-[rgba(93,96,92,0.6)] font-medium px-3">
          {value.length} / {maxLength}
        </span>
      </div>
    </section>
  );
}
