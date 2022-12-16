import { Box } from "@chakra-ui/react";
import React from "react";

const AppPackage = ({
  children,
  defaultHeight,
  defaultWidth,
  description,
  icon,
  name,
  resizable,
}: AppPackageProps) => {
  const [open, setOpen] = React.useState(false);

  if (!open) return <img src={icon} alt={name} />;
  return (
    <Box
      w={defaultWidth}
      h={defaultHeight}
      bg="gray.100"
      border="1px"
      borderColor="gray.200"
      overflow={"auto"}
    ></Box>
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

export default AppPackage;
