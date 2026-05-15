import type { RoomAmenityItem, SanctuaryRoom } from "@/constants/sanctuaryRooms";

const DEFAULT_AMENITIES: RoomAmenityItem[] = [
  { id: "bathtub", label: "Bathtub" },
  { id: "wifi", label: "Wifi" },
  { id: "mini-bar", label: "Mini Bar" },
];

const DEFAULT_INCLUDED_SERVICES = [
  "Complimentary bottle of South Tyrolean sparkling wine upon arrival.",
  "Reserved parking space in our underground garage.",
  "Daily 'Gourmet Breakfast' served in the suite upon request.",
] as const;

export function roomGalleryUrls(room: SanctuaryRoom): string[] {
  if (room.galleryImageUrls?.length) {
    return room.galleryImageUrls;
  }
  return [room.imageUrl];
}

export function roomDetailLongDescription(room: SanctuaryRoom): string {
  return room.longDescription ?? room.description;
}

export function roomDetailBedType(room: SanctuaryRoom): string {
  return room.bedType ?? "King Size Luxury Bed";
}

export function roomDetailGuestLabel(room: SanctuaryRoom): string {
  if (room.guestDisplayLabel) {
    return room.guestDisplayLabel;
  }
  return room.guests === 1 ? "1 Guest" : `${room.guests} Guests`;
}

export function roomDetailAmenities(room: SanctuaryRoom): RoomAmenityItem[] {
  return room.amenities?.length ? room.amenities : [...DEFAULT_AMENITIES];
}

export function roomDetailIncludedServices(room: SanctuaryRoom): string[] {
  return room.includedServices?.length
    ? room.includedServices
    : [...DEFAULT_INCLUDED_SERVICES];
}
