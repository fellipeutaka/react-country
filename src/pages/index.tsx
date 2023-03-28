import { useCallback, useRef, useState } from "react";

import { GetStaticProps } from "next";
import { MagnifyingGlass } from "phosphor-react";

import type { Country } from "@/@types/country";
import { CountryList } from "@/components/CountryList";
import { Header } from "@/components/Header";
import { Select } from "@/components/Select";
import * as TextField from "@/components/TextField";
import { SEO } from "@/components/utils/SEO";
import { Regions, regions } from "@/constants/regions";
import { api } from "@/lib/axios";
import * as S from "@/styles/Home";
import {
  handleFilterByName,
  handleFilterByRegion,
} from "@/utils/handleFilterCountries";

type HomeProps = {
  countries: Country[];
};

const INITIAL_SELECT_VALUE = "Filtre pela região";

export default function Home({ countries }: HomeProps) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const queryInput = useRef<HTMLInputElement>(null);
  const [region, setRegion] = useState<Regions | typeof INITIAL_SELECT_VALUE>(
    INITIAL_SELECT_VALUE
  );

  const onQueryInputChanges = useCallback(
    (query: string) => {
      setTimeout(() => {
        const filteredByRegion =
          region !== INITIAL_SELECT_VALUE
            ? handleFilterByRegion({ countries, region })
            : countries;
        const filteredByName =
          query.trim().length > 0
            ? handleFilterByName({
                countries: filteredByRegion,
                query,
              })
            : filteredByRegion;
        setFilteredCountries(filteredByName);
      }, 200);
    },
    [countries, region]
  );

  return (
    <SEO title="Country" description="Description...">
      <Header />
      <S.Search>
        <TextField.Root id="search">
          <TextField.Icon>
            <MagnifyingGlass />
          </TextField.Icon>
          <TextField.Input
            ref={queryInput}
            onChange={(e) => onQueryInputChanges(e.target.value)}
            placeholder="Pesquise um país"
          />
        </TextField.Root>
        <Select
          rootProps={{
            defaultValue: INITIAL_SELECT_VALUE,
            onValueChange: (value) => setRegion(value as typeof region),
          }}
          items={[INITIAL_SELECT_VALUE, ...regions]}
          placeholder={INITIAL_SELECT_VALUE}
        />
      </S.Search>
      <CountryList countries={filteredCountries} />
    </SEO>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Country[]>("/all");

  return {
    props: {
      countries: data,
    },
    revalidate: 30 * 60, // 30 minutes
  };
};
