interface LocationMapProps {
    embedSrc: string;
    title?: string;
}

export default function LocationMap({ embedSrc, title = "Ubicación de la institución" }: LocationMapProps) {
    return (
        <div className="rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(48,51,48,0.08)] border border-[#b1b2af]/10">
            <iframe
                src={embedSrc}
                title={title}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-[400px]"
            />
        </div>
    );
}