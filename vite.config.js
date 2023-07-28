import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { imagetools } from "vite-imagetools";
export default defineConfig({
  base: "/science-lab",
  test: {
    globals: true,
  },
  build: {
    // Outdir is docs for github pages

    outDir: "./docs",
    sourcemap: true,
  },
  plugins: [vue(), imagetools(), visualizer({ open: true })],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: ` @import "./src/assets/scss/main.scss"; `,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
