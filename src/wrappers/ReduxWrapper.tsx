import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../states/store";

const ReduxWrapper = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;

interface Props {
  children: ReactNode;
}
