"use client";

import { useSyncExternalStore } from "react";
import { getTheme, subscribeTheme, toggleTheme, type Theme } from "@/lib/theme";

export function useTheme() {
  const theme = useSyncExternalStore<Theme>(
    subscribeTheme,
    getTheme,
    () => "light",
  );

  return { theme, toggleTheme };
}
