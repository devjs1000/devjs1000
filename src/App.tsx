import Login from "./components/Login";
import useSelect from "./hooks/redux/useSelect";
import Route from "./pages/core/Route";
import Elif from "./wrappers/Elif";

const App = () => {
  const { isLogged } = useSelect("process");
  return <Elif condition={isLogged} True={<Route />} False={<Login />} />;
};

export default App;
