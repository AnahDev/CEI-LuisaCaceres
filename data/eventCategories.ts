import type { EventCategory } from "@/types/event";

/**
 * One place that defines every category's label, emoji and badge color.
 * Both the admin picker (EventCategoryPicker) and the public cards
 * (EventItem / EfemerideCard) read from here, so adding a category
 * never requires touching the components that render it.
 */
export const EVENT_CATEGORIES: EventCategory[] = [
  { id: "efemeride", label: "Efeméride Escolar", emoji: "🌿", badgeClass: "bg-[#cbfecc]/40 text-[#38643e]" },
  { id: "reunion", label: "Reunión de Padres", emoji: "👨‍👩‍👧", badgeClass: "bg-[#62ccff]/20 text-[#006789]" },
  { id: "examen", label: "Exámenes", emoji: "📝", badgeClass: "bg-[#f7a48b]/20 text-[#8e4d39]" },
  { id: "deportivo", label: "Deportivo", emoji: "🏆", badgeClass: "bg-[#cbfecc]/40 text-[#38643e]" },
  { id: "feriado", label: "Feriado", emoji: "🎉", badgeClass: "bg-[#b1b2af]/20 text-[#5d605c]" },
];

export function getCategoryById(id: string): EventCategory {
  return EVENT_CATEGORIES.find((category) => category.id === id) ?? EVENT_CATEGORIES[0];
}
