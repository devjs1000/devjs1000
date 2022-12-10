import { Flex } from "@chakra-ui/react";
import { wallpaper } from "../../assets";
import useHeader from "../../hooks/helping/useHeader";
import useMount from "../../hooks/helping/useMount";

const Window = () => {
  const { changeTitle } = useHeader();
  const config = {
    wallpaper,
    title: "Window",
  };

  useMount(() => changeTitle(config.title));

  return (
    <Flex
      bgImage={config.wallpaper}
      h={window.innerHeight - 60}
      bgRepeat="no-repeat"
      bgSize="cover"
    ></Flex>
  );
};

export default Window;
