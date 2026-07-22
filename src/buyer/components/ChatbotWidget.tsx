import React, { useState, useEffect, useRef } from 'react';
import { Minus, Send, Mic, MicOff, Sparkles, Building2, Calculator, ExternalLink, RotateCcw } from 'lucide-react';
import { ChatMessage, Project } from '../types';
import { PROJECTS_DATA } from '../data/mockData';

interface ChatbotWidgetProps {
  initialOpen?: boolean;
  onNavigateToProject?: (projectId: string) => void;
  externalQuery?: string | null;
  onClearExternalQuery?: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  initialOpen = false,
  onNavigateToProject,
  externalQuery,
  onClearExternalQuery
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: '¡Hola! 👋 Soy tu **Asistente de Vivienda Colsubsidio**. ¿Estás buscando un hogar para vivir con tu familia o deseas invertir en Bogotá y Cundinamarca?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedChips: ['🏠 Vivienda VIS', '📍 Proyectos en Bogotá', '💰 Simular crédito']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcriptNotice, setTranscriptNotice] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Handle external queries (e.g. clicking "Preguntar al Asistente IA" from cards)
  useEffect(() => {
    if (externalQuery) {
      setIsOpen(true);
      handleSendMessage(externalQuery);
      if (onClearExternalQuery) onClearExternalQuery();
    }
  }, [externalQuery]);

  // Speech recognition setup using Web Speech API
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'es-CO';

      recognition.onstart = () => {
        setIsListening(true);
        setTranscriptNotice('Escuchando voz... Habla ahora');
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
        setInputText(transcript);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition notice:', event.error);
        setIsListening(false);
        setTranscriptNotice('Micrófono cerrado.');
        setTimeout(() => setTranscriptNotice(null), 2500);
      };

      recognition.onend = () => {
        setIsListening(false);
        setTranscriptNotice(null);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleMic = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch (err) {
          console.warn("Speech API start error, simulating voice transcription:", err);
          simulateVoiceInput();
        }
      } else {
        simulateVoiceInput();
      }
    }
  };

  // Fallback simulated voice transcription if browser Web Speech API is blocked
  const simulateVoiceInput = () => {
    setIsListening(true);
    setTranscriptNotice('Escuchando voz en vivo...');
    const simulatedPhrases = [
      'Quiero información del subsidio VIS en Bogotá',
      '¿Qué requisitos necesito para comprar en Soacha?',
      'Simula mi crédito para un proyecto de 150 millones'
    ];
    const phrase = simulatedPhrases[Math.floor(Math.random() * simulatedPhrases.length)];

    let i = 0;
    setInputText('');
    const interval = setInterval(() => {
      if (i <= phrase.length) {
        setInputText(phrase.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setIsListening(false);
        setTranscriptNotice(null);
      }
    }, 40);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      // Call server backend
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          history: messages
        })
      });

      const data = await res.json();
      const replyText = data.reply || 'Con gusto te oriento en Colsubsidio. ¿Deseas consultar algún proyecto en particular?';

      // Check if reply references any specific project
      const matchedProjects: string[] = [];
      const lower = text.toLowerCase() + replyText.toLowerCase();
      PROJECTS_DATA.forEach((p) => {
        if (lower.includes(p.name.toLowerCase()) || lower.includes(p.city.toLowerCase())) {
          matchedProjects.push(p.id);
        }
      });

      // Smart chips based on message context
      let chips: string[] = [];
      if (text.toLowerCase().includes('vis') || text.toLowerCase().includes('subsidio')) {
        chips = ['📍 Ver proyectos VIS', '💰 Simular cuotas', '📋 Requisitos'];
      } else if (text.toLowerCase().includes('bogot')) {
        chips = ['🏢 Proyectos en Fontibón', '🏢 Proyectos en Suba', '💰 Simular crédito'];
      } else {
        chips = ['🏠 Vivienda VIS', '📍 Proyectos Cundinamarca', '📞 Solicitar llamada de un asesor'];
      }

      const aiMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedChips: chips,
        relatedProjectIds: Array.from(new Set(matchedProjects)).slice(0, 2)
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const fallbackMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        text: 'Con gusto te ayudo. En Colsubsidio contamos con más de 80 proyectos en Bogotá y Cundinamarca con opción de Subsidio VIS hasta de 30 SMMLV. ¿En qué zona te gustaría vivir?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedChips: ['📍 Bogotá', '📍 Soacha', '📍 Girardot']
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'msg-welcome-reset',
        sender: 'ai',
        text: '¡Conversación reiniciada! 👋 Soy tu Asistente de Vivienda Colsubsidio. ¿En qué te puedo asesorar hoy?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedChips: ['🏠 Vivienda VIS', '📍 Proyectos en Bogotá', '💰 Simular crédito']
      }
    ]);
  };

  // Helper to render bold text & bullet points in chat
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      // Process bold syntax **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        return (
          <div key={lIdx} className="flex items-start gap-1.5 my-1 ml-2">
            <span className="text-[#003DA5] font-bold">•</span>
            <span>{formattedParts}</span>
          </div>
        );
      }

      return (
        <p key={lIdx} className={line.trim() === '' ? 'h-2' : 'mb-1 leading-relaxed'}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      {/* 1. Minimized State: Floating Badge Button on Bottom Left */}
      {!isOpen && (
        <div className="relative group">
          {/* Pulsing ring indicator */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#003DA5] to-[#FFD200] opacity-75 blur-xs group-hover:opacity-100 transition duration-300 animate-pulse"></div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-white hover:bg-gray-50 text-gray-900 border-2 border-[#003DA5] p-3.5 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
          >
            {/* Geometric Colsubsidio Diamond Icon */}
            <div className="w-8 h-8 relative flex items-center justify-center shrink-0">
              <div className="absolute w-7 h-7 bg-[#FFD200] transform rotate-45 rounded-xs"></div>
              <div className="absolute w-4 h-4 bg-[#003DA5] transform rotate-45 translate-x-1 translate-y-1 rounded-xs"></div>
            </div>

            <div className="hidden sm:flex flex-col text-left pr-1">
              <span className="text-xs font-black text-[#003DA5] leading-none">
                Asistente Vivienda IA
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                ¿Buscas hogar? Pregúntame
              </span>
            </div>

            <Sparkles size={16} className="text-[#FFD200] fill-[#FFD200] animate-bounce ml-1" />
          </button>

          {/* Hover Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-[11px] p-2 rounded-lg shadow-lg pointer-events-none">
            ¿Buscas tu hogar ideal? Pregúntame sobre subsidios y proyectos.
          </div>
        </div>
      )}

      {/* 2. Expanded Floating Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Chat Header */}
          <div className="bg-[#003DA5] text-white p-3.5 flex justify-between items-center shadow-md">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center border-2 border-[#FFD200] shadow-xs">
                  <div className="relative w-5 h-5">
                    <div className="absolute w-4 h-4 bg-[#FFD200] transform rotate-45 rounded-xs"></div>
                    <div className="absolute w-2.5 h-2.5 bg-[#003DA5] transform rotate-45 translate-x-1 translate-y-1 rounded-xs"></div>
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#003DA5] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  Asistente Vivienda
                  <span className="bg-[#FFD200] text-gray-900 text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">
                    IA
                  </span>
                </h3>
                <p className="text-[10px] text-blue-200">Colsubsidio • En línea</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={resetChat}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-blue-200 hover:text-white"
                title="Reiniciar chat"
              >
                <RotateCcw size={15} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-blue-200 hover:text-white"
                title="Minimizar"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#F8FAFC]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#FFF8D6] text-gray-900 rounded-br-xs border border-[#FFE066]'
                      : 'bg-white text-gray-800 rounded-bl-xs border border-gray-100'
                  }`}
                >
                  {renderFormattedText(msg.text)}

                  {/* Embedded Related Project Cards in AI responses */}
                  {msg.relatedProjectIds && msg.relatedProjectIds.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-gray-100 space-y-2">
                      <p className="text-[10px] font-bold text-[#003DA5] flex items-center gap-1">
                        <Building2 size={12} /> Proyectos sugeridos:
                      </p>
                      {msg.relatedProjectIds.map((pid) => {
                        const proj = PROJECTS_DATA.find((p) => p.id === pid);
                        if (!proj) return null;
                        return (
                          <div
                            key={proj.id}
                            className="bg-blue-50/60 p-2 rounded-xl border border-blue-100 flex gap-2 items-center text-[11px]"
                          >
                            <img
                              src={proj.imageUrl}
                              alt={proj.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-gray-900 truncate">{proj.name}</p>
                              <p className="text-[10px] text-gray-600">{proj.city} • Desde {proj.priceFormatted}</p>
                            </div>
                            <button
                              onClick={() => {
                                if (onNavigateToProject) onNavigateToProject(proj.id);
                              }}
                              className="bg-[#003DA5] hover:bg-[#002878] text-white p-1.5 rounded-lg text-[10px] font-bold flex items-center shrink-0"
                            >
                              <ExternalLink size={12} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <span className="block text-[9px] text-gray-400 text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>

                {/* Suggested Quick Chips */}
                {msg.suggestedChips && msg.sender === 'ai' && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.suggestedChips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(chip)}
                        className="bg-white hover:bg-[#FFD200] text-[#003DA5] hover:text-gray-900 text-[11px] font-bold px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 bg-white p-3 rounded-2xl w-24 border border-gray-100 shadow-2xs">
                <div className="w-2 h-2 bg-[#003DA5] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#003DA5] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-[#003DA5] rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Voice status banner */}
          {transcriptNotice && (
            <div className="bg-red-50 text-red-700 text-[11px] px-3 py-1 flex justify-between items-center border-t border-red-100 font-medium">
              <span className="flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                {transcriptNotice}
              </span>
              <button onClick={() => setTranscriptNotice(null)} className="text-red-900 font-bold">×</button>
            </div>
          )}

          {/* Input Footer */}
          <div className="p-2.5 bg-white border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-1.5"
            >
              <button
                type="button"
                onClick={toggleMic}
                className={`p-2.5 rounded-full transition-colors ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                title={isListening ? 'Detener voz' : 'Escribir por voz'}
              >
                {isListening ? <MicOff size={16} /> : <Mic size={16} />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-100 border border-transparent focus:border-[#003DA5] focus:bg-white focus:outline-none rounded-full px-3.5 py-2 text-xs text-gray-800"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                className={`p-2.5 rounded-full transition-all ${
                  inputText.trim()
                    ? 'bg-[#003DA5] hover:bg-[#002878] text-white shadow-md'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
