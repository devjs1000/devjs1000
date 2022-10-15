import { Box, Button } from "@chakra-ui/react";
import React from "react";

const FloatingToast = ({ children, isOpen, onClose, others }: Props) => {
  return (
    <>
      {isOpen && (
        <>
          <Box
            pos={"fixed"}
            zIndex={2}
            right={0}
            left={0}
            top={0}
            onClick={onClose}
            w={"100vw"}
            h={"100vh"}
          />
          <Box
            zIndex={3}
            bg={"primary.600"}
            px={4}
            py={2}
            rounded={"20px"}
            pos={"absolute"}
            bottom={"70px"}
            border={"1px solid"}
            borderColor={"secondary.100"}
            backdropFilter={"blur(10px)"}
            {...others}
          >
            {children}
          </Box>
        </>
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
