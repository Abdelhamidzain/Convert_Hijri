import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hydrate the app - skeleton is already rendered in index.html
createRoot(document.getElementById("root")!).render(<App />);
