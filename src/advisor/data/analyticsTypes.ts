export type Temperatura = 'Hot' | 'Warm' | 'Cold';

export interface JourneyStep {
  key: string;
  label: string;
  date: string;
}

export interface ScorePoint {
  date: string;
  score: number;
}

export interface AnalyticsLead {
  id: string;
  nombre: string;
  fuente: 'Meta Ads' | 'Google Ads';
  utm_campaign: string;
  proyecto: string;
  ubicacion: string;
  afiliado: boolean;
  fecha_ingreso: string;
  capacidad: number;
  intencion: number;
  engagement: number;
  conversion: number;
  total: number;
  temperatura: Temperatura;
  status: string;
  nextBestAction: string;
  journey: JourneyStep[];
  scoreEvolution: ScorePoint[];
}

export interface FunnelStage {
  stage: string;
  count: number;
}

export interface ChannelComparison {
  canal: string;
  leads: number;
  scorePromedio: number;
  intencionPromedio: number;
  tasaConversion: number;
  cplCOP: number;
}

export interface CampaignQuality {
  campaign: string;
  leads: number;
  scorePromedio: number;
  tasaConversion: number;
  qualityIndex: number;
}

export interface IntentHeatmapRow {
  ubicacion: string;
  leads: number;
  'Meta Ads': number | null;
  'Google Ads': number | null;
}

export interface NBAItem {
  action: string;
  count: number;
}

export interface SankeyNode {
  name: string;
}

export interface SankeyLink {
  source: number;
  target: number;
  value: number;
}

export interface ScoreTrendPoint {
  date: string;
  scorePromedio: number;
  leads: number;
}

export interface PriorityPoint {
  id: string;
  nombre: string;
  capacidad: number;
  intencion: number;
  total: number;
  temperatura: Temperatura;
  proyecto: string;
}

export interface AnalyticsData {
  generatedAt: string;
  totalLeads: number;
  leads: AnalyticsLead[];
  funnelData: FunnelStage[];
  channelComparison: ChannelComparison[];
  campaignQuality: CampaignQuality[];
  intentHeatmap: IntentHeatmapRow[];
  nextBestActionDistribution: NBAItem[];
  sankeyNodes: SankeyNode[];
  sankeyLinks: SankeyLink[];
  scoreTrend: ScoreTrendPoint[];
  priorityMatrix: PriorityPoint[];
  topLeadsRanking: AnalyticsLead[];
}
