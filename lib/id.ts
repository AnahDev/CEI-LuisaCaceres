/**
 * Single place that generates IDs for anything created client-side
 * (events today, could be reused for documents/links later). Falls back
 * to a timestamp+random string on browsers without crypto.randomUUID
 * instead of assuming a modern runtime.
 */
export function generateId(prefix: string): string {
  const unique =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${prefix}-${unique}`;
}
