const MONTHS_ES = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

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
