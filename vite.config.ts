import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only include tagger in development
    mode === "development" && (() => {
      try {
        const { componentTagger } = require("lovable-tagger");
        return componentTagger();
      } catch {
        return null;
      }
    })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Use esbuild for minification (built-in, fast)
    minify: 'esbuild',
    // Aggressive code splitting for lazy loading
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React - smallest possible initial bundle
          if (id.includes('node_modules/react-dom')) {
            return 'react-dom';
          }
          if (id.includes('node_modules/react/')) {
            return 'react';
          }
          // Router in separate chunk
          if (id.includes('react-router')) {
            return 'router';
          }
          // DateConverter and heavy logic in separate chunk
          if (id.includes('DateConverter') || id.includes('hijriConverter')) {
            return 'converter';
          }
          // SEO content lazy loaded
          if (id.includes('SEOContent')) {
            return 'seo';
          }
        },
      },
    },
    // Single CSS file - already have critical inline
    cssCodeSplit: false,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 200,
    // Target modern browsers only
    target: 'es2020',
    // Inline small assets to reduce requests
    assetsInlineLimit: 8192,
    // Source maps off for production
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: [],
  },
  // CSS optimization
  css: {
    devSourcemap: false,
  },
}));
