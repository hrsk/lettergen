import Completed from "@/assets/icons/svg/Check.svg?react";
import { useLetter } from "@/features/ui/generate-form/model/letterStore";
import { MAX_GOALS } from "@/shared/constants/constants";
import clsx from "clsx";
import styles from "./applicationsCounter.module.scss";

export const ApplicationsCounters = () => {
  const { letters } = useLetter();

  return (
    <div className={styles.container}>
      <span className={styles.text}>
        {Math.min(letters.length, MAX_GOALS)}/{MAX_GOALS} applications generated
      </span>
      {letters.length >= MAX_GOALS ? (
        <Completed />
      ) : (
        <ul className={styles.rounds}>
          {Array.from({ length: MAX_GOALS }).map((_, index) => (
            <li
              className={clsx([index < letters.length ? styles.activeRound : styles.round])}
              key={index}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};
