import { forwardRef } from 'react';

export interface FormDataPlanilla {
  nombre: string;
  apellido: string;
  cedula: string;
  telefono: string;
}

interface PlanillaTemplateProps {
  data: FormDataPlanilla | null;
}

export const PlanillaTemplate = forwardRef<HTMLDivElement, PlanillaTemplateProps>(
  ({ data }, ref) => {
    return (
      <div 
        ref={ref} 
        style={{ 
          width: '100%', 
          minHeight: '297mm', 
          padding: '48px', 
          backgroundColor: '#ffffff', 
          color: '#000000',
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <div style={{ borderBottom: '2px solid #2563eb', paddingBottom: '16px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>PLANILLA DE REGISTRO OFICIAL</h1>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>REF: 2026-X</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ color: '#4b5563', margin: 0 }}>
              Por medio de la presente, se certifica el registro de los datos del ciudadano en el sistema institucional.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px', backgroundColor: '#f9fafb', padding: '24px', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', marginBottom: '4px' }}>Nombre</label>
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937', borderBottom: '1px solid #d1d5db', paddingBottom: '4px', minHeight: '2rem', margin: 0 }}>
                  {data?.nombre || '----------------------'}
                </p>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', marginBottom: '4px' }}>Apellido</label>
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937', borderBottom: '1px solid #d1d5db', paddingBottom: '4px', minHeight: '2rem', margin: 0 }}>
                  {data?.apellido || '----------------------'}
                </p>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', marginBottom: '4px' }}>Cédula de Identidad</label>
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937', borderBottom: '1px solid #d1d5db', paddingBottom: '4px', minHeight: '2rem', margin: 0 }}>
                  {data?.cedula || '----------------------'}
                </p>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', marginBottom: '4px' }}>Teléfono</label>
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937', borderBottom: '1px solid #d1d5db', paddingBottom: '4px', minHeight: '2rem', margin: 0 }}>
                  {data?.telefono || '----------------------'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px', textAlign: 'center', fontSize: '12px', color: '#9ca3af' }}>
          Documento generado digitalmente a través del sistema web institucional.
        </div>
      </div>
    );
  }
);