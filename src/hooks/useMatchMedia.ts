import { useLayoutEffect, useState } from "react";

function getMatchMedia(query: string): MediaQueryList | null {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return null;
  }

  return window.matchMedia(query);
}

export function useMatchMedia(query: string): boolean {
  const [matches, setMatches] = useState(
    () => getMatchMedia(query)?.matches ?? false,
  );

  useLayoutEffect(() => {
    const media = getMatchMedia(query);
    if (!media) {
      return undefined;
    }

    const sync = () => setMatches(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [query]);

  return matches;
}
