import { Flex } from "@chakra-ui/react";
import { wallpaper } from "../../assets";
import useHeader from "../../hooks/helping/useHeader";
import useMount from "../../hooks/helping/useMount";
import useSelect from "../../hooks/redux/useSelect";

const Window = () => {
  const { changeTitle } = useHeader();
  const { wallpaper } = useSelect("system");
  useMount(() => changeTitle("HOME"));

  return (
    <Flex
      bgImage={wallpaper}
      style={{
        height: "92vh",
      }}
      bgRepeat={["repeat", "no-repeat"]}
      bgSize={["cover", "cover"]}
      bgPos={"center center"}
    ></Flex>
  );
};

export default Window;
