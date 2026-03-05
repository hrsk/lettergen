import Loading from "@/assets/icons/svg/Loading.svg?react";
import Repeat from "@/assets/icons/svg/Repeat.svg?react";
import { Input, PolymorphButton, Separator, Textarea } from "@/shared/ui";

import { useForm } from "@/features/ui/generate-form/model/formStore";
import { MAX_GOALS } from "@/shared/constants/constants";
import clsx from "clsx";
import { useState } from "react";
import s from "./generateForm.module.scss";

export const GenerateForm = () => {
  const { letters, isLoading, generate } = useForm();

  const [formData, setFormLocalData] = useState({
    job: "",
    company: "",
    skills: "",
    additional: "",
  });
  const disabled = !formData.job || !formData.company || !formData.skills || !formData.additional;

  const handleSubmit = (event) => {
    event.preventDefault();
    generate({
      job: formData.job,
      company: formData.company,
      skills: formData.skills,
      additional: formData.additional,
    });
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
            placeholder='Product manager'
            value={formData.job}
            onChange={(event) => {
              setFormLocalData({ ...formData, job: event.currentTarget.value });
            }}
          />
          <Input
            label='Company'
            placeholder='Apple'
            value={formData.company}
            onChange={(event) => {
              setFormLocalData({ ...formData, company: event.currentTarget.value });
            }}
          />
        </div>
        <Input
          label='I am good at...'
          placeholder='HTML, CSS and doing things in time'
          value={formData.skills}
          onChange={(event) => {
            setFormLocalData({ ...formData, skills: event.currentTarget.value });
          }}
        />
        <Textarea
          label={"Additional details"}
          isError={false}
          placeholder={"Describe why you are a great fit or paste your bio"}
          value={formData.additional}
          onChange={(event) => {
            setFormLocalData({ ...formData, additional: event.currentTarget.value });
          }}
        />
        {!isLoading && letters.length === 0 && (
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
        {!isLoading && letters.length > 0 && (
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
