import TIconButton from "../gui/Button/TIconButton";
import { FaWifi } from "react-icons/fa";

function Wifi() {
  return (
    <TIconButton
      icon={<FaWifi />}
      others={{
        "aria-label": "wifi",
      }}
    />
  );
}

export default Wifi;
