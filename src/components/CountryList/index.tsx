import { Country } from "@/@types/country";
import { useCountry } from "@/hooks/useCountry";

import { CountryCard } from "../CountryCard";
import * as S from "./styles";

type CountryListProps = {
  countries: Country[];
};

export function CountryList({ countries }: CountryListProps) {
  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {countries.map(useCountry).map((country) => (
        <CountryCard
          key={country.flag}
          name={country.name}
          capital={country.capital}
          flag={country.flag}
          population={country.population}
          region={country.region}
        />
      ))}
    </S.Container>
  );
}
