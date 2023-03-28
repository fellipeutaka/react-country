import { randomNumbers } from "@/utils/randomNumbers";

import * as S from "./styles";

export function CountryCardSkeleton() {
  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <S.Flag
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <S.Info>
        <S.Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{ width: `${randomNumbers(60)}%` }}
        />
        <S.Text style={{ width: `${randomNumbers()}%` }} />
        <S.Text style={{ width: `${randomNumbers()}%` }} />
        <S.Text style={{ width: `${randomNumbers()}%` }} />
      </S.Info>
    </S.Container>
  );
}
