import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es", "cjs"],
      fileName: (format) => format === "es" ? "index.es.js" : "index.js",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "prop-types",
        "styled-components",
        "react-markdown",
        "react-player",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "prop-types": "PropTypes",
          "styled-components": "styled",
        },
      },
    },
    sourcemap: true,
    cssCodeSplit: false,
  },
});
