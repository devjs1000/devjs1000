import React from "react";
import { Input } from "@chakra-ui/react";

const TInput = ({ value, onChange, placeholder, ...others }: Props) => {
  return <Input bg={'primary.500'} {...{ placeholder, onChange, value, ...others }} />;
};

export default TInput;

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
