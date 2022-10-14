import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ChakraWrapper from "./wrappers/ChakraWrapper";
import ReduxWrapper from "./wrappers/ReduxWrapper";
import { BrowserRouter } from "react-router-dom";
const root = document.getElementById("root") as HTMLElement;
const Main = () => {
  return (
    <ChakraWrapper>
      <ReduxWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxWrapper>
    </ChakraWrapper>
  );
};
createRoot(root).render(<Main />);
