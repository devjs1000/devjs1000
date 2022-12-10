import { Flex, Show } from "@chakra-ui/react";
import Command from "../../../../features/Command";
import MiniCommandLine from "../../../../features/MiniCommandLine";

const BarLeft = () => {
  return (
    <Flex userSelect={"none"} alignItems={"center"} gap={1}>
      <Command />
      <Show above={'sm'}>
        <MiniCommandLine />
      </Show>
    </Flex>
  );
};

export default BarLeft;
