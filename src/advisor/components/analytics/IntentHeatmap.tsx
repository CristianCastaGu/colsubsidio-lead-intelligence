import React from 'react';
import { IntentHeatmapRow } from '../../data/analyticsTypes';
import { SEQUENTIAL_BLUE, CHART_INK } from './palette';

interface Props {
  data: IntentHeatmapRow[];
}

const CHANNELS: Array<'Meta Ads' | 'Google Ads'> = ['Meta Ads', 'Google Ads'];

function cellColor(value: number | null) {
  if (value == null) return '#f1f5f9';
  if (value >= 75) return SEQUENTIAL_BLUE[700];
  if (value >= 68) return SEQUENTIAL_BLUE[600];
  if (value >= 61) return SEQUENTIAL_BLUE[500];
  if (value >= 55) return SEQUENTIAL_BLUE[400];
  if (value >= 45) return SEQUENTIAL_BLUE[300];
  return SEQUENTIAL_BLUE[200];
}
function textColor(value: number | null) {
  if (value == null) return CHART_INK.muted;
  return value >= 61 ? '#ffffff' : CHART_INK.primary;
}

/** Job: magnitude on a grid — sequential one-hue heatmap. Cells carry their own label (contrast picked by luminance). */
export const IntentHeatmap: React.FC<Props> = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-xs border-separate" style={{ borderSpacing: '4px' }}>
      <thead>
        <tr>
          <th className="text-left text-[10px] font-bold uppercase text-slate-400 pb-1">Ubicación</th>
          {CHANNELS.map((c) => (
            <th key={c} className="text-center text-[10px] font-bold uppercase text-slate-400 pb-1 px-2">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.ubicacion}>
            <td className="font-semibold text-slate-700 pr-2 whitespace-nowrap">{row.ubicacion}</td>
            {CHANNELS.map((c) => (
              <td key={c} className="p-0">
                <div
                  className="rounded-md h-10 flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: cellColor(row[c]), color: textColor(row[c]) }}
                  title={`${row.ubicacion} · ${c}: ${row[c] ?? 'sin datos'}`}
                >
                  {row[c] ?? '—'}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-[10px] text-slate-400 mt-2">Intención promedio (0-100) por ubicación y canal de captación.</p>
  </div>
);
