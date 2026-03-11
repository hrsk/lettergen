import Plus from "@/assets/icons/svg/Plus.svg?react";
import { LetterPreview } from "@/features/ui";
import { useLetter } from "@/features/ui/generate-form";
import { Button, Header } from "@/shared/ui";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.scss";
import { ROUTES_PATHS } from "@/shared/config";

export const Dashboard = () => {
  const { letters } = useLetter();

  return (
    <div className={styles.mainPageWrapper}>
      <Header>
        <h1>Applications</h1>
        <Button
          as={Link}
          to={ROUTES_PATHS.GENERATION}
          variant={"primary"}
          className={styles.appHeaderButton}
        >
          <Plus />
          {"Create New"}
        </Button>
      </Header>
      <div className={styles.letters}>
        {letters?.map((letter) => {
          return (
            <LetterPreview
              letter={letter}
              key={letter.id}
            />
          );
        })}
      </div>
    </div>
  );
};
