import Repeat from "@/assets/icons/svg/Repeat.svg?react";
import { applicationFormSchema, INITIAL_VALUES } from "@/features/ui/generate-form/model";
import { useLetter, type GenerateParameters } from "@/features/ui/generate-form/model/letterStore";
import { FIELDS_LIMIT } from "@/shared/constants";
import { Button, Input, Separator, Textarea } from "@/shared/ui";
import { delayPromise } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useMemo, useRef, type KeyboardEvent } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import styles from "./generate-form.module.scss";

export const GenerateForm = () => {
  const { isLoading, isCreated, generate, tryAgain } = useLetter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<GenerateParameters>({
    resolver: zodResolver(applicationFormSchema),
    mode: "onChange",
    defaultValues: INITIAL_VALUES,
  });

  const job = useWatch({ control, name: "job" });
  const company = useWatch({ control, name: "company" });

  const title = useMemo(() => {
    const trimmedJob = job?.trim();
    const trimmedCompany = company?.trim();

    if (trimmedJob && trimmedCompany) {
      return `${trimmedJob}, ${trimmedCompany}`;
    }

    return trimmedJob || trimmedCompany || "New application";
  }, [job, company]);

  const hasContent = job?.trim() || company?.trim();

  const handleFormSubmit = async (data: GenerateParameters) => {
    const trimmedData: GenerateParameters = {
      job: data.job.trim(),
      company: data.company.trim(),
      skills: data.skills.trim(),
      additional: data.additional.trim(),
    };

    if (isCreated) {
      tryAgain({
        ...trimmedData,
      });
    } else {
      generate({
        ...trimmedData,
      });
    }
    await delayPromise(2000);
    reset();
  };

  const disabled = !isValid;

  const formReference = useRef<HTMLFormElement>(null);

  const onKeyPressHandler = (event: KeyboardEvent) => {
    const { key } = event;
    if ((key === "Enter" && event.altKey) || event.metaKey) {
      formReference.current?.requestSubmit();
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={clsx(styles.titlePlaceholder, [hasContent && styles.title])}>{title}</h1>
      <Separator className={styles.separator} />
      <form
        ref={formReference}
        className={styles.form}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className={styles.job}>
          <Controller
            name='job'
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label='Job title'
                placeholder='Product manager'
                error={fieldState.error?.message}
                disabled={isLoading}
                {...field}
              />
            )}
          />
          <Controller
            name='company'
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label='Company'
                placeholder='Apple'
                error={fieldState.error?.message}
                disabled={isLoading}
                {...field}
              />
            )}
          />
        </div>
        <Controller
          name='skills'
          control={control}
          render={({ field, fieldState }) => (
            <Input
              label='I am good at...'
              placeholder='HTML, CSS and doing things in time'
              error={fieldState.error?.message}
              disabled={isLoading}
              {...field}
            />
          )}
        />
        <Controller
          name='additional'
          control={control}
          render={({ field, fieldState }) => (
            <Textarea
              label={"Additional details"}
              placeholder={"Describe why you are a great fit or paste your bio"}
              error={fieldState.error?.message}
              onEnter={onKeyPressHandler}
              disabled={isLoading}
              maxLength={FIELDS_LIMIT.additional.max}
              {...field}
            />
          )}
        />

        {isCreated ? (
          <Button
            type='submit'
            variant='outline'
            disabled={disabled || isLoading}
            className={clsx(styles.button, [isLoading && styles.loading])}
            isLoading={isLoading}
            leftIcon={<Repeat />}
          >
            Try Again
          </Button>
        ) : (
          <Button
            type='submit'
            disabled={disabled || isLoading}
            variant='primary'
            isLoading={isLoading}
          >
            Generate Now
          </Button>
        )}
      </form>
    </div>
  );
};
