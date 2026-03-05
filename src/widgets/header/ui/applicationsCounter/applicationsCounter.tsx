import Completed from "@/assets/icons/svg/Check.svg?react";
import { useForm } from "@/features/ui/generate-form/model/formStore";
import { MAX_GOALS } from "@/shared/constants/constants";
import clsx from "clsx";
import s from "./ApplicationsCounter.module.scss";

export const ApplicationsCounters = () => {
  const { letters } = useForm();

  return (
    <div className={s.container}>
      <span className={s.text}>
        {letters.length}/{MAX_GOALS} applications generated
      </span>
      {letters.length === MAX_GOALS ? (
        <Completed />
      ) : (
        <ul className={s.rounds}>
          {Array.from({ length: MAX_GOALS }).map((_, index) => (
            <li
              className={clsx([index < letters.length ? s.activeRound : s.round])}
              key={index}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};
