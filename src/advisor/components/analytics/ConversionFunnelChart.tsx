import React from 'react';
import { motion } from 'motion/react';
import { FunnelStage } from '../../data/analyticsTypes';
import { SEQUENTIAL_BLUE } from './palette';

interface Props {
  data: FunnelStage[];
}

// Ordinal ramp: one hue, monotone lightness — order carries meaning (funnel stage).
const STEPS = [SEQUENTIAL_BLUE[300], SEQUENTIAL_BLUE[400], SEQUENTIAL_BLUE[500], SEQUENTIAL_BLUE[600], SEQUENTIAL_BLUE[700], '#0ca30c'];

/** Job: part-to-whole, ordered stages. Ordinal ramp, last stage (won) in status-good. */
export const ConversionFunnelChart: React.FC<Props> = ({ data }) => {
  const max = data[0]?.count || 1;

  return (
    <div className="space-y-2.5">
      {data.map((stage, idx) => {
        const widthPct = Math.max((stage.count / max) * 100, 4);
        const prev = idx > 0 ? data[idx - 1].count : stage.count;
        const dropoffPct = prev > 0 ? Math.round(((prev - stage.count) / prev) * 100) : 0;

        return (
          <div key={stage.stage}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-slate-700">{stage.stage}</span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-slate-900">{stage.count}</span>
                {idx > 0 && dropoffPct > 0 && <span className="text-[10px] text-red-500 font-semibold">-{dropoffPct}%</span>}
              </span>
            </div>
            <div className="w-full h-6 bg-slate-100 rounded-md overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${widthPct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: 'easeOut' }}
                className="h-full rounded-md"
                style={{ backgroundColor: STEPS[idx] || STEPS[STEPS.length - 1] }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
