import { ArrowLeft, ArrowRight } from "lucide-react";

import { HERITAGE_SLIDE_URLS } from "@/constants/heritageSlides";
import { useHeritageSliderGeometry } from "@/hooks/useHeritageSliderGeometry";
import { useInfiniteLoopSlider } from "@/hooks/useInfiniteLoopSlider";
import { SECTION_IDS } from "../sections";
import { ImageWithFallback } from "./media/ImageWithFallback";
import { cn } from "./ui/utils";

function HeritageGalleryNav({
  goPrev,
  goNext,
  className,
}: {
  goPrev: () => void;
  goNext: () => void;
  className?: string;
}) {
  return (
    <div className={cn("flex shrink-0 gap-2", className)}>
      <button
        type="button"
        className="flex size-[45px] shrink-0 items-center justify-center rounded-[8px] bg-[#A49781] text-[#323232] opacity-50 backdrop-blur-[20px] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A49781]/40 focus-visible:ring-offset-2"
        aria-label="Previous image"
        onClick={goPrev}
      >
        <ArrowLeft className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </button>
      <button
        type="button"
        className="flex size-[45px] shrink-0 items-center justify-center rounded-[8px] bg-[#A49781] text-white backdrop-blur-[20px] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A49781]/40 focus-visible:ring-offset-2"
        aria-label="Next image"
        onClick={goNext}
      >
        <ArrowRight className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  );
}

export function OurHeritage() {
  const sliderOptions = useHeritageSliderGeometry();

  const {
    loopSlides,
    translatePx,
    transitionOn,
    slideWidth,
    slideHeight,
    slideGap,
    goPrev,
    goNext,
    onTrackTransitionEnd,
  } = useInfiniteLoopSlider(HERITAGE_SLIDE_URLS, sliderOptions);

  return (
    <section id={SECTION_IDS.heritage} className="w-full py-[80px]">
      <div className="mx-auto flex max-w-[1920px] flex-col md:gap-10">
        <div className="flex flex-col items-center px-6 md:flex-row md:items-end md:justify-between md:px-6">
          <div className="flex w-full max-w-full flex-col items-center gap-0 text-center md:max-w-[77vw] md:items-start md:gap-6 md:text-left">
            <div className="pb-[21px] font-manrope text-[14px] font-normal leading-[150%] tracking-normal text-[#524A46] md:mb-3 md:pb-0 md:text-base md:text-[#323232]">
              — Our Heritage —
            </div>
            <h2 className="pb-6 font-manrope text-[24px] font-normal leading-[140%] tracking-normal text-[#524A46] md:mb-6 md:pb-0 md:text-[40px] md:text-[#323232]">
              Nature, Design, and Soul
            </h2>
            <p className="max-w-[640px] pb-10 font-manrope text-[16px] font-normal leading-[140%] tracking-normal text-[#524A46] md:max-w-none md:pb-0 md:text-base md:leading-[150%] md:text-[#323232]">
              Born from a passion for architecture and deep respect for the Alpine landscape, L&apos;Aura
              is more than a hotel—it&apos;s a private retreat where every window frames a masterpiece of
              nature.
            </p>
          </div>
          <HeritageGalleryNav
            goPrev={goPrev}
            goNext={goNext}
            className="hidden w-full justify-end md:flex md:w-auto"
          />
        </div>

        <div className="w-full overflow-x-hidden md:px-6">
          <div
            className={cn(
              "flex w-max flex-nowrap pl-0 md:pl-6",
              transitionOn ? "transition-transform duration-500 ease-out" : "",
            )}
            style={{
              transform: `translate3d(-${translatePx}px, 0, 0)`,
              gap: slideGap,
            }}
            role="list"
            aria-label="Heritage image gallery"
            onTransitionEnd={onTrackTransitionEnd}
          >
            {loopSlides.map((src, index) => (
              <div
                key={`${index}-${src}`}
                role="listitem"
                className="relative shrink-0 overflow-hidden rounded-none bg-muted"
                style={{ width: slideWidth, height: slideHeight }}
              >
                <ImageWithFallback
                  src={src}
                  alt=""
                  width={slideWidth}
                  height={slideHeight}
                  draggable={false}
                  className="h-full w-full rounded-none object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <HeritageGalleryNav
          goPrev={goPrev}
          goNext={goNext}
          className="mt-[24px] flex justify-center md:hidden"
        />
      </div>
    </section>
  );
}
