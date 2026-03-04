import { useState } from "react";
import { PolymorphButton } from "@/shared";
import clsx from "clsx";
import Plus from "@/assets/icons/svg/Plus.svg?react";
import s from "./goals.module.scss";

export const Goals = ({ title }: { title: string }) => {
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
        <span className={s.counterDescription}>0 out of 5</span>
      </div>
    </div>
  );
};
