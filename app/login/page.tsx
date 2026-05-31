'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BackgroundBlobs from '../components/background/BackgroundBlobs';
import FloatingParticles from '../components/background/FloatingParticles';
import LoginHeader from '../components/form/LoginHeader';
import LoginForm from '../components/form/LoginForm';


export default function AdminLogin() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 overflow-hidden relative"
      style={{
        backgroundColor: '#faf9f6',
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(98, 204, 255, 0.05) 0%, transparent 20%),
          radial-gradient(circle at 90% 80%, rgba(203, 254, 204, 0.05) 0%, transparent 20%),
          radial-gradient(circle at 50% 50%, rgba(247, 164, 139, 0.03) 0%, transparent 40%)
        `
      }}
    >
      <BackgroundBlobs />
      <FloatingParticles />

      <main 
        className="w-full max-w-md relative z-10"
        style={{ 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateY(0px)' : 'translateY(20px)', 
          transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}
      >
        <div className="mb-8 flex justify-center">
          <Link href="/" className="flex items-center gap-2 text-[#5d605c] hover:text-[#006789] transition-colors group">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="text-sm font-semibold tracking-tight">Volver al inicio</span>
          </Link>
        </div>

        <div className="bg-[#ffffff] rounded-xl shadow-[0_32px_64px_-16px_rgba(48,51,48,0.08)] p-10 md:p-12 border border-[#b1b2af]/10">
          <LoginHeader />
          <LoginForm />
        </div>
      </main>
    </div>
  );
}