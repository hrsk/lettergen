export const MAX_GOALS = 5;
export const TEXT_AREA_MAX_SYMBOLS = 1200;

export const FIELDS_LIMIT = {
  job: {
    min: 1,
    max: 100,
  },
  company: {
    min: 1,
    max: 100,
  },
  skills: {
    min: 1,
    max: 200,
  },
  additional: {
    min: 0,
    max: 1200,
  },
} as const;
