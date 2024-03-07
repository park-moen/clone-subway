import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "@/App.tsx";

import "@/styles/fonts.css";
import "@/styles/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
