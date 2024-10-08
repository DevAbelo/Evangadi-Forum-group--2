import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContext from "./Context/Datacontext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </StrictMode>
);
