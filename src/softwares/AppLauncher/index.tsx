import { Box } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import useMount from "../../hooks/helping/useMount";
import useSelect from "../../hooks/redux/useSelect";
import { setMargin, setPadding } from "../../states/system.slice";
import { apps } from "../../static/apps";
import AppPackage from "../AppPackage";

const AppLauncher = () => {
  const { layout, displayEffects } = useSelect("system");
  const dispatch = useDispatch();

  return (
    <Box
      bg={"none"}
      backdropFilter={`blur(${displayEffects?.blur}px)`}
      display={"flex"}
      h={"full"}
      w={"full"}
      margin={`${layout.m[0]}px ${layout.m[1]}px ${layout.m[2]}px ${layout.m[3]}px`}
      padding={`${layout.p[0]}px ${layout.p[1]}px ${layout.p[2]}px ${layout.p[3]}px`}
    >
      {apps.map((app, index) => {
        return (
          <AppPackage
            defaultHeight={app.defaultHeight}
            defaultWidth={app.defaultWidth}
            description={app.description}
            icon={app.icon}
            name={app.title}
            resizable={app.resizable}
          >
            <app.component key={index} />
          </AppPackage>
        );
      })}
    </Box>
  );
};

export default AppLauncher;
