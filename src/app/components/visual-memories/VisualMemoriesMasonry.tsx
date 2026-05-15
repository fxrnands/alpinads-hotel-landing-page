import { useVisualMemoriesMasonry } from "@/hooks/useVisualMemoriesMasonry";

import { VisualMemoriesMasonryDesktop } from "./VisualMemoriesMasonryDesktop";
import { VisualMemoriesMasonryMobile } from "./VisualMemoriesMasonryMobile";

export function VisualMemoriesMasonry() {
  const { imagesByArea, desktopGalleryStyle } = useVisualMemoriesMasonry();

  return (
    <>
      <VisualMemoriesMasonryMobile imagesByArea={imagesByArea} />
      <VisualMemoriesMasonryDesktop
        imagesByArea={imagesByArea}
        galleryStyle={desktopGalleryStyle}
      />
    </>
  );
}
