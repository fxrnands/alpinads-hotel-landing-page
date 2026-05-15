import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export function useRoomDetailImageCarousel(urls: string[]) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: urls.length > 1,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return {
    emblaRef,
    selectedIndex,
    scrollPrev,
    scrollNext,
    showNav: urls.length > 1,
  };
}
