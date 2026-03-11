import type { GenerateParameters } from "@/features/ui/generate-form/model";
import { FIELDS_LIMIT } from "@/shared/constants";
import { z } from "zod";

export const applicationFormSchema = z.object({
  job: z
    .string()
    .min(FIELDS_LIMIT.job.min, "")
    .max(FIELDS_LIMIT.job.max, "")
    .refine((value) => {
      return value.trim() !== "";
    }, ""),
  company: z
    .string()
    .min(FIELDS_LIMIT.company.min, "")
    .max(FIELDS_LIMIT.company.max, "")
    .refine((value) => {
      return value.trim() !== "";
    }, ""),
  skills: z
    .string()
    .min(FIELDS_LIMIT.skills.min, "")
    .max(FIELDS_LIMIT.skills.max, "")
    .refine((value) => {
      return value.trim() !== "";
    }, ""),
  additional: z.string().max(FIELDS_LIMIT.additional.max, "").or(z.literal("")),
}) satisfies z.ZodType<GenerateParameters>;
