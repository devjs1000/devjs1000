import { Box, Button } from "@chakra-ui/react";
import React from "react";

const FloatingToast = ({ children, isOpen, onClose, others }: Props) => {
  return (
    <>
      {isOpen && (
        <Button
          bg={"primary.900"}
          px={2}
          py={1}
          rounded={"10px"}
          pos={"absolute"}
          bottom={"70px"}
          zIndex={1}
          onBlur={onClose}
          {...others}
        >
          {children}
        </Button>
      )}
    </>
  );
};

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  others?: any;
  onClose?: () => void;
}

export default FloatingToast;
