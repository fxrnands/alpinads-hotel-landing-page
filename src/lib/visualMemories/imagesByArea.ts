import {
  VISUAL_MEMORIES_IMAGES,
  type VisualMemoryGridArea,
  type VisualMemoryImage,
} from "@/constants/visualMemories";

export type VisualMemoriesImagesByArea = Record<VisualMemoryGridArea, VisualMemoryImage>;

export const VISUAL_MEMORIES_BY_AREA = Object.fromEntries(
  VISUAL_MEMORIES_IMAGES.map((image) => [image.area, image]),
) as VisualMemoriesImagesByArea;
