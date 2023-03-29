import { randomNumbers } from "@/utils/randomNumbers";

import * as S from "./styles";

export function CountryCardSkeleton() {
  return (
    <S.Container>
      <S.Flag />
      <S.Info>
        <S.Title style={{ width: `${randomNumbers(60)}%` }} />
        <S.Text style={{ width: `${randomNumbers()}%` }} />
        <S.Text style={{ width: `${randomNumbers()}%` }} />
        <S.Text style={{ width: `${randomNumbers()}%` }} />
      </S.Info>
    </S.Container>
  );
}
