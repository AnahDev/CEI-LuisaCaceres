'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

interface SubLink {
  label: string;
  href: string;
}

interface NavAccordionItemProps {
  label: string;
  href: string;
  icon?: React.ElementType;
  items: SubLink[];
  onNavigate: () => void;
}

export default function NavAccordionItem({
  label,
  href,
  icon: Icon,
  items,
  onNavigate,
}: NavAccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const isParentActive =
    pathname === href ||
    items.some((sub) => sub.href !== '#' && pathname.startsWith(sub.href));

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl px-3 py-3 text-[0.95rem] font-bold transition-colors ${
          isParentActive
            ? 'bg-primary-container text-on-primary-container'
            : 'text-on-surface-variant hover:bg-primary-container/40 hover:text-primary'
        }`}
      >
        <span className="flex items-center gap-3">
          {Icon && (
            <span className="grid size-9 place-items-center rounded-xl bg-surface-container-high/70">
              <Icon className="size-[18px]" aria-hidden="true" />
            </span>
          )}
          {label}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 pb-2 pl-12 pr-2 pt-1">
          {items.map((sub) => {
            const active = sub.href !== '#' && pathname.startsWith(sub.href);

            return (
              <Link
                key={sub.label}
                href={sub.href}
                onClick={onNavigate}
                className={`rounded-xl px-3 py-2.5 text-sm font-bold transition-colors ${
                  active
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:bg-primary-container/40 hover:text-primary'
                }`}
              >
                {sub.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
