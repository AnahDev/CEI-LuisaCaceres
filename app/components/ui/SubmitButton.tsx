import { ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: LucideIcon;
}

export default function SubmitButton({
  children,
  icon: Icon,
  ...props
}: SubmitButtonProps) {
  return (
    <button className="btn btn-primary w-full disabled:pointer-events-none disabled:opacity-60" {...props}>
      <span>{children}</span>
      {Icon && (
        <Icon
          className="size-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
