import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunking to reduce critical path
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep React core in one chunk
          'react-vendor': ['react', 'react-dom'],
          // UI components in separate chunk (loaded lazily)
          'ui': ['@radix-ui/react-tooltip', '@radix-ui/react-toast', 'sonner'],
        },
      },
    },
    // Inline small CSS chunks
    cssCodeSplit: false,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
