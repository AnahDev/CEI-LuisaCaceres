import { apiFetch } from "@/lib/api";
import { authFetch } from "@/lib/auth";
import type {
  EventApiCategory,
  EventApiKind,
  EventApiResponse,
  EventKind,
} from "@/types/event";
import type { PageResponse, PostStatus } from "@/types/post";

export interface CreateEventInput {
  title: string;
  /** Fecha ISO "yyyy-mm-dd" del form; se envía como día completo en UTC. */
  date: string;
  location: string;
  /** id local del picker (efemeride, reunion, examen, deportivo, feriado). */
  categoryId: string;
  description: string;
  kind: EventKind;
  imageUrl?: string | null;
  featured?: boolean;
}

export interface PublishedEventsQuery {
  from?: string;
  to?: string;
  kind?: EventApiKind;
  featured?: boolean;
}

const CATEGORY_BY_ID: Record<string, EventApiCategory> = {
  efemeride: "CULTURAL",
  reunion: "MEETING",
  examen: "ACADEMIC",
  deportivo: "SPORTS",
  feriado: "HOLIDAY",
};

function optional(value: string): string | null {
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function toEventRequestBody(input: CreateEventInput) {
  return {
    title: input.title.trim(),
    description: optional(input.description),
    location: optional(input.location),
    category: CATEGORY_BY_ID[input.categoryId] ?? "OTHER",
    kind: input.kind === "ephemeris" ? "EPHEMERIS" : "CALENDAR",
    ...(input.imageUrl ? { imageUrl: input.imageUrl } : {}),
    featured: Boolean(input.featured),
    allDay: true,
    startsAt: `${input.date}T00:00:00Z`,
    endsAt: `${input.date}T23:59:59Z`,
  };
}

/** El backend crea todo evento en DRAFT; para publicar hay que llamar a publishEvent. */
export function createEvent(input: CreateEventInput): Promise<EventApiResponse> {
  return authFetch<EventApiResponse>("/events", {
    method: "POST",
    body: toEventRequestBody(input),
  });
}

export function publishEvent(id: number): Promise<EventApiResponse> {
  return authFetch<EventApiResponse>(`/events/${id}/status`, {
    method: "PATCH",
    body: { status: "PUBLISHED" },
  });
}

export function changeEventStatus(id: number, status: PostStatus): Promise<EventApiResponse> {
  return authFetch<EventApiResponse>(`/events/${id}/status`, {
    method: "PATCH",
    body: { status },
  });
}

export function deleteEvent(id: number): Promise<void> {
  return authFetch<void>(`/events/${id}`, { method: "DELETE" });
}

export function listAdminEvents(page = 0, size = 50): Promise<PageResponse<EventApiResponse>> {
  return authFetch<PageResponse<EventApiResponse>>(`/events?page=${page}&size=${size}`);
}

export function listPublishedEvents(query: PublishedEventsQuery = {}): Promise<EventApiResponse[]> {
  const params = new URLSearchParams();
  if (query.from) params.set("from", query.from);
  if (query.to) params.set("to", query.to);
  if (query.kind) params.set("kind", query.kind);
  if (query.featured !== undefined) params.set("featured", String(query.featured));

  const suffix = params.toString() ? `?${params.toString()}` : "";
  return apiFetch<EventApiResponse[]>(`/public/events${suffix}`, { cache: "no-store" });
}
