import { Download, FileText } from 'lucide-react';

interface DocumentItemProps {
  title: string;
  fileType: string;
  fileSize: string;
  href: string;
}

export default function DocumentItem({
  title,
  fileType,
  fileSize,
  href,
}: DocumentItemProps) {
  return (
    <a
      href={href}
      download
      className="card-clay group flex items-center justify-between gap-4 p-4"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-tertiary-container text-tertiary">
          <FileText className="size-5" aria-hidden="true" />
        </div>
        <div className="flex min-w-0 flex-col">
          <h4 className="truncate font-display text-base font-extrabold text-on-surface">
            {title}
          </h4>
          <span className="text-xs font-semibold text-on-surface-variant">
            {fileType} · {fileSize}
          </span>
        </div>
      </div>
      <Download
        className="size-5 shrink-0 text-primary transition-transform group-hover:translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
