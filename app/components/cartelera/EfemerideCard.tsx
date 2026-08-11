import Image from 'next/image';

interface EfemerideCardProps {
    image: string;
    day: string;
    month: string;
    title: string;
    description: string;
}

export default function EfemerideCard({ image, day, month, title, description }: EfemerideCardProps) {
    return (
        <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(48,51,48,0.05)] hover:-translate-y-1 transition-transform duration-300">
            <div className="relative w-full h-48">
                <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 350px" className="object-cover" />

                {/* Badge de fecha superpuesto */}
                <div className="absolute top-3 left-3 flex flex-col items-center justify-center bg-[#ffffff] text-[#006789] rounded-lg w-14 h-14 shadow-[0_4px_15px_rgba(48,51,48,0.15)]">
                    <span className="text-xl font-extrabold leading-none">{day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide">{month}</span>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-2">
                <h4 className="font-extrabold text-lg text-[#303330] leading-snug">{title}</h4>
                <p className="text-[#5d605c] text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}