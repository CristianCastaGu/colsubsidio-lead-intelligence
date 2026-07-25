import React from 'react';
import {
  BarChart3,
  Target,
  ListOrdered,
  Filter,
  LineChart as LineChartIcon,
  Route,
  Compass,
  Grid3x3,
  Megaphone,
  Award,
  Workflow,
} from 'lucide-react';
import { ANALYTICS_DATA } from '../../data/analyticsData';
import { ChartCard } from '../analytics/ChartCard';
import { PriorityMatrixChart } from '../analytics/PriorityMatrixChart';
import { ScoreRankingChart } from '../analytics/ScoreRankingChart';
import { ConversionFunnelChart } from '../analytics/ConversionFunnelChart';
import { ScoreEvolutionChart } from '../analytics/ScoreEvolutionChart';
import { CustomerJourneyTimeline } from '../analytics/CustomerJourneyTimeline';
import { NextBestActionChart } from '../analytics/NextBestActionChart';
import { IntentHeatmap } from '../analytics/IntentHeatmap';
import { ChannelComparisonChart } from '../analytics/ChannelComparisonChart';
import { CampaignQualityChart } from '../analytics/CampaignQualityChart';
import { LeadSankeyChart } from '../analytics/LeadSankeyChart';

export const PanelesView: React.FC = () => {
  const { leads, funnelData, channelComparison, campaignQuality, intentHeatmap, nextBestActionDistribution, sankeyNodes, sankeyLinks, scoreTrend, priorityMatrix, topLeadsRanking, totalLeads } =
    ANALYTICS_DATA;

  const hotCount = leads.filter((l) => l.temperatura === 'Hot').length;
  const wonCount = leads.filter((l) => l.status === 'Ganado').length;
  const conversionRate = ((wonCount / totalLeads) * 100).toFixed(1);
  const qualifiedCount = leads.filter((l) => l.temperatura !== 'Cold').length;
  const totalSpendCOP = channelComparison.reduce((sum, c) => sum + c.leads * c.cplCOP, 0);
  const cplQualifiedCOP = qualifiedCount ? Math.round(totalSpendCOP / qualifiedCount) : 0;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-black text-slate-900 font-sans tracking-tight">Paneles & Analítica de Gestión Comercial</h1>
          </div>
          <p className="text-xs text-slate-500">
            Cruce de {totalLeads} leads reales de pauta (Meta/Google Ads) con la base de afiliados y el catálogo de proyectos — perfilamiento
            sintético para validar el modelo de scoring del MVP.
          </p>
        </div>

        <div className="bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-xl">
          Corte al {ANALYTICS_DATA.generatedAt}
        </div>
      </div>

      {/* METRICS SUMMARY TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs text-slate-500 font-medium block">Total leads capturados</span>
          <span className="font-display text-2xl font-black text-slate-900">{totalLeads}</span>
        </div>

        <div className="p-4 bg-white rounded-xl border border-amber-200 bg-amber-50/60 shadow-xs space-y-2">
          <span className="text-xs text-amber-800 font-medium block">Leads Hot (Score 360 top 15%)</span>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-2xl font-black text-amber-700">{hotCount}</span>
            <span className="text-xs text-amber-800 font-bold bg-amber-100 px-1.5 py-0.5 rounded">{Math.round((hotCount / totalLeads) * 100)}%</span>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs text-slate-500 font-medium block">Tasa de conversión (Ganado)</span>
          <span className="font-display text-2xl font-black text-[#003DA5]">{conversionRate}%</span>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs text-slate-500 font-medium block">Costo por lead calificado</span>
          <span className="font-display text-2xl font-black text-emerald-700">${(cplQualifiedCOP / 1000).toFixed(0)}K</span>
        </div>
      </div>

      {/* CHART GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          icon={<Target className="w-4 h-4 text-[#003DA5]" />}
          title="Matriz de prioridad: intención vs. capacidad"
          subtitle="Cada punto es un lead — cuadrante superior derecho es la prioridad comercial del día"
          className="lg:col-span-2"
        >
          <PriorityMatrixChart data={priorityMatrix} />
        </ChartCard>

        <ChartCard
          icon={<ListOrdered className="w-4 h-4 text-[#003DA5]" />}
          title="Ranking de leads por Score 360"
          subtitle="Los 12 leads con mayor probabilidad de conversión hoy"
        >
          <ScoreRankingChart data={topLeadsRanking} />
        </ChartCard>

        <ChartCard
          icon={<Filter className="w-4 h-4 text-[#003DA5]" />}
          title="Embudo de conversión"
          subtitle="Leads activos que alcanzan cada etapa del pipeline comercial"
        >
          <ConversionFunnelChart data={funnelData} />
        </ChartCard>

        <ChartCard
          icon={<LineChartIcon className="w-4 h-4 text-[#003DA5]" />}
          title="Evolución del Score 360"
          subtitle="Score promedio de los leads según su día de ingreso"
        >
          <ScoreEvolutionChart data={scoreTrend} />
        </ChartCard>

        <ChartCard
          icon={<Compass className="w-4 h-4 text-[#003DA5]" />}
          title="Next Best Action recomendada"
          subtitle="Qué acción sugiere el motor de IA, y a cuántos leads aplica"
        >
          <NextBestActionChart data={nextBestActionDistribution} />
        </ChartCard>

        <ChartCard
          icon={<Route className="w-4 h-4 text-[#003DA5]" />}
          title="Customer journey del lead"
          subtitle="Selecciona un lead para ver su recorrido completo"
        >
          <CustomerJourneyTimeline leads={topLeadsRanking} />
        </ChartCard>

        <ChartCard
          icon={<Grid3x3 className="w-4 h-4 text-[#003DA5]" />}
          title="Mapa de calor de intención"
          subtitle="Intención promedio por ubicación de proyecto y canal"
        >
          <IntentHeatmap data={intentHeatmap} />
        </ChartCard>

        <ChartCard
          icon={<BarChart3 className="w-4 h-4 text-[#003DA5]" />}
          title="Comparación de canales"
          subtitle="Meta Ads vs. Google Ads en volumen, calidad y costo"
        >
          <ChannelComparisonChart data={channelComparison} />
        </ChartCard>

        <ChartCard
          icon={<Megaphone className="w-4 h-4 text-[#003DA5]" />}
          title="Calidad de campañas"
          subtitle="Índice que combina score promedio y tasa de conversión por campaña"
        >
          <CampaignQualityChart data={campaignQuality} />
        </ChartCard>

        <ChartCard
          icon={<Workflow className="w-4 h-4 text-[#003DA5]" />}
          title="Origen → comportamiento → resultado"
          subtitle="Flujo completo del lead: canal de pauta, temperatura alcanzada y desenlace comercial"
          className="lg:col-span-2"
        >
          <LeadSankeyChart nodes={sankeyNodes} links={sankeyLinks} />
        </ChartCard>
      </div>
    </div>
  );
};
