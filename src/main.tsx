import { createRoot } from "react-dom/client";
import './i18n';
import App from "./App.tsx";
import "./index.css";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(<App />);
