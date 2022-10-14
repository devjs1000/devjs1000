import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const TContainer = ({ children, others }: Props) => {
  return (
    <Box
      bg={"primary.300"}
      borderRadius={4}
      backdropFilter={"blur(10px)"}
      margin={2}
      {...others}
    >
      {children}
    </Box>
  );
};

export default TContainer;

interface Props {
  children: ReactNode;
  others?: any;
}
