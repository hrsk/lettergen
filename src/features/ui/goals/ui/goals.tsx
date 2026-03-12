import { useLetter } from "@/features/ui/generate-form/model/letterStore";
import { Button, Plus } from "@hrsk/lettergen-ui-kit";
import { MAX_GOALS } from "@/shared/constants/constants";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ROUTES_PATHS } from "@/shared/config";
import styles from "./goals.module.scss";

type Properties = { title: string; description: string };

export const Goals = ({ title, description }: Properties) => {
  const { letters, resetLetter } = useLetter();

  const { pathname } = useLocation();

  return (
    <div className={styles.goalsWrapper}>
      <div className={styles.goalsContainer}>
        <h3 className={styles.goalsTitle}>{title}</h3>
        <span className={styles.description}>{description}</span>
      </div>

      {pathname === ROUTES_PATHS.GENERATION ? (
        <Button
          onClick={() => resetLetter(false)}
          className={clsx(styles.goalsButton)}
          variant='primary'
        >
          <Plus /> {"Create New"}
        </Button>
      ) : (
        <Button
          as={Link}
          to={ROUTES_PATHS.GENERATION}
          className={clsx(styles.goalsButton)}
          variant='primary'
        >
          <Plus /> {"Create New"}
        </Button>
      )}
      <div className={styles.goalsCounter}>
        <ul className={styles.items}>
          {Array.from({ length: MAX_GOALS }).map((_, index) => (
            <li
              className={clsx([index < letters.length ? styles.activeItem : styles.item])}
              key={index}
            ></li>
          ))}
        </ul>
        <span className={styles.counterDescription}>
          {letters.length} out of {MAX_GOALS}
        </span>
      </div>
    </div>
  );
};
