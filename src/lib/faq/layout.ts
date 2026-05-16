/** Section background from Figma (desktop). */
export const FAQ_SECTION_BG = "#F4F3F0" as const;

/** Mobile & tablet 80px; desktop 120px. */
export const FAQ_SECTION_PADDING_CLASS = "py-[80px] lg:py-[120px]" as const;

/** Mobile: 40px between image block and accordion; desktop: 80px between columns. */
export const FAQ_COLUMNS_GAP_CLASS = "gap-10 lg:gap-[80px]" as const;

export const FAQ_TITLE_CLASS =
  "text-center text-[24px] font-normal leading-[140%] tracking-normal text-[#524A46] md:text-left md:text-[32px] md:text-[#323232] xl:text-[40px]" as const;

export const FAQ_DESCRIPTION_CLASS =
  "max-w-[640px] text-center text-[16px] font-normal leading-[140%] tracking-normal text-[#524A46]/80 lg:max-w-none lg:text-left lg:leading-[150%] lg:tracking-[-0.01em] lg:text-[#323232]/80" as const;

/** Mobile 12px; desktop 20px between accordion cards. */
export const FAQ_ACCORDION_GAP_CLASS = "gap-3 lg:gap-5" as const;

export const FAQ_ACCORDION_RADIUS_CLASS = "rounded-[8px]" as const;

export const FAQ_IMAGE_ASPECT_CLASS = "aspect-[358/240] lg:aspect-[648/330]" as const;

export const FAQ_TITLE_TO_DESCRIPTION_GAP_CLASS = "mt-6 lg:mt-4" as const;

export const FAQ_DESCRIPTION_TO_IMAGE_GAP_CLASS = "mt-10 lg:mt-8" as const;

export const FAQ_QUESTION_TEXT_CLASS =
  "text-[16px] font-normal leading-[140%] tracking-normal text-[#323232]" as const;

export const FAQ_ANSWER_TEXT_CLASS =
  "text-[16px] font-normal leading-[140%] tracking-normal text-[#323232]/80" as const;

export const FAQ_ASIDE_CLASS =
  "flex w-full flex-col items-center text-center lg:max-w-[648px] lg:flex-1 lg:items-start lg:text-left" as const;

export const FAQ_ACCORDION_ITEM_CLASS = "overflow-hidden border-0 bg-white" as const;

export const FAQ_ACCORDION_TRIGGER_CLASS =
  "items-center rounded-none px-5 py-5 hover:no-underline focus-visible:ring-[#323232]/20 [&>svg]:size-7 [&>svg]:shrink-0 [&>svg]:text-[#A49781]" as const;

export const FAQ_ACCORDION_CONTENT_CLASS = "px-5 pb-5" as const;
