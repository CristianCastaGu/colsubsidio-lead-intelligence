import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { CampaignQuality } from '../../data/analyticsTypes';
import { SEQUENTIAL_BLUE, CHART_INK } from './palette';

interface Props {
  data: CampaignQuality[];
}

function stepFor(v: number) {
  if (v >= 65) return SEQUENTIAL_BLUE[700];
  if (v >= 50) return SEQUENTIAL_BLUE[600];
  if (v >= 35) return SEQUENTIAL_BLUE[500];
  if (v >= 20) return SEQUENTIAL_BLUE[400];
  return SEQUENTIAL_BLUE[300];
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p: CampaignQuality = payload[0].payload;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-2.5 text-xs">
      <p className="font-bold text-slate-900">{p.campaign}</p>
      <p>Índice de calidad: <span className="font-bold">{p.qualityIndex}</span></p>
      <p className="text-slate-500">{p.leads} leads · Score prom. {p.scorePromedio} · Conv. {p.tasaConversion}%</p>
    </div>
  );
}

/** Job: magnitude ranked — sequential one-hue bar (quality index blends score + conversion). */
export const CampaignQualityChart: React.FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height={Math.max(data.length * 32, 200)}>
    <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, bottom: 0, left: 0 }}>
      <XAxis type="number" domain={[0, 100]} hide />
      <YAxis type="category" dataKey="campaign" width={130} tick={{ fontSize: 10.5, fill: CHART_INK.primary }} />
      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
      <Bar dataKey="qualityIndex" radius={[0, 4, 4, 0]} maxBarSize={18} label={{ position: 'right', fontSize: 11, fontWeight: 700, fill: CHART_INK.primary }}>
        {data.map((d) => (
          <Cell key={d.campaign} fill={stepFor(d.qualityIndex)} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);
