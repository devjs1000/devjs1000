import TIconButton from "../gui/Button/TIconButton";
import { FaBatteryHalf } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import FloatingToast from "../gui/Container/FloatingToast";
import { useEffect } from "react";
import useBattery from "../hooks/helping/useBattery";

function Battery({ open = true }: Props) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const battery = useBattery();
  return (
    <>
      <FloatingToast {...{ isOpen, onClose }}>
        <div>{battery.level}%</div>
      </FloatingToast>
      <TIconButton
        icon={<FaBatteryHalf />}
        others={{
          "aria-label": "wifi",
          onClick: onToggle,
        }}
      />
    </>
  );
}

interface Props {
  open?: boolean;
}

export default Battery;
