import { useEffect, useRef } from "react";
import { CONTENT_EMOJIS } from "@/data/emojis";

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

export default function EmojiPicker({ onSelect, onClose }: EmojiPickerProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      role="menu"
      aria-label="Selector de emojis"
      className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-[1rem] shadow-[0_20px_40px_-10px_rgba(48,51,48,0.18)] border border-[#e1e3df] p-3 grid grid-cols-6 gap-1 z-20"
    >
      {CONTENT_EMOJIS.map((emoji) => (
        <button
          key={emoji}
          type="button"
          role="menuitem"
          onClick={() => onSelect(emoji)}
          className="text-xl leading-none p-1.5 rounded-[0.5rem] hover:bg-[#f4f4f0] transition-colors"
          aria-label={`Insertar ${emoji}`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}