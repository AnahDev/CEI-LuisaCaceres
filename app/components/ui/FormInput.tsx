import { InputHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
}

export default function FormInput({
  label,
  icon: Icon,
  id,
  ...props
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block px-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant"
      >
        {label}
      </label>
      <div className="group relative">
        <Icon
          className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary"
          aria-hidden="true"
        />
        <input
          id={id}
          className="w-full rounded-xl border border-outline-variant/60 bg-surface-container-low py-3.5 pl-12 pr-4 text-sm font-semibold text-on-surface transition-colors placeholder:text-on-surface-variant focus:border-primary focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20"
          {...props}
        />
      </div>
    </div>
  );
}
