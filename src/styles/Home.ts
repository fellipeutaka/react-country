import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: space-between;
  align-items: center;
  margin-inline: 4.625rem;
  margin-top: 5.75rem;

  @media screen and (min-width: 51.5rem) {
    & > div#search {
      max-width: 30rem;
    }
  }
`;
