import type { FieldErrors } from "react-hook-form";

function walkFieldErrors(node: unknown, messages: string[]): void {
  if (node === null || node === undefined) return;
  if (typeof node !== "object") return;

  const record = node as Record<string, unknown>;
  if (typeof record.message === "string" && record.message.length > 0) {
    messages.push(record.message);
  }

  for (const key of Object.keys(record)) {
    if (key === "ref" || key === "type" || key === "types") continue;
    const value = record[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      walkFieldErrors(value, messages);
    }
  }
}

export function collectFormErrorMessages<T extends FieldErrors>(
  errors: T,
): string[] {
  const messages: string[] = [];
  walkFieldErrors(errors, messages);
  return [...new Set(messages)];
}
