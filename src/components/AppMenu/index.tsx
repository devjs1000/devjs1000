import { Divider, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import TButton from "../../gui/Button";
import useSelect from "../../hooks/redux/useSelect";
import { logout } from "../../states/process.slice";
import { featuresInAppMenu } from "./featuresInAppMenu";
import { AppMenuFooter } from "./AppMenuFooter";

const AppMenu = () => {

  return (
    <Flex
      flexDir={"column"}
      px={4}
      py={4}
      width={400}
      bg={"primary.500"}
      backdropBlur={"md"}
      rounded={10}
    >
      <Heading fontWeight={"normal"} fontSize={"xl"}>
        AppMenu
      </Heading>
      <Divider mt={5} />
      <VStack p={2} rounded={10} mt={5} spacing={1}>
        {featuresInAppMenu.map((feature, _: number) => (
          <TButton
            key={_}
            title={feature.name}
            others={{
              "aria-label": feature.name,
              onClick: feature.handle,
              w: "full",
              variant: "ghost",
              fontWeight: "normal",
              justifyContent: "space-between",
              _hover: {
                bg: "secondary.900",
                color: "primary.500",
              },
              rightIcon: <Icon as={BsChevronRight} color={"gray.200"} />,
            }}
          />
        ))}
      </VStack>
      <Divider mt={5} />
      <AppMenuFooter />
    </Flex>
  );
};

export default AppMenu;
