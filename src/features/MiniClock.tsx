import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useInterval from "../hooks/helping/useInterval";

const MiniClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <Box fontSize={14} color={"secondary.800"}>
      {time}
    </Box>
  );
};

export default MiniClock;
