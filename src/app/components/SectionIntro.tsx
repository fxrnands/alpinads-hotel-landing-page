import { cn } from "./ui/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  /** Desktop alignment; mobile stays centered. */
  desktopAlign?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  desktopAlign = "left",
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-full flex-col items-center gap-0 text-center",
        desktopAlign === "center"
          ? "md:mx-auto md:max-w-[720px] md:items-center md:gap-6 md:text-center"
          : "md:max-w-[77vw] md:items-start md:gap-6 md:text-left",
        className,
      )}
    >
      <div className="pb-[21px] font-manrope text-[14px] font-normal leading-[150%] tracking-normal text-[#524A46] md:mb-3 md:pb-0 md:text-base md:text-[#323232]">
        {eyebrow}
      </div>
      <h2 className="pb-6 font-manrope text-[24px] font-normal leading-[140%] tracking-normal text-[#524A46] md:mb-6 md:pb-0 md:text-[40px] md:text-[#323232]">
        {title}
      </h2>
      <p className="max-w-[640px] pb-10 font-manrope text-[16px] font-normal leading-[140%] tracking-normal text-[#524A46] md:max-w-none md:pb-0 md:text-base md:leading-[150%] md:text-[#323232]">
        {description}
      </p>
    </div>
  );
}
