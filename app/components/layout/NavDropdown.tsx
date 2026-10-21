'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

interface SubLink {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: SubLink[];
}

export default function NavDropdown({ label, href, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isParentActive =
    pathname === href ||
    items.some((sub) => sub.href !== '#' && pathname.startsWith(sub.href));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-bold transition-all duration-200 ${
          isParentActive
            ? 'bg-primary-container text-on-primary-container shadow-[inset_0_-2px_0_rgba(12,108,139,0.16)]'
            : 'text-on-surface-variant hover:bg-primary-container/45 hover:text-primary'
        }`}
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        role="menu"
        className={`absolute left-1/2 top-full mt-3 w-60 origin-top -translate-x-1/2 rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-2 shadow-[0_24px_48px_-24px_rgba(31,48,56,0.45)] transition-all duration-200 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-1 scale-95 opacity-0'
        }`}
      >
        <p className="px-3 pb-1 pt-2 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-on-surface-variant">
          {label}
        </p>
        <div className="flex flex-col">
          {items.map((sub) => {
            const active = sub.href !== '#' && pathname.startsWith(sub.href);

            return (
              <Link
                key={sub.label}
                href={sub.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-sm font-bold transition-colors ${
                  active
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:bg-primary-container/45 hover:text-primary'
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
