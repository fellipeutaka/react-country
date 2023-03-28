import { Country } from "@/@types/country";
import { Regions } from "@/constants/regions";

type HandleFilterByRegionProps = {
  countries: Country[];
  region: Regions;
};

export function handleFilterByRegion({
  countries,
  region,
}: HandleFilterByRegionProps) {
  return countries.filter((country) => country.region === region);
}

type HandleFilterByNameProps = {
  countries: Country[];
  query: string;
};

export function handleFilterByName({
  countries,
  query,
}: HandleFilterByNameProps) {
  return countries.filter((country) =>
    country.translations.por.common.toLowerCase().includes(query.toLowerCase())
  );
}
