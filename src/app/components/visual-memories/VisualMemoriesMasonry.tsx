import { useCallback, useState } from "react";

import { useVisualMemoriesMasonry } from "@/hooks/useVisualMemoriesMasonry";

import { VisualMemoriesMasonryDesktop } from "./VisualMemoriesMasonryDesktop";
import { VisualMemoriesMasonryMobile } from "./VisualMemoriesMasonryMobile";
import { VisualMemoriesSeeAllPhotosModal } from "./VisualMemoriesSeeAllPhotosModal";

export function VisualMemoriesMasonry() {
  const { imagesByArea, desktopGalleryStyle } = useVisualMemoriesMasonry();
  const [seeAllOpen, setSeeAllOpen] = useState(false);
  const openSeeAllGallery = useCallback(() => setSeeAllOpen(true), []);

  return (
    <>
      <VisualMemoriesMasonryMobile
        imagesByArea={imagesByArea}
        onOpenSeeAllGallery={openSeeAllGallery}
      />
      <VisualMemoriesMasonryDesktop
        imagesByArea={imagesByArea}
        galleryStyle={desktopGalleryStyle}
        onOpenSeeAllGallery={openSeeAllGallery}
      />
      <VisualMemoriesSeeAllPhotosModal open={seeAllOpen} onOpenChange={setSeeAllOpen} />
    </>
  );
}
