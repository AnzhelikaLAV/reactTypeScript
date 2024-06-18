import { ReactNode } from "react";

export interface SelectProps {
  idSelect?: string;
  name: string;
  labelName?: string;
  children: ReactNode; //может быть type ReactNode = string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined
}
