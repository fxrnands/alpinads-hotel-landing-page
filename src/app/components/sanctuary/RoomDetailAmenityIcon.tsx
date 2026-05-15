const AMENITY_SRC_BY_ID: Record<string, string> = {
  bathtub: "/assets/bathtub.svg",
  wifi: "/assets/wifi.svg",
  "mini-bar": "/assets/bar.svg",
};

interface RoomDetailAmenityIconProps {
  amenityId: string;
}

export function RoomDetailAmenityIcon({ amenityId }: RoomDetailAmenityIconProps) {
  const src = AMENITY_SRC_BY_ID[amenityId] ?? AMENITY_SRC_BY_ID.bathtub;

  return (
    <img
      src={src}
      alt=""
      width={24}
      height={24}
      className="size-6 shrink-0 object-contain"
      draggable={false}
      aria-hidden
    />
  );
}
