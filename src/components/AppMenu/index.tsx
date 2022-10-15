import {
  Avatar,
  Box,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsChevronRight, BsPower } from "react-icons/bs";
import { useDispatch } from "react-redux";
import TButton from "../../gui/Button";
import TIconButton from "../../gui/Button/TIconButton";
import useSelect from "../../hooks/redux/useSelect";
import { logout } from "../../states/process.slice";
import { IoLogOutOutline } from "react-icons/io5";

const AppMenu = () => {
  const { name, profile, email } = useSelect("user");
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleShutDown = () => {
    setTimeout(window.close, 3000);
  };
  return (
    <Flex
      flexDir={"column"}
      px={4}
      py={4}
      width={400}
      bg={"primary.500"}
      backdropBlur={"md"}
      rounded={10}
    >
      <Heading fontWeight={"normal"} fontSize={"xl"}>
        AppMenu
      </Heading>
      <Divider mt={5} />
      <VStack p={2} rounded={10} mt={5} spacing={1}>
        {featuresInAppMenu.map((feature, _: number) => (
          <TButton
            key={_}
            title={feature.name}
            others={{
              "aria-label": feature.name,
              onClick: feature.handle,
              w: "full",
              variant: "ghost",
              fontWeight: "normal",
              justifyContent: "space-between",
              _hover: {
                bg: "secondary.900",
                color: "primary.500",
              },
              rightIcon: <Icon as={BsChevronRight} color={"gray.200"} />,
            }}
          />
        ))}
      </VStack>
      <Divider mt={5} />
      <Flex mt={5} alignItems={"center"} justifyContent={"space-between"}>
        <Center gap={2}>
          <Avatar size={"sm"} name={name} src={profile} />
          <Box>
            <Text fontWeight={"normal"}>{name}</Text>
            <Text fontWeight={"light"} fontSize={"xs"} color={"gray.500"}>
              {email}
            </Text>
          </Box>
        </Center>
        <ButtonGroup variant={"outline"}>
          <TIconButton
            icon={<IoLogOutOutline />}
            others={{ "aria-label": "arrow", onClick: handleLogout }}
          />
          <TIconButton
            icon={<BsPower />}
            others={{ "aria-label": "arrow", onClick: handleShutDown }}
          />
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default AppMenu;

const featuresInAppMenu = [
  {
    name: "Command",
    description: "Command",
    handle: () => {},
  },
  {
    name: "Settings",
    description: "Settings",
    handle: () => {},
  },
  {
    name: "About",
    description: "About",
    handle: () => {},
  },
];
