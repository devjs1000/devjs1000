import { useSelector } from "react-redux";

const useSelect = (name: string) => {
  const selector = (state: any) => state[name];
  return useSelector(selector);
};

export default useSelect;
