export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "uec-theme";

/* Script bloqueante que se inyecta en <head> para aplicar el tema antes del
   primer pintado (evita el flash de tema incorrecto). Debe ser un string
   autocontenido y minificado. */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

const listeners = new Set<() => void>();
let systemListenerAttached = false;

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

export function getTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function notify() {
  listeners.forEach((listener) => listener());
}

export function setTheme(theme: Theme) {
  applyTheme(theme);

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* almacenamiento no disponible */
  }

  notify();
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);

  if (!systemListenerAttached && typeof window !== "undefined") {
    systemListenerAttached = true;
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (getStoredTheme()) {
          return;
        }

        applyTheme(event.matches ? "dark" : "light");
        notify();
      });
  }

  return () => {
    listeners.delete(listener);
  };
}
