'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubLink {
    label: string;
    href: string;
}

interface NavAccordionItemProps {
    label: string;
    href: string;
    children: SubLink[];
    onNavigate: () => void; // cierra el drawer completo al tocar un sublink
}

export default function NavAccordionItem({ label, href, children, onNavigate }: NavAccordionItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const pathname = usePathname();

    const isParentActive =
        pathname === href || children.some((sub) => sub.href !== '#' && pathname.startsWith(sub.href));

    return (
        <div>
            <button
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
                className={`w-full flex items-center justify-between rounded-xl px-4 py-3 transition-colors ${isParentActive
                        ? "text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-900/20 font-bold"
                        : "text-slate-600 dark:text-slate-300 font-medium hover:bg-sky-50/50 dark:hover:bg-sky-900/20"
                    }`}
            >
                {label}
                <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                        }`}
                >
                    expand_more
                </span>
            </button>

            {/* Contenedor animado: max-h en vez de display para permitir la transición */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col gap-1 pl-4 pt-1 pb-2">
                    {children.map((sub) => (
                        <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={onNavigate}
                            className={
                                sub.href !== '#' && pathname.startsWith(sub.href)
                                    ? "text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-900/20 font-bold rounded-lg px-4 py-2.5 transition-colors text-sm"
                                    : "text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-lg px-4 py-2.5 transition-colors text-sm"
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