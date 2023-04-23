import React from "react";
import { RouterProvider } from "react-router-dom";
import useRouter from "./src/pages/useRouter";

const App = () => {
  const routes = useRouter();
  return <RouterProvider router={routes} />;
};

export default App;
