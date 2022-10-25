import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FloatingToast from "../gui/Container/FloatingToast";
import TButton from "../gui/Button";
import useInterval from "../hooks/helping/useInterval";

const MiniClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const {isOpen, onClose, onToggle}=useDisclosure()
  useInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <Box fontSize={14} color={"secondary.800"}>
      <FloatingToast {...{isOpen, onClose}}>
        <Box fontSize={14} fontWeight={"bold"} color={"secondary.700"}>
          {time}
        </Box>
      </FloatingToast>
      <TButton
        others={{
          height: 25,
          variant:'ghost',
          width: 100,
          fontWeight: "normal",
          fontSize: 14,
          onClick: onToggle,
        }}
        title={time}
      />
    </Box>
  );
};

export default MiniClock;
