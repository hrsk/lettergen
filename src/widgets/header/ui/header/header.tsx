import { RightSide } from "@/widgets/header/ui/rightSide";
import { Logo } from "@/widgets/header/ui/logo";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <RightSide />
    </header>
  );
};
