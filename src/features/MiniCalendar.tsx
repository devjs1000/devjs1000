import { Box, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "../softwares/Calendar";
import TButton from "../gui/Button";
import FloatingToast from "../gui/Container/FloatingToast";
import useInterval from "../hooks/helping/useInterval";

const MiniCalendar = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const { isOpen, onToggle, onClose } = useDisclosure();
  useInterval(() => {
    setDate(new Date().toLocaleDateString());
  }, 1000);

  return (
    <Box fontSize={14} fontWeight={"bold"} color={"secondary.700"}>
      <FloatingToast
        others={{
          position: "fixed",
          bottom: '30px',
          right: 2,
          height: 350,
          alignItems: "start",
          my:10
        }}
        {...{ isOpen, onClose }}
      >
        <Calendar date={date} />
      </FloatingToast>
      <TButton
        others={{
          height: 25,
          width: 100,
          variant:'ghost',
          fontWeight: "normal",
          fontSize: 16,
          onClick: onToggle,
        }}
        title={date}
      />
    </Box>
  );
};

export default MiniCalendar;
