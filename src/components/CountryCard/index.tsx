import Image from "next/image";

import * as S from "./styles";

type CountryCardProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
};

export function CountryCard(props: CountryCardProps) {
  return (
    <S.Container>
      <Image src={props.flag} alt={props.name} width={270} height={158} />
      <S.Info>
        <S.Title>{props.name}</S.Title>
        <S.Text>
          <b>População: </b>
          {props.population.toLocaleString("pt-BR")}
        </S.Text>
        <S.Text>
          <b>Região: </b>
          {props.region}
        </S.Text>
        <S.Text>
          <b>Capital: </b>
          {props.capital}
        </S.Text>
      </S.Info>
    </S.Container>
  );
}
