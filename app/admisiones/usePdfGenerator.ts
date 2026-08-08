import { useState, useRef } from 'react';

export const usePdfGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const generarPdf = async () => {
    if (!targetRef.current) return;
    
    setIsGenerating(true);
    try {
      // Importación dinámica para evitar errores de SSR (Server-Side Rendering) en Next.js
      const html2pdf = (await import('html2pdf.js')).default;

      const element = targetRef.current;
      const options = {
        margin:       10,
        filename:     'planilla-usuario.pdf',
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
      };

      // Generar PDF como Blob para enlace de descarga
      const pdfWorker = html2pdf().from(element).set(options);
      const pdfBlob = await pdfWorker.output('blob');
      const blobUrl = URL.createObjectURL(pdfBlob);
      
      setPdfBlobUrl(blobUrl);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return { targetRef, generarPdf, pdfBlobUrl, isGenerating };
};