import { useDeferredValue, useMemo, useState } from "react";

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

type HomeProps = {
  countries: Country[];
};

const INITIAL_SELECT_VALUE = "Filtre pela região";

type HandleFilterByRegionProps = {
  countries: Country[];
  region: Regions;
};

function handleFilterByRegion({
  countries,
  region,
}: HandleFilterByRegionProps) {
  return countries.filter((country) => country.region === region);
}

type HandleFilterByNameProps = {
  countries: Country[];
  query: string;
};

function handleFilterByName({ countries, query }: HandleFilterByNameProps) {
  return countries.filter((country) =>
    country.translations.por.common.toLowerCase().includes(query.toLowerCase())
  );
}

export default function Home({ countries }: HomeProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [region, setRegion] = useState<Regions | typeof INITIAL_SELECT_VALUE>(
    INITIAL_SELECT_VALUE
  );

  const filteredCountries = useMemo(() => {
    const filteredByRegion =
      region !== INITIAL_SELECT_VALUE
        ? handleFilterByRegion({ countries, region })
        : countries;
    const filteredByName =
      deferredQuery.trim().length > 0
        ? handleFilterByName({
            countries: filteredByRegion,
            query: deferredQuery,
          })
        : filteredByRegion;
    return filteredByName;
  }, [countries, deferredQuery, region]);

  return (
    <SEO title="Country" description="Description...">
      <Header />
      <S.Search>
        <TextField.Root id="search">
          <TextField.Icon>
            <MagnifyingGlass />
          </TextField.Icon>
          <TextField.Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquise um país"
          />
        </TextField.Root>
        <Select
          rootProps={{
            value: region,
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
