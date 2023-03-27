import { useDeferredValue, useState } from "react";

import { GetStaticProps } from "next";
import { MagnifyingGlass } from "phosphor-react";

import type { Country } from "@/@types/country";
import { CountryList } from "@/components/CountryList";
import { Header } from "@/components/Header";
import { Select } from "@/components/Select";
import * as TextField from "@/components/TextField";
import { SEO } from "@/components/utils/SEO";
import { regions } from "@/constants/regions";
import * as S from "@/styles/Home";

type HomeProps = {
  countries: Country[];
};

export default function Home({ countries }: HomeProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredCountries =
    deferredQuery.trim().length > 0
      ? countries.filter((country) =>
          country.translations.por.common
            .toLowerCase()
            .includes(deferredQuery.toLowerCase())
        )
      : countries;

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
        <Select items={regions} placeholder="Filtre pela região" />
      </S.Search>
      <CountryList countries={filteredCountries} />
    </SEO>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await api.get<Country[]>("/all");

  const data = (await import("../constants/data.json")).default;

  return {
    props: {
      countries: data,
    },
    revalidate: 30 * 60, // 30 minutes
  };
};
