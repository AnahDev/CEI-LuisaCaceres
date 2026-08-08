import { useRef } from "react";
import { HELP_TOPICS, SUPPORT_EMAIL } from "@/data/helpTopics";
import { useClickOutside } from "@/hooks/useClickOutside";

interface HelpPanelProps {
  onClose: () => void;
}

export default function HelpPanel({ onClose }: HelpPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useClickOutside(panelRef, onClose);

  return (
    <div
      ref={panelRef}
      role="menu"
      aria-label="Ayuda"
      className="absolute right-0 top-full mt-2 w-80 bg-white rounded-[1rem] shadow-[0_20px_40px_-10px_rgba(48,51,48,0.18)] border border-[#e1e3df] p-5 z-20"
    >
      <h3 className="font-['Plus_Jakarta_Sans'] text-[1rem] font-semibold text-[#303330] mb-4">
        ¿Cómo funciona esta pantalla?
      </h3>

      <ul className="space-y-4">
        {HELP_TOPICS.map((topic) => (
          <li key={topic.title} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#006789] text-[20px] mt-0.5">{topic.icon}</span>
            <div>
              <p className="font-['Plus_Jakarta_Sans'] text-[0.875rem] font-medium text-[#303330]">
                {topic.title}
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-[0.8125rem] text-[#5d605c] leading-snug">
                {topic.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#f4f4f0] text-[#006789] font-['Plus_Jakarta_Sans'] font-medium text-[0.8125rem] hover:bg-[#e8e8e4] transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">mail</span>
        Contactar soporte
      </a>
    </div>
  );
}
