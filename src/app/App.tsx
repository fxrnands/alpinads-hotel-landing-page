import { Toaster } from "./components/ui/sonner";
import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";

export default function App() {
  return (
    <MainLayout>
      <main className="flex-1" id="main-content">
        <LandingPage />
      </main>
      <Toaster />
    </MainLayout>
  );
}
