import TIconButton from "../gui/Button/TIconButton";
import { TbBattery1, TbBattery2, TbBattery3, TbBattery4 } from "react-icons/tb";
import { useDisclosure } from "@chakra-ui/react";
import FloatingToast from "../gui/Container/FloatingToast";
import { useEffect, ReactNode } from "react";
import useBattery from "../hooks/helping/useBattery";

function Battery({ open = true }: Props) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { level } = useBattery();
  
  const icons: ReactNode[] = [
    <TbBattery1 color={"red"} size={20} />,
    <TbBattery2 color={"orange"} size={20} />,
    <TbBattery3 size={20} />,
    <TbBattery4 size={20} />,
  ];

  const slab = Math.round(100 / 4);
  let activeIndex = 0;
  if (slab * 3 < level) {
    activeIndex = 3;
  } else if (slab * 2 < level) {
    activeIndex = 2;
  } else if (slab < level) {
    activeIndex = 1;
  }

  console.log(level, slab, activeIndex);
  const activeIcon = icons[activeIndex];
  return (
    <>
      <FloatingToast
        others={{
          right: 10,
        }}
        {...{ isOpen, onClose }}
      >
        <div>{level}%</div>
      </FloatingToast>
      <TIconButton
        icon={activeIcon}
        others={{
          "aria-label": "wifi",
          onClick: onToggle,
        }}
      />
    </>
  );
}

interface Props {
  open?: boolean;
}

export default Battery;
