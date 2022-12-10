import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import useSelect from "../../hooks/redux/useSelect";
import { hideMessage } from "../../states/process.slice";

const PopUp = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideMessage());
  };
  const { message, messageVisible } = useSelect("process");
  console.log({
    message,
    messageVisible,
  });
  return (
    <Modal
      closeOnEsc
      colorScheme={"blue"}
      isOpen={messageVisible}
      onClose={handleClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent px={4} py={8}>
        <ModalHeader>{message.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{message.description}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
