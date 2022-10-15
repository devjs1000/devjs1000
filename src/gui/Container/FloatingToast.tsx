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
          <Button
            zIndex={3}
            bg={"primary.900"}
            px={2}
            py={1}
            rounded={"10px"}
            pos={"absolute"}
            bottom={"70px"}
            {...others}
          >
            {children}
          </Button>
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
