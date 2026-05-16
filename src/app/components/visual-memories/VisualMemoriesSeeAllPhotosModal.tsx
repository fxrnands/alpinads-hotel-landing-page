"use client";

import { ArrowLeft, ArrowRight, XIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  VISUAL_MEMORIES_GALLERY_FILTERS,
  VISUAL_MEMORIES_IMAGES,
  type VisualMemoryGalleryFilterId,
} from "@/constants/visualMemories";
import { listVisualMemoriesGalleryImages } from "@/lib/visualMemories";

import { ImageWithFallback } from "../media/ImageWithFallback";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "../ui/dialog";
import { cn } from "../ui/utils";

const GALLERY_MAIN_WIDTH_PX = 863;
const GALLERY_MAIN_HEIGHT_PX = 687;

/** Mobile: at most ~4 thumbs (83.5px) + 3×8px gaps visible; row scrolls horizontally. */
const MOBILE_THUMB_STRIP_MAX_WIDTH_CLASS =
  "max-md:max-w-[min(calc(100vw-32px),calc(83.5px*4+8px*3))]";

/** Symmetric inset so scroll ends align with hero edges (same calc as hero `max-w` centering). */
const MOBILE_FILTER_TRACK_EDGE_PAD =
  "max-md:px-[calc((100vw-min(358px,calc(100vw-32px)))/2)]";
/** Pulls full-width scroller so its left edge matches viewport (pairs with edge pad). */
const MOBILE_FILTER_TRACK_OUTDENT = "max-md:-ml-[calc((100vw-min(358px,calc(100vw-32px)))/2)]";

const GALLERY_NAV_BUTTON_CLASS = cn(
  "inline-flex size-[45px] shrink-0 items-center justify-center rounded-lg border-0 p-0",
  "bg-[#FFFFFF] text-[#323232] backdrop-blur-[20px]",
  "transition-opacity duration-200",
  "enabled:hover:opacity-90",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
);

const FILTER_PILL_CLASS = "rounded-[12px] px-5 py-3 text-[14px] font-normal leading-[150%] transition-colors";

const DIALOG_SURFACE_CLASS = cn(
  "fixed inset-0 z-50 flex min-h-0 min-w-full w-full max-w-none flex-col border-0 bg-transparent p-0 shadow-none",
  "h-[100dvh] max-h-[100dvh] translate-x-0 translate-y-0 gap-0 overflow-hidden rounded-none",
  "sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-none 2xl:max-w-none",
  "sm:h-screen sm:max-h-none",
);

interface VisualMemoriesSeeAllPhotosModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VisualMemoriesSeeAllPhotosModal({
  open,
  onOpenChange,
}: VisualMemoriesSeeAllPhotosModalProps) {
  const [filterId, setFilterId] = useState<VisualMemoryGalleryFilterId>("all");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      return;
    }
    setFilterId("all");
    setActiveIndex(0);
  }, [open]);

  const images = useMemo(() => {
    const list = listVisualMemoriesGalleryImages(filterId);
    return list.length > 0 ? list : [...VISUAL_MEMORIES_IMAGES];
  }, [filterId]);

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, Math.max(0, images.length - 1)));
  }, [images.length]);

  const current = images[activeIndex] ?? images[0];

  const thumbnailItems = useMemo(
    () =>
      images
        .map((image, index) => ({ image, index }))
        .filter(({ index }) => index !== activeIndex),
    [images, activeIndex],
  );

  const selectFilter = useCallback((next: VisualMemoryGalleryFilterId) => {
    setFilterId(next);
    setActiveIndex(0);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => Math.min(images.length - 1, i + 1));
  }, [images.length]);

  if (!current) {
    return null;
  }

  const positionLabel = `${activeIndex + 1} / ${images.length}`;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < images.length - 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        className={DIALOG_SURFACE_CLASS}
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Visual memories photo gallery</DialogTitle>

        <DialogClose asChild>
          <button
            type="button"
            className="absolute top-5 right-5 z-20 inline-flex size-[28px] items-center justify-center rounded-none p-0 text-white transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none md:top-[22px] md:right-[22px]"
            aria-label="Close gallery"
          >
            <XIcon className="size-[28px]" strokeWidth={1.5} aria-hidden />
          </button>
        </DialogClose>

        <div className="relative z-10 flex h-full min-h-0 flex-col">
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-8 md:px-8">
            <div
              className="flex w-full max-w-[min(920px,calc(100vw-32px))] shrink-0 flex-col items-center gap-0 max-md:max-w-[min(358px,calc(100vw-32px))] max-md:overflow-x-visible"
              role="presentation"
            >
              <div
                className={cn(
                  "z-[1] w-full shrink-0",
                  "max-md:relative max-md:mb-4 max-md:self-start max-md:overflow-visible",
                  "md:mb-4 md:w-full",
                )}
              >
                <div
                  className={cn(
                    "scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent",
                    MOBILE_FILTER_TRACK_OUTDENT,
                    "max-md:relative max-md:w-screen max-md:max-w-none max-md:overflow-x-auto max-md:scroll-smooth max-md:touch-pan-x",
                    "md:w-full md:overflow-visible",
                  )}
                >
                  <div
                    className={cn(
                      "flex gap-3",
                      MOBILE_FILTER_TRACK_EDGE_PAD,
                      "max-md:w-max max-md:flex-nowrap max-md:justify-start",
                      "md:w-full md:flex-wrap md:justify-center md:px-0",
                    )}
                    role="group"
                    aria-label="Filter photos by category"
                  >
                    {VISUAL_MEMORIES_GALLERY_FILTERS.map(({ id, label }) => {
                      const isActive = filterId === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={isActive}
                          className={cn(
                            FILTER_PILL_CLASS,
                            "shrink-0 whitespace-nowrap",
                            isActive
                              ? "bg-white text-[#323232]"
                              : "border border-white bg-transparent text-white",
                          )}
                          onClick={() => selectFilter(id)}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "relative mb-2 w-full shrink-0 overflow-hidden rounded-none bg-black/20 md:mb-4",
                  "max-md:aspect-[358/400] max-md:max-h-[min(400px,calc(100dvh-280px))] max-md:max-w-[min(358px,calc(100vw-32px))]",
                  "md:aspect-[863/687] md:max-h-[min(687px,calc(100dvh-360px))] md:max-w-[min(863px,calc(100vw-32px))]",
                )}
              >
                <div
                  key={current.id}
                  className="animate-in fade-in-0 zoom-in-95 absolute inset-0 duration-300"
                >
                  <ImageWithFallback
                    src={current.src}
                    alt={current.alt}
                    width={GALLERY_MAIN_WIDTH_PX}
                    height={GALLERY_MAIN_HEIGHT_PX}
                    sizes="(max-width: 767px) min(358px, 100vw), min(863px, 100vw)"
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>

              <div
                className={cn(
                  "flex shrink-0 gap-2 overflow-x-auto scroll-smooth max-md:pb-0 md:gap-4 md:pb-1 [scrollbar-width:thin]",
                  MOBILE_THUMB_STRIP_MAX_WIDTH_CLASS,
                  "max-md:mx-auto max-md:w-full max-md:justify-start",
                  "md:w-full md:max-w-[min(863px,calc(100vw-32px))] md:justify-center",
                )}
                aria-label="Other photos in this gallery"
              >
                {thumbnailItems.map(({ image, index }) => (
                  <button
                    key={image.id}
                    type="button"
                    className={cn(
                      "relative aspect-square shrink-0 overflow-hidden rounded-none opacity-90 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none",
                      "max-md:size-[83.5px]",
                      "md:size-[94px]",
                    )}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${image.alt}`}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt=""
                      width={188}
                      height={188}
                      sizes="(max-width: 767px) 84px, 94px"
                      className="absolute inset-0 h-full w-full object-cover"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>

              <footer className="mt-4 flex w-full shrink-0 items-center justify-center gap-10 pb-[max(28px,env(safe-area-inset-bottom))] md:mt-8">
                <button
                  type="button"
                  className={GALLERY_NAV_BUTTON_CLASS}
                  aria-label="Previous photo"
                  disabled={!canGoPrev}
                  onClick={goPrev}
                >
                  <ArrowLeft className="size-[18px]" strokeWidth={1.75} aria-hidden />
                </button>
                <span className="min-w-[4rem] text-center text-[20px] font-normal tabular-nums leading-none text-white">
                  {positionLabel}
                </span>
                <button
                  type="button"
                  className={GALLERY_NAV_BUTTON_CLASS}
                  aria-label="Next photo"
                  disabled={!canGoNext}
                  onClick={goNext}
                >
                  <ArrowRight className="size-[18px]" strokeWidth={1.75} aria-hidden />
                </button>
              </footer>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
