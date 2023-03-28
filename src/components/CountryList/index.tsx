import { useDeferredValue } from "react";

import { Country } from "@/@types/country";
import type { Regions } from "@/constants/regions";
import { useCountry } from "@/hooks/useCountry";
import { useFilteredCountries } from "@/hooks/useFilteredCountries";
import { INITIAL_SELECT_VALUE } from "@/pages";

import { CountryCard } from "../CountryCard";
import { CountryCardSkeleton } from "../CountryCardSkeleton";
import * as S from "./styles";

type CountryListProps = {
  query: string;
  region: Regions | typeof INITIAL_SELECT_VALUE;
  countries: Country[];
};

const SKELETON_CARDS_AMOUNT = 5;

export function CountryList({ countries, query, region }: CountryListProps) {
  const deferredQuery = useDeferredValue(query);
  const { countryList, isPending } = useFilteredCountries({
    countries,
    query: deferredQuery,
    region,
  });

  if (isPending) {
    return (
      <S.Container>
        {Array.from({ length: SKELETON_CARDS_AMOUNT }).map((_, i) => (
          <CountryCardSkeleton key={String(i)} />
        ))}
      </S.Container>
    );
  }

  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {countryList.length === 0 ? (
        <S.NotFound>País não encontrado!</S.NotFound>
      ) : (
        countryList
          .map(useCountry)
          .map((country) => (
            <CountryCard
              key={country.flag}
              name={country.name}
              capital={country.capital}
              flag={country.flag}
              population={country.population}
              region={country.region}
            />
          ))
      )}
    </S.Container>
  );
}
