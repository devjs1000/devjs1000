import { DispatchProp } from "react-redux";

export const featuresInAppMenu = [
  {
    name: "Command",
    description: "Command",
    handle: () => {
      const commandLine = document.getElementById("command-line");
      commandLine?.focus();
    },
  },
  {
    name: "Settings",
    description: "Settings",
    handle: () => {},
  },
  {
    name: "About",
    description: "About",
    handle: ({ dispatch }: ShortCutsProps) => {},
  },
];

interface ShortCutsProps {
  dispatch: DispatchProp;
}
