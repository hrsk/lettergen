import Plus from "@/assets/icons/svg/Plus.svg?react";

import { LetterPreview } from "@/features/ui";
import { useLetter } from "@/features/ui/generate-form";
import { Button, Header } from "@/shared/ui";
import { Link } from "react-router-dom";
import s from "./dashboard.module.scss";

export const Dashboard = () => {
  const { letters } = useLetter();

  return (
    <div className={s.mainPageWrapper}>
      <Header>
        <h1>Applications</h1>
        <Button
          as={Link}
          to={"/generation"}
          variant={"primary"}
          className={s.appHeaderButton}
        >
          <Plus />
          {"Create New"}
        </Button>
      </Header>
      <div className={s.letters}>
        {letters?.map((letter) => {
          return (
            <LetterPreview
              letter={letter}
              key={letter.id}
            />
            // <Card
            //   key={letter.id}
            //   letter={letter}
            // />
          );
        })}
      </div>
    </div>
  );
};
