import Copy from "@/assets/icons/svg/Copy.svg?react";
import Delete from "@/assets/icons/svg/Trash.svg?react";
import s from "./card.module.scss";
import { useForm, type Letter } from "@/features/ui/generate-form/model/formStore";

export const Card = ({ letter }: { letter: Letter }) => {
  const { deleteLetter } = useForm();

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
        <button
          className={s.button}
          onClick={() => deleteLetter(letter.id)}
        >
          <Delete />
          Delete
        </button>
        <button className={s.button}>
          Copy to clipboard
          <Copy />
        </button>
      </div>
    </div>
  );
};
