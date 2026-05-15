import { SECTION_IDS, type SectionId } from "@/app/sections";

export const FOOTER_BRAND = {
  name: "Hotel Ipsum",
  address: ["San Valentino,", "South Tyrol, Italy."],
  logoSrc: "/assets/logo-ipsum.svg",
  logoAlt: "Logoipsum",
  logoWidth: 224,
  logoHeight: 100,
} as const;

export const FOOTER_CONTACT = {
  phone: "+43 123456789",
  email: "info@hotel.com",
} as const;

export type FooterNavLink =
  | { label: string; type: "scroll-top" }
  | { label: string; type: "section"; sectionId: SectionId };

export const FOOTER_LINKS: FooterNavLink[] = [
  { label: "Home", type: "scroll-top" },
  { label: "Rooms", type: "section", sectionId: SECTION_IDS.rooms },
  { label: "Amenities", type: "section", sectionId: SECTION_IDS.amenities },
  { label: "Gallery", type: "section", sectionId: SECTION_IDS.visualMemories },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Imprint", href: "#" },
  { label: "Data Protection", href: "#" },
  { label: "Privacy Settings", href: "#" },
  { label: "Sitemap", href: "#" },
] as const;

export const FOOTER_SOCIAL_ICON_SIZE = 16 as const;

export const FOOTER_SOCIAL_LINKS = [
  { label: "YouTube", href: "#", iconSrc: "/assets/youtube.svg" },
  { label: "WhatsApp", href: "#", iconSrc: "/assets/whatsapp.svg" },
  { label: "Instagram", href: "#", iconSrc: "/assets/instagram.svg" },
  { label: "Facebook", href: "#", iconSrc: "/assets/facebook.svg" },
] as const;

export const FOOTER_CREDIT = {
  text: "Design and Code by",
  brand: "ALPIN ADS",
  iconSrc: "/assets/alpin-ads-icon.svg",
  iconWidth: 158,
  iconHeight: 29,
  href: "#",
} as const;

export const FOOTER_COPYRIGHT_YEAR = 2026;
