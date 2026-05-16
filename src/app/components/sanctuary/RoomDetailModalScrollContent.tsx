import { Bed, Check, MoveHorizontal, Tag } from "lucide-react";

import type { RoomAmenityItem, SanctuaryRoom } from "@/constants/sanctuaryRooms";

import { cn } from "../ui/utils";
import { RoomDetailAmenityIcon } from "./RoomDetailAmenityIcon";
import { RoomDetailUsersIcon } from "./RoomDetailUsersIcon";

interface RoomDetailModalScrollContentProps {
  room: SanctuaryRoom;
  longText: string;
  bedLabel: string;
  guestsLabel: string;
  amenities: RoomAmenityItem[];
  services: string[];
}

export function RoomDetailModalScrollContent({
  room,
  longText,
  bedLabel,
  guestsLabel,
  amenities,
  services,
}: RoomDetailModalScrollContentProps) {
  const quickInfoIconClass =
    "size-6 shrink-0 text-[#A49781] max-md:text-[#323232]";
  const bodyClass = "text-[16px] font-normal leading-[140%] tracking-normal text-[#323232]";

  return (
    <div className="min-h-0 shrink-0 pt-5 max-md:overflow-visible md:min-h-0 md:flex-1 md:overflow-y-auto md:pt-0">
      <div className="flex flex-col md:gap-5 gap-4 pb-6 px-1  md:px-0 md:pb-0">
        <div>
          <h2
            id="room-detail-title"
            className="text-[20px] font-normal leading-[140%] tracking-normal text-[#323232] md:mt-[20px]"
          >
            {room.title}
          </h2>
          <div className="max-md:mt-4 md:mt-5 h-px w-full bg-[#E4E8E8]" />
        </div>

        <div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
            <div className="flex min-w-0 items-center gap-4">
              <MoveHorizontal className={quickInfoIconClass} strokeWidth={1.75} aria-hidden />
              <span className={cn(bodyClass, "min-w-0")}>{room.areaSqm} m²</span>
            </div>
            <div className="flex min-w-0 items-center gap-4">
              <Bed className={quickInfoIconClass} strokeWidth={1.75} aria-hidden />
              <span className={cn(bodyClass, "min-w-0")}>{bedLabel}</span>
            </div>
            <div className="flex min-w-0 items-center gap-4">
              <RoomDetailUsersIcon className="max-md:bg-[#323232]" />
              <span className={cn(bodyClass, "min-w-0")}>{guestsLabel}</span>
            </div>
            <div className="flex min-w-0 items-center gap-4">
              <Tag className={quickInfoIconClass} strokeWidth={1.75} aria-hidden />
              <span className={cn(bodyClass, "min-w-0")}>{room.priceLabel}</span>
            </div>
          </div>
          <div className="max-md:mt-4 md:mt-5 h-px w-full bg-[#E4E8E8]" />
        </div>

        <div className="flex flex-col gap-8 max-md:gap-4">
          <div>
            <p className={bodyClass}>{longText}</p>
          </div>

          <div className="flex flex-col gap-[12px] max-md:gap-4">
            <h3 className={bodyClass}>Amenities:</h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3">
              {amenities.map((item) => (
                <div key={item.id} className="flex min-w-0 w-full items-center gap-4">
                  <RoomDetailAmenityIcon amenityId={item.id} />
                  <span className={cn(bodyClass, "min-w-0 flex-1")}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[12px] max-md:gap-4">
            <h3 className={bodyClass}>Included services:</h3>
            <ul className="flex flex-col gap-3 max-md:gap-4">
              {services.map((line, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#A49781]">
                    <Check className="size-2.5 text-white" strokeWidth={3} aria-hidden />
                  </span>
                  <span className={bodyClass}>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
