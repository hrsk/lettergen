import type { GenerateParameters } from "@/features/ui/generate-form/model";
import { FIELDS_LIMIT } from "@/shared/constants";
import { z } from "zod";

export const applicationFormSchema = z.object({
  job: z.string().min(FIELDS_LIMIT.job.min).max(FIELDS_LIMIT.job.max),
  company: z.string().min(FIELDS_LIMIT.company.min).max(FIELDS_LIMIT.company.max),
  skills: z.string().min(FIELDS_LIMIT.skills.min).max(FIELDS_LIMIT.skills.max),
  additional: z.string().max(FIELDS_LIMIT.additional.max),
}) satisfies z.ZodType<GenerateParameters>;
