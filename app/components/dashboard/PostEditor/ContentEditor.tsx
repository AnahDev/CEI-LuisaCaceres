import { useRef, useState } from "react";
import EmojiPicker from "./EmojiPicker";

interface ContentEditorProps {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
}

/**
 * Inserts text at the current caret position (or replaces the selection),
 * respects maxLength, and restores focus + caret right after the inserted text.
 */
function insertAtCursor(
  textarea: HTMLTextAreaElement | null,
  value: string,
  maxLength: number,
  onChange: (value: string) => void,
  insertion: string
) {
  const start = textarea?.selectionStart ?? value.length;
  const end = textarea?.selectionEnd ?? value.length;
  const nextValue = value.slice(0, start) + insertion + value.slice(end);

  if (nextValue.length > maxLength) return;

  onChange(nextValue);

  requestAnimationFrame(() => {
    if (!textarea) return;
    const caretPosition = start + insertion.length;
    textarea.focus();
    textarea.setSelectionRange(caretPosition, caretPosition);
  });
}

export default function ContentEditor({ value, onChange, maxLength }: ContentEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleInsert = (text: string) => {
    insertAtCursor(textareaRef.current, value, maxLength, onChange, text);
  };

  const handleEmojiSelect = (emoji: string) => {
    handleInsert(emoji);
    setIsEmojiPickerOpen(false);
  };

  return (
    <section className="bg-white rounded-[1rem] p-2 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)]">
      <div className="p-6 pb-4">
        <label className="sr-only" htmlFor="post-content">
          Mensaje Principal
        </label>
        <textarea
          id="post-content"
          ref={textareaRef}
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
          <div className="relative">
            <button
              type="button"
              title="Añadir Emoji"
              aria-haspopup="menu"
              aria-expanded={isEmojiPickerOpen}
              onClick={() => setIsEmojiPickerOpen((open) => !open)}
              className="p-2 rounded-full text-[#5d605c] hover:bg-[#e1e3df] hover:text-[#006789] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">mood</span>
            </button>
            {isEmojiPickerOpen && (
              <EmojiPicker onSelect={handleEmojiSelect} onClose={() => setIsEmojiPickerOpen(false)} />
            )}
          </div>

          <button
            type="button"
            title="Hashtags (#)"
            onClick={() => handleInsert("#")}
            className="p-2 rounded-full text-[#5d605c] hover:bg-[#e1e3df] hover:text-[#006789] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">tag</span>
          </button>

          <button
            type="button"
            title="Menciones"
            onClick={() => handleInsert("@")}
            className="p-2 rounded-full text-[#5d605c] hover:bg-[#e1e3df] hover:text-[#006789] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">alternate_email</span>
          </button>
        </div>
        <span className="text-[0.875rem] text-[rgba(93,96,92,0.6)] font-medium px-3">
          {value.length} / {maxLength}
        </span>
      </div>
    </section>
  );
}
