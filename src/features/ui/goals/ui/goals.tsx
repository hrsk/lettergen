import { useState } from "react";
import { PolymorphButton } from "@/shared/ui";
import clsx from "clsx";
import Plus from "@/assets/icons/svg/Plus.svg?react";
import s from "./goals.module.scss";
import { Link } from "react-router-dom";
import { MAX_GOALS } from "@/shared/constants/constants";

type Properties = { goals: number; title: string };

export const Goals = ({ goals, title }: Properties) => {
  const [applications, _setApplications] = useState([
    { id: 1, label: "round", isCreated: false },
    { id: 2, label: "round", isCreated: false },
    { id: 3, label: "round", isCreated: false },
    { id: 4, label: "round", isCreated: false },
    { id: 5, label: "round", isCreated: false },
  ]);
  return (
    <div className={s.goalsWrapper}>
      <div className={s.goalsContainer}>
        <h3 className={s.goalsTitle}>Hit your goal</h3>
        <span className={s.description}>{title}</span>
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
          {applications.map((application) => (
            <li
              className={clsx([application.isCreated ? s.activeItem : s.item])}
              key={application.id}
            ></li>
          ))}
        </ul>
        <span className={s.counterDescription}>
          {goals} out of {MAX_GOALS}
        </span>
      </div>
    </div>
  );
};
