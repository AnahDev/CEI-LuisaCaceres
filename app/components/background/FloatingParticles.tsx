const PARTICLES = [
  { size: 8, left: '6%', top: '18%', duration: '7s', delay: '0s', color: 'var(--sun)' },
  { size: 11, left: '14%', top: '72%', duration: '9s', delay: '1.2s', color: 'var(--primary-fixed)' },
  { size: 6, left: '23%', top: '36%', duration: '6s', delay: '0.6s', color: 'var(--tertiary-fixed)' },
  { size: 13, left: '34%', top: '84%', duration: '10s', delay: '2.1s', color: 'var(--sun)' },
  { size: 7, left: '44%', top: '12%', duration: '8s', delay: '0.3s', color: 'var(--primary-fixed)' },
  { size: 10, left: '56%', top: '64%', duration: '7.5s', delay: '1.8s', color: 'var(--tertiary-fixed)' },
  { size: 6, left: '63%', top: '28%', duration: '6.5s', delay: '0.9s', color: 'var(--sun)' },
  { size: 12, left: '71%', top: '78%', duration: '9.5s', delay: '2.4s', color: 'var(--primary-fixed)' },
  { size: 8, left: '79%', top: '44%', duration: '7s', delay: '1.5s', color: 'var(--tertiary-fixed)' },
  { size: 9, left: '86%', top: '16%', duration: '8.5s', delay: '0.4s', color: 'var(--sun)' },
  { size: 7, left: '92%', top: '68%', duration: '6.8s', delay: '2s', color: 'var(--primary-fixed)' },
  { size: 11, left: '49%', top: '92%', duration: '9s', delay: '1s', color: 'var(--tertiary-fixed)' },
  { size: 5, left: '29%', top: '56%', duration: '6.2s', delay: '2.6s', color: 'var(--sun)' },
  { size: 10, left: '67%', top: '6%', duration: '8s', delay: '0.8s', color: 'var(--primary-fixed)' },
];

export default function FloatingParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute animate-pulse rounded-full opacity-25"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            left: particle.left,
            top: particle.top,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
