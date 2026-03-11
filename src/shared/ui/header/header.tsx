import type { ReactNode } from "react";
import styles from "./header.module.scss";

export const Header = ({ children }: { children: ReactNode }) => {
  return <div className={styles.headerBlockWrapper}>{children}</div>;
};
