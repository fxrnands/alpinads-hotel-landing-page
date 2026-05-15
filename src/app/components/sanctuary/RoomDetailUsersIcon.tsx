import { FORM_FIELD_ICONS } from "@/constants/formFieldIcons";

import { cn } from "../ui/utils";

export function RoomDetailUsersIcon({ className }: { className?: string }) {
  const src = FORM_FIELD_ICONS.users;
  return (
    <span
      className={cn("inline-block size-6 shrink-0 bg-[#A49781]", className)}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
      aria-hidden
    />
  );
}
