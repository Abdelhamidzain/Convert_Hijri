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
    // Aggressive minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: true,
    },
    // Optimize chunking for fastest initial load
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React - loaded first
          'react-core': ['react', 'react-dom'],
          // Router - needed for navigation
          'router': ['react-router-dom'],
        },
      },
    },
    // Single CSS file for critical path
    cssCodeSplit: false,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 300,
    // Target modern browsers only
    target: 'es2020',
    // Inline small assets
    assetsInlineLimit: 4096,
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
