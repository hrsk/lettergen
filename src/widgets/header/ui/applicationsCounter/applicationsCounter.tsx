import Completed from "@/assets/icons/svg/Check.svg?react";
import clsx from "clsx";
import s from "./ApplicationsCounter.module.scss";
import { useState } from "react";
import { MAX_GOALS } from "@/shared/constants/constants";

type Properties = {
  goals: number;
};
export const ApplicationsCounters = ({ goals }: Properties) => {
  const [applications, _setApplications] = useState([
    { id: 1, label: "round", isCreated: false },
    { id: 2, label: "round", isCreated: false },
    { id: 3, label: "round", isCreated: false },
    { id: 4, label: "round", isCreated: false },
    { id: 5, label: "round", isCreated: false },
  ]);

  return (
    <div className={s.container}>
      <span className={s.text}>
        {goals}/{MAX_GOALS} applications generated
      </span>
      {goals === MAX_GOALS ? (
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
