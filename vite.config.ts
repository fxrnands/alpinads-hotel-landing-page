/// <reference types="node" />

import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function isNodeModule(id: string): boolean {
  return id.includes("node_modules");
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
    },
  },

  assetsInclude: ["**/*.svg", "**/*.csv"],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!isNodeModule(id)) {
            return undefined;
          }

          if (
            id.includes("react-dom") ||
            /\/react\//.test(id) ||
            id.includes("@radix-ui")
          ) {
            return "react-vendor";
          }

          if (id.includes("lucide-react")) {
            return "icons-vendor";
          }

          if (id.includes("date-fns") || id.includes("react-day-picker")) {
            return "date-vendor";
          }

          if (id.includes("embla-carousel")) {
            return "carousel-vendor";
          }

          if (id.includes("lenis")) {
            return "scroll-vendor";
          }

          if (id.includes("motion")) {
            return "motion-vendor";
          }

          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 400,
  },

  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    clearMocks: true,
  },
});
