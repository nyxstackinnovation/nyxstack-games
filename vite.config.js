import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Same stack and output folder as the main nyxstack.com website.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build",
    // Hub files live under /hub-assets so they never collide with a game's own /assets
    // when the game is served on the same domain (games.nyxstack.com/<game>).
    assetsDir: "hub-assets",
  },
});
