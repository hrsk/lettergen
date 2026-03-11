import { GenerateForm, LetterOutput } from "@/features/ui";
import styles from "./letterGenerator.module.scss";

export const LettersGenerator = () => {
  return (
    <div className={styles.wrapper}>
      <GenerateForm />
      <LetterOutput />
    </div>
  );
};
