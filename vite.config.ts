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
    // Use esbuild for minification (built-in, no extra dependency)
    minify: 'esbuild',
    // Aggressive esbuild settings for smaller output
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
      legalComments: 'none',
      treeShaking: true,
    },
    // Optimize chunking - keep CSS small
    rollupOptions: {
      output: {
        // Inline smaller chunks to reduce requests
        inlineDynamicImports: false,
        manualChunks: (id) => {
          // Core React in one chunk
          if (id.includes('node_modules/react')) {
            return 'react';
          }
          // Router separate
          if (id.includes('react-router')) {
            return 'router';
          }
        },
      },
    },
    // CRITICAL: Split CSS so we can defer non-critical styles
    cssCodeSplit: true,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 200,
    // Target modern browsers only - smaller output
    target: 'esnext',
    // Inline small assets to reduce requests
    assetsInlineLimit: 8192,
    // Faster source map generation
    sourcemap: false,
  },
  // Pre-bundle dependencies for faster dev
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // CSS optimization
  css: {
    devSourcemap: false,
    // Minify CSS
    postcss: {},
  },
}));
