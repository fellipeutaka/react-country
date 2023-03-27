export const regions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
] as const;

export type Regions = (typeof regions)[number];
