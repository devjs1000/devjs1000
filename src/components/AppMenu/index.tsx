import { Divider, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import TButton from "../../gui/Button";
import { featuresInAppMenu } from "./featuresInAppMenu";
import { AppMenuFooter } from "./AppMenuFooter";
import { useDispatch } from "react-redux";

const AppMenu = () => {
  const dispatch = useDispatch();
  return (
    <Flex
      flexDir={"column"}
      px={4}
      py={4}
      width={400}
      bg={"secondary.900"}
      backdropBlur={"md"}
      rounded={10}
      color={"whiteAlpha.600"}
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
              onClick: () => feature.handle({ dispatch }),
              w: "full",
              variant: "ghost",
              fontWeight: "normal",
              justifyContent: "space-between",
              _hover: {
                bg: "secondary.900",
                color: "primary.900",
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
