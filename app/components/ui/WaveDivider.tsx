interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block h-12 w-full md:h-[70px] ${flip ? 'rotate-180' : ''}`}
        fill="none"
      >
        <path
          fill="currentColor"
          d="M0,40 C180,90 360,8 540,28 C720,48 900,96 1080,66 C1260,36 1350,18 1440,42 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}
