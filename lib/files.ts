/**
 * Reads a File as a base64 data URL. Used instead of URL.createObjectURL
 * for anything that needs to survive a page reload: a blob: URL only lives
 * as long as the tab does, but localStorage (and therefore the published
 * event) persists across reloads — so the stored image has to be the
 * actual encoded bytes, not a pointer to one.
 */
export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error("No se pudo leer el archivo"));
    reader.readAsDataURL(file);
  });
}
