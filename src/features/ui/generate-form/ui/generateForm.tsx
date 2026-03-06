import Loading from "@/assets/icons/svg/Loading.svg?react";
import Repeat from "@/assets/icons/svg/Repeat.svg?react";
import { Input, PolymorphButton, Separator, Textarea } from "@/shared/ui";

import { useForm, type GenerateParameters } from "@/features/ui/generate-form/model/formStore";
import { MAX_GOALS, TEXT_AREA_MAX_SYMBOLS } from "@/shared/constants";
import clsx from "clsx";
import { useState, type ChangeEvent } from "react";
import s from "./generateForm.module.scss";

export const GenerateForm = () => {
  const { letters, isLoading, generate } = useForm();
  const [gen, setGen] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const [formData, setFormLocalData] = useState({
    job: "",
    company: "",
    skills: "",
    additional: "",
  });
  const disabled =
    !formData.job ||
    !formData.company ||
    !formData.skills ||
    !formData.additional ||
    letters.length === MAX_GOALS ||
    error;

  const handleSubmit = (event) => {
    event.preventDefault();
    generate({
      job: formData.job,
      company: formData.company,
      skills: formData.skills,
      additional: formData.additional,
    });
    setGen(gen + 1);
  };

  const inputHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setFormLocalData((previous: GenerateParameters) => ({
      ...previous,
      [name]: value,
    }));
  };

  const textAreaHandleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    if (value.length > 1200) {
      setError(true);
    } else setError(false);

    setFormLocalData((previous: GenerateParameters) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div className={s.wrapper}>
      <h1 className={clsx(s.titlePlaceholder, [formData.company && s.title, formData.job && s.title])}>
        {!formData.job && !formData.company ? "New application" : `${formData.job}, ${formData.company}`}
      </h1>
      <Separator className={s.separator} />
      <form
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div className={s.job}>
          <Input
            label='Job title'
            name='job'
            placeholder='Product manager'
            value={formData.job}
            onChange={inputHandleChange}
          />
          <Input
            label='Company'
            name='company'
            placeholder='Apple'
            value={formData.company}
            onChange={inputHandleChange}
          />
        </div>
        <Input
          label='I am good at...'
          name='skills'
          placeholder='HTML, CSS and doing things in time'
          value={formData.skills}
          onChange={inputHandleChange}
        />
        <Textarea
          label={"Additional details"}
          name='additional'
          isError={error}
          placeholder={"Describe why you are a great fit or paste your bio"}
          value={formData.additional}
          onChange={textAreaHandleChange}
        >
          <span className={clsx(s.length, [error && s.lengthError])}>
            {formData.additional.length}/{TEXT_AREA_MAX_SYMBOLS}
          </span>
        </Textarea>
        {!isLoading && gen === 0 && letters.length <= MAX_GOALS && (
          <PolymorphButton
            type='submit'
            disabled={disabled}
            variant='primary'
          >
            Generate Now
          </PolymorphButton>
        )}
        {isLoading && (
          <PolymorphButton
            variant='primary'
            disabled={isLoading}
            className={s.loadingButton}
          >
            <Loading />
          </PolymorphButton>
        )}
        {/* {!isLoading && letters.length > 0 && ( */}
        {!isLoading && gen > 0 && gen < MAX_GOALS && (
          <PolymorphButton
            variant='outline'
            disabled={letters.length === MAX_GOALS}
            className={s.button}
          >
            <Repeat /> {"Try Again"}
          </PolymorphButton>
        )}
      </form>
    </div>
  );
};
