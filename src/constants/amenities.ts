import type { LucideIcon } from "lucide-react";
import { Bike, Flower2, MountainSnow, PersonStanding, Waves, Wine } from "lucide-react";

export type Amenity = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const AMENITIES: Amenity[] = [
  {
    id: "sky-infinity-pool",
    title: "Sky Infinity Pool",
    description:
      "Experience the sensation of swimming in our 25-meter heated pool that appears to float directly into the rugged Dolomite peaks.",
    icon: Waves,
  },
  {
    id: "forest-to-table-dining",
    title: "Forest-to-Table Dining",
    description:
      "Indulge in 5-course gourmet dinners featuring organic ingredients sourced daily from our own gardens and local Alpine farmers.",
    icon: Wine,
  },
  {
    id: "vitalis-panoramic-spa",
    title: "Vitalis Panoramic Spa",
    description:
      "Recharge in our panoramic saunas and enjoy authentic herbal treatments inspired by ancient Alpine healing traditions.",
    icon: Flower2,
  },
  {
    id: "ski-in-ski-out",
    title: "Ski-In / Ski-Out Access",
    description:
      "Enjoy seamless access to the Dolomiti Superski slopes directly from the hotel's ski room—no shuttles, no waiting.",
    icon: MountainSnow,
  },
  {
    id: "e-bike-hiking-hub",
    title: "E-Bike & Hiking Hub",
    description:
      "Explore the mountains with ease using our premium fleet of e-bikes and professional hiking gear available exclusively for guests.",
    icon: Bike,
  },
  {
    id: "mindful-yoga-studio",
    title: "Mindful Yoga Studio",
    description:
      "Find your inner peace in our glass-walled studio overlooking the pine forest, offering daily guided meditation and yoga sessions.",
    icon: PersonStanding,
  },
];
