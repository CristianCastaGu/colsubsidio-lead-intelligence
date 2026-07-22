import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, CheckCircle2, Copy, Sparkles, Building2, Phone } from 'lucide-react';
import { Lead, HousingProject } from '../../types';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead | null;
  projects: HousingProject[];
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  lead,
  projects,
}) => {
  if (!isOpen || !lead) return null;

  const project = projects.find((p) => p.id === lead.recommendedProjectId) || projects[0];

  const [selectedTemplate, setSelectedTemplate] = useState<string>('subsidio');
  const [messageText, setMessageText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedTemplate === 'subsidio') {
      setMessageText(
        `¡Hola ${lead.name}! 👋 Te habla Carlos Rodríguez, asesor comercial de Vivienda Colsubsidio.\n\n` +
          `Validamos tu solicitud y confirmamos que como afiliado (${lead.afiliacionCategoria || 'Colsubsidio'}) tienes un beneficio potencial de hasta $39.000.000 COP en Subsidio Familiar de Vivienda para tu primer hogar en *${project.name}* (${project.municipality}). 🏠\n\n` +
          `📍 *Detalles del proyecto:*\n` +
          `• Unidades VIS de 3 alcobas con balcón.\n` +
          `• Entrega: ${project.deliveryDate}.\n` +
          `• Cuota inicial diferida en plazos cómodos.\n\n` +
          `¿Te gustaría que agendemos una llamada rápida de 5 minutos o te envíe la simulación en PDF a este número?`
      );
    } else if (selectedTemplate === 'cita') {
      setMessageText(
        `Hola ${lead.name}, ¡excelente día! 🌞 Confirmo tu cita agendada en nuestra Sala de Ventas de *${project.name}* en ${project.municipality}.\n\n` +
          `🗓️ *Ubicación:* ${project.address}\n` +
          `🚗 Contamos con parqueadero privado para visitantes.\n\n` +
          `Favor confirmar si esta hora te queda perfecta o si prefieres reprogramar.`
      );
    } else {
      setMessageText(
        `Estimado(a) ${lead.name}, de parte de Colsubsidio Vivienda esperamos que estés teniendo un excelente día.\n\n` +
          `Te escribimos para realizar el seguimiento a la pre-aprobación del crédito para tu apartamento en *${project.name}*. Ya tenemos lista la proyección financiera con tus aportes acumulados.\n\n` +
          `¿Nos regalas un momento para revisar los detalles por aquí?`
      );
    }
  }, [selectedTemplate, lead, project]);

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-200 space-y-0">
        {/* Header */}
        <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
              <MessageSquare className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="font-extrabold text-sm leading-tight">Contacto WhatsApp Directo</h2>
              <p className="text-[11px] text-emerald-100">
                {lead.name} ({lead.phone})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 space-y-4 text-xs">
          {/* Template Selector */}
          <div>
            <label className="font-bold text-slate-800 block mb-1">Plantilla Comercial Colsubsidio:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedTemplate('subsidio')}
                className={`p-2 rounded-lg border font-bold text-[11px] transition-all cursor-pointer ${
                  selectedTemplate === 'subsidio'
                    ? 'bg-[#003DA5] text-white border-[#003DA5]'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                1. Subsidio + Proyecto
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate('cita')}
                className={`p-2 rounded-lg border font-bold text-[11px] transition-all cursor-pointer ${
                  selectedTemplate === 'cita'
                    ? 'bg-[#003DA5] text-white border-[#003DA5]'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                2. Cita Sala de Ventas
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate('credito')}
                className={`p-2 rounded-lg border font-bold text-[11px] transition-all cursor-pointer ${
                  selectedTemplate === 'credito'
                    ? 'bg-[#003DA5] text-white border-[#003DA5]'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                3. Pre-Aprobación
              </button>
            </div>
          </div>

          {/* WhatsApp Chat Speech Bubble */}
          <div className="bg-[#E5DDD5] p-4 rounded-xl border border-slate-300 space-y-2 relative">
            <div className="flex justify-between items-center text-[10px] text-slate-600 font-bold">
              <span>Vista Previa del Mensaje</span>
              <span>Enviado por: Carlos Rodríguez (Asesor)</span>
            </div>

            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="w-full bg-[#DCF8C6] text-slate-900 p-3 rounded-lg border border-emerald-300 text-xs font-sans leading-relaxed focus:outline-none focus:ring-2 focus:ring-emerald-500 h-44 resize-none shadow-xs"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleCopy}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 border border-slate-300 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? '✓ Texto Copiado' : 'Copiar Texto'}</span>
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black px-5 py-2 rounded-lg text-xs flex items-center gap-2 shadow-md transition-transform active:scale-95 cursor-pointer text-decoration-none"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Abrir en WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
