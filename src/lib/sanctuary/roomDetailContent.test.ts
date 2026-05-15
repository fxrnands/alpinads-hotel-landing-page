import { describe, expect, it } from "vitest";

import { SANCTUARY_ROOMS } from "@/constants/sanctuaryRooms";

import { roomDetailGuestLabel, roomGalleryUrls } from "./roomDetailContent";

describe("roomDetailContent", () => {
  it("uses galleryImageUrls when provided", () => {
    const room = SANCTUARY_ROOMS.find((r) => r.id === "summit-royal-suite")!;
    expect(room.galleryImageUrls?.length).toBeGreaterThan(0);
    expect(roomGalleryUrls(room)).toEqual(room.galleryImageUrls);
  });

  it("falls back to a single image when no gallery", () => {
    const room = SANCTUARY_ROOMS.find((r) => r.id === "larch-junior-suite")!;
    expect(roomGalleryUrls(room)).toEqual([room.imageUrl]);
  });

  it("uses guestDisplayLabel when provided", () => {
    const room = SANCTUARY_ROOMS.find((r) => r.id === "summit-royal-suite")!;
    expect(roomDetailGuestLabel(room)).toBe("2 - 4 Guests");
  });
});
