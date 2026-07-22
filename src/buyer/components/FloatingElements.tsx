import React, { useState } from 'react';
import { Plus, MessageSquareHeart, X, CheckCircle, Star } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  const [showOpinionModal, setShowOpinionModal] = useState(false);
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setShowOpinionModal(false);
      setComment('');
    }, 2000);
  };

  return (
    <>
      {/* 1. Vertical Pink Tab "Déjanos tu opinión" on Right Edge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => setShowOpinionModal(true)}
          className="bg-[#E91E63] hover:bg-[#d81b60] text-white font-bold text-xs py-3 px-2 rounded-l-lg shadow-xl flex items-center gap-2 transform rotate-180 write-vertical transition-all hover:pr-4"
          style={{ writingMode: 'vertical-rl' }}
        >
          <MessageSquareHeart size={15} className="rotate-90" />
          <span>Déjanos tu opinión</span>
        </button>
      </div>

      {/* 2. Floating Circular Blue Button "+" in Bottom-Right Corner */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {showPlusMenu && (
          <div className="mb-3 bg-white p-3 rounded-2xl shadow-2xl border border-gray-100 w-56 animate-in slide-in-from-bottom-3 duration-200 text-xs font-medium space-y-2">
            <p className="font-bold text-gray-900 border-b pb-1">Accesos Directos</p>
            <button className="w-full text-left p-2 hover:bg-blue-50 rounded-lg text-blue-900 flex items-center gap-2">
              <span>📍</span> Centros de atención
            </button>
            <button className="w-full text-left p-2 hover:bg-blue-50 rounded-lg text-blue-900 flex items-center gap-2">
              <span>📞</span> Líneas telefónicas
            </button>
            <button className="w-full text-left p-2 hover:bg-blue-50 rounded-lg text-blue-900 flex items-center gap-2">
              <span>📄</span> Pagar crédito en línea
            </button>
          </div>
        )}
        <button
          onClick={() => setShowPlusMenu(!showPlusMenu)}
          className="w-12 h-12 rounded-full bg-[#003DA5] hover:bg-[#002878] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group"
          title="Menú rápido Colsubsidio"
        >
          <Plus size={24} className={`transition-transform duration-300 ${showPlusMenu ? 'rotate-45' : ''}`} />
        </button>
      </div>

      {/* Opinion / Feedback Modal */}
      {showOpinionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowOpinionModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            {feedbackSent ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle className="mx-auto text-green-500" size={50} />
                <h3 className="text-xl font-bold text-gray-900">¡Gracias por tus comentarios!</h3>
                <p className="text-sm text-gray-600">Tu opinión nos ayuda a mejorar la experiencia en Colsubsidio Vivienda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-[#E91E63]">
                  <MessageSquareHeart size={24} />
                  <h3 className="text-lg font-bold text-gray-900">¿Qué te pareció nuestro portal de vivienda?</h3>
                </div>
                <p className="text-xs text-gray-600">Califica tu experiencia navegando en Colsubsidio Vivienda:</p>

                <div className="flex justify-center gap-2 py-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star size={28} fill={star <= rating ? '#F59E0B' : 'none'} />
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Comentarios o sugerencias (opcional):
                  </label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Escribe aquí lo que te gustó o cómo podemos mejorar..."
                    className="w-full p-3 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#E91E63] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E91E63] hover:bg-[#d81b60] text-white font-bold py-3 rounded-xl text-sm shadow-md transition-colors"
                >
                  Enviar Opinión
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
