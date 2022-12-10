import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { wallpaper } from "../../assets";
import PopUp from "../../components/PopUp";
import useHeader from "../../hooks/helping/useHeader";
import useMount from "../../hooks/helping/useMount";
import useSelect from "../../hooks/redux/useSelect";
import { showMessage } from "../../states/process.slice";
import { If } from "../../wrappers/Elif";

const Window = () => {
  const { changeTitle } = useHeader();
  const { wallpaper } = useSelect("system");
  const { messageVisible, message } = useSelect("process");
  const dispatch = useDispatch();
  useMount(() => {
    changeTitle("HOME");
    dispatch(
      showMessage({
        title: "hello",
        variant: "info",
        description:'description'
      })
    );
  });

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
