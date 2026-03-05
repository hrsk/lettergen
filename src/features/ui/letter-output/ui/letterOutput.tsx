import Ellipse from "@/assets/icons/svg/Ellipse.svg?react";
import Copy from "@/assets/icons/svg/Copy.svg?react";

import { useForm, type LetterText } from "@/features/ui/generate-form/model/formStore";

import { useEffect, useState } from "react";
import clsx from "clsx";
import s from "./letterOutput.module.scss";

export const LetterOutput = () => {
  const { letters, isLoading } = useForm();
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

  if (!letters?.length) {
    return (
      <article className={clsx([s.letterWrapper])}>
        <p>Your personalized job application will appear here...</p>
      </article>
    );
  }

  return (
    <article className={clsx([s.letterWrapper])}>
      <p>{letters.at(-1)?.text.title}</p>
      <p>{letters.at(-1)?.text.company}</p>
      <p>{letters.at(-1)?.text.skills}</p>
      <p>{letters.at(-1)?.text.additional}</p>
      <p>{letters.at(-1)?.text.other}</p>
      <p>{letters.at(-1)?.text.thx}</p>
      {/* {resultLetters ? <p>{resultLetters?.at(-1)}</p> : <p>Your personalized job application will appear here...</p>} */}
      {/* <div className={s.cardContent}>
        <p>Dear {company} Team,</p>
        <p>I am writing to express my interest in the {job} position.</p>
        <p>
          My experience in the realm combined with my skills in {skills} make me a strong candidate for this role.
          {` ${additional.charAt(0).toUpperCase()}${additional.slice(1)}.`} I am confident that my skills and enthusiasm
          would translate into valuable contributions to your esteemed organization. Thank you for considering my
          application. I eagerly await the opportunity to discuss my qualifications further.
        </p>
        <span></span>
      </div> */}
      <div style={{ maxWidth: "40px" }}>
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
