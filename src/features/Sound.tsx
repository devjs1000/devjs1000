import TIconButton from "../gui/Button/TIconButton";
import { FaVolumeUp } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import FloatingToast from "../gui/Container/FloatingToast";
import TSlider from "../gui/Input/Slider";
import useSelect from "../hooks/redux/useSelect";
import { useDispatch } from "react-redux";
import { setVolume } from "../states/system.slice";

function Sound({ open = true }: Props) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { volume } = useSelect("system");
  const dispatch = useDispatch();
  const handleChange = async (value: number) => {
    await dispatch(setVolume(value));
  };
  return (
    <>
      <FloatingToast
        others={{
          width: "200px",
        }}
        {...{ onClose, isOpen: isOpen && open }}
      >
        <TSlider
          value={volume}
          others={{
            onChange: handleChange,
          }}
        />
      </FloatingToast>

      <TIconButton
        icon={<FaVolumeUp />}
        others={{
          "aria-label": "wifi",
          onClick: onToggle,
        }}
      />
    </>
  );
}

export default Sound;

interface Props {
  open?: boolean;
}
