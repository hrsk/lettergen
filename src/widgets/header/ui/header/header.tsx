import { RightSide } from "@/widgets/header/ui/rightSide";
import { Logo } from "@/widgets/header/ui/logo";

import s from "./header.module.scss";

type Properties = {
  goals: number;
};

export const Header = ({ goals }: Properties) => {
  return (
    <header className={s.header}>
      <Logo />
      <RightSide goals={goals} />
    </header>
  );
};
