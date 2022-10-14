import { Center, Flex, VStack } from "@chakra-ui/react";
import Sound from "../../../../features/Sound";
import Wifi from "../../../../features/Wifi";
import Battery from "../../../../features/Battery";
import MiniClock from "../../../../features/MiniClock";
import MiniCalendar from "../../../../features/MiniCalendar";

const BarRight = () => {
  return (
    <Flex userSelect={'none'}  alignItems={'center'} gap={1}>
      <Wifi />
      <Sound />
      <Battery />
      <Center bg={'white'} justifyContent={'center'}  px={4} rounded={4} flexDir={'column'}>
        <MiniClock />
        <MiniCalendar />
      </Center>
    </Flex>
  );
};

export default BarRight;
