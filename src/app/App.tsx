import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Toaster } from "sonner";

import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <MainLayout>
        <main className="flex-1" id="main-content">
          <LandingPage />
        </main>
      </MainLayout>
      <Toaster richColors closeButton position="top-center" />
    </>
  );
}
