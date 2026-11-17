import { SITE_CONFIG } from "./constants";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Visitei o site do Residencial Ares e gostaria de receber mais informações sobre as plantas, valores e disponibilidade.";

export const FLOOR_PLANS_WHATSAPP_MESSAGE =
  "Olá! Gostaria de consultar valores e disponibilidade das plantas do Residencial Ares.";

export const LOCATION_WHATSAPP_MESSAGE =
  "Olá! Gostaria de receber mais informações sobre a localização e arredores do Residencial Ares no Centro de Canoas.";

export const CONSULTANT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de falar com um consultor comercial sobre o Residencial Ares.";

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encoded}`;
}
