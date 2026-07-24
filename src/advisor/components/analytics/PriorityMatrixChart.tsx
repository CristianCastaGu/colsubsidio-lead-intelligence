import React from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import { PriorityPoint, Temperatura } from '../../data/analyticsTypes';
import { TEMPERATURE_COLOR, CHART_INK } from './palette';

interface Props {
  data: PriorityPoint[];
}

const TEMPS: Temperatura[] = ['Hot', 'Warm', 'Cold'];

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p: PriorityPoint = payload[0].payload;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-2.5 text-xs">
      <p className="font-bold text-slate-900">{p.nombre}</p>
      <p className="text-slate-500 mb-1">{p.proyecto}</p>
      <p>
        Capacidad: <span className="font-bold">{p.capacidad}</span> · Intención: <span className="font-bold">{p.intencion}</span>
      </p>
      <p>
        Score 360: <span className="font-bold">{p.total}</span>
      </p>
    </div>
  );
}

/** Job: identity of quadrant + magnitude on two axes. Scatter, capped at 3 series (all-pairs-safe slots). */
export const PriorityMatrixChart: React.FC<Props> = ({ data }) => (
  <div>
    <ResponsiveContainer width="100%" height={340}>
      <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid stroke={CHART_INK.gridline} strokeDasharray="0" />
        <XAxis
          type="number"
          dataKey="capacidad"
          name="Capacidad"
          domain={[0, 100]}
          tick={{ fontSize: 11, fill: CHART_INK.secondary }}
          label={{ value: 'Capacidad de compra →', position: 'insideBottom', offset: -5, fontSize: 11, fill: CHART_INK.secondary }}
        />
        <YAxis
          type="number"
          dataKey="intencion"
          name="Intención"
          domain={[0, 100]}
          tick={{ fontSize: 11, fill: CHART_INK.secondary }}
          label={{ value: 'Intención de compra →', angle: -90, position: 'insideLeft', fontSize: 11, fill: CHART_INK.secondary }}
        />
        <ZAxis range={[50, 50]} />
        <ReferenceLine x={50} stroke={CHART_INK.gridline} />
        <ReferenceLine y={50} stroke={CHART_INK.gridline} />
        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
        <Legend
          verticalAlign="top"
          height={28}
          formatter={(value) => <span className="text-xs text-slate-700">{value}</span>}
        />
        {TEMPS.map((t) => (
          <Scatter key={t} name={t === 'Hot' ? 'Alta prioridad' : t === 'Warm' ? 'Nutrir' : 'Bajo interés'} data={data.filter((d) => d.temperatura === t)} fill={TEMPERATURE_COLOR[t]} />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
    <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 mt-1 px-2">
      <span>↖ Alta intención, baja capacidad: nutrir con financiación</span>
      <span className="text-right">↗ Alta intención, alta capacidad: contactar ya</span>
      <span>↙ Baja intención, baja capacidad: descartar / reciclar</span>
      <span className="text-right">↘ Alta capacidad, baja intención: reactivar con oferta</span>
    </div>
  </div>
);
