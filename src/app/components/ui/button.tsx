import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "./utils";

export const BUTTON_BASE_CLASS =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40";

const BUTTON_APPEARANCE_CLASS = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  outline:
    "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  icon: "size-9 shrink-0 p-0",
  iconControl:
    "size-7 shrink-0 rounded-md border border-input bg-transparent p-0 opacity-50 hover:opacity-100",
} as const;

export type ButtonAppearance = keyof typeof BUTTON_APPEARANCE_CLASS;

export function buttonAppearanceClass(
  appearance: ButtonAppearance,
  className?: string,
): string {
  return cn(BUTTON_BASE_CLASS, BUTTON_APPEARANCE_CLASS[appearance], className);
}

/** Calendar nav and guest steppers (− / +). */
export const iconControlButtonClass = buttonAppearanceClass("iconControl");

/** Day cells in react-day-picker. */
export const calendarDayButtonClass = buttonAppearanceClass(
  "ghost",
  "p-0 font-normal aria-selected:opacity-100",
);

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  appearance?: ButtonAppearance;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, appearance, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(
          BUTTON_BASE_CLASS,
          appearance && BUTTON_APPEARANCE_CLASS[appearance],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
