import { useEffect, type RefObject } from "react";

/**
 * Closes a popover/menu when the user clicks outside of it or presses Escape.
 * Kept generic so any dropdown-style component can reuse it instead of
 * re-implementing the same listener logic.
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideClick: () => void,
  active = true
) {
  useEffect(() => {
    if (!active) return;

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOutsideClick();
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [ref, onOutsideClick, active]);
}
