import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface QuickLinkCardProps {
  icon: LucideIcon;
  title: string;
  href: string;
  iconColor: string;
  bgColor: string;
}

export default function QuickLinkCard({
  icon: Icon,
  title,
  href,
  iconColor,
  bgColor,
}: QuickLinkCardProps) {
  const isExternal = /^https?:\/\//.test(href);

  const content = (
    <>
      <span className={`icon-tile size-14 ${bgColor} ${iconColor}`} aria-hidden="true">
        <Icon className="size-7" strokeWidth={2.1} />
      </span>
      <span className="font-display text-sm font-extrabold leading-snug text-on-surface">
        {title}
      </span>
      <ArrowUpRight
        className="absolute right-4 top-4 size-4 text-on-surface-variant/50 opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
    </>
  );

  const className =
    'card-clay group flex flex-col items-center gap-3 p-6 text-center';

  if (!isExternal) {
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
