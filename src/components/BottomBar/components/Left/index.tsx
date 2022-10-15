import { Flex } from "@chakra-ui/react";
import Command from "../../../../features/Command";

const BarLeft = () => {
  return (
    <Flex userSelect={"none"} alignItems={"center"} gap={1}>
      <Command />
    </Flex>
  );
};

export default BarLeft;
