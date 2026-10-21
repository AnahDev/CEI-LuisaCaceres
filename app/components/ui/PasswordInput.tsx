'use client';

import { useState, InputHTMLAttributes } from 'react';
import { Eye, EyeOff, LockKeyhole } from 'lucide-react';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function PasswordInput({ label, id, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block px-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant"
      >
        {label}
      </label>
      <div className="group relative">
        <LockKeyhole
          className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary"
          aria-hidden="true"
        />
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className="w-full rounded-xl border border-outline-variant/60 bg-surface-container-low py-3.5 pl-12 pr-12 text-sm font-semibold text-on-surface transition-colors placeholder:text-on-surface-variant focus:border-primary focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20"
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-on-surface-variant transition-colors hover:bg-primary-container/50 hover:text-primary"
        >
          {showPassword ? (
            <EyeOff className="size-[18px]" aria-hidden="true" />
          ) : (
            <Eye className="size-[18px]" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
