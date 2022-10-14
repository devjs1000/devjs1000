import React, { useEffect } from "react";

const useBattery = () => {
  const [battery, setBattery] = React.useState({
    charging: false,
    chargingTime: 0,
    dichargeTime: 0,
    level: 0,
  });

  useEffect(() => {
    const battery = navigator.getBattery();
    battery.then((battery: any) => {
      setBattery({
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dichargeTime: battery.dichargeTime,
        level: battery.level * 100,
      });
      battery.addEventListener("chargingchange", () => {
        setBattery((prev) => ({ ...prev, charging: battery.charging }));
      });
      battery.addEventListener("chargingtimechange", () => {
        setBattery((prev) => ({ ...prev, chargingTime: battery.chargingTime }));
      });
      battery.addEventListener("dischargingtimechange", () => {
        setBattery((prev) => ({ ...prev, dichargeTime: battery.dichargeTime }));
      });
      battery.addEventListener("levelchange", () => {
        setBattery((prev) => ({ ...prev, level: battery.level * 100 }));
      });
    });

    return () => {
      battery.removeEventListener("chargingchange");
      battery.removeEventListener("chargingtimechange");
      battery.removeEventListener("dischargingtimechange");
      battery.removeEventListener("levelchange");
    };
  }, []);

  return battery;
};

export default useBattery;
