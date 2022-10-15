import { Box } from "@chakra-ui/react";
import React from "react";

const Clock = ({ time }: Props) => {
  return <Box>{time}</Box>;
};

interface Props {
  time: string;
}

export default Clock;
