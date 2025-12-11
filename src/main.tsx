import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Use hydration if pre-rendered content exists (react-snap)
if (rootElement.hasChildNodes() && rootElement.querySelector('[data-reactroot]')) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
