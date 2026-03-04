import { GenerateForm, LetterOutput } from "@/features/ui";
import s from "./letterGenerator.module.scss";

export const LettersGenerator = () => {
  return (
    <div className={s.wrapper}>
      <GenerateForm />
      <LetterOutput />
    </div>
  );
};
