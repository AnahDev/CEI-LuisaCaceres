export const APP_TIME_ZONE = "America/Caracas";

export const MONTHS_ES = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

export interface CalendarDay {
  /** ISO date "yyyy-mm-dd" */
  date: string;
  day: number;
  inMonth: boolean;
  isToday: boolean;
}

/**
 * Splits an ISO date ("2026-04-22") into the { day, month } shape that
 * both the admin preview and the public cartelera cards expect.
 */
export function splitIsoDate(isoDate: string): { day: string; month: string } {
  if (!isoDate) return { day: "--", month: "---" };
  const [, monthStr, dayStr] = isoDate.split("-");
  const monthIndex = Number(monthStr) - 1;
  return {
    day: dayStr,
    month: MONTHS_ES[monthIndex] ?? "---",
  };
}

export function formatLongDateEs(isoDate: string): string {
  if (!isoDate) return "Selecciona una fecha";
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat("es-VE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Fecha de calendario (yyyy-mm-dd) de un evento; los "todo el día" usan la fecha UTC tal cual. */
export function toCalendarDate(iso: string, allDay: boolean): string {
  if (allDay) return iso.slice(0, 10);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: APP_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

export function eventCalendarDate(event: { allDay: boolean; startsAt: string }): string {
  return toCalendarDate(event.startsAt, event.allDay);
}

export function todayCalendarDate(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: APP_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function addDaysIso(isoDate: string, days: number): string {
  const date = new Date(`${isoDate}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

/** Grilla mensual de lunes a domingo, siempre 42 celdas. */
export function buildMonthGrid(year: number, month: number): CalendarDay[] {
  const today = todayCalendarDate();
  const firstOfMonth = new Date(Date.UTC(year, month, 1));
  const offset = (firstOfMonth.getUTCDay() + 6) % 7;
  const start = new Date(Date.UTC(year, month, 1 - offset));

  return Array.from({ length: 42 }, (_, index) => {
    const current = new Date(start);
    current.setUTCDate(start.getUTCDate() + index);
    const date = current.toISOString().slice(0, 10);
    return {
      date,
      day: current.getUTCDate(),
      inMonth: current.getUTCMonth() === month,
      isToday: date === today,
    };
  });
}

export function monthLabelEs(year: number, month: number): string {
  const label = new Intl.DateTimeFormat("es-VE", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month, 1)));
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** Rango UTC que cubre la grilla visible (con un día de margen por zona horaria). */
export function monthQueryRange(year: number, month: number): { from: string; to: string } {
  const grid = buildMonthGrid(year, month);
  const first = grid[0].date;
  const last = grid[grid.length - 1].date;
  return {
    from: `${addDaysIso(first, -1)}T00:00:00Z`,
    to: `${addDaysIso(last, 1)}T23:59:59Z`,
  };
}

export function formatTimeEs(iso: string): string {
  return new Intl.DateTimeFormat("es-VE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: APP_TIME_ZONE,
  }).format(new Date(iso));
}

export function formatEventSchedule(event: {
  allDay: boolean;
  startsAt: string;
  endsAt: string;
}): string {
  if (event.allDay) return "Todo el día";
  const startDate = toCalendarDate(event.startsAt, false);
  const endDate = toCalendarDate(event.endsAt, false);
  if (startDate === endDate) {
    return `${formatTimeEs(event.startsAt)} – ${formatTimeEs(event.endsAt)}`;
  }
  return `${formatLongDateEs(startDate)} al ${formatLongDateEs(endDate)}`;
}

export function formatCalendarDateLong(isoDate: string): string {
  const label = new Intl.DateTimeFormat("es-VE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T12:00:00Z`));
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function formatDateEs(iso: string): string {
  return new Intl.DateTimeFormat("es-VE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: APP_TIME_ZONE,
  }).format(new Date(iso));
}

export function formatDateTimeEs(iso: string): string {
  return new Intl.DateTimeFormat("es-VE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: APP_TIME_ZONE,
  }).format(new Date(iso));
}
