import { ButtonHTMLAttributes, ReactNode } from 'react';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: string;
}

export default function SubmitButton({ children, icon, ...props }: SubmitButtonProps) {
  return (
    <div className="pt-2">
      <button 
        className="w-full py-4 px-6 bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] font-bold rounded-full shadow-lg shadow-[#62ccff]/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
        {...props}
      >
        <span>{children}</span>
        {icon && (
          <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
            {icon}
          </span>
        )}
      </button>
    </div>
  );
}