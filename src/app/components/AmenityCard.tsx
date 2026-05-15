import type { Amenity } from "@/constants/amenities";
import {
  AMENITY_CARD_ASPECT_CLASS,
  AMENITY_CARD_BG,
  AMENITY_CARD_CONTENT_FLEX_CLASS,
  AMENITY_CARD_DESCRIPTION_CLASS,
  AMENITY_CARD_OVERFLOW_CLASS,
  AMENITY_CARD_TITLE_CLASS,
  AMENITY_MOBILE_CARD_WIDTH,
  amenityMobileCardHeightForWidth,
  amenityMobileCardScale,
} from "@/constants/amenityCard";
import { cn } from "./ui/utils";

type AmenityCardProps = {
  amenity: Amenity;
  className?: string;
  /** When set, sizes the card for mobile without CSS aspect-ratio. */
  cardWidth?: number;
};

export function AmenityCard({ amenity, className, cardWidth }: AmenityCardProps) {
  const Icon = amenity.icon;
  const isMobileSized = cardWidth !== undefined;
  const resolvedWidth = cardWidth ?? AMENITY_MOBILE_CARD_WIDTH;
  const cardHeight = isMobileSized ? amenityMobileCardHeightForWidth(resolvedWidth) : undefined;
  const scale = isMobileSized ? amenityMobileCardScale(resolvedWidth) : 1;
  const padding = Math.round(16 * scale);
  const iconBox = Math.round(56 * scale);
  const iconSize = Math.round(40 * scale);
  const iconToTitleGap = Math.round(24 * scale);
  const titleToDescGap = Math.round(12 * scale);
  const titleFontSize = Math.round(28 * scale);
  const descFontSize = Math.round(16 * scale);

  return (
    <article
      className={cn(
        "flex min-w-0 flex-col rounded-[8px]",
        isMobileSized && "overflow-hidden",
        !isMobileSized && [
          "h-auto w-full",
          AMENITY_CARD_OVERFLOW_CLASS,
          AMENITY_CARD_ASPECT_CLASS,
        ],
        className,
      )}
      style={{
        backgroundColor: AMENITY_CARD_BG,
        ...(isMobileSized
          ? {
              width: resolvedWidth,
              height: cardHeight,
              padding,
            }
          : { padding: 16 }),
      }}
    >
      <div
        className="flex shrink-0 items-center justify-center rounded-[8px] bg-white"
        style={{ width: iconBox, height: iconBox }}
      >
        <Icon
          className="text-[#A49781]"
          style={{ width: iconSize, height: iconSize }}
          strokeWidth={1.75}
          aria-hidden
        />
      </div>
      <div
        className={cn(
          "flex flex-col",
          isMobileSized && "min-h-0 flex-1",
          !isMobileSized && AMENITY_CARD_CONTENT_FLEX_CLASS,
        )}
        style={{
          marginTop: isMobileSized ? iconToTitleGap : 24,
          gap: isMobileSized ? titleToDescGap : 12,
        }}
      >
        <h3
          className={cn(
            "font-manrope font-normal leading-[150%] tracking-normal text-[#323232]",
            isMobileSized ? "line-clamp-2" : AMENITY_CARD_TITLE_CLASS,
          )}
          style={isMobileSized ? { fontSize: titleFontSize } : undefined}
        >
          {amenity.title}
        </h3>
        <p
          className={cn(
            "font-manrope font-normal leading-[150%] tracking-normal text-[#323232]/70",
            isMobileSized ? "line-clamp-3" : AMENITY_CARD_DESCRIPTION_CLASS,
          )}
          style={isMobileSized ? { fontSize: descFontSize } : undefined}
        >
          {amenity.description}
        </p>
      </div>
    </article>
  );
}
