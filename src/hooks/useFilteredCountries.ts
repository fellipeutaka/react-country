import { useEffect, useState, useTransition } from "react";

import { Country } from "@/@types/country";
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

export function useFilteredCountries({
  query,
  countries,
  region,
}: UseFilteredCountriesProps) {
  const [countryList, setCountryList] = useState(countries);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
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
      setCountryList(filteredByName);
    });
  }, [countries, query, region]);

  return { countryList, isPending };
}
