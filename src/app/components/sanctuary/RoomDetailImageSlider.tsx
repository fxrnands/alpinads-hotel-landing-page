import { ArrowLeft, ArrowRight } from "lucide-react";

import { useRoomDetailImageCarousel } from "@/hooks/useRoomDetailImageCarousel";

import { ImageWithFallback } from "../media/ImageWithFallback";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

interface RoomDetailImageSliderProps {
  urls: string[];
  imageAlt: string;
}

export function RoomDetailImageSlider({ urls, imageAlt }: RoomDetailImageSliderProps) {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext, showNav } =
    useRoomDetailImageCarousel(urls);

  return (
    <div
      className={cn(
        "relative w-full min-w-0 shrink-0 overflow-hidden bg-[#E8E6E3] max-md:mb-2",
        "max-md:aspect-auto max-md:h-[min(38dvh,400px)] max-md:min-h-[220px] max-md:rounded-[12px]",
        "md:aspect-square md:rounded-[12px]",
      )}
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {urls.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative min-h-0 min-w-0 shrink-0 grow-0 basis-full"
            >
              <ImageWithFallback
                src={src}
                alt={index === 0 ? imageAlt : ""}
                width={800}
                height={800}
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {showNav ? (
        <>
          <Button
            type="button"
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 z-[2] flex size-9 -translate-y-1/2 items-center justify-center rounded-none border-0 bg-[#00000033] p-0 text-white backdrop-blur-sm hover:bg-[#00000055] focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Previous image"
          >
            <ArrowLeft className="size-4" strokeWidth={2} aria-hidden />
          </Button>
          <Button
            type="button"
            onClick={scrollNext}
            className="absolute right-3 top-1/2 z-[2] flex size-9 -translate-y-1/2 items-center justify-center rounded-none border-0 bg-[#00000033] p-0 text-white backdrop-blur-sm hover:bg-[#00000055] focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Next image"
          >
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
          </Button>
          <div
            className="absolute bottom-4 left-1/2 z-[2] flex -translate-x-1/2 gap-1.5"
            role="tablist"
            aria-label="Slide indicators"
          >
            {urls.map((_, index) => (
              <span
                key={index}
                role="presentation"
                className={cn(
                  "h-[6px] w-8 shrink-0 rounded-full",
                  index === selectedIndex ? "bg-[#E4E8E8]" : "bg-[#E4E8E8]/50",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
