import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Root shell: full-height column. Fixed navbar lives outside `<main>` so
 * sections control their own offset (e.g. hero under transparent nav).
 */
export function MainLayout({ children }: MainLayoutProps) {
  return <div className="flex min-h-screen w-full flex-col bg-background">{children}</div>;
}
