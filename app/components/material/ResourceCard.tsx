interface ResourceCardProps {
    icon: string;
    title: string;
    description: string;
    href: string;
    iconColor?: string;
    bgColor?: string;
}

export default function ResourceCard({
    icon,
    title,
    description,
    href,
    iconColor = "text-[#006789]",
    bgColor = "bg-[#62ccff]/20",
}: ResourceCardProps) {
    return (
        <a
            href={href}
            download
            className="flex flex-col gap-4 bg-[#ffffff] p-6 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(48,51,48,0.08)] transition-all duration-300"
        >
            <div className={`p-3 rounded-full w-max ${bgColor} ${iconColor}`}>
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <div className="flex flex-col gap-1.5">
                <h3 className="font-extrabold text-lg text-[#303330] leading-snug">{title}</h3>
                <p className="text-[#5d605c] text-sm leading-relaxed">{description}</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-bold text-[#006789] mt-auto">
                Descargar
                <span className="material-symbols-outlined text-[18px]">download</span>
            </span>
        </a>
    );
}