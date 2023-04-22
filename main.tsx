import { createRoot } from "react-dom/client";
import App from "./App";
import "./src/styles/tailwind.css";
import React from "react";

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(<App />);
