interface DocumentItemProps {
    title: string;
    fileType: string; // ej: "PDF"
    fileSize: string; // ej: "1.2 MB"
    href: string;
}

export default function DocumentItem({ title, fileType, fileSize, href }: DocumentItemProps) {
    return (
        <a
            href={href}
            download
            className="flex items-center justify-between gap-4 bg-[#ffffff] p-4 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)] hover:shadow-[0_4px_25px_rgba(48,51,48,0.08)] transition-shadow duration-300"
        >
            <div className="flex items-center gap-3 min-w-0">
                <div className="bg-[#f7a48b]/20 text-[#8e4d39] p-3 rounded-full shrink-0">
                    <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <div className="flex flex-col min-w-0">
                    <h4 className="font-bold text-[#303330] truncate">{title}</h4>
                    <span className="text-xs text-[#5d605c] font-medium">{fileType} · {fileSize}</span>
                </div>
            </div>
            <span className="material-symbols-outlined text-[#006789] shrink-0">download</span>
        </a>
    );
}