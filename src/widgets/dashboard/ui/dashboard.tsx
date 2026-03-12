import { LetterPreview } from "@/features/ui";
import { useLetter } from "@/features/ui/generate-form";
import { Link } from "react-router-dom";
import { ROUTES_PATHS } from "@/shared/config";
import { Button, Header, Plus } from "@hrsk/lettergen-ui-kit";
import styles from "./dashboard.module.scss";

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
