import Loading from "@/assets/icons/svg/Loading.svg?react";
import Repeat from "@/assets/icons/svg/Repeat.svg?react";
import { Input, PolymorphButton, Separator, Textarea } from "@/shared/ui";

import clsx from "clsx";
import s from "./generateForm.module.scss";

export const GenerateForm = () => {
  const repeat = false;
  const isLoading = false;
  // const value = "Product manager, Apple";
  const value = "";
  const disabled = true;

  return (
    <div className={s.wrapper}>
      <h1 className={clsx(s.titlePlaceholder, [value && s.title])}>New application</h1>
      <Separator className={s.separator} />
      <div className={s.form}>
        <div className={s.job}>
          <Input
            label='Job title'
            placeholder='Product manager'
          />
          <Input
            label='Company'
            placeholder='Apple'
          />
        </div>
        <Input
          label='I am good at...'
          placeholder='HTML, CSS and doing things in time'
        />
        <Textarea
          label={"Additional details"}
          isError={false}
          placeholder={"Describe why you are a great fit or paste your bio"}
          // value={
          //   "I want to help you build awesome solutions to accomplish your goals and vision. I can create intuitive and aesthetically pleasing devices that are very easy to use."
          // }
        />
        {!isLoading && !repeat && (
          <PolymorphButton
            disabled={disabled}
            variant='primary'
          >
            Generate Now
          </PolymorphButton>
        )}
        {isLoading && (
          <PolymorphButton
            variant='primary'
            disabled={false}
          >
            <Loading />
          </PolymorphButton>
        )}
        {!isLoading && repeat && (
          <PolymorphButton
            variant='outline'
            disabled={false}
            className={s.button}
          >
            <Repeat /> {"Try Again"}
          </PolymorphButton>
        )}
      </div>
    </div>
  );
};
