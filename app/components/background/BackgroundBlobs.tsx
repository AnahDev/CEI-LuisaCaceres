export default function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="blob-shape -left-32 -top-32 h-[28rem] w-[28rem] animate-drift bg-primary-container/60 blur-3xl" />
      <div
        className="blob-shape -bottom-40 -right-24 h-[26rem] w-[26rem] animate-drift bg-sun-container/70 blur-3xl"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="blob-shape left-1/2 top-1/3 h-64 w-64 animate-drift bg-tertiary-container/40 blur-3xl"
        style={{ animationDelay: '-3s' }}
      />
    </div>
  );
}
