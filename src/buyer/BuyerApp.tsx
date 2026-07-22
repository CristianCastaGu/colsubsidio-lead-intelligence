import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ProjectModal } from './components/ProjectModal';
import { ViviendaLandingPage } from './pages/ViviendaLandingPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { Project } from './types';

export default function BuyerApp() {
  // Sync location pathname or hash
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === '/vivienda/proyectos' || window.location.pathname === '/vivienda/proyectos') {
        return '/vivienda/proyectos';
      }
    }
    return '/vivienda';
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [externalChatQuery, setExternalChatQuery] = useState<string | null>(null);

  // Sync state with browser history / hash
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '/vivienda/proyectos' || window.location.pathname === '/vivienda/proyectos') {
        setCurrentPath('/vivienda/proyectos');
      } else {
        setCurrentPath('/vivienda');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (path: string, query?: string) => {
    setCurrentPath(path);
    if (query) setSearchQuery(query);
    if (typeof window !== 'undefined') {
      window.location.hash = path;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAskAI = (query: string) => {
    setExternalChatQuery(query);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#FFD200] selection:text-gray-900">
      {/* Colsubsidio Header Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenChat={handleAskAI}
      />

      {/* Main Dynamic View Page */}
      <main className="flex-1">
        {currentPath === '/vivienda/proyectos' ? (
          <ProyectosPage
            initialSearchQuery={searchQuery}
            onOpenProjectModal={(p) => setSelectedProject(p)}
            onAskAI={handleAskAI}
          />
        ) : (
          <ViviendaLandingPage
            onNavigateToProyectos={(q) => handleNavigate('/vivienda/proyectos', q)}
            onOpenProjectModal={(p) => setSelectedProject(p)}
            onAskAI={handleAskAI}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenChat={handleAskAI} />

      {/* Right Side Floating Elements (+ button & Pink Feedback Tab) */}
      <FloatingElements />

      {/* AI Chatbot Widget (Bottom Left Corner) */}
      <ChatbotWidget
        onNavigateToProject={(pid) => handleNavigate('/vivienda/proyectos', pid)}
        externalQuery={externalChatQuery}
        onClearExternalQuery={() => setExternalChatQuery(null)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onAskAI={handleAskAI}
      />
    </div>
  );
}
