export default function BackgroundBlobs() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .bento-blob {
          position: absolute;
          filter: blur(80px);
          z-index: -1;
          border-radius: 50%;
          animation: float 20s infinite alternate ease-in-out;
        }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, 100px) scale(1.1); }
        }
      `}} />
      <div className="bento-blob w-[500px] h-[500px] bg-[#62ccff]/20 -top-48 -left-24"></div>
      <div className="bento-blob w-[400px] h-[400px] bg-[#cbfecc]/20 -bottom-48 -right-24" style={{ animationDelay: '-5s' }}></div>
    </>
  );
}