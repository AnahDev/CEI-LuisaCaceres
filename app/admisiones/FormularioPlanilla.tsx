'use client';

import React, { useState } from 'react';
import {
  ClipboardList,
  CreditCard,
  Download,
  FileText,
  Loader2,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react';
import { FormDataPlanilla } from './PlanillaTemplate';

interface FormularioPlanillaProps {
  onSubmitData: (data: FormDataPlanilla) => void;
  pdfBlobUrl: string | null;
  isGenerating: boolean;
  onProcesar: () => void;
}

const inputClass =
  'w-full rounded-xl border border-outline-variant/60 bg-surface-container-low py-3 pl-11 pr-4 text-sm font-semibold text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors';

const labelClass =
  'mb-1.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant';

export const FormularioPlanilla: React.FC<FormularioPlanillaProps> = ({
  onSubmitData,
  pdfBlobUrl,
  isGenerating,
  onProcesar,
}) => {
  const [formState, setFormState] = useState<FormDataPlanilla>({
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = { ...formState, [name]: value };
    setFormState(updated);
    onSubmitData(updated);
  };

  return (
    <div className="card-clay flex h-full flex-col p-6">
      <div className="flex items-center gap-3 border-b border-outline-variant/40 pb-4">
        <span className="grid size-11 place-items-center rounded-xl bg-primary-container text-primary">
          <ClipboardList className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-xl font-extrabold text-on-surface">
            Datos del estudiante
          </h2>
          <p className="text-xs font-semibold text-on-surface-variant">
            Se reflejan en la vista previa al instante.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre
          </label>
          <div className="relative">
            <UserRound
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant"
              aria-hidden="true"
            />
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formState.nombre}
              onChange={handleChange}
              className={inputClass}
              placeholder="Ej. Juan"
              autoComplete="given-name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="apellido" className={labelClass}>
            Apellido
          </label>
          <div className="relative">
            <UserRound
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant"
              aria-hidden="true"
            />
            <input
              id="apellido"
              type="text"
              name="apellido"
              value={formState.apellido}
              onChange={handleChange}
              className={inputClass}
              placeholder="Ej. Pérez"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cedula" className={labelClass}>
            Cédula de identidad
          </label>
          <div className="relative">
            <CreditCard
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant"
              aria-hidden="true"
            />
            <input
              id="cedula"
              type="text"
              name="cedula"
              value={formState.cedula}
              onChange={handleChange}
              className={inputClass}
              placeholder="Ej. V-12345678"
              inputMode="numeric"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono
          </label>
          <div className="relative">
            <Phone
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant"
              aria-hidden="true"
            />
            <input
              id="telefono"
              type="tel"
              name="telefono"
              value={formState.telefono}
              onChange={handleChange}
              className={inputClass}
              placeholder="Ej. 0412-1234567"
              autoComplete="tel"
            />
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-3 border-t border-outline-variant/40 pt-6">
        <button
          type="button"
          onClick={onProcesar}
          disabled={isGenerating}
          className="btn btn-primary w-full disabled:pointer-events-none disabled:opacity-60"
        >
          {isGenerating ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Generando PDF...
            </>
          ) : (
            <>
              <FileText className="size-5" aria-hidden="true" />
              Procesar datos
            </>
          )}
        </button>

        {pdfBlobUrl && (
          <a href={pdfBlobUrl} download="planilla-generada.pdf" className="btn btn-sun w-full">
            <Download className="size-5" aria-hidden="true" />
            Descargar planilla PDF
          </a>
        )}

        <p className="flex items-start gap-2 pt-1 text-xs font-semibold leading-relaxed text-on-surface-variant">
          <Sparkles className="mt-0.5 size-3.5 shrink-0 text-tertiary" aria-hidden="true" />
          Completa todos los campos y revisa la vista previa antes de descargar.
        </p>
      </div>
    </div>
  );
};
