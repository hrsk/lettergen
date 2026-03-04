import Completed from "@/assets/icons/svg/Check.svg?react";
import clsx from "clsx";
import s from "./ApplicationsCounter.module.scss";
import { useState } from "react";

export const ApplicationsCounters = () => {
  const [applications, _setApplications] = useState([
    { id: 1, label: "round", isCreated: false },
    { id: 2, label: "round", isCreated: false },
    { id: 3, label: "round", isCreated: false },
    { id: 4, label: "round", isCreated: false },
    { id: 5, label: "round", isCreated: false },
  ]);

  const completed = false;
  return (
    <div className={s.container}>
      <span className={s.text}>0/5 applications generated</span>
      {completed ? (
        <Completed />
      ) : (
        <ul className={s.rounds}>
          {applications?.map((application) => (
            <li
              className={clsx([application.isCreated ? s.activeRound : s.round])}
              key={application.id}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};
