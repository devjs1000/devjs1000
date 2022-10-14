import { useEffect } from "react";

const useInterval = (callback: () => void, delay: number) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, []);
};

export default useInterval;
