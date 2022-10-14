import { ReactNode } from "react";

const Elif = ({ condition, True, False }: Props) => {
  return <>{condition ? True : False}</>;
};

export default Elif;

interface Props {
  condition: boolean;
  True: ReactNode;
  False: ReactNode;
}
