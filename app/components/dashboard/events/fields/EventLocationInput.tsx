interface EventLocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EventLocationInput({ value, onChange }: EventLocationInputProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#303330] mb-2" htmlFor="event-location">
        Lugar <span className="text-[#5d605c] font-normal">(opcional)</span>
      </label>
      <div className="flex items-center gap-2 bg-[#f4f4f0] border-2 border-transparent focus-within:border-[#006789] focus-within:bg-white rounded-[1rem] px-4 py-3.5 transition-all">
        <span className="material-symbols-outlined text-[#006789] text-xl">location_on</span>
        <input
          id="event-location"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ej. Patio Central, Cancha, Auditorio"
          className="w-full bg-transparent text-sm font-medium text-[#303330] focus:outline-none placeholder:text-[rgba(93,96,92,0.4)]"
        />
      </div>
    </div>
  );
}
