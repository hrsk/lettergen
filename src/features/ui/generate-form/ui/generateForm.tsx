import Loading from "@/assets/icons/svg/Loading.svg?react";
import Repeat from "@/assets/icons/svg/Repeat.svg?react";
import { useLetter, type GenerateParameters } from "@/features/ui/generate-form/model/letterStore";
import { TEXT_AREA_MAX_SYMBOLS } from "@/shared/constants";
import { Button, Input, Separator, Textarea } from "@/shared/ui";
import { delayPromise } from "@/shared/utils";
import clsx from "clsx";
import { useCallback, useRef, useState, type ChangeEvent, type KeyboardEvent, type SyntheticEvent } from "react";
import s from "./generateForm.module.scss";

export const GenerateForm = () => {
  const { letters, isLoading, isCreated, generate, tryAgain } = useLetter();
  const [error, setError] = useState<boolean>(false);

  const [formData, setFormLocalData] = useState({
    job: "",
    company: "",
    skills: "",
    additional: "",
  });
  const disabled = !formData.job || !formData.company || !formData.skills || !formData.additional || error;

  const formReference = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    if (isCreated) {
      tryAgain({
        job: formData.job,
        company: formData.company,
        skills: formData.skills,
        additional: formData.additional,
      });
    } else {
      generate({
        job: formData.job,
        company: formData.company,
        skills: formData.skills,
        additional: formData.additional,
      });
    }
    await delayPromise(2000);
    setFormLocalData({ job: "", company: "", skills: "", additional: "" });
  };

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;

    if (event.currentTarget instanceof HTMLTextAreaElement) {
      setError(value.length > 1200);
    } else {
      setError(false);
    }

    setFormLocalData((previous: GenerateParameters) => ({
      ...previous,
      [name]: value,
    }));
  }, []);

  const onKeyPressHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      formReference.current?.requestSubmit();
    }
  };

  return (
    <div className={s.wrapper}>
      <h1 className={clsx(s.titlePlaceholder, [formData.company && s.title, formData.job && s.title])}>
        {!formData.job && !formData.company ? "New application" : `${formData.job}, ${formData.company}`}
      </h1>
      <Separator className={s.separator} />
      <form
        ref={formReference}
        autoComplete='off'
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div className={s.job}>
          <Input
            label='Job title'
            name='job'
            placeholder='Product manager'
            disabled={isLoading}
            value={formData.job}
            onChange={handleChange}
          />
          <Input
            label='Company'
            name='company'
            placeholder='Apple'
            disabled={isLoading}
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <Input
          label='I am good at...'
          name='skills'
          placeholder='HTML, CSS and doing things in time'
          disabled={isLoading}
          value={formData.skills}
          onChange={handleChange}
        />
        <Textarea
          label={"Additional details"}
          name='additional'
          isError={error}
          disabled={isLoading}
          placeholder={"Describe why you are a great fit or paste your bio"}
          value={formData.additional}
          onChange={handleChange}
          onEnter={onKeyPressHandler}
        >
          <span className={clsx(s.length, [error && s.lengthError])}>
            {formData.additional.length}/{TEXT_AREA_MAX_SYMBOLS}
          </span>
        </Textarea>

        {!isLoading && !isCreated && (
          <Button
            type='submit'
            disabled={disabled}
            variant='primary'
            onKeyDown={onKeyPressHandler}
          >
            Generate Now
          </Button>
        )}
        {isLoading && (
          <Button
            variant='primary'
            disabled={isLoading}
            className={s.loadingButton}
          >
            <Loading />
          </Button>
        )}
        {!isLoading && isCreated && letters.length > 0 && (
          <Button
            type='submit'
            variant='outline'
            disabled={disabled}
            className={s.button}
            onKeyDown={onKeyPressHandler}
          >
            <Repeat /> {"Try Again"}
          </Button>
        )}
      </form>
    </div>
  );
};
