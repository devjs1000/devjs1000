import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "../static";

const extendedTheme = extendTheme(theme);

const ChakraWrapper = ({ children }: Props) => {
  return <ChakraProvider theme={extendedTheme}>{children}</ChakraProvider>;
};

export default ChakraWrapper;

interface Props {
  children: React.ReactNode;
}
