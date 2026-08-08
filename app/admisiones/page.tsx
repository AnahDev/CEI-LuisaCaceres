'use client';

import React, { useState } from 'react';
import { FormDataPlanilla, PlanillaTemplate } from './PlanillaTemplate';
import { usePdfGenerator } from './usePdfGenerator';
import { FormularioPlanilla } from './FormularioPlanilla';

export default function GeneradorPlanillaPage() {
  const [formData, setFormData] = useState<FormDataPlanilla | null>(null);
  const { targetRef, generarPdf, pdfBlobUrl, isGenerating } = usePdfGenerator();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Generador de Planillas PDF</h1>
          <p className="text-gray-600">Complete el formulario para procesar y descargar su documento oficial.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna del Formulario y Acciones */}
          <div className="lg:col-span-5 h-full">
            <FormularioPlanilla
              onSubmitData={setFormData}
              pdfBlobUrl={pdfBlobUrl}
              isGenerating={isGenerating}
              onProcesar={generarPdf}
            />
          </div>

          {/* Columna de Previsualización (Escalada para visualizarse cómodamente en pantalla) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl shadow-md border border-gray-200 overflow-x-auto flex justify-center">
            <div className="transform scale-[0.6] origin-top sm:scale-[0.75] xl:scale-90 transition-transform">
              <PlanillaTemplate ref={targetRef} data={formData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}