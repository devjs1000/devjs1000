import { Flex } from "@chakra-ui/react";
import PopUp from "../../components/PopUp";
import useHeader from "../../hooks/helping/useHeader";
import useMount from "../../hooks/helping/useMount";
import useSelect from "../../hooks/redux/useSelect";
import { If } from "../../wrappers/Elif";

const Window = () => {
  const { changeTitle } = useHeader();
  const { wallpaper } = useSelect("system");
  const { messageVisible } = useSelect("process");
  useMount(() => changeTitle("HOME"));

  return (
    <Flex
      bgImage={wallpaper}
      className={"full-height"}
      bgRepeat={["repeat", "no-repeat"]}
      bgSize={["cover", "cover"]}
      bgPos={"center center"}
    >
      <If condition={messageVisible} show={<PopUp />} />
    </Flex>
  );
};

export default Window;
