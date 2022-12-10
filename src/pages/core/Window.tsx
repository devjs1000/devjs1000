import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { wallpaper } from "../../assets";
import useHeader from "../../hooks/helping/useHeader";
import useMount from "../../hooks/helping/useMount";
import useSelect from "../../hooks/redux/useSelect";
import { If } from "../../wrappers/Elif";

const Window = () => {
  const { changeTitle } = useHeader();
  const { wallpaper } = useSelect("system");
  const { showMessage, message } = useSelect("process");
  const dispatch = useDispatch();
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
    >
      <If condition={showMessage} show={<>fdkf</>} />
    </Flex>
  );
};

export default Window;
