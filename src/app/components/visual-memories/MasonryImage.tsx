import type { VisualMemoryImage } from "@/constants/visualMemories";

import { ImageWithFallback } from "../media/ImageWithFallback";

export function MasonryImage({
  image,
  alt,
}: {
  image: VisualMemoryImage;
  alt?: string;
}) {
  return (
    <ImageWithFallback
      src={image.src}
      alt={alt ?? image.alt}
      width={image.designWidth}
      height={image.designHeight}
      className="absolute inset-0 h-full w-full object-cover"
      draggable={false}
    />
  );
}
