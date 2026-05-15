import { SANCTUARY_ROOMS } from "./sanctuaryRooms";

export const PERSONAL_QUOTE_BACKGROUND_URL = "/assets/form-background.webp";

export { FORM_FIELD_ICONS as PERSONAL_QUOTE_FIELD_ICONS } from "./formFieldIcons";

export const PERSONAL_QUOTE_COPY = {
  eyebrow: "- Plan Your Stay -",
  title: "Request a Personal Quote",
  description:
    "Fill out the form below, and our team will get back to you within 24 hours with a non-binding offer tailored to your needs.",
} as const;

export const PERSONAL_QUOTE_ROOM_OPTIONS = SANCTUARY_ROOMS.map((room) => ({
  value: room.id,
  label: room.title,
}));

export const PERSONAL_QUOTE_SERVICES = [
  { id: "airport-transfer", label: "Airport Transfer" },
  { id: "spa-package", label: "Spa package" },
  { id: "private-dining", label: "Private dinning" },
  { id: "yacht-excursion", label: "Yacht excursion" },
] as const;

export type PersonalQuoteServiceId = (typeof PERSONAL_QUOTE_SERVICES)[number]["id"];
