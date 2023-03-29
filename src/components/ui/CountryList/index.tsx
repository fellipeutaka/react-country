import { memo } from "react";

import { Country } from "@/@types/country";
import { CountryCard } from "@/components/ui/CountryCard";
import { getCountryInfo } from "@/utils/getCountryInfo";

import * as S from "./styles";

type CountryListProps = {
  countries: Country[];
};

export const CountryList = memo(({ countries }: CountryListProps) => {
  return (
    <S.Container>
      {countries.length === 0 ? (
        <S.NotFound>País não encontrado!</S.NotFound>
      ) : (
        countries
          .map(getCountryInfo)
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
});

CountryList.displayName = "CountryList";
