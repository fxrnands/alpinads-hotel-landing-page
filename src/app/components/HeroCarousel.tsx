import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";

const UNSPLASH_SLIDES = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=2000&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2000&q=80",
] as const;

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="absolute inset-0">
      <div className="h-full min-h-[100vh] overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {UNSPLASH_SLIDES.map((src, index) => (
            <div
              key={src}
              className="relative h-full min-h-[100vh] min-w-0 shrink-0 grow-0 basis-full"
            >
              <img
                src={src}
                alt={`Hero slide ${index + 1} of ${UNSPLASH_SLIDES.length}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="pointer-events-auto absolute left-3 md:left-6 top-1/2 z-[6] flex size-[36px] -translate-y-1/2 items-center justify-center rounded-none bg-[#00000033] text-white opacity-50 backdrop-blur-[111.1111068725586px] transition-opacity hover:opacity-90"
        aria-label="Previous slide"
      >
        <ArrowLeft className="size-[14px]" strokeWidth={2} aria-hidden />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="pointer-events-auto absolute right-3 md:right-6 top-1/2 z-[6] flex size-[36px] -translate-y-1/2 items-center justify-center rounded-none bg-[#00000033] text-white backdrop-blur-[111.1111068725586px] transition-opacity hover:opacity-90"
        aria-label="Next slide"
      >
        <ArrowRight className="size-[14px]" strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
}
