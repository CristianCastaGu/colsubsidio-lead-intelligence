import React from 'react';
import { ChannelComparison } from '../../data/analyticsTypes';
import { CATEGORICAL } from './palette';

interface Props {
  data: ChannelComparison[];
}

const CHANNEL_COLOR: Record<string, string> = {
  'Meta Ads': CATEGORICAL.blue,
  'Google Ads': CATEGORICAL.orange,
};

const METRICS: Array<{ key: keyof ChannelComparison; label: string; format: (v: number) => string }> = [
  { key: 'leads', label: 'Leads generados', format: (v) => String(v) },
  { key: 'scorePromedio', label: 'Score 360 promedio', format: (v) => `${v}/100` },
  { key: 'tasaConversion', label: 'Tasa de conversión', format: (v) => `${v}%` },
  { key: 'cplCOP', label: 'Costo por lead', format: (v) => `$${(v / 1000).toFixed(0)}K COP` },
];

/**
 * Job: compare a few mixed-unit metrics across 2 categories — a KPI comparison,
 * not a chart form (a dual-axis bar would violate the one-axis rule here).
 */
export const ChannelComparisonChart: React.FC<Props> = ({ data }) => (
  <div className="space-y-3">
    {METRICS.map((metric) => {
      const values = data.map((d) => Number(d[metric.key]));
      const max = Math.max(...values, 1);
      return (
        <div key={metric.key}>
          <p className="text-[11px] font-semibold text-slate-500 mb-1.5">{metric.label}</p>
          <div className="space-y-1.5">
            {data.map((d) => {
              const value = Number(d[metric.key]);
              const widthPct = Math.max((value / max) * 100, 8);
              return (
                <div key={d.canal} className="flex items-center gap-2">
                  <span className="w-20 text-[11px] text-slate-600 shrink-0">{d.canal}</span>
                  <div className="flex-1 h-5 bg-slate-100 rounded overflow-hidden">
                    <div
                      className="h-full rounded flex items-center justify-end px-1.5"
                      style={{ width: `${widthPct}%`, backgroundColor: CHANNEL_COLOR[d.canal] }}
                    >
                      <span className="text-[10px] font-bold text-white">{metric.format(value)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);
