import { useMemo } from "react";

import type { SanctuaryRoom } from "@/constants/sanctuaryRooms";
import {
  roomDetailAmenities,
  roomDetailBedType,
  roomDetailGuestLabel,
  roomDetailIncludedServices,
  roomDetailLongDescription,
  roomGalleryUrls,
} from "@/lib/sanctuary/roomDetailContent";

export function useRoomDetailModalData(room: SanctuaryRoom | null) {
  return useMemo(() => {
    if (!room) return null;

    return {
      gallery: roomGalleryUrls(room),
      longText: roomDetailLongDescription(room),
      bedLabel: roomDetailBedType(room),
      guestsLabel: roomDetailGuestLabel(room),
      amenities: roomDetailAmenities(room),
      services: roomDetailIncludedServices(room),
    };
  }, [room]);
}
