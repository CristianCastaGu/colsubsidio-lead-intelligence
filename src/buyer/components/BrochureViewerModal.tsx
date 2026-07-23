import React from 'react';
import { X, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { OfficialBrochure } from '../types';

interface BrochureViewerModalProps {
  brochure: OfficialBrochure | null;
  onClose: () => void;
}

export const BrochureViewerModal: React.FC<BrochureViewerModalProps> = ({ brochure, onClose }) => {
  if (!brochure) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[60] flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-200">
        {/* Header bar */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-gray-200 bg-white shrink-0">
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#003DA5] flex items-center gap-1">
              <MapPin size={11} />
              {brochure.location}
            </span>
            <h2 className="font-display font-bold text-gray-900 text-base sm:text-lg leading-tight truncate">
              {brochure.project}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2 py-1 rounded-full">
              <CheckCircle size={11} />
              {brochure.status}
            </span>
            <a
              href={brochure.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#003DA5] transition-colors px-2 py-1.5"
              title="Abrir en una pestaña nueva"
            >
              <ExternalLink size={13} />
              Abrir aparte
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
              title="Cerrar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded flip-book */}
        <div className="flex-1 bg-gray-100">
          <iframe
            src={brochure.brochureUrl}
            title={`Brochure ${brochure.project}`}
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
};
