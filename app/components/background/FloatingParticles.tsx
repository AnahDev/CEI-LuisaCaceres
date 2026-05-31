'use client';

import { useState, useEffect } from 'react';

export default function FloatingParticles() {
  const [particles, setParticles] = useState<{ id: number; size: number; color: string; left: string; top: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const colors = ['#62ccff', '#cbfecc', '#f7a48b']; 
    const generatedParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      duration: `${Math.random() * 5 + 2}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) return null; // Evita renderizado en servidor

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-10 animate-pulse"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}