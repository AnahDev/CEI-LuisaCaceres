'use client';

import React, { useState } from 'react';
import { FormDataPlanilla } from './PlanillaTemplate';

interface FormularioPlanillaProps {
  onSubmitData: (data: FormDataPlanilla) => void;
  pdfBlobUrl: string | null;
  isGenerating: boolean;
  onProcesar: () => void;
}

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
    onSubmitData(updated); // Actualiza en tiempo real la previsualización
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Datos del Usuario</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formState.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
            placeholder="Ej. Juan"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formState.apellido}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
            placeholder="Ej. Pérez"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cédula</label>
          <input
            type="text"
            name="cedula"
            value={formState.cedula}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
            placeholder="Ej. V-12345678"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formState.telefono}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
            placeholder="Ej. 0412-1234567"
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t space-y-3">
        <button
          onClick={onProcesar}
          disabled={isGenerating}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-sm disabled:bg-gray-400"
        >
          {isGenerating ? 'Generando PDF...' : 'Procesar Datos'}
        </button>

        {pdfBlobUrl && (
          <a
            href={pdfBlobUrl}
            download="planilla-generada.pdf"
            className="block text-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-sm"
          >
            Descargar Planilla en PDF
          </a>
        )}
      </div>
    </div>
  );
};