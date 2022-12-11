import Login from "./components/Login";
import useSelect from "./hooks/redux/useSelect";
import Route from "./pages/core/Route";
import ShutDown from "./pages/messages/ShutDown";
import { Elif } from "./wrappers/Elif";

const App = () => {
  const { isLogged, shutdown } = useSelect("process");
  return (
    <Elif
      condition={shutdown}
      True={<ShutDown />}
      False={<Elif condition={isLogged} True={<Route />} False={<Login />} />}
    />
  );
};

export default App;
