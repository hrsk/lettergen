import Plus from "@/assets/icons/svg/Plus.svg?react";
import { useLetter } from "@/features/ui/generate-form/model/letterStore";
import { MAX_GOALS } from "@/shared/constants/constants";
import { Button } from "@/shared/ui";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import s from "./goals.module.scss";

type Properties = { title: string; description: string };

export const Goals = ({ title, description }: Properties) => {
  const { letters, resetLetter } = useLetter();

  const { pathname } = useLocation();

  const as = pathname === "/generation" ? "button" : Link;

  return (
    <div className={s.goalsWrapper}>
      <div className={s.goalsContainer}>
        <h3 className={s.goalsTitle}>{title}</h3>
        <span className={s.description}>{description}</span>
      </div>
      <Button
        as={Link || as}
        to={"/generation"}
        onClick={resetLetter}
        className={clsx(s.goalsButton)}
        variant='primary'
      >
        <Plus /> {"Create New"}
      </Button>
      <div className={s.goalsCounter}>
        <ul className={s.items}>
          {Array.from({ length: MAX_GOALS }).map((_, index) => (
            <li
              className={clsx([index < letters.length ? s.activeItem : s.item])}
              key={index}
            ></li>
          ))}
        </ul>
        <span className={s.counterDescription}>
          {letters.length} out of {MAX_GOALS}
        </span>
      </div>
    </div>
  );
};
