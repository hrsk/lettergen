import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";
import "overlayscrollbars/overlayscrollbars.css";

import "./index.scss";
import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";
import { osFieldPlugin } from "@/shared/ui/textarea/model/fieldPlugin";

OverlayScrollbars.plugin([ClickScrollPlugin, osFieldPlugin]);

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
