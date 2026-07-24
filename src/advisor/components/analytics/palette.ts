// Validated data-viz palette (dataviz skill, references/palette.md).
// Chart *data ink* uses this palette; UI chrome around the charts keeps the
// app's existing brand tokens (#003DA5 / #FFD200) — the two are deliberately
// different concerns (identity of a series vs. brand chrome).

export const CATEGORICAL = {
  blue: '#2a78d6',
  orange: '#eb6834',
  aqua: '#1baf7a',
  yellow: '#eda100',
  magenta: '#e87ba4',
  green: '#008300',
  violet: '#4a3aa7',
  red: '#e34948',
} as const;

// First three slots are the only ones validated for "all-pairs" adjacency
// (scatter, sankey, small multiples) — cap those forms at 3 series.
export const ALL_PAIRS_SAFE = [CATEGORICAL.blue, CATEGORICAL.orange, CATEGORICAL.aqua];

export const TEMPERATURE_COLOR: Record<'Hot' | 'Warm' | 'Cold', string> = {
  Hot: CATEGORICAL.orange,
  Warm: CATEGORICAL.blue,
  Cold: CATEGORICAL.aqua,
};

export const SEQUENTIAL_BLUE = {
  100: '#cde2fb',
  200: '#9ec5f4',
  300: '#6da7ec',
  400: '#3987e5',
  500: '#256abf',
  600: '#184f95',
  700: '#0d366b',
};

export const STATUS = {
  good: '#0ca30c',
  warning: '#fab219',
  serious: '#ec835a',
  critical: '#d03b3b',
};

export const CHART_INK = {
  surface: '#ffffff',
  primary: '#1e293b', // matches the app's slate-800 body text
  secondary: '#64748b', // slate-500
  muted: '#94a3b8', // slate-400
  gridline: '#e2e8f0', // slate-200
};
