import * as S from "./styles";

type CountryCardProps = {
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
};

export function CountryCard(props: CountryCardProps) {
  const href = `/country/${props.name}`;

  return (
    <S.Container>
      <S.Link href={href}>
        <S.Flag src={props.flag} alt={props.name} width={270} height={158} />
      </S.Link>
      <S.Info>
        <S.Link href={href}>
          <S.Title>{props.name}</S.Title>
        </S.Link>
        <S.Text>
          <b>População: </b>
          {props.population}
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
