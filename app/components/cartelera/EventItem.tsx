interface EventItemProps {
    day: string;
    month: string;
    title: string;
    category: string;
    categoryColor: string; // ej: "bg-[#f7a48b]/20 text-[#8e4d39]"
}

export default function EventItem({ day, month, title, category, categoryColor }: EventItemProps) {
    return (
        <div className="flex items-center gap-4 bg-[#ffffff] p-4 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)]">
            <div className="flex flex-col items-center justify-center bg-[#62ccff]/20 text-[#006789] rounded-lg w-16 h-16 shrink-0">
                <span className="text-2xl font-extrabold leading-none">{day}</span>
                <span className="text-xs font-bold uppercase tracking-wide">{month}</span>
            </div>
            <div className="flex flex-col gap-1 min-w-0">
                <h4 className="font-bold text-[#303330] truncate">{title}</h4>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full w-max ${categoryColor}`}>
                    {category}
                </span>
            </div>
        </div>
    );
}