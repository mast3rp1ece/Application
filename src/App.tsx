import React from "react";
import { createRoot } from "react-dom/client";
import { InitialComponent } from "./components/InitialComponent";

const appElement = document.getElementById("root");

if (!appElement) {
  throw new Error("App root element not found");
}

const root = createRoot(appElement);

root.render(
  <React.StrictMode>
    <InitialComponent />
  </React.StrictMode>,
);
