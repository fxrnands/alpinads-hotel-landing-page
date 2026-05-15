/** Mobile footer layout (< lg). Desktop: layout.ts with lg: overrides only. */

export const FOOTER_MOBILE_PADDING_CLASS = "max-lg:px-[16px] max-lg:py-20" as const;

/** 64px between brand (address) and nav links below. */
export const FOOTER_MOBILE_GRID_CLASS = "max-lg:flex max-lg:flex-col max-lg:gap-[64px]" as const;

export const FOOTER_MOBILE_BRAND_COLUMN_CLASS =
  "max-lg:flex max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:text-center" as const;

/** Same logo size as desktop; centered on mobile. */
export const FOOTER_MOBILE_LOGO_CLASS = "max-lg:mx-auto max-lg:object-center" as const;

/** 24px below logo — mobile only. */
export const FOOTER_MOBILE_ADDRESS_CLASS = "max-lg:mt-[24px] max-lg:text-center" as const;

/** Links left, Legal right — not equal 50/50 columns. */
export const FOOTER_MOBILE_LINKS_LEGALS_GROUP_CLASS =
  "max-lg:flex max-lg:w-full max-lg:items-start max-lg:justify-between max-lg:gap-4" as const;

export const FOOTER_MOBILE_NAV_COLUMN_CLASS = "max-lg:w-fit max-lg:shrink-0" as const;

/** 64px between Links/Legal and Contact — mobile only. */
export const FOOTER_MOBILE_MAIN_CLASS = "max-lg:flex max-lg:w-full max-lg:flex-col max-lg:gap-[64px]" as const;

export const FOOTER_MOBILE_CONTACT_COLUMN_CLASS = "max-lg:flex max-lg:w-full max-lg:flex-col" as const;

export const FOOTER_MOBILE_CONTACT_FIELDS_CLASS = "max-lg:flex max-lg:w-full max-lg:flex-col max-lg:gap-4" as const;

export const FOOTER_MOBILE_CONTACT_FIELD_CLASS =
  "max-lg:flex max-lg:w-full max-lg:items-center max-lg:gap-3 max-lg:rounded-[8px] max-lg:border max-lg:border-white/20 max-lg:bg-transparent max-lg:px-5 max-lg:py-3" as const;

export const FOOTER_MOBILE_CONTACT_COPY_ICON_CLASS = "max-lg:text-white/20" as const;

export const FOOTER_MOBILE_DIVIDER_CLASS =
  "max-lg:mt-[64px] max-lg:mb-[20px] max-lg:border-t max-lg:border-white/10" as const;

export const FOOTER_MOBILE_CONTACT_HEADING_CLASS =
  "max-lg:font-montserrat max-lg:text-base max-lg:font-medium max-lg:leading-[150%] max-lg:tracking-normal max-lg:text-white" as const;

export const FOOTER_MOBILE_BOTTOM_CLASS =
  "max-lg:flex max-lg:flex-col max-lg:items-start max-lg:gap-[20px]" as const;

export const FOOTER_MOBILE_CREDIT_CLASS =
  "max-lg:flex max-lg:flex-col max-lg:items-start max-lg:gap-3 max-lg:text-left max-lg:text-white/70 max-lg:transition-opacity max-lg:hover:opacity-90 max-lg:focus-visible:outline-none max-lg:focus-visible:ring-2 max-lg:focus-visible:ring-white/40 max-lg:focus-visible:ring-offset-2 max-lg:focus-visible:ring-offset-[#2B2B2B]" as const;
