'use client';

import { useState, InputHTMLAttributes } from 'react';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function PasswordInput({ label, id, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-widest text-[#5d605c] px-1">
        {label}
      </label>
      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#797b78] group-focus-within:text-[#006789] transition-colors">
          lock
        </span>
        <input 
          id={id}
          type={showPassword ? "text" : "password"}
          className="w-full pl-12 pr-12 py-4 bg-[#e1e3df] rounded-lg border-none focus:ring-2 focus:ring-[#62ccff]/50 focus:bg-[#62ccff]/10 transition-all placeholder:text-[#b1b2af] font-medium text-[#303330]" 
          {...props}
        />
        <button 
          type="button" 
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b1b2af] hover:text-[#303330] transition-colors outline-none"
        >
          <span className="material-symbols-outlined">
            {showPassword ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      </div>
    </div>
  );
}