import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts(), tailwindcss()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ScrappyUI",
      fileName: (format) => `scrappy-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});