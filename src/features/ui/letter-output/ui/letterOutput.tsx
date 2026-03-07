import Copy from "@/assets/icons/svg/Copy.svg?react";

import { useLetter, type LetterText } from "@/features/ui/generate-form/model/letterStore";

import Ellipse from "@/assets/icons/svg/Ellipse.svg?react";
import { Scroll } from "@/shared/ui";
import clsx from "clsx";
import { useEffect, useState } from "react";
import s from "./letterOutput.module.scss";

export const LetterOutput = () => {
  const { letters, isLoading } = useLetter();
  const [copy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("letters", JSON.stringify(letters));
  }, [letters]);

  useEffect(() => {
    const timerID = setTimeout(() => setCopy(false), 1500);
    return () => clearTimeout(timerID);
  }, [copy]);

  const copyToClipboard = async (copyText: LetterText | undefined) => {
    if (!copyText) return;
    await navigator.clipboard.writeText(Object.values(copyText).join(" "));
    setCopy(true);
  };

  if (isLoading) {
    return (
      <article className={s.loading}>
        <Ellipse />
      </article>
    );
  }

  if (letters.length === 0) {
    return (
      <article className={clsx([s.letterWrapper])}>
        <p>Your personalized job application will appear here...</p>
      </article>
    );
  }

  return (
    <article className={clsx([s.letterWrapper])}>
      <Scroll>
        <div className={s.content}>
          <p>{letters.at(-1)?.text.title}</p>
          <p>{letters.at(-1)?.text.company}</p>
          <p>{letters.at(-1)?.text.skills}</p>
          <p>{letters.at(-1)?.text.additional}</p>
          <p>{letters.at(-1)?.text.other}</p>
          <p>{letters.at(-1)?.text.thx}</p>
        </div>
      </Scroll>
      <div className={s.buttonsWrapper}>
        <button
          className={s.button}
          onClick={() => copyToClipboard(letters.at(-1)?.text)}
        >
          {copy ? "Copied" : "Copy to clipboard"}
          <Copy />
        </button>
      </div>
    </article>
  );
};
