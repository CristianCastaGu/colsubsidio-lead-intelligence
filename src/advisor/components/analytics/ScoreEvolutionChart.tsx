import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ScoreTrendPoint } from '../../data/analyticsTypes';
import { SEQUENTIAL_BLUE, CHART_INK } from './palette';

interface Props {
  data: ScoreTrendPoint[];
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const p: ScoreTrendPoint = payload[0].payload;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-2.5 text-xs">
      <p className="font-bold text-slate-900">{label}</p>
      <p>
        Score promedio: <span className="font-bold">{p.scorePromedio}</span>
      </p>
      <p className="text-slate-500">{p.leads} leads ingresados</p>
    </div>
  );
}

/** Job: trend over time, single series. Sequential blue, area wash at ~10%. */
export const ScoreEvolutionChart: React.FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height={220}>
    <AreaChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
      <CartesianGrid vertical={false} stroke={CHART_INK.gridline} />
      <XAxis
        dataKey="date"
        tick={{ fontSize: 11, fill: CHART_INK.secondary }}
        tickFormatter={(d: string) => d.slice(8, 10) + '/' + d.slice(5, 7)}
      />
      <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tick={{ fontSize: 11, fill: CHART_INK.secondary }} width={34} />
      <Tooltip content={<CustomTooltip />} cursor={{ stroke: CHART_INK.muted, strokeDasharray: '3 3' }} />
      <Area
        type="monotone"
        dataKey="scorePromedio"
        stroke={SEQUENTIAL_BLUE[500]}
        strokeWidth={2}
        fill={SEQUENTIAL_BLUE[500]}
        fillOpacity={0.1}
        dot={{ r: 4, fill: SEQUENTIAL_BLUE[500], stroke: CHART_INK.surface, strokeWidth: 2 }}
        activeDot={{ r: 5 }}
      />
    </AreaChart>
  </ResponsiveContainer>
);
