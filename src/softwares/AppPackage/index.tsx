import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AppPackage = ({
  children,
  defaultHeight,
  defaultWidth,
  description,
  icon,
  name,
  resizable,
}: AppPackageProps) => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleVisibility = () => {
    setOpen(false);
  };
  const toggleMaximise = () => {};
  if (!open)
    return (
      <Avatar
        cursor={"pointer"}
        src={icon}
        onClick={() => setOpen(true)}
        name={name}
      />
    );
  return (
    <Flex
      {...(resizable
        ? { resize: "both" }
        : { resize: "none", h: defaultHeight, w: defaultWidth })}
      direction={"column"}
      overflow={"auto"}
      className={"max-height"}
      bg={"white"}
      border="1px"
    >
      <Center userSelect={"none"} gap={4} px={2} py={2} bg={"primary.900"}>
        <Avatar src={icon} name={name} />
        <HStack>
          <Text fontWeight={"bold"}>{name}</Text>-<Text>{description}</Text>
        </HStack>
        <Spacer />
        <Center>
          <TaskBarButton onClick={handleClose} color={"red"} icon={FaTimes} />
          <TaskBarButton
            onClick={toggleMaximise}
            color={"gray"}
            icon={FaPlus}
          />
          <TaskBarButton
            onClick={handleVisibility}
            color={"gray"}
            icon={FaMinus}
          />
        </Center>
      </Center>
      <Box bg="gray.100" border="1px" borderColor="gray.200" overflow={"auto"}>
        {children}
        
      </Box>
    </Flex>
  );
};

interface AppPackageProps {
  children: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
  resizable?: boolean;
  icon?: string;
  name?: string;
  description?: string;
}

const TaskBarButton = ({ icon, color, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      rounded={0}
      colorScheme={color}
      aria-label={"task bar actions"}
    >
      <Icon as={icon} />
    </IconButton>
  );
};

export default AppPackage;
