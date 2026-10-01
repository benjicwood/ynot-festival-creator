import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    base: "/ynot-poster-creator/",
    plugins: [vue()],
  };
});
