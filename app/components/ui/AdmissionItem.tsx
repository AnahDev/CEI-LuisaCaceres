import { Check } from 'lucide-react';

interface AdmissionItemProps {
  title: string;
  description: string;
}

export default function AdmissionItem({ title, description }: AdmissionItemProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-surface-container-lowest/85 p-3.5">
      <span
        className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-secondary-container text-secondary"
        aria-hidden="true"
      >
        <Check className="size-4" strokeWidth={3} />
      </span>
      <div className="min-w-0">
        <h4 className="font-display text-sm font-extrabold leading-snug text-on-surface">
          {title}
        </h4>
        <p className="mt-0.5 text-xs font-medium leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}
