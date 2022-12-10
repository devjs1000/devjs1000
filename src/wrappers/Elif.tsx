import { ReactNode } from "react";

const Elif = ({ condition, True, False }: ElifProps) => {
  return <>{condition ? True : False}</>;
};

const If = ({ condition, show }: IfProps) => {
  return <>{condition ? show : null}</>;
};

export { Elif, If };

interface ElifProps {
  condition: boolean;
  True: ReactNode;
  False: ReactNode;
}

interface IfProps {
  condition: boolean;
  show: ReactNode;
}
