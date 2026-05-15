import { AnimatePresence, motion } from "motion/react";

import type { Amenity } from "@/constants/amenities";
import { AmenityCard } from "./AmenityCard";

type AmenityMobileCarouselProps = {
  amenity: Amenity;
  cardWidth: number;
  activeIndex: number;
  direction: number;
};

const SLIDE_TRANSITION = { duration: 0.3, ease: [0.32, 0.72, 0, 1] as const };

const slideVariants = {
  enter: (slideDirection: number) => ({
    x: slideDirection >= 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (slideDirection: number) => ({
    x: slideDirection >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export function AmenityMobileCarousel({
  amenity,
  cardWidth,
  activeIndex,
  direction,
}: AmenityMobileCarouselProps) {
  return (
    <div className="relative w-full overflow-hidden" aria-live="polite">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={`${activeIndex}-${amenity.id}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={SLIDE_TRANSITION}
          className="mx-auto"
          style={{ width: cardWidth }}
        >
          <AmenityCard amenity={amenity} cardWidth={cardWidth} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
