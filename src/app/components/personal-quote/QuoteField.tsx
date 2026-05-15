import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "../ui/utils";
import {
  PERSONAL_QUOTE_FIELD_ICON_CLASS,
  PERSONAL_QUOTE_FIELD_SHELL_CLASS,
  PERSONAL_QUOTE_INPUT_CLASS,
} from "@/lib/personalQuote/layout";

type QuoteFieldIconProps = {
  src: string;
  alt?: string;
};

export function QuoteFieldIcon({ src, alt = "" }: QuoteFieldIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={24}
      height={24}
      className={PERSONAL_QUOTE_FIELD_ICON_CLASS}
      aria-hidden={alt === ""}
    />
  );
}

type QuoteFieldShellProps = {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

export function QuoteFieldShell({ icon, children, className }: QuoteFieldShellProps) {
  return (
    <div className={cn(PERSONAL_QUOTE_FIELD_SHELL_CLASS, className)}>
      {icon}
      {children}
    </div>
  );
}

type QuoteTextFieldProps = {
  icon: ReactNode;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function QuoteTextField({ icon, placeholder, className, ...props }: QuoteTextFieldProps) {
  return (
    <QuoteFieldShell icon={icon}>
      <input
        type="text"
        placeholder={placeholder}
        className={cn(PERSONAL_QUOTE_INPUT_CLASS, className)}
        {...props}
      />
    </QuoteFieldShell>
  );
}
