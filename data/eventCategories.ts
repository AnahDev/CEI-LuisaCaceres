import type { EventApiCategory, EventApiKind, EventCategory } from "@/types/event";

/**
 * One place that defines every category's label, emoji and badge color.
 * Both the admin picker (EventCategoryPicker) and the public cards
 * (EventItem / EfemerideCard) read from here, so adding a category
 * never requires touching the components that render it.
 */
export const EVENT_CATEGORIES: EventCategory[] = [
  { id: "efemeride", label: "Efeméride Escolar", emoji: "🌿", badgeClass: "bg-secondary-container/40 text-on-secondary-container" },
  { id: "reunion", label: "Reunión de Padres", emoji: "👨‍👩‍👧", badgeClass: "bg-primary-container/20 text-primary" },
  { id: "examen", label: "Exámenes", emoji: "📝", badgeClass: "bg-tertiary-container/20 text-tertiary" },
  { id: "deportivo", label: "Deportivo", emoji: "🏆", badgeClass: "bg-secondary-container/40 text-on-secondary-container" },
  { id: "feriado", label: "Feriado", emoji: "🎉", badgeClass: "bg-outline-variant/20 text-on-surface-variant" },
];

export interface EventCategoryMeta {
  label: string;
  badgeClass: string;
  dotClass: string;
}

export const EVENT_API_META: Record<EventApiCategory, EventCategoryMeta> = {
  MEETING: {
    label: "Reunión",
    badgeClass: "bg-primary-container/20 text-primary",
    dotClass: "bg-primary",
  },
  CULTURAL: {
    label: "Cultural",
    badgeClass: "bg-secondary-container/40 text-on-secondary-container",
    dotClass: "bg-secondary",
  },
  SPORTS: {
    label: "Deportivo",
    badgeClass: "bg-secondary-container/40 text-on-secondary-container",
    dotClass: "bg-secondary-dim",
  },
  HOLIDAY: {
    label: "Feriado",
    badgeClass: "bg-outline-variant/20 text-on-surface-variant",
    dotClass: "bg-outline",
  },
  ACADEMIC: {
    label: "Académico",
    badgeClass: "bg-tertiary-container/20 text-tertiary",
    dotClass: "bg-tertiary",
  },
  OTHER: {
    label: "Otro",
    badgeClass: "bg-outline-variant/20 text-on-surface-variant",
    dotClass: "bg-on-surface-variant",
  },
};

export function getEventApiMeta(
  category: EventApiCategory,
  kind?: EventApiKind
): EventCategoryMeta {
  const meta = EVENT_API_META[category] ?? EVENT_API_META.OTHER;
  if (kind === "EPHEMERIS") {
    return { ...meta, label: "Efeméride" };
  }
  return meta;
}

export function getCategoryById(id: string): EventCategory {
  return EVENT_CATEGORIES.find((category) => category.id === id) ?? EVENT_CATEGORIES[0];
}
