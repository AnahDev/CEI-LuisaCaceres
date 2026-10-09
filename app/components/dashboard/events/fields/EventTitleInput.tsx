interface EventTitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EventTitleInput({ value, onChange }: EventTitleInputProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#303330] mb-2" htmlFor="event-title">
        Título <span className="text-[#ac3434]">*</span>
      </label>
      <input
        id="event-title"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ej. Día Mundial de la Tierra"
        className="w-full bg-[#f4f4f0] border-2 border-transparent focus:border-[#006789] focus:bg-white text-[#303330] font-bold text-lg rounded-[1rem] px-4 py-3.5 focus:outline-none transition-all placeholder:text-[rgba(93,96,92,0.4)] placeholder:font-normal"
      />
    </div>
  );
}
