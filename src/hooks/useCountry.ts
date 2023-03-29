import type { Country } from "@/@types/country";

export function useCountry(data: Country) {
  const name = data.name.nativeName?.por?.common ?? data.name.common;
  const nativeName = data.name.nativeName
    ? Object.values(data.name.nativeName)[0]?.common
    : data.name.common;
  const population = data.population.toLocaleString("pt-BR");
  const capital = data.capital?.[0] ?? "Sem capital";
  const tld = data.tld?.join(", ") ?? "Sem domínio";
  const currencies = !data.currencies
    ? "Sem câmbio local"
    : Object.entries(data.currencies)
        .map((currency) => currency[0])
        .join(", ");
  const languages = !data.languages
    ? "Sem idioma local"
    : Object.values(data.languages).join(", ");
  const borders =
    data.borders?.map((border) => ({
      label: border,
      href: `/country/${border}`,
    })) ?? "Sem fronteiras";
  const flag = data.flags.svg;

  return {
    name,
    nativeName,
    population,
    region: data.region,
    subregion: data.subregion ?? "Sem subregião",
    capital,
    tld,
    currencies,
    languages,
    borders,
    flag,
  };
}
