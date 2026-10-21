'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={`grid size-11 place-items-center rounded-full border border-outline-variant/60 text-on-surface-variant transition-all duration-300 hover:border-primary/40 hover:bg-primary-container/40 hover:text-primary active:scale-95 ${className}`}
    >
      {isDark ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
