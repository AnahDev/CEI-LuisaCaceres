'use client';

import Link from 'next/link';

interface QuickLinkCardProps {
    icon: string;
    title: string;
    href: string;
    iconColor: string; // ej: "text-[#006789]"
    bgColor: string;   // ej: "bg-[#62ccff]/20"
}

export default function QuickLinkCard({ icon, title, href, iconColor, bgColor }: QuickLinkCardProps) {
    const isInternal = href.startsWith('/');

    const content = (
        <>
            <div className={`p-4 rounded-full ${bgColor} ${iconColor}`}>
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <span className="font-bold text-[#303330] text-sm">{title}</span>
        </>
    );

    const className =
        "flex flex-col items-center gap-3 bg-[#ffffff] p-6 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)] hover:-translate-y-1 transition-transform duration-300 text-center";

    if (isInternal) {
        return (
            <Link href={href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
        </a>
    );
}