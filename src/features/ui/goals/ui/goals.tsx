import Plus from "@/assets/icons/svg/Plus.svg?react";
import { useForm } from "@/features/ui/generate-form/model/formStore";
import { MAX_GOALS } from "@/shared/constants/constants";
import { PolymorphButton } from "@/shared/ui";
import clsx from "clsx";
import { Link } from "react-router-dom";
import s from "./goals.module.scss";

type Properties = { title: string; description: string };

export const Goals = ({ title, description }: Properties) => {
  const { letters } = useForm();

  return (
    <div className={s.goalsWrapper}>
      <div className={s.goalsContainer}>
        <h3 className={s.goalsTitle}>{title}</h3>
        <span className={s.description}>{description}</span>
      </div>
      <PolymorphButton
        as={Link}
        to={"/generation"}
        className={clsx(s.goalsButton)}
        variant='primary'
      >
        <Plus /> {"Create New"}
      </PolymorphButton>
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
