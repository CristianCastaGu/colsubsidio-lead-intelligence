import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { AnimatePresence, motion } from 'motion/react';
import { X, Loader2, AlertTriangle, MapPin, ShoppingBag, Trees, Utensils, GraduationCap, Cross } from 'lucide-react';
import { HousingProject } from '../../types';

interface ProjectLocationModalProps {
  project: HousingProject | null;
  onClose: () => void;
}

type PoiCategory = 'mall' | 'supermarket' | 'park' | 'school' | 'health';

interface Poi {
  id: string;
  name: string;
  category: PoiCategory;
  lat: number;
  lng: number;
}

const POI_META: Record<PoiCategory, { label: string; color: string; Icon: React.FC<{ className?: string }> }> = {
  mall: { label: 'Centro comercial', color: '#003DA5', Icon: ShoppingBag },
  supermarket: { label: 'Supermercado', color: '#16a34a', Icon: Utensils },
  park: { label: 'Parque', color: '#059669', Icon: Trees },
  school: { label: 'Colegio', color: '#7c3aed', Icon: GraduationCap },
  health: { label: 'Salud', color: '#dc2626', Icon: Cross },
};

// Real nearby points of interest from OpenStreetMap via the free, no-API-key Overpass
// endpoint — not synthetic/made-up data. Radius kept small (1.2km) since this is meant
// to answer "what's actually walkable/close by", not a general area search.
//
// The public Overpass instances are shared, free infrastructure — they get overloaded
// and time out under load, which is exactly the "works sometimes" symptom. There's no
// paid/reliable single endpoint to fall back to, so instead we try several known public
// mirrors in order (each with its own short timeout) and only surface an error if every
// single one fails — this is what actually fixes the intermittent failures, not a config
// tweak on one URL.
const OVERPASS_MIRRORS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.openstreetmap.ru/api/interpreter',
];
const SEARCH_RADIUS_M = 1200;
const PER_MIRROR_TIMEOUT_MS = 8000;

function buildOverpassQuery(lat: number, lng: number): string {
  const around = `around:${SEARCH_RADIUS_M},${lat},${lng}`;
  return `
    [out:json][timeout:12];
    (
      node["shop"="mall"](${around});
      node["shop"="supermarket"](${around});
      node["leisure"="park"](${around});
      node["amenity"="school"](${around});
      node["amenity"="hospital"](${around});
      node["amenity"="pharmacy"](${around});
    );
    out center 20;
  `;
}

async function fetchOverpass(query: string): Promise<any> {
  let lastError: unknown = null;
  for (const url of OVERPASS_MIRRORS) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), PER_MIRROR_TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: `data=${encodeURIComponent(query)}`,
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) {
        lastError = new Error(`${url} respondió ${res.status}`);
        continue; // rate-limited or overloaded — try the next mirror
      }
      return await res.json();
    } catch (err) {
      clearTimeout(timer);
      lastError = err; // timed out or network error — try the next mirror
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Todos los espejos de Overpass fallaron');
}

function categorize(tags: Record<string, string>): PoiCategory | null {
  if (tags.shop === 'mall') return 'mall';
  if (tags.shop === 'supermarket') return 'supermarket';
  if (tags.leisure === 'park') return 'park';
  if (tags.amenity === 'school') return 'school';
  if (tags.amenity === 'hospital' || tags.amenity === 'pharmacy') return 'health';
  return null;
}

function propertyIcon() {
  return divIcon({
    className: '',
    html: `<div style="width:34px;height:34px;border-radius:50% 50% 50% 0;background:#003DA5;border:3px solid #FFD200;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,0.35);"></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
  });
}

function poiIcon(category: PoiCategory) {
  const color = POI_META[category].color;
  return divIcon({
    className: '',
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.4);"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

export const ProjectLocationModal: React.FC<ProjectLocationModalProps> = ({ project, onClose }) => {
  const [pois, setPois] = useState<Poi[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<PoiCategory>>(
    new Set(['mall', 'supermarket', 'park', 'school', 'health'])
  );

  useEffect(() => {
    if (!project) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPois([]);

    fetchOverpass(buildOverpassQuery(project.lat, project.lng))
      .then((data) => {
        if (cancelled) return;
        const found: Poi[] = (data.elements || [])
          .map((el: any) => {
            const category = categorize(el.tags || {});
            if (!category) return null;
            return {
              id: String(el.id),
              name: el.tags?.name || POI_META[category].label,
              category,
              lat: el.lat,
              lng: el.lon,
            } as Poi;
          })
          .filter(Boolean);
        setPois(found);
      })
      .catch(() => {
        if (!cancelled) setError('No se pudieron cargar los puntos de interés cercanos (OpenStreetMap).');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [project?.id]);

  const toggleFilter = (category: PoiCategory) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const visiblePois = pois.filter((p) => activeFilters.has(p.category));

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6" onClick={onClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full mx-auto my-6 sm:my-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 p-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5 min-w-0">
                <MapPin className="w-5 h-5 text-[#003DA5] shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-black text-slate-900 text-sm truncate">{project.name}</h3>
                  <p className="text-xs text-slate-500 truncate">{project.municipality} · {project.address}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-all cursor-pointer shrink-0"
                title="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Map */}
            <div className="h-80 sm:h-96 w-full relative">
              <MapContainer
                center={[project.lat, project.lng]}
                zoom={16}
                scrollWheelZoom
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[project.lat, project.lng]} icon={propertyIcon()}>
                  <Popup>
                    <strong>{project.name}</strong>
                    <br />
                    {project.municipality}
                  </Popup>
                </Marker>
                {visiblePois.map((poi) => (
                  <Marker key={poi.id} position={[poi.lat, poi.lng]} icon={poiIcon(poi.category)}>
                    <Popup>
                      <strong>{poi.name}</strong>
                      <br />
                      {POI_META[poi.category].label}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {loading && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[1000] bg-white/95 shadow-md rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Buscando puntos de interés cercanos…
                </div>
              )}
            </div>

            {/* Legend / filters + errors */}
            <div className="p-4 space-y-2.5">
              {error && (
                <p className="text-[11px] text-amber-700 font-semibold flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> {error}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(POI_META) as PoiCategory[]).map((category) => {
                  const meta = POI_META[category];
                  const Icon = meta.Icon;
                  const count = pois.filter((p) => p.category === category).length;
                  const active = activeFilters.has(category);
                  return (
                    <button
                      key={category}
                      onClick={() => toggleFilter(category)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1.5 transition-all cursor-pointer ${
                        active
                          ? 'text-white border-transparent'
                          : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                      }`}
                      style={active ? { backgroundColor: meta.color } : undefined}
                    >
                      <Icon className="w-3 h-3" />
                      {meta.label} {count > 0 && `(${count})`}
                    </button>
                  );
                })}
              </div>

              {!loading && !error && pois.length === 0 && (
                <p className="text-xs text-slate-500">
                  No se encontraron centros comerciales, parques ni otros puntos de interés en un radio de {SEARCH_RADIUS_M}m según OpenStreetMap.
                </p>
              )}

              <p className="text-[10px] text-slate-400">
                Ubicación aproximada a nivel de municipio (la fuente no incluye dirección geocodificada exacta). Puntos de interés obtenidos en vivo de OpenStreetMap, radio de {SEARCH_RADIUS_M}m.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
