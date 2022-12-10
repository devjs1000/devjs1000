import { Avatar, Box, ButtonGroup, Center, Flex, Text } from "@chakra-ui/react";
import { BsPower } from "react-icons/bs";
import TIconButton from "../../gui/Button/TIconButton";
import { IoLogOutOutline } from "react-icons/io5";
import { logout, shutdown } from "../../states/process.slice";
import { useDispatch } from "react-redux";
import useSelect from "../../hooks/redux/useSelect";

export function AppMenuFooter() {
  const { name, profile, email } = useSelect("user");
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleShutDown = () => {
    dispatch(shutdown());
    setTimeout(window.close, 3000);
  };

  return (
    <Flex mt={5} alignItems={"center"} justifyContent={"space-between"}>
      <Center gap={2}>
        <Avatar size={"sm"} name={name} src={profile} />
        <Box>
          <Text color={"gray.300"} fontWeight={"normal"}>
            {name}
          </Text>
          <Text fontWeight={"light"} fontSize={"xs"} color={"gray.200"}>
            {email}
          </Text>
        </Box>
      </Center>
      <ButtonGroup variant={"outline"}>
        <TIconButton
          icon={<IoLogOutOutline />}
          others={{
            "aria-label": "arrow",
            bg: "black",
            _hover: {
              bg: "white",
              color: "black",
            },
            onClick: handleLogout,
          }}
        />
        <TIconButton
          icon={<BsPower />}
          others={{
            "aria-label": "arrow",
            bg: "black",
            _hover: {
              bg: "white",
              color: "black",
            },
            onClick: handleShutDown,
          }}
        />
      </ButtonGroup>
    </Flex>
  );
}
