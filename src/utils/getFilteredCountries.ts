import type { Country } from "@/@types/country";
import { Regions } from "@/constants/regions";
import { INITIAL_SELECT_VALUE } from "@/pages";
import {
  handleFilterByRegion,
  handleFilterByName,
} from "@/utils/handleFilterCountries";

type UseFilteredCountriesProps = {
  query: string;
  region: Regions | typeof INITIAL_SELECT_VALUE;
  countries: Country[];
};

export function getFilteredCountries({
  query,
  countries,
  region,
}: UseFilteredCountriesProps) {
  const filteredByRegion =
    region !== INITIAL_SELECT_VALUE
      ? handleFilterByRegion({ countries, region })
      : countries;
  const filteredByName =
    query.trim().length > 0
      ? handleFilterByName({
          countries: filteredByRegion,
          query: query,
        })
      : filteredByRegion;

  return filteredByName;
}
