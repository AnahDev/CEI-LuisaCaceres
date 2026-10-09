import { formatLongDateEs } from "@/lib/date";

interface EventDateInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EventDateInput({ value, onChange }: EventDateInputProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#303330] mb-2" htmlFor="event-date">
        Fecha <span className="text-[#ac3434]">*</span>
      </label>
      <input
        id="event-date"
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#f4f4f0] border-2 border-transparent focus:border-[#006789] focus:bg-white text-[#303330] font-medium rounded-[1rem] px-4 py-3.5 focus:outline-none transition-all"
      />
      <p className="text-xs text-[#5d605c] mt-1.5 capitalize">{formatLongDateEs(value)}</p>
    </div>
  );
}
