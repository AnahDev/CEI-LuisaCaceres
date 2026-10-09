/**
 * Shared shape between:
 *  - the admin "crear evento/efeméride" form (components/events)
 *  - the public cartelera display (components/cartelera)
 * Keeping one definition means the preview the admin sees while typing
 * is rendered with the exact same components the public page uses.
 */
export type EventKind = "calendar" | "ephemeris";

export interface EventCategory {
  id: string;
  label: string;
  emoji: string;
  badgeClass: string;
}

interface BaseEvent {
  id: string;
  kind: EventKind;
  title: string;
  day: string;
  month: string;
  categoryId: string;
  highlighted: boolean;
  /** ISO timestamp set when the event is published. Used to order the feed and to pick which highlighted event drives the urgent banner. */
  createdAt: string;
}

export interface CalendarEvent extends BaseEvent {
  kind: "calendar";
}

export interface EphemerisEvent extends BaseEvent {
  kind: "ephemeris";
  description: string;
  /** Data URL (from the admin's photo upload) or a /public path for seed data. Always present once published — the form requires it for this kind. */
  image: string;
  location?: string;
}

export type SchoolEvent = CalendarEvent | EphemerisEvent;

export interface QuickLink {
  icon: string;
  title: string;
  href: string;
  iconColor: string;
  bgColor: string;
}

export interface EventDocument {
  id: string;
  title: string;
  fileType: string;
  fileSize: string;
  href: string;
}

export interface UrgentNotice {
  active: boolean;
  text: string;
}
