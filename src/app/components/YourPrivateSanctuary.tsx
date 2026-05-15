import { useCallback, useState } from "react";

import { SANCTUARY_ROOMS } from "@/constants/sanctuaryRooms";
import { useBoundedSlider } from "@/hooks/useBoundedSlider";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import {
  useSanctuarySliderGeometry,
  useSanctuarySliderViewport,
} from "@/hooks/useSanctuarySliderGeometry";
import { SECTION_IDS } from "../sections";
import { SanctuaryMobileCarousel } from "./SanctuaryMobileCarousel";
import { SanctuaryRoomCard } from "./SanctuaryRoomCard";
import { SectionGalleryNav } from "./SectionGalleryNav";
import { SectionIntro } from "./SectionIntro";
import { cn } from "./ui/utils";

const MD_BREAKPOINT_QUERY = "(min-width: 768px)";

export function YourPrivateSanctuary() {
  const isDesktop = useMatchMedia(MD_BREAKPOINT_QUERY);
  const [slideDirection, setSlideDirection] = useState(0);
  const { viewportRef, containerWidth } = useSanctuarySliderViewport();
  const sliderOptions = useSanctuarySliderGeometry(containerWidth);

  const {
    activeIndex,
    translatePx,
    transitionOn,
    slideWidth,
    slideGap,
    goPrev,
    goNext,
    canGoPrev,
    canGoNext,
  } = useBoundedSlider(SANCTUARY_ROOMS.length, sliderOptions);

  const isReady = containerWidth > 0 && slideWidth > 0;
  const activeRoom = SANCTUARY_ROOMS[activeIndex];

  const handlePrev = useCallback(() => {
    setSlideDirection(-1);
    goPrev();
  }, [goPrev]);

  const handleNext = useCallback(() => {
    setSlideDirection(1);
    goNext();
  }, [goNext]);

  return (
    <section
      id={SECTION_IDS.rooms}
      className="w-full overflow-x-hidden bg-[#F4F3F0] py-[80px]"
    >
      <div className="mx-auto max-w-[1920px] px-4 md:px-8">
        <SectionIntro
          desktopAlign="center"
          className="md:pb-12"
          eyebrow="— Your Private Sanctuary —"
          title="Designed for Deep Rest"
          description="Explore our selection of light-flooded suites, each featuring a private panoramic terrace and the soothing scent of natural pine wood."
        />
      </div>

      <div className="mt-0 flex flex-col gap-[24px] md:gap-6">
        <div
          className={cn(
            "w-full overflow-x-clip",
            "md:relative md:left-1/2 md:w-screen md:max-w-none md:-translate-x-1/2",
          )}
          aria-hidden={!isReady}
        >
          <div
            ref={viewportRef}
            className="w-full px-4 md:overflow-visible md:px-0 md:pl-8"
          >
            {isReady && activeRoom ? (
              isDesktop ? (
                <div
                  className={cn(
                    "flex w-max flex-nowrap will-change-transform",
                    transitionOn ? "transition-transform duration-500 ease-out" : "",
                  )}
                  style={{
                    transform: `translate3d(-${translatePx}px, 0, 0)`,
                    gap: slideGap,
                  }}
                  role="list"
                  aria-label="Suite gallery"
                >
                  {SANCTUARY_ROOMS.map((room) => (
                    <div
                      key={room.id}
                      role="listitem"
                      className="shrink-0"
                      style={{ width: slideWidth }}
                    >
                      <SanctuaryRoomCard room={room} width={slideWidth} />
                    </div>
                  ))}
                </div>
              ) : (
                <SanctuaryMobileCarousel
                  room={activeRoom}
                  slideWidth={slideWidth}
                  activeIndex={activeIndex}
                  direction={slideDirection}
                />
              )
            ) : null}
          </div>
        </div>

        <SectionGalleryNav
          onPrev={handlePrev}
          onNext={handleNext}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          prevLabel="Previous suite"
          nextLabel="Next suite"
          className="flex justify-center"
        />
      </div>
    </section>
  );
}
