import { createBrowserRouter } from "react-router-dom";
import World from "./world";
import Home from "./home";

const useRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/world",
      element: <World />,
    },
  ]);

  return routes;
};

export default useRouter;
