import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ MUST be "/" for Render or any Node server
  server: {
    port: 5173,
  },
});
