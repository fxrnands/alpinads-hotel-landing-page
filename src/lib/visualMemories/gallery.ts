import {
  VISUAL_MEMORIES_IMAGES,
  type VisualMemoryGalleryFilterId,
  type VisualMemoryImage,
} from "@/constants/visualMemories";

export function listVisualMemoriesGalleryImages(
  filterId: VisualMemoryGalleryFilterId,
): VisualMemoryImage[] {
  if (filterId === "all") {
    return [...VISUAL_MEMORIES_IMAGES];
  }
  return VISUAL_MEMORIES_IMAGES.filter((image) => image.galleryTags.includes(filterId));
}
