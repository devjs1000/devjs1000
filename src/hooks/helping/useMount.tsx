import React, { useEffect } from "react";

const useMount = (callback: Function) => {
  useEffect(() => {
    callback();
  }, []);
};

export default useMount;
