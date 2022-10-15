import TIconButton from "../gui/Button/TIconButton";
import { BiWifiOff, BiWifi } from "react-icons/bi";
import { Box, useDisclosure } from "@chakra-ui/react";
import FloatingToast from "../gui/Container/FloatingToast";
import useSelect from "../hooks/redux/useSelect";

function Wifi() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { isOnline } = useSelect("system");
  return (
    <>
      <FloatingToast {...{ isOpen, onClose }}>
        <Box>{isOnline ? "Online" : "Offline"}</Box>
      </FloatingToast>
      <TIconButton
        icon={isOnline ? <BiWifi /> : <BiWifiOff />}
        others={{
          "aria-label": "wifi",
          onClick: onToggle,
        }}
      />
    </>
  );
}

export default Wifi;
