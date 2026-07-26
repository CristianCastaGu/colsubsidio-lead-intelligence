import { Lead } from '../types';

// Persists leads found via manual phone lookup (see sofiaMapper.ts's
// mapConversacionLeadInfoToLead) so they survive a page reload. Live Sofía leads
// don't need this — they re-sync automatically from /api/leads on every load. A
// phone-lookup discovery is a one-off manual action with no automatic re-sync, so
// without this it would vanish the moment the advisor refreshes the page.
const STORAGE_KEY = 'colsubsidio_discovered_leads_v1';

export function loadDiscoveredLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveDiscoveredLeads(leads: Lead[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch {
    // Storage full or unavailable (e.g. private browsing) — the lead still works
    // for the rest of this session, it just won't survive a reload.
  }
}
