import { AppRoutes } from "@/app";
import { osFieldPlugin } from "@/shared/ui/textarea/model/fieldPlugin";
import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

OverlayScrollbars.plugin([ClickScrollPlugin, osFieldPlugin]);

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
