interface FeatureCardProps {
  icon: string;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, iconColor, iconBg, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#ffffff] p-8 rounded-xl shadow-[0_4px_20px_rgba(48,51,48,0.03)] hover:-translate-y-2 transition-transform duration-300 group border border-[#b1b2af]/10">
      <div className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <span className={`material-symbols-outlined text-3xl ${iconColor} fill`}>{icon}</span>
      </div>
      <h3 className="font-bold text-xl text-[#303330] mb-3">{title}</h3>
      <p className="text-[#5d605c] leading-relaxed">{description}</p>
    </div>
  );
}