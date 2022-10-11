import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QuizContextProvider } from "./context/QuizContext";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </StrictMode>
);
