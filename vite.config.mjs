import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/atlas-ui/react/dist/" : "/",
  plugins: [react({ 
    fastRefresh: false,
    jsxRuntime: 'classic'
  })],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    cors: {
      origin: "http://localhost",
      credentials: true,
    },
    allowedHosts: ["localhost"],
    hmr: {
      clientPort: 5173,
    },
  },
  build: {
    outDir: "atlas-ui/react/dist",
    manifest: true,
    minify: true,
    rollupOptions: {
      input: {
        global: resolve(__dirname, "atlas-ui/react/static/css/global.css"),
        __main__: resolve(__dirname, "atlas-ui/react/static/js/MountPoints/__main__.js"),
        __galaxy__: resolve(__dirname, "atlas-ui/react/static/js/MountPoints/__galaxy__.js"),
        __system__: resolve(__dirname, "atlas-ui/react/static/js/MountPoints/__system__.js"),
        __planet__: resolve(__dirname, "atlas-ui/react/static/js/MountPoints/__planet__.js"),
      },
      output: {
        chunkFileNames: "atlas_[hash:21].js",
        entryFileNames: "atlas_[hash:21].js",
        assetFileNames: (assetInfo) => {
          const ext = (assetInfo.name ?? "").split(".").pop();
          return `atlas_[hash:21].${ext}`;
        },
      },
    },
  },
}));