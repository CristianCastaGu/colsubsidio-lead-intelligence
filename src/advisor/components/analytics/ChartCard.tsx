import React from 'react';

interface ChartCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** One consistent card recipe for every panel in Paneles & Analítica. */
export const ChartCard: React.FC<ChartCardProps> = ({ icon, title, subtitle, action, children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-slate-200 p-5 shadow-xs ${className}`}>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
      <div>
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          {icon}
          {title}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
      </div>
      {action}
    </div>
    {children}
  </div>
);
