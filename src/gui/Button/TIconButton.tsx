import React, { ReactNode } from "react";
import { IconButton } from "@chakra-ui/react";

const TIconButton = ({ icon, others }: Props) => {
  return <IconButton  bg={'primary.900'} icon={icon} {...others} />;
};

export default TIconButton;

type Props = {
  icon?: ReactNode;
  others: any;
};
