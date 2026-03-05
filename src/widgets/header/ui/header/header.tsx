import { RightSide } from "@/widgets/header/ui/rightSide";
import { Logo } from "@/widgets/header/ui/logo";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <RightSide />
    </header>
  );
};
