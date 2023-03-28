import { useState } from "react";

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

export const INITIAL_SELECT_VALUE = "Filtre pela região";

export default function Home({ countries }: HomeProps) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Regions | typeof INITIAL_SELECT_VALUE>(
    INITIAL_SELECT_VALUE
  );

  return (
    <SEO
      title="Country"
      description="A Next.js app with Styled-Components to get information about countries"
    >
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
            defaultValue: INITIAL_SELECT_VALUE,
            onValueChange: (value) => setRegion(value as typeof region),
          }}
          items={[INITIAL_SELECT_VALUE, ...regions]}
          placeholder={INITIAL_SELECT_VALUE}
        />
      </S.Search>
      <CountryList query={query} region={region} countries={countries} />
    </SEO>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Country[]>(
    "/all?fields=name,population,capital,region,flags,translations"
  );

  return {
    props: {
      countries: data,
    },
    revalidate: 30 * 60, // 30 minutes
  };
};
