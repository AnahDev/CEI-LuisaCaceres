const MAX_DESCRIPTION_LENGTH = 220;

interface EventMessageInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EventMessageInput({ value, onChange }: EventMessageInputProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#303330] mb-2" htmlFor="event-description">
        Mensaje para las familias <span className="text-[#ac3434]">*</span>
      </label>
      <textarea
        id="event-description"
        value={value}
        maxLength={MAX_DESCRIPTION_LENGTH}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder="Escribe una breve explicación del evento..."
        className="w-full bg-[#f4f4f0] border-2 border-transparent focus:border-[#006789] focus:bg-white text-[#303330] text-[0.9375rem] rounded-[1rem] p-4 focus:outline-none transition-all placeholder:text-[rgba(93,96,92,0.4)] leading-relaxed resize-none"
      />
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-xs text-[#5d605c]">Texto claro y corto, fácil de leer desde un celular.</span>
        <span className="text-xs text-[rgba(93,96,92,0.6)] font-medium shrink-0 ml-3">{value.length} / {MAX_DESCRIPTION_LENGTH}</span>
      </div>
    </div>
  );
}
