import { Center, Spinner, Text } from "@chakra-ui/react";
import { wallpaper } from "../../assets";

const ShutDown = () => {
  return (
    <Center bgSize={'cover'} h={"100vh"} w={"full"} pos={"fixed"} bgImage={wallpaper}>
      <Center gap={5} px={10} py={4} rounded={10} bg={'primary.500'} >
        <Spinner size={"xl"} />
        <Text>
            Shutting down...
        </Text>
      </Center>
    </Center>
  );
};

export default ShutDown;
