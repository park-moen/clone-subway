import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "@/App.tsx";

import "@/styles/_fonts.css";
import "@/styles/_reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
