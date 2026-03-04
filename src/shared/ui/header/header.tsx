import type { ReactNode } from "react";
import s from "./Header.module.scss";

export const Header = ({ children }: { children: ReactNode }) => {
  return <div className={s.headerBlockWrapper}>{children}</div>;
};
