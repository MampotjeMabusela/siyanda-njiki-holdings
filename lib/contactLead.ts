/** Shared copy of company WhatsApp (no +): South Africa mobile 79 221 9330 */
export const COMPANY_WHATSAPP_E164_LOCAL = "27792219330";

export type LeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function buildLeadWhatsAppUrl(data: LeadPayload): string {
  const text = [
    "*New enquiry — Siyanda Njiki Holdings*",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
  const max = 1700;
  const safe = text.length > max ? `${text.slice(0, max)}…` : text;
  return `https://wa.me/${COMPANY_WHATSAPP_E164_LOCAL}?text=${encodeURIComponent(safe)}`;
}
