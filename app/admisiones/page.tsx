'use client';

import React, { useState } from 'react';
import { ClipboardCheck, FileText, Search } from 'lucide-react';
import { FormDataPlanilla, PlanillaTemplate } from './PlanillaTemplate';
import { usePdfGenerator } from './usePdfGenerator';
import { FormularioPlanilla } from './FormularioPlanilla';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/ui/Reveal';

const STEPS = [
  { icon: ClipboardCheck, label: 'Completa tus datos' },
  { icon: Search, label: 'Revisa la vista previa' },
  { icon: FileText, label: 'Descarga tu planilla' },
];

export default function GeneradorPlanillaPage() {
  const [formData, setFormData] = useState<FormDataPlanilla | null>(null);
  const { targetRef, generarPdf, pdfBlobUrl, isGenerating } = usePdfGenerator();

  return (
    <main className="flex-grow">
      <PageHero
        badge="Admisiones"
        title={
          <>
            Genera tu <span className="text-primary">planilla</span>
          </>
        }
        description="Completa el formulario, revisa el documento y descarga tu planilla oficial lista para imprimir."
        icon={ClipboardCheck}
        tone="primary"
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
        <Reveal>
          <ol className="mb-8 grid gap-3 sm:grid-cols-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.label}
                  className="flex items-center gap-3 rounded-2xl border border-outline-variant/40 bg-surface-container-low px-4 py-3"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sun-container font-display text-sm font-extrabold text-on-sun-container">
                    {index + 1}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-on-surface">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-5">
            <FormularioPlanilla
              onSubmitData={setFormData}
              pdfBlobUrl={pdfBlobUrl}
              isGenerating={isGenerating}
              onProcesar={generarPdf}
            />
          </Reveal>

          <Reveal variant="right" delay={100} className="lg:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-lowest shadow-[0_24px_50px_-38px_rgba(31,48,56,0.45)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/40 bg-surface-container-low px-5 py-3.5">
                <span className="flex items-center gap-2 font-display text-sm font-extrabold text-on-surface">
                  <span className="grid size-8 place-items-center rounded-lg bg-primary-container text-primary">
                    <FileText className="size-4" aria-hidden="true" />
                  </span>
                  Vista previa del documento
                </span>
                <span className="rounded-full bg-secondary-container px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-on-secondary-container">
                  Tamaño carta
                </span>
              </div>

              <div className="flex justify-center overflow-x-auto bg-surface-container-high/40 p-4 sm:p-6">
                <div className="w-[210mm] shrink-0 origin-top scale-[0.5] transition-transform sm:scale-[0.62] lg:scale-[0.58] xl:scale-[0.72]">
                  <PlanillaTemplate ref={targetRef} data={formData} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
