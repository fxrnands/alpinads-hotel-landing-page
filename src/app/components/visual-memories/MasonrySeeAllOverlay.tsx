import { Images } from "lucide-react";

export function MasonrySeeAllOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#00000099]">
      <div className="flex items-center gap-3">
        <Images
          className="size-6 shrink-0 text-white md:size-8"
          strokeWidth={1.5}
          aria-hidden
        />
        <span className="text-[16px] font-normal leading-[150%] text-white underline underline-offset-4 md:text-[24px]">
          See All Photos
        </span>
      </div>
    </div>
  );
}
