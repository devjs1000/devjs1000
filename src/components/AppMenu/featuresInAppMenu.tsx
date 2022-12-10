import { DispatchProp } from "react-redux";
import { showMessage } from "../../states/process.slice";
import { about } from "../../static/system";

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
    handle: ({ dispatch }: ShortCutsProps) => {
      dispatch(
        showMessage({
          variant: "info",
          title: "ABOUT",
          description: about,
        })
      );
    },
  },
];

interface ShortCutsProps {
  dispatch: any;
}
