import { useSyncExternalStore } from "react";

import type { RoomAmenityItem, SanctuaryRoom } from "@/constants/sanctuaryRooms";
import { useRoomDetailModalData } from "@/hooks/useRoomDetailModalData";

import { Dialog, DialogContent } from "../ui/dialog";
import { Drawer, DrawerContent } from "../ui/drawer";
import { cn } from "../ui/utils";
import { RoomDetailImageSlider } from "./RoomDetailImageSlider";
import { RoomDetailModalFooter } from "./RoomDetailModalFooter";
import { RoomDetailModalScrollContent } from "./RoomDetailModalScrollContent";

const MD_MIN_WIDTH_QUERY = "(min-width: 768px)";

function subscribeMdMinWidth(onChange: () => void) {
  const mediaQueryList = window.matchMedia(MD_MIN_WIDTH_QUERY);
  mediaQueryList.addEventListener("change", onChange);
  return () => mediaQueryList.removeEventListener("change", onChange);
}

function getMdMinWidthSnapshot() {
  return window.matchMedia(MD_MIN_WIDTH_QUERY).matches;
}

function getMdMinWidthServerSnapshot() {
  return false;
}

/** Radix dialog on desktop — real centered modal, not a repurposed drawer. */
const ROOM_DETAIL_MODAL_DIALOG_CONTENT = cn(
  "flex flex-col gap-0 overflow-hidden border-0 bg-white p-0 shadow-xl",
  "max-h-[min(100dvh-2rem,900px)] w-full max-w-[min(100vw-2rem,1393px)] rounded-[12px] py-3 pl-3 pr-5",
  "sm:max-w-[min(100vw-2rem,1393px)]",
);

const ROOM_DETAIL_MODAL_DRAWER_CONTENT = cn(
  "gap-0 overflow-hidden border-0 bg-white shadow-xl flex flex-col min-h-0",
  "!mt-0 w-full max-w-none rounded-t-[12px] rounded-b-none px-3 pt-3 pb-0",
  "h-[95dvh] max-h-[95dvh]",
);

interface RoomDetailModalMainProps {
  layout: "dialog" | "sheet";
  gallery: string[];
  room: SanctuaryRoom;
  longText: string;
  bedLabel: string;
  guestsLabel: string;
  amenities: RoomAmenityItem[];
  services: string[];
  onClose: () => void;
}

function RoomDetailModalMain({
  layout,
  gallery,
  room,
  longText,
  bedLabel,
  guestsLabel,
  amenities,
  services,
  onClose,
}: RoomDetailModalMainProps) {
  const isDialog = layout === "dialog";

  return (
    <div
      className={cn(
        "flex min-h-0 w-full flex-1 flex-col",
        isDialog && "max-h-[min(100dvh-2rem-24px,900px)] flex-row gap-8",
      )}
    >
      <div className={cn(isDialog ? "w-1/2" : "shrink-0")}>
        <RoomDetailImageSlider urls={gallery} imageAlt={room.title} />
      </div>

      <div
        className={cn(
          "scrollbar-hide flex min-h-0 min-w-0 w-full flex-1 flex-col overflow-x-hidden bg-white",
          "[scrollbar-width:none] [-ms-overflow-style:none]",
          "[&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent",
          isDialog ? "w-1/2 overflow-hidden" : "overflow-y-auto",
        )}
      >
        <RoomDetailModalScrollContent
          room={room}
          longText={longText}
          bedLabel={bedLabel}
          guestsLabel={guestsLabel}
          amenities={amenities}
          services={services}
        />
        <RoomDetailModalFooter onClose={onClose} />
      </div>
    </div>
  );
}

interface RoomDetailModalProps {
  room: SanctuaryRoom | null;
  open: boolean;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
}

export function RoomDetailModal({
  room,
  open,
  onClose,
  onOpenChange,
}: RoomDetailModalProps) {
  const isMdUp = useSyncExternalStore(
    subscribeMdMinWidth,
    getMdMinWidthSnapshot,
    getMdMinWidthServerSnapshot,
  );

  const detail = useRoomDetailModalData(room);

  if (!room || !detail) {
    return null;
  }

  const { gallery, longText, bedLabel, guestsLabel, amenities, services } = detail;

  const mainProps: Omit<RoomDetailModalMainProps, "layout"> = {
    gallery,
    room,
    longText,
    bedLabel,
    guestsLabel,
    amenities,
    services,
    onClose,
  };

  if (isMdUp) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          hideCloseButton
          className={ROOM_DETAIL_MODAL_DIALOG_CONTENT}
          aria-describedby={undefined}
          aria-labelledby="room-detail-title"
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <RoomDetailModalMain layout="dialog" {...mainProps} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      direction="bottom"
      modal
      dismissible
      shouldScaleBackground={false}
    >
      <DrawerContent
        hideDefaultHandle
        className={ROOM_DETAIL_MODAL_DRAWER_CONTENT}
        aria-describedby={undefined}
        aria-labelledby="room-detail-title"
      >
        <div
          className="pointer-events-none flex shrink-0 justify-center pb-2 pt-1"
          aria-hidden
        >
          <span className="h-1 w-10 rounded-full bg-[#E4E8E8]" />
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <RoomDetailModalMain layout="sheet" {...mainProps} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
