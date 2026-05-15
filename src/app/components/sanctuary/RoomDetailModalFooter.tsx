import { Button } from "../ui/button";

interface RoomDetailModalFooterProps {
  onClose: () => void;
}

export function RoomDetailModalFooter({ onClose }: RoomDetailModalFooterProps) {
  return (
    <div className="flex w-full shrink-0 gap-3 bg-white px-1 pt-3 max-md:pt-4 pb-[max(16px,env(safe-area-inset-bottom))] md:pb-[8px] md:pt-0">
      <Button
        type="button"
        onClick={onClose}
        className="h-12 min-h-0 min-w-0 flex-1 shrink basis-0 rounded-[12px] border border-solid border-[#32323233] bg-white px-3 font-manrope text-[14px] font-normal uppercase leading-[150%] tracking-[0.05em] text-[#323232] hover:bg-[#323232]/5"
      >
        Close
      </Button>
      <Button
        type="button"
        className="h-12 min-h-0 min-w-0 flex-1 shrink basis-0 rounded-[12px] border border-solid border-[#A49781] bg-[#A49781] px-3 font-manrope text-[14px] font-normal uppercase leading-[150%] tracking-[0.05em] text-white hover:bg-[#A49781]/90"
      >
        Reserve this suite
      </Button>
    </div>
  );
}
