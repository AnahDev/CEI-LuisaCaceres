'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubLink {
    label: string;
    href: string;
}

interface NavDropdownProps {
    label: string;
    href: string;
    children: SubLink[];
}

export default function NavDropdown({ label, href, children }: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const isParentActive =
        pathname === href || children.some((sub) => sub.href !== '#' && pathname.startsWith(sub.href));

    // Cierra el dropdown al hacer click fuera de él
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
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isOpen}
                className={
                    isParentActive
                        ? "flex items-center gap-1 text-sky-700 dark:text-sky-300 border-b-2 border-sky-600 dark:border-sky-400 pb-1 font-bold hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2 active:scale-95 ease-in-out"
                        : "flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-sky-600 font-medium transition-colors hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2"
                }
            >
                {label}
                <span
                    className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    expand_more
                </span>
            </button>

            {/* Panel del submenú */}
            <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-[#faf9f6] dark:bg-slate-900 rounded-xl shadow-[0_12px_40px_rgba(48,51,48,0.15)] border border-[#b1b2af]/20 overflow-hidden transition-all duration-200 origin-top ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col p-2">
                    {children.map((sub) => (
                        <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={
                                sub.href !== '#' && pathname.startsWith(sub.href)
                                    ? "text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-900/20 font-bold rounded-lg px-4 py-2.5 transition-colors text-sm"
                                    : "text-slate-600 dark:text-slate-300 font-medium hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-lg px-4 py-2.5 transition-colors text-sm"
                            }
                        >
                            {sub.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}