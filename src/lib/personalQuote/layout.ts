export const PERSONAL_QUOTE_OVERLAY_BG = "#0000004D" as const;

export const PERSONAL_QUOTE_SECTION_PADDING_CLASS = "py-[120px]" as const;

export const PERSONAL_QUOTE_FORM_MAX_WIDTH_CLASS = "max-w-[880px]" as const;

export const PERSONAL_QUOTE_EYEBROW_CLASS =
  "text-[14px] font-normal leading-[150%] tracking-normal text-white/90" as const;

export const PERSONAL_QUOTE_TITLE_CLASS =
  "mt-4 text-[24px] font-normal leading-[140%] tracking-normal text-white md:text-[40px]" as const;

export const PERSONAL_QUOTE_TEXTAREA_CLASS =
  "min-h-[120px] resize-none rounded-[8px] border border-[#3232321A] bg-[#FAFAFA] px-4 py-3 text-[16px] leading-[150%] text-[#323232] placeholder:text-[#323232]/40 shadow-none focus-visible:ring-[#A49781]/30" as const;

export const PERSONAL_QUOTE_DESCRIPTION_CLASS =
  "mx-auto mt-6 w-full max-w-[880px] text-[16px] font-normal leading-[150%] tracking-normal text-white" as const;

export const PERSONAL_QUOTE_CARD_CLASS = "rounded-[12px] bg-white p-3 md:p-5" as const;

/** Mobile 20px; desktop 32px between form groups (Your Details, Stay, …). */
export const PERSONAL_QUOTE_FORM_GROUPS_GAP_CLASS = "flex flex-col gap-5 md:gap-8" as const;

/** Mobile 12px; desktop 16px between group label and fields, and between fields in a group. */
export const PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS = "gap-3 md:gap-4" as const;

export const PERSONAL_QUOTE_GROUP_LABEL_CLASS =
  "text-[16px] font-normal leading-[140%] tracking-normal text-[#323232]" as const;

export const PERSONAL_QUOTE_FIELD_HEIGHT_CLASS = "min-h-[56px] h-[56px]" as const;

export const PERSONAL_QUOTE_FIELD_SHELL_CLASS =
  "flex min-h-[56px] h-[56px] w-full items-center gap-3 rounded-[8px] border border-[#3232321A] bg-white px-4" as const;

/** Lucide icons use currentColor; SVG field icons embed #323232 in the asset. */
export const PERSONAL_QUOTE_FIELD_ICON_CLASS =
  "size-6 shrink-0 object-contain text-[#323232]" as const;

export const PERSONAL_QUOTE_INPUT_CLASS =
  "min-w-0 flex-1 border-0 bg-transparent p-0 text-[16px] font-normal leading-[150%] tracking-normal text-[#323232] outline-none placeholder:text-[#323232]/40" as const;

export const PERSONAL_QUOTE_SUBMIT_CLASS =
  "flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#A49781] px-6 text-[16px] font-normal uppercase leading-[150%] tracking-[0.05em] text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A49781]/40 focus-visible:ring-offset-2 md:inline-flex md:w-auto md:max-w-[205px]" as const;

export const PERSONAL_QUOTE_SERVICE_CARD_CLASS =
  "flex min-h-[56px] h-[56px] cursor-pointer items-center gap-3 rounded-[8px] border border-[#3232321A] bg-white px-4 transition-colors has-[:checked]:border-[#A49781] has-[:checked]:bg-[#A49781]/5" as const;

export const PERSONAL_QUOTE_SELECT_TRIGGER_CLASS =
  "h-[56px] min-h-[56px] w-full rounded-[8px] border border-[#3232321A] bg-[#FAFAFA] px-4 text-[16px] leading-[140%] shadow-none [&>svg]:size-6 [&>svg]:text-black [&>svg]:opacity-100" as const;
