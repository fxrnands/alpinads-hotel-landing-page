import { Suspense, type ReactNode } from "react";

type SectionSuspenseProps = {
  children: ReactNode;
  minHeight?: string;
};

function SectionFallback({ minHeight = "32vh" }: { minHeight: string }) {
  return <div aria-hidden className="w-full" style={{ minHeight }} />;
}

export function SectionSuspense({ children, minHeight = "32vh" }: SectionSuspenseProps) {
  return (
    <Suspense fallback={<SectionFallback minHeight={minHeight} />}>{children}</Suspense>
  );
}
