import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { wallpaper } from "../../assets";

const Window = () => {
  const config = {
    wallpaper,
    title: "Window",
  };
  return (
    <Flex
      bgImage={config.wallpaper}
      h={window.innerHeight - 60}
      bgRepeat="no-repeat"
      bgSize="cover"
    ></Flex>
  );
};

export default Window;
