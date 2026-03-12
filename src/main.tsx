import { AppRoutes } from "@/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@hrsk/lettergen-ui-kit/dist/index.css";
import "./index.scss";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
