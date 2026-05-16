/** Allows digits and a single leading `+` (international prefix). */
export function sanitizePhoneInput(raw: string): string {
  const cleaned = raw.replace(/[^0-9+]/g, "");
  if (cleaned.startsWith("+")) {
    return "+" + cleaned.slice(1).replace(/\D/g, "");
  }
  return cleaned.replace(/\D/g, "");
}
