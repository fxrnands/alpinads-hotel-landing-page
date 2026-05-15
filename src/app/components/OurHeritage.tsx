import { HERITAGE_SLIDE_URLS } from "@/constants/heritageSlides";
import { useHeritageSliderGeometry } from "@/hooks/useHeritageSliderGeometry";
import { useInfiniteLoopSlider } from "@/hooks/useInfiniteLoopSlider";
import { SECTION_IDS } from "../sections";
import { ImageWithFallback } from "./media/ImageWithFallback";
import { SectionGalleryNav } from "./SectionGalleryNav";
import { SectionIntro } from "./SectionIntro";
import { cn } from "./ui/utils";

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
        <div className="flex flex-col items-center px-6 md:flex-row md:items-end md:justify-between md:px-10">
          <SectionIntro
            eyebrow="— Our Heritage —"
            title="Nature, Design, and Soul"
            description="Born from a passion for architecture and deep respect for the Alpine landscape, L&apos;Aura is more than a hotel—it&apos;s a private retreat where every window frames a masterpiece of nature."
          />
          <SectionGalleryNav
            onPrev={goPrev}
            onNext={goNext}
            prevLabel="Previous image"
            nextLabel="Next image"
            className="hidden w-full justify-end md:flex md:w-auto"
          />
        </div>

        <div className="w-full overflow-x-hidden md:px-10">
          <div
            className={cn(
              "flex w-max flex-nowrap",
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

        <SectionGalleryNav
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Previous image"
          nextLabel="Next image"
          className="mt-[24px] flex justify-center md:hidden"
        />
      </div>
    </section>
  );
}
