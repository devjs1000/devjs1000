import React from "react";
import { apps } from "../../static/apps";
import AppPackage from "../AppPackage";

const AppLauncher = () => {
  return (
    <div>
      {apps.map((app, index) => {
        return (
          <AppPackage
            defaultHeight={app.defaultHeight}
            defaultWidth={app.defaultWidth}
            description={app.description}
            icon={app.icon}
            name={app.name}
            resizable={app.resizable}
          >
            <app.component key={index} />;
          </AppPackage>
        );
      })}
    </div>
  );
};

export default AppLauncher;
