import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "./ui/button";
import { cn } from "./ui/utils";

type SectionGalleryNavProps = {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev?: boolean;
  canGoNext?: boolean;
  className?: string;
  prevLabel?: string;
  nextLabel?: string;
};

const navButtonBaseClass =
  "flex size-[45px] shrink-0 touch-manipulation items-center justify-center rounded-[8px] bg-[#A49781] backdrop-blur-[20px] transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A49781]/40 focus-visible:ring-offset-2";

const navButtonEnabledClass = "text-white hover:opacity-90";
const navButtonDisabledClass =
  "cursor-not-allowed text-[#323232] opacity-50 hover:opacity-50";

function navButtonClass(enabled: boolean) {
  return cn(navButtonBaseClass, enabled ? navButtonEnabledClass : navButtonDisabledClass);
}

export function SectionGalleryNav({
  onPrev,
  onNext,
  canGoPrev = true,
  canGoNext = true,
  className,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
}: SectionGalleryNavProps) {
  return (
    <div className={cn("flex shrink-0 gap-2", className)}>
      <Button
        type="button"
        disabled={!canGoPrev}
        className={navButtonClass(canGoPrev)}
        aria-label={prevLabel}
        onClick={onPrev}
      >
        <ArrowLeft className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </Button>
      <Button
        type="button"
        disabled={!canGoNext}
        className={navButtonClass(canGoNext)}
        aria-label={nextLabel}
        onClick={onNext}
      >
        <ArrowRight className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </Button>
    </div>
  );
}
