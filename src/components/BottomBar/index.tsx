import { Flex, Show, Spacer } from "@chakra-ui/react";
import React from "react";
import useSelect from "../../hooks/redux/useSelect";
import BarCenter from "./components/Center";
import BarLeft from "./components/Left";
import BarRight from "./components/Right";

const BottomBar = () => {
  const { bottomBar } = useSelect("system");
  if (!bottomBar) return null;
  return (
    <Flex
      px={2}
      border={"1px solid"}
      borderColor={"secondary.100"}
      bg={"primary.900"}
      backdropFilter={"blur(10px)"}
      h={"60px"}
      w={"full"}
      alignItems={"center"}
      zIndex={1000}
      position={"fixed"}
      bottom={0}
    >
      <BarLeft />
      <Spacer />
      <Show above="sm">
        <BarCenter />
      </Show>
      <Spacer />
      <BarRight />
    </Flex>
  );
};

export default BottomBar;
