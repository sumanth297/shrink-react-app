import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ApiComponent from "./ApiComponent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <ApiComponent />
  </StrictMode>
);
