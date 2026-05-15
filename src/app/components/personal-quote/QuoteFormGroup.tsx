import { useId, type ReactNode } from "react";

import { PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS, PERSONAL_QUOTE_GROUP_LABEL_CLASS } from "@/lib/personalQuote/layout";
import { cn } from "../ui/utils";

type QuoteFormGroupProps = {
  label: string;
  children: ReactNode;
};

export function QuoteFormGroup({ label, children }: QuoteFormGroupProps) {
  const labelId = useId();

  return (
    <div
      role="group"
      aria-labelledby={labelId}
      className={cn("flex flex-col", PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS)}
    >
      <p id={labelId} className={PERSONAL_QUOTE_GROUP_LABEL_CLASS}>
        {label}
      </p>
      {children}
    </div>
  );
}
