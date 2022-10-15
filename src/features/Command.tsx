import TIconButton from "../gui/Button/TIconButton";
import { GrReactjs } from "react-icons/gr";
import { Box, Icon, useDisclosure } from "@chakra-ui/react";
import FloatingToast from "../gui/Container/FloatingToast";
import AppMenu from "../components/AppMenu";
function Command() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <FloatingToast {...{ isOpen, onClose }}>
        <AppMenu />
      </FloatingToast>
      <TIconButton
        icon={<Icon as={GrReactjs} fontSize={20} color={"blue.500"} />}
        others={{
          "aria-label": "command",
          onClick: onToggle,
        }}
      />
    </>
  );
}

export default Command;
