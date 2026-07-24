import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LabelList } from 'recharts';
import { AnalyticsLead } from '../../data/analyticsTypes';
import { SEQUENTIAL_BLUE, CHART_INK } from './palette';

interface Props {
  data: AnalyticsLead[];
}

function stepFor(score: number) {
  if (score >= 85) return SEQUENTIAL_BLUE[700];
  if (score >= 75) return SEQUENTIAL_BLUE[600];
  if (score >= 65) return SEQUENTIAL_BLUE[500];
  if (score >= 55) return SEQUENTIAL_BLUE[400];
  return SEQUENTIAL_BLUE[300];
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p: AnalyticsLead = payload[0].payload;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-2.5 text-xs">
      <p className="font-bold text-slate-900">{p.nombre}</p>
      <p className="text-slate-500">{p.proyecto}</p>
      <p className="font-bold text-slate-900 mt-1">Score 360: {p.total}/100</p>
    </div>
  );
}

/** Job: magnitude, ranked. Sequential one-hue bar — darker = higher score. */
export const ScoreRankingChart: React.FC<Props> = ({ data }) => {
  const top = [...data].sort((a, b) => b.total - a.total).slice(0, 12);
  return (
    <ResponsiveContainer width="100%" height={Math.max(top.length * 30, 260)}>
      <BarChart data={top} layout="vertical" margin={{ top: 0, right: 34, bottom: 0, left: 0 }} barCategoryGap={6}>
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis
          type="category"
          dataKey="nombre"
          width={140}
          tick={{ fontSize: 11, fill: CHART_INK.primary }}
          tickFormatter={(v: string) => (v.length > 20 ? v.slice(0, 18) + '…' : v)}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
        <Bar dataKey="total" radius={[0, 4, 4, 0]} maxBarSize={18}>
          {top.map((d) => (
            <Cell key={d.id} fill={stepFor(d.total)} />
          ))}
          <LabelList dataKey="total" position="right" style={{ fontSize: 11, fontWeight: 700, fill: CHART_INK.primary }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
