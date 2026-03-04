import Ellipse from "@/assets/icons/svg/Ellipse.svg?react";
import Copy from "@/assets/icons/svg/Copy.svg?react";

import clsx from "clsx";
import s from "./letterOutput.module.scss";

export const LetterOutput = () => {
  const isLoading = false;

  if (isLoading) {
    return (
      <article className={s.loading}>
        <Ellipse />
      </article>
    );
  }

  return (
    <article className={clsx([s.letterWrapper])}>
      <span>Your personalized job application will appear here...</span>
      <button className={s.button}>
        Copy to clipboard
        <Copy />
      </button>
    </article>
  );
};
