import React from "react";
import { Button, ChakraProps } from "@chakra-ui/react";

const TButton = ({ title, others }: Props) => {
  return <Button {...others}>{title}</Button>;
};

export default TButton;

type Props = {
  title?: string;
  others?: any
};
