import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

document.addEventListener("turbo:load", () => {
  const mainElement = document.createElement("div");
  mainElement.setAttribute("id", "root");

  const root = createRoot(document.body.appendChild(mainElement));
  root.render(<App />);
});
