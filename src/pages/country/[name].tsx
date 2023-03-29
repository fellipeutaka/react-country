import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ArrowLeft } from "phosphor-react";

import type { Country } from "@/@types/country";
import { Header } from "@/components/ui/Header";
import { SEO } from "@/components/utils/SEO";
import { api } from "@/lib/axios";
import * as S from "@/styles/Country";
import { getCountryInfo } from "@/utils/getCountryInfo";

type CountryProps = {
  data: Country;
};

export default function Country({ data }: CountryProps) {
  const { back } = useRouter();
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flag,
  } = getCountryInfo(data);

  return (
    <SEO title={`${name} / Country`} description={`Detalhes do país ${name}`}>
      <Header />
      <S.Container>
        <S.BackButton onClick={back}>
          <ArrowLeft weight="bold" size={16} />
          Voltar
        </S.BackButton>
        <S.Details>
          <S.Flag src={flag} />
          <S.Info>
            <S.Title>{name}</S.Title>
            <S.Text>
              <b>Nome nativo: </b>
              {nativeName}
            </S.Text>
            <S.Text>
              <b>População: </b>
              {population}
            </S.Text>
            <S.Text>
              <b>Região: </b>
              {region}
            </S.Text>
            <S.Text>
              <b>Sub-região: </b>
              {subregion}
            </S.Text>
            <S.Text>
              <b>Capital: </b>
              {capital}
            </S.Text>
            <S.Text>
              <b>Tld: </b>
              {tld}
            </S.Text>
            <S.Text>
              <b>Moeda: </b>
              {currencies}
            </S.Text>
            <S.Text>
              <b>Idiomas: </b>
              {languages}
            </S.Text>
            <S.Text>
              <b>Fronteiras: </b>
              <S.BorderList>
                {Array.isArray(borders)
                  ? borders.map(({ label, href }) => (
                      <S.Border key={label} href={href}>
                        {label}
                      </S.Border>
                    ))
                  : borders}
              </S.BorderList>
            </S.Text>
          </S.Info>
        </S.Details>
      </S.Container>
    </SEO>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const countryName = ctx.params?.name;

  if (!countryName) {
    return {
      notFound: true,
    };
  }

  try {
    const { data } = await api.get<Country[]>(`/name/${countryName}`);
    return {
      props: {
        data: data[0],
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
