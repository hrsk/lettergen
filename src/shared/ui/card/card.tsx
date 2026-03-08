import Copy from "@/assets/icons/svg/Copy.svg?react";
import Delete from "@/assets/icons/svg/Trash.svg?react";
import { useLetter, type Letter, type LetterText } from "@/features/ui/generate-form/model/letterStore";
import { useEffect, useState } from "react";
import s from "./card.module.scss";
import { PolymorphButton } from "@/shared/ui/polymorph-button";

export const Card = ({ letter }: { letter: Letter }) => {
  const { deleteLetter } = useLetter();

  const [copy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    const timerID = setTimeout(() => setCopy(false), 1500);
    return () => clearTimeout(timerID);
  }, [copy]);

  const copyToClipboard = async (copyText: LetterText) => {
    await navigator.clipboard.writeText(Object.values(copyText).join(" "));
    setCopy(true);
  };

  return (
    <div className={s.letterCard}>
      <div className={s.cardContent}>
        <p>{letter.text.title}</p>
        <p>{letter.text.company}</p>
        <p>{letter.text.skills}</p>
        <p>{letter.text.additional}</p>
        <p>{letter.text.other}</p>
        <p>{letter.text.thx}</p>
        {/* <p>{title}</p>
        <p className={s.last}>{text}</p>
        <span></span> */}
      </div>
      <div className={s.cardFooter}>
        <PolymorphButton
          variant='text'
          // className={s.button}
          onClick={() => deleteLetter(letter.id)}
        >
          <Delete />
          Delete
        </PolymorphButton>
        <PolymorphButton
          variant='text'
          // className={s.button}
          onClick={() => copyToClipboard(letter.text)}
        >
          {copy ? "Copied" : "Copy to clipboard"}
          <Copy />
        </PolymorphButton>
      </div>
    </div>
  );
};
