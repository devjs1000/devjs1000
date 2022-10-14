import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Home";
import Window from "./Window";

const Route = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Window />,
        },
      ],
    },
  ]);
  return routes;
};

export default Route;
