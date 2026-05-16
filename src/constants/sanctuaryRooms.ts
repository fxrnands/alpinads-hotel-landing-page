export type RoomAmenityItem = {
  id: string;
  label: string;
};

export type SanctuaryRoom = {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  guests: number;
  areaSqm: number;
  imageUrl: string;
  /** Long copy for the room detail modal; falls back to `description`. */
  longDescription?: string;
  /** Extra images for the modal carousel; falls back to `[imageUrl]`. */
  galleryImageUrls?: string[];
  bedType?: string;
  /** e.g. "2 - 4 Guests"; defaults from `guests`. */
  guestDisplayLabel?: string;
  amenities?: RoomAmenityItem[];
  includedServices?: string[];
};

export const SANCTUARY_ROOMS: SanctuaryRoom[] = [
  {
    id: "larch-junior-suite",
    title: "Larch Junior Suite",
    description: "Panoramic views with a private balcony and natural pine interiors.",
    priceLabel: "€280 / night",
    guests: 2,
    areaSqm: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  },
  {
    id: "summit-royal-suite",
    title: "Summit Royal Suite",
    description: "Floor-to-ceiling windows framing the valley with a soaking tub.",
    longDescription:
      "Experience the pinnacle of Alpine luxury. Located on the highest floor of Hotel L'Aura, the Summit Royal Suite offers an expansive living area with a private open fireplace and a freestanding designer bathtub with direct views of the Dolomites. The suite is furnished with hand-carved stone and local Swiss pine wood, known for its calming properties.",
    priceLabel: "€340 / night",
    guests: 2,
    areaSqm: 52,
    bedType: "King Size Luxury Bed",
    guestDisplayLabel: "2 - 4 Guests",
    imageUrl:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    galleryImageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
    ],
    amenities: [
      { id: "bathtub", label: "Bathtub" },
      { id: "wifi", label: "Wifi" },
      { id: "mini-bar", label: "Mini Bar" },
    ],
    includedServices: [
      "Complimentary bottle of South Tyrolean sparkling wine upon arrival.",
      "Reserved parking space in our underground garage.",
      "Daily 'Gourmet Breakfast' served in the suite upon request.",
    ],
  },
  {
    id: "family-alpine-lodge",
    title: "Family Alpine Lodge",
    description: "Warm timber finishes and a fireplace for quiet alpine evenings.",
    priceLabel: "€310 / night",
    guests: 3,
    areaSqm: 58,
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
  },
  {
    id: "glacier-view-suite",
    title: "Glacier View Suite",
    description: "Wake to ice-blue peaks through floor-to-ceiling glass and a deep soaking tub.",
    priceLabel: "€360 / night",
    guests: 2,
    areaSqm: 48,
    imageUrl:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
  },
  {
    id: "pine-forest-retreat",
    title: "Pine Forest Retreat",
    description: "A secluded nook among evergreens with a reading nook and heated floors.",
    priceLabel: "€295 / night",
    guests: 2,
    areaSqm: 42,
    imageUrl:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
  },
  {
    id: "spa-wellness-suite",
    title: "Spa Wellness Suite",
    description: "In-room sauna access, stone rain shower, and calming herbal aromatherapy.",
    priceLabel: "€390 / night",
    guests: 2,
    areaSqm: 55,
    imageUrl:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  },
  {
    id: "meadow-terrace-room",
    title: "Meadow Terrace Room",
    description: "Soft morning light over wildflower meadows from a wide stone terrace.",
    priceLabel: "€270 / night",
    guests: 2,
    areaSqm: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
  },
  {
    id: "observatory-penthouse",
    title: "Observatory Penthouse",
    description: "Double-height living space with a skylight for stargazing above the ridge.",
    priceLabel: "€450 / night",
    guests: 4,
    areaSqm: 72,
    imageUrl:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
  },
  {
    id: "hunters-den-studio",
    title: "Hunter's Den Studio",
    description: "Compact luxury with leather accents, a wet bar, and valley-facing windows.",
    priceLabel: "€255 / night",
    guests: 2,
    areaSqm: 36,
    imageUrl:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80",
  },
  {
    id: "crystal-creek-chalet",
    title: "Crystal Creek Chalet",
    description: "Steps from a mountain stream with a wraparound deck and outdoor hot tub.",
    priceLabel: "€325 / night",
    guests: 3,
    areaSqm: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    id: "aurora-sky-loft",
    title: "Aurora Sky Loft",
    description: "Lofted bedroom under exposed beams with blackout shades and dawn valley views.",
    priceLabel: "€315 / night",
    guests: 2,
    areaSqm: 44,
    imageUrl:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
  },
];

export const SANCTUARY_ROOM_IDS = SANCTUARY_ROOMS.map((room) => room.id);
