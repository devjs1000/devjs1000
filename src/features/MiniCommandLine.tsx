import { Box, Icon, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TButton from "../gui/Button";
import FloatingToast from "../gui/Container/FloatingToast";
import TInput from "../gui/Input";
import { logout } from "../states/process.slice";

const MiniCommandLine = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminal(e.target.value);
  };
  const handleFocus = () => {
    onOpen();
  };

  const [terminal, setTerminal] = useState("");

  const handleAction = ({ action, type, data }: Option) => {
    switch (type) {
      case "navigate":
        navigate(data);
        break;
      case "action":
        dispatch(action());
        break;
    }
  };

  const clearTerminal = (e: any) => {
    setTerminal("");
  };
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const option = options.find((o) =>
        o.name?.toLowerCase()?.includes(terminal?.toLowerCase())
      );
      if (option) {
        handleAction(option);
      } else {
        onOpen();
      }
    }
  };

  return (
    <>
      <FloatingToast
        {...{
          isOpen,
          onClose,
          others: {
            w: "300px",
            h: "auto ",
            rounded: "md",
            bg: "secondary.500",
          },
        }}
      >
        <Box>
          {options.map((option, index) => {
            if (
              !option?.name?.toLowerCase()?.includes(terminal?.toLowerCase())
            ) {
              return null;
            }
            return <ActionButton {...{ option, handleAction }} key={index} />;
          })}

          {!options.find((o) =>
            o.name?.toLowerCase()?.includes(terminal?.toLowerCase())
          ) && (
            <ActionButton
              {...{
                option: { name: "Clear", icon: FaTrash },
                handleAction: clearTerminal,
              }}
            />
          )}
        </Box>
      </FloatingToast>
      <TInput
        others={{
          bg: "secondary.900",
          color: "primary.900",
          onChange: handleChange,
          onFocus: handleFocus,
          onKeyPress: handleEnterPress,
          value: terminal,
        }}
        placeholder="open terminal"
      />
    </>
  );
};

interface Option {
  name?: string;
  action?: any;
  type?: string;
  data?: any;
  icon?: any;
}

const options: Option[] = [
  { icon: FaHome, name: "Home", action: () => {}, type: "navigate", data: "/" },
  { icon: BiLogOut, name: "Logout", action: logout, type: "action", data: "" },
];

interface ActionButtonType {
  option: Option;
  handleAction: (option: Option) => void;
}

const ActionButton = ({ option, handleAction }: ActionButtonType) => {
  return (
    <TButton
      {...{
        title: option.name,
        others: {
          onClick: () =>
            handleAction({
              action: option.action,
              type: option.type,
              data: option.data,
            }),
          w: "full",
          my: "2px",
          color: "primary.500",
          bg: "secondary.800",
          variant: "ghost",
          borderColor: "secondary.200",
          borderBottomWidth: "3px",
          rounded: "none",
          _hover: {
            color: "primary.800",
            bg: "secondary.100",
          },
          backdropFilter: "blur(10px)",
          justifyContent: "space-between",
          rightIcon: <Icon as={option.icon} />,
        },
      }}
    >
      {option.name}
    </TButton>
  );
};

export default MiniCommandLine;
