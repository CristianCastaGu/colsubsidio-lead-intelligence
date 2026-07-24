import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { NBAItem } from '../../data/analyticsTypes';
import { CATEGORICAL, CHART_INK } from './palette';

interface Props {
  data: NBAItem[];
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p: NBAItem = payload[0].payload;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-2.5 text-xs max-w-[220px]">
      <p className="font-bold text-slate-900">{p.action}</p>
      <p className="text-slate-500">{p.count} leads</p>
    </div>
  );
}

/** Job: magnitude across nominal categories (not identity-distinct series) — single hue. */
export const NextBestActionChart: React.FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height={Math.max(data.length * 34, 160)}>
    <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, bottom: 0, left: 0 }}>
      <XAxis type="number" hide />
      <YAxis
        type="category"
        dataKey="action"
        width={170}
        tick={{ fontSize: 10.5, fill: CHART_INK.primary }}
        tickFormatter={(v: string) => (v.length > 26 ? v.slice(0, 24) + '…' : v)}
      />
      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
      <Bar dataKey="count" fill={CATEGORICAL.blue} radius={[0, 4, 4, 0]} maxBarSize={18} label={{ position: 'right', fontSize: 11, fontWeight: 700, fill: CHART_INK.primary }} />
    </BarChart>
  </ResponsiveContainer>
);
