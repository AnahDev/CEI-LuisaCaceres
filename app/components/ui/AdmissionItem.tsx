interface AdmissionItemProps {
  title: string;
  description: string;
}

export default function AdmissionItem({ title, description }: AdmissionItemProps) {
  return (
    <div className="flex items-start gap-4">
      <span className="material-symbols-outlined text-[#3c6942] font-bold bg-[#cbfecc]/50 p-1.5 rounded-full mt-0.5">check</span>
      <div>
        <h4 className="font-bold text-[#303330] text-lg">{title}</h4>
        <p className="text-[#5d605c] text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}