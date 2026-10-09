import { EVENT_CATEGORIES } from "@/data/eventCategories";

interface EventCategoryPickerProps {
  value: string;
  onChange: (categoryId: string) => void;
}

export default function EventCategoryPicker({ value, onChange }: EventCategoryPickerProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#303330] mb-2.5">
        Categoría <span className="text-[#ac3434]">*</span>
      </label>
      <div className="flex flex-wrap gap-2.5">
        {EVENT_CATEGORIES.map((category) => {
          const isActive = category.id === value;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={[
                "px-4 py-2.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5",
                isActive ? "bg-[#006789] text-white" : "bg-[#f4f4f0] hover:bg-[#eeeeea] text-[#303330]",
              ].join(" ")}
            >
              {isActive && <span className="material-symbols-outlined text-base">check</span>}
              {category.emoji} {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
