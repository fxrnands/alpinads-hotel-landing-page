import { useCallback, useState } from "react";

import { AMENITIES } from "@/constants/amenities";
import {
  AMENITY_CARD_GRID_COLS_CLASS,
  amenityMobileCardWidthForContainer,
} from "@/constants/amenityCard";
import { useBoundedSlider } from "@/hooks/useBoundedSlider";
import { useSanctuarySliderViewport } from "@/hooks/useSanctuarySliderGeometry";
import { SECTION_IDS } from "../sections";
import { AmenityMobileCarousel } from "./AmenityMobileCarousel";
import { AmenityCard } from "./AmenityCard";
import { SectionGalleryNav } from "./SectionGalleryNav";
import { SectionIntro } from "./SectionIntro";
import { cn } from "./ui/utils";

export function Amenities() {
  const [slideDirection, setSlideDirection] = useState(0);
  const { viewportRef, containerWidth } = useSanctuarySliderViewport();

  const { activeIndex, goPrev, goNext, canGoPrev, canGoNext } = useBoundedSlider(
    AMENITIES.length,
    {
      slideWidth: Math.max(1, containerWidth),
      slideHeight: 1,
      slideGap: 0,
    },
  );

  const isReady = containerWidth > 0;
  const mobileCardWidth = amenityMobileCardWidthForContainer(containerWidth);
  const activeAmenity = AMENITIES[activeIndex];

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
      id={SECTION_IDS.amenities}
      className="w-full bg-white py-[80px] md:pb-[120px]"
    >
      <div className="mx-auto max-w-[1920px] px-4 md:px-8">
        <SectionIntro
          desktopAlign="center"
          className="gap-4 md:gap-4"
          eyebrowClassName="mb-0 pb-0 md:mb-0 md:pb-0"
          titleClassName="mb-0 pb-[40px] md:mb-0 md:pb-[40px]"
          eyebrow="— Amenities —"
          title="Everything you'd hope for, and more."
        />

        <div className="flex flex-col gap-6 md:hidden">
          <div ref={viewportRef} className="w-full" aria-hidden={!isReady}>
            {isReady && activeAmenity ? (
              <AmenityMobileCarousel
                amenity={activeAmenity}
                cardWidth={mobileCardWidth}
                activeIndex={activeIndex}
                direction={slideDirection}
              />
            ) : null}
          </div>

          <SectionGalleryNav
            onPrev={handlePrev}
            onNext={handleNext}
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
            prevLabel="Previous amenity"
            nextLabel="Next amenity"
            className="flex justify-center"
          />
        </div>

        <ul
          className={cn(
            "mt-0 hidden list-none grid-cols-2 gap-4 p-0 md:grid md:items-stretch",
            AMENITY_CARD_GRID_COLS_CLASS,
          )}
        >
          {AMENITIES.map((amenity) => (
            <li key={amenity.id} className="min-w-0">
              <AmenityCard amenity={amenity} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
