import React, { useState } from 'react';
import { ViewType, Lead, LeadStatus, Task } from './types';
import {
  MOCK_LEADS,
  MOCK_PROJECTS,
  MOCK_BUYER_PERSONAS,
  MOCK_TASKS,
  MOCK_CAMPAIGNS,
  MOCK_DEALS
} from './data/mockData';

// Layout Components
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

// Views
import { InicioView } from './components/views/InicioView';
import { LeadsView } from './components/views/LeadsView';
import { NegociosView } from './components/views/NegociosView';
import { ProyectosView } from './components/views/ProyectosView';
import { BuyerPersonasView } from './components/views/BuyerPersonasView';
import { Score360View } from './components/views/Score360View';
import { CampanasView } from './components/views/CampanasView';
import { RemarketingView } from './components/views/RemarketingView';
import { PanelesView } from './components/views/PanelesView';
import { ConfiguracionView } from './components/views/ConfiguracionView';

// Modals
import { NuevoLeadModal } from './components/modals/NuevoLeadModal';
import { WhatsAppModal } from './components/modals/WhatsAppModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('inicio');
  const [advisorName, setAdvisorName] = useState<string>('Carlos Rodríguez');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Main Data States
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [projects] = useState(MOCK_PROJECTS);
  const [buyerPersonas] = useState(MOCK_BUYER_PERSONAS);
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [deals] = useState(MOCK_DEALS);
  const [campaigns] = useState(MOCK_CAMPAIGNS);

  // Selected Lead for Score 360 View
  const [selectedLeadIdForScore360, setSelectedLeadIdForScore360] = useState<string>(MOCK_LEADS[0].id);

  // Modals state
  const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppModalLead, setWhatsAppModalLead] = useState<Lead | null>(null);

  // Handlers
  const handleOpenWhatsAppModal = (lead: Lead) => {
    setWhatsAppModalLead(lead);
    setIsWhatsAppModalOpen(true);
  };

  const handleOpenWhatsAppModalByLeadName = (leadName: string) => {
    const found = leads.find((l) => l.name === leadName) || leads[0];
    handleOpenWhatsAppModal(found);
  };

  const handleSelectLeadForScore360 = (lead: Lead) => {
    setSelectedLeadIdForScore360(lead.id);
    setCurrentView('score360');
  };

  const handleFilterHotLeads = () => {
    setCurrentView('leads');
  };

  const handleSaveNewLead = (partialLead: Partial<Lead>) => {
    const newLeadObj: Lead = {
      id: `lead-${Date.now()}`,
      name: partialLead.name || 'Nuevo Lead',
      email: partialLead.email || 'lead@ejemplo.com',
      phone: partialLead.phone || '+57 300 000 0000',
      city: partialLead.city || 'Bogotá D.C.',
      channel: partialLead.channel || 'Captura Manual',
      campaign: partialLead.campaign || 'Atención Directa',
      status: 'Nuevo',
      temperature: 'Hot',
      housingInterest: partialLead.housingInterest || 'VIS',
      budgetCOP: partialLead.budgetCOP || 180000000,
      downPaymentCOP: partialLead.downPaymentCOP || 20000000,
      colsubsidioAfiliado: partialLead.colsubsidioAfiliado ?? true,
      afiliacionCategoria: partialLead.afiliacionCategoria || 'Cat B',
      hasCajaSubsidio: partialLead.hasCajaSubsidio ?? true,
      hasMiCasaYa: partialLead.hasMiCasaYa ?? true,
      recommendedProjectId: partialLead.recommendedProjectId || projects[0].id,
      matchPercentage: 95,
      scores: partialLead.scores || {
        fit: 90,
        intent: 92,
        engagement: 88,
        conversion: 90,
        total: 90
      },
      priority: 'Muy Alta',
      priorityRationale: partialLead.priorityRationale || 'Nuevo lead registrado en tiempo real por el equipo comercial.',
      assignedAdvisor: advisorName,
      createdAt: 'Hace un momento',
      lastInteraction: 'Hace un momento',
      behaviorLogs: partialLead.behaviorLogs || []
    };

    setLeads([newLeadObj, ...leads]);
    setSelectedLeadIdForScore360(newLeadObj.id);
    setCurrentView('score360');
  };

  const handleUpdateLeadStatus = (leadId: string, status: LeadStatus) => {
    setLeads(
      leads.map((l) => (l.id === leadId ? { ...l, status } : l))
    );
  };

  const handleToggleTaskComplete = (taskId: string) => {
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleSelectProjectForLeads = (projectId: string) => {
    setCurrentView('leads');
  };

  const hotLeadsCount = leads.filter((l) => l.temperature === 'Hot').length;

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-sans text-slate-800 flex flex-col selection:bg-[#FFD200] selection:text-[#003DA5]">
      {/* Colsubsidio Top Branded Header Bar */}
      <Header
        onOpenNewLeadModal={() => setIsNewLeadModalOpen(true)}
        advisorName={advisorName}
        setAdvisorName={setAdvisorName}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Body with Sidebar + View Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Navigation Sidebar */}
        <Sidebar
          currentView={currentView}
          setCurrentView={setCurrentView}
          hotLeadsCount={hotLeadsCount}
        />

        {/* Dynamic View Canvas */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto max-w-7xl mx-auto w-full">
          {currentView === 'inicio' && (
            <InicioView
              advisorName={advisorName}
              leads={leads}
              projects={projects}
              tasks={tasks}
              onOpenNewLeadModal={() => setIsNewLeadModalOpen(true)}
              onSelectLeadForScore360={handleSelectLeadForScore360}
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
              onFilterHotLeads={handleFilterHotLeads}
              onNavigateToView={(view) => setCurrentView(view)}
              onToggleTaskComplete={handleToggleTaskComplete}
            />
          )}

          {currentView === 'leads' && (
            <LeadsView
              leads={leads}
              onOpenNewLeadModal={() => setIsNewLeadModalOpen(true)}
              onSelectLeadForScore360={handleSelectLeadForScore360}
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
              onUpdateLeadStatus={handleUpdateLeadStatus}
            />
          )}

          {currentView === 'negocios' && (
            <NegociosView
              deals={deals}
              projects={projects}
              onOpenWhatsAppModalByLeadName={handleOpenWhatsAppModalByLeadName}
            />
          )}

          {currentView === 'proyectos' && (
            <ProyectosView
              projects={projects}
              leads={leads}
              onSelectProjectForLeads={handleSelectProjectForLeads}
            />
          )}

          {currentView === 'buyer_personas' && (
            <BuyerPersonasView personas={buyerPersonas} />
          )}

          {currentView === 'score360' && (
            <Score360View
              leads={leads}
              selectedLeadId={selectedLeadIdForScore360}
              onSelectLead={(leadId) => setSelectedLeadIdForScore360(leadId)}
              projects={projects}
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
            />
          )}

          {currentView === 'campanas' && (
            <CampanasView campaigns={campaigns} />
          )}

          {currentView === 'remarketing' && (
            <RemarketingView
              leads={leads}
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
            />
          )}

          {currentView === 'paneles' && (
            <PanelesView leads={leads} projects={projects} />
          )}

          {currentView === 'configuracion' && <ConfiguracionView />}
        </main>
      </div>

      {/* Modals */}
      <NuevoLeadModal
        isOpen={isNewLeadModalOpen}
        onClose={() => setIsNewLeadModalOpen(false)}
        onSaveLead={handleSaveNewLead}
        projects={projects}
      />

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        lead={whatsAppModalLead}
        projects={projects}
      />
    </div>
  );
}
