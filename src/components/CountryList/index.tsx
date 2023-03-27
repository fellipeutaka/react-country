import { Country } from "@/@types/country";

import { CountryCard } from "../CountryCard";
import * as S from "./styles";

type CountryListProps = {
  countries: Country[];
};

export function CountryList({ countries }: CountryListProps) {
  return (
    <S.Container>
      {countries.map((country) => (
        <CountryCard
          key={country.translations.por.common + country.population}
          name={country.translations.por.common}
          capital={country.capital?.at(0) ?? "Sem capital"}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
        />
      ))}
    </S.Container>
  );
}
