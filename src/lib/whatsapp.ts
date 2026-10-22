// The prefilled WhatsApp message. Edit the text here.
const DEFAULT_MESSAGE =
  "Hi, I am interested in becoming a distributor. Please share more details.";

// Returns digits only, or null if the number is missing or not plausible.
export function getWhatsAppNumber(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15 ? digits : null;
}

// Builds a wa.me link with a URL-encoded prefilled message.
// Returns null when no valid number is configured.
export function buildWhatsAppUrl(message?: string): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;

  const text = message ?? DEFAULT_MESSAGE;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}