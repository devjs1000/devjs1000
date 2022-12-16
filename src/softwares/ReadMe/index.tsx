import React, { useEffect } from "react";
import axios from "axios";
import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import ReadMeJsx from "./ReadMeJsx";

const ReadMe = () => {
  return <Box p={4}>
    <ReadMeJsx />
  </Box>;
};

export default ReadMe;
