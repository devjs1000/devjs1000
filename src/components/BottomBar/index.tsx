import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import BarCenter from "./components/Center";
import BarLeft from "./components/Left";
import BarRight from "./components/Right";

const BottomBar = () => {
  return (
    <Flex
      px={2}
      border={"1px solid"}
      borderColor={"secondary.100"}
      bg={"primary.900"}
      h={"60px"}
      w={"full"}
      alignItems={"center"}
    >
      <BarLeft />
      <Spacer />
      <BarCenter />
      <Spacer />
      <BarRight />
    </Flex>
  );
};

export default BottomBar;
