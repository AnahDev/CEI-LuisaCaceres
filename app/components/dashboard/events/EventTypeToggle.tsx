import type { EventKind } from "@/types/event";

interface EventTypeOption {
  kind: EventKind;
  title: string;
  description: string;
  icon: string;
}

const OPTIONS: EventTypeOption[] = [
  { kind: "calendar", title: "Evento de Calendario", description: "Reuniones, exámenes o feriados. Solo fecha y título.", icon: "calendar_month" },
  { kind: "ephemeris", title: "Efeméride", description: "Celebraciones y actos con foto y mensaje.", icon: "star" },
];

interface EventTypeToggleProps {
  value: EventKind;
  onChange: (kind: EventKind) => void;
}

/**
 * The one decision that determines which fields show up below
 * (EventComposer renders fewer fields for "calendar" than "ephemeris").
 * Kept as big, self-explanatory cards instead of the original's
 * radio + badge + "Seleccionado" pill combo.
 */
export default function EventTypeToggle({ value, onChange }: EventTypeToggleProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {OPTIONS.map((option) => {
        const isActive = option.kind === value;
        return (
          <button
            key={option.kind}
            type="button"
            onClick={() => onChange(option.kind)}
            className={[
              "text-left p-5 rounded-[1rem] border-2 transition-all flex items-start gap-4",
              isActive ? "border-[#006789] bg-[rgba(0,103,137,0.05)]" : "border-transparent bg-[#f4f4f0] hover:bg-[#eeeeea]",
            ].join(" ")}
          >
            <div
              className={[
                "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                isActive ? "bg-[#006789] text-white" : "bg-[#e1e3df] text-[#5d605c]",
              ].join(" ")}
            >
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {option.icon}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#303330]">{option.title}</h3>
              <p className="text-sm text-[#5d605c] mt-0.5">{option.description}</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-xl shrink-0" style={{ color: isActive ? "#006789" : "#b1b2af" }}>
              {isActive ? "check_circle" : "radio_button_unchecked"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
