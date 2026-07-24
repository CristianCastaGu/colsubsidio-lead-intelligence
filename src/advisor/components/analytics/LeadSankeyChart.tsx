import React from 'react';
import { ResponsiveContainer, Sankey, Tooltip, Rectangle } from 'recharts';
import { SankeyNode, SankeyLink } from '../../data/analyticsTypes';
import { CATEGORICAL, TEMPERATURE_COLOR, STATUS, CHART_INK } from './palette';

interface Props {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

function colorForNode(name: string): string {
  if (name === 'Meta Ads') return CATEGORICAL.blue;
  if (name === 'Google Ads') return CATEGORICAL.orange;
  if (name === 'Hot lead') return TEMPERATURE_COLOR.Hot;
  if (name === 'Warm lead') return TEMPERATURE_COLOR.Warm;
  if (name === 'Cold lead') return TEMPERATURE_COLOR.Cold;
  if (name === 'Ganado') return STATUS.good;
  if (name === 'Perdido') return STATUS.critical;
  return CHART_INK.muted; // "En proceso"
}

function CustomNode({ x, y, width, height, index, payload }: any) {
  const color = colorForNode(payload.name);
  return (
    <g>
      <Rectangle x={x} y={y} width={width} height={height} fill={color} radius={2} />
      <text
        x={x + width / 2}
        y={y - 6}
        textAnchor="middle"
        fontSize={11}
        fontWeight={700}
        fill={CHART_INK.primary}
      >
        {payload.name}
      </text>
      <text x={x + width / 2} y={y + height + 12} textAnchor="middle" fontSize={10} fill={CHART_INK.secondary}>
        {payload.value}
      </text>
    </g>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  if (item.payload?.source) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-2.5 text-xs">
        <p className="font-bold text-slate-900">
          {item.payload.source.name} → {item.payload.target.name}
        </p>
        <p className="text-slate-500">{item.payload.value} leads</p>
      </div>
    );
  }
  return null;
}

/** Job: multi-stage flow of identity (origen → comportamiento → resultado). Nodes colored by their own category convention (channel / temperature / status). */
export const LeadSankeyChart: React.FC<Props> = ({ nodes, links }) => (
  <ResponsiveContainer width="100%" height={320}>
    <Sankey
      data={{ nodes, links }}
      node={<CustomNode />}
      nodePadding={28}
      nodeWidth={12}
      link={{ stroke: '#cbd5e1', strokeOpacity: 0.5 }}
      margin={{ top: 24, bottom: 24, left: 70, right: 100 }}
    >
      <Tooltip content={<CustomTooltip />} />
    </Sankey>
  </ResponsiveContainer>
);
