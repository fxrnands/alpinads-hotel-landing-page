export const FOOTER_BG = "#2B2B2B" as const;

export const FOOTER_PADDING_CLASS = "lg:px-8 lg:pt-12 lg:pb-[60px]" as const;

/** Brand column + nav cluster; wide gap only before Links/Legals/Contact group (desktop). */
export const FOOTER_GRID_CLASS =
  "lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-x-20 xl:gap-x-[120px]" as const;

export const FOOTER_BRAND_COLUMN_CLASS = "lg:w-[224px] lg:shrink-0 lg:items-start lg:text-left" as const;

export const FOOTER_LOGO_CLASS =
  "h-[100px] w-[224px] shrink-0 object-contain" as const;

/** Links/Legals group + Contact; cluster aligns right on desktop. */
export const FOOTER_NAV_COLUMNS_CLASS =
  "lg:ml-auto lg:flex lg:w-max lg:flex-row lg:items-start lg:gap-x-[120px]" as const;

/** Links & Legals — fit-content columns, 120px between them (desktop). */
export const FOOTER_LINKS_LEGALS_GROUP_CLASS =
  "lg:grid lg:w-fit lg:grid-cols-[auto_auto] lg:gap-x-[120px] lg:gap-y-0" as const;

export const FOOTER_NAV_COLUMN_CLASS = "lg:w-fit lg:shrink-0" as const;

export const FOOTER_CONTACT_COLUMN_CLASS = "lg:w-fit lg:shrink-0" as const;

export const FOOTER_HEADING_CLASS =
  "font-manrope text-base font-normal leading-[140%] text-white" as const;

/** Links & Legals headings — Montserrat Medium 16px / 150%. */
export const FOOTER_NAV_HEADING_CLASS =
  "font-montserrat text-base font-medium leading-[150%] tracking-normal text-white" as const;

/** Vertical spacing between Links / Legals items. */
export const FOOTER_NAV_LIST_CLASS = "mt-4 flex flex-col gap-5" as const;

/** Footer nav list items — Montserrat Regular 16px / 150%, #FFFFFF @ 80%. */
export const FOOTER_NAV_LINK_CLASS =
  "font-montserrat text-base font-normal leading-[150%] tracking-normal text-white opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B2B2B]" as const;

/** Brand address — General Sans Regular 16px / 150%, #FFFFFF @ 80%. */
export const FOOTER_ADDRESS_CLASS =
  "mt-6 font-general-sans text-base font-normal leading-[150%] tracking-normal text-white opacity-80" as const;

export const FOOTER_CONTACT_FIELDS_CLASS = "flex flex-col gap-4 lg:w-[292px] lg:max-w-full" as const;

export const FOOTER_CONTACT_FIELD_CLASS =
  "flex items-center gap-3 rounded-[8px] border border-white/20 bg-transparent px-5 py-3 lg:w-[292px] lg:max-w-full" as const;

export const FOOTER_CONTACT_ICON_CLASS = "size-6 shrink-0 text-white" as const;

export const FOOTER_CONTACT_TEXT_CLASS =
  "min-w-0 flex-1 truncate font-montserrat text-base font-normal leading-[150%] tracking-normal text-white" as const;

export const FOOTER_CONTACT_COPY_ICON_CLASS = "size-[15px] shrink-0 text-[#9FA4A4]" as const;

export const FOOTER_SOCIAL_LINKS_CLASS = "mt-4 flex flex-wrap gap-5" as const;

export const FOOTER_SOCIAL_BUTTON_CLASS =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#FFFFFF33] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40" as const;

export const FOOTER_SOCIAL_ICON_CLASS = "size-4 shrink-0 object-contain" as const;

export const FOOTER_DIVIDER_CLASS = "border-t border-white/10 lg:mt-16 lg:mb-5" as const;

export const FOOTER_BOTTOM_CLASS =
  "font-manrope text-base font-normal leading-[150%] text-white/70 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4" as const;

export const FOOTER_COPYRIGHT_CLASS = "justify-self-start" as const;

export const FOOTER_CREDIT_TEXT_CLASS =
  "font-manrope text-base font-normal leading-[150%] tracking-normal text-white/70" as const;

export const FOOTER_CREDIT_LOGO_CLASS = "h-[29px] w-[158px] object-contain object-left" as const;

export const FOOTER_CREDIT_CLASS =
  "lg:grid lg:grid-cols-1 lg:gap-3 lg:justify-items-start lg:justify-self-end lg:text-left lg:text-white/70 lg:transition-opacity lg:hover:opacity-90 lg:focus-visible:outline-none lg:focus-visible:ring-2 lg:focus-visible:ring-white/40 lg:focus-visible:ring-offset-2 lg:focus-visible:ring-offset-[#2B2B2B]" as const;

