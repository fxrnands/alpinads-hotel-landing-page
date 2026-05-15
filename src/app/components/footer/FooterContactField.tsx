import { Copy, type LucideIcon } from "lucide-react";
import { useCallback, useState } from "react";

import {
  FOOTER_CONTACT_COPY_ICON_CLASS,
  FOOTER_CONTACT_FIELD_CLASS,
  FOOTER_CONTACT_ICON_CLASS,
  FOOTER_CONTACT_TEXT_CLASS,
  FOOTER_MOBILE_CONTACT_COPY_ICON_CLASS,
} from "@/lib/footer";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

type FooterContactFieldProps = {
  icon: LucideIcon;
  value: string;
  copyLabel: string;
  fieldClassName?: string;
};

export function FooterContactField({
  icon: Icon,
  value,
  copyLabel,
  fieldClassName,
}: FooterContactFieldProps) {
  const [copied, setCopied] = useState(false);

  const copyValue = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [value]);

  return (
    <div className={cn(FOOTER_CONTACT_FIELD_CLASS, fieldClassName)}>
      <Icon className={FOOTER_CONTACT_ICON_CLASS} aria-hidden />
      <span className={FOOTER_CONTACT_TEXT_CLASS}>{value}</span>
      <Button
        type="button"
        onClick={() => void copyValue()}
        className="h-auto shrink-0 rounded-sm bg-transparent p-0 transition-opacity hover:bg-transparent hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-label={copied ? `${copyLabel} copied` : `Copy ${copyLabel}`}
      >
        <Copy
          className={cn(FOOTER_CONTACT_COPY_ICON_CLASS, FOOTER_MOBILE_CONTACT_COPY_ICON_CLASS)}
          aria-hidden
        />
      </Button>
    </div>
  );
}
