import { MoveHorizontal, Users } from "lucide-react";

import {
  SANCTUARY_CARD_IMAGE_ASPECT_CLASS,
  SANCTUARY_CARD_WIDTH,
  sanctuaryImageHeightForWidth,
} from "@/constants/sanctuaryCard";
import type { SanctuaryRoom } from "@/constants/sanctuaryRooms";
import { ImageWithFallback } from "./media/ImageWithFallback";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";

type SanctuaryRoomCardProps = {
  room: SanctuaryRoom;
  width?: number;
};

export function SanctuaryRoomCard({ room, width = SANCTUARY_CARD_WIDTH }: SanctuaryRoomCardProps) {
  const guestLabel = room.guests === 1 ? "1 Guest" : `${room.guests} Guests`;
  const imageHeight = sanctuaryImageHeightForWidth(width);

  return (
    <article
      className={cn(
        "flex w-full min-w-0 flex-col overflow-hidden rounded-[8px] bg-white",
        "md:grid md:aspect-[465/545] md:grid-rows-[327fr_218fr]",
      )}
    >
      <div
        className={cn(
          "relative w-full min-w-0 shrink-0 overflow-hidden",
          SANCTUARY_CARD_IMAGE_ASPECT_CLASS,
          "md:aspect-auto md:min-h-0",
        )}
      >
        <ImageWithFallback
          src={room.imageUrl}
          alt={room.title}
          width={width}
          height={imageHeight}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute right-2 top-2 rounded-[8px] bg-white p-[10px] font-manrope text-[16px] font-normal leading-[150%] tracking-normal text-[#323232]">
          {room.priceLabel}
        </span>
      </div>

      <div className="flex min-w-0 flex-col gap-[16px] p-3 md:min-h-0 md:overflow-hidden">
        <h3 className="line-clamp-2 text-left font-manrope text-[20px] font-normal leading-[140%] tracking-normal text-[#323232]">
          {room.title}
        </h3>
        <p className="line-clamp-2 text-left font-manrope text-[16px] font-normal leading-[140%] tracking-normal text-[#323232]/70">
          {room.description}
        </p>

        <div className="flex min-w-0 flex-wrap items-center gap-[12px] font-manrope text-[16px] font-normal leading-[150%] tracking-normal text-[#323232]">
          <Users className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
          <span>{guestLabel}</span>
          <MoveHorizontal className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
          <span>{room.areaSqm} m²</span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-12 w-full min-w-0 shrink-0 rounded-[8px] border border-solid border-[#32323233] bg-transparent font-manrope text-[14px] font-normal uppercase leading-[150%] tracking-[5%] text-[#323232] hover:bg-[#323232]/5 md:mt-auto"
        >
          See Details
        </Button>
      </div>
    </article>
  );
}
