/**
 * Normalizes our stored `Lead.phone` (e.g. "+57 359 652 8081") into the raw
 * digit format the WhatsApp handoff endpoints expect (e.g. "573596528081" —
 * sin espacios, sin "+", con código de país, tal como llegó originalmente por
 * WhatsApp).
 *
 * Returns null when the lead has no usable phone on file — e.g. brand-new
 * leads created live from the Agente Sofía feed (`mapToNewLead`), whose
 * `/api/leads` payload doesn't expose a phone number today. Callers must
 * handle the null case (disable the real chat, don't attempt the call).
 */
export function normalizePhoneForWhatsApp(phone: string): string | null {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) return null;
  return digits;
}
