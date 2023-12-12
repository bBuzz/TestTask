import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/static": {
        target: "http://167.71.69.158",
      },
    },
  },
  plugins: [react()],
});
