import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  justify-content: space-between;
  margin-block: 4rem;
  margin-inline: ${({ theme }) => theme.spacing.bodyMargin.sm};
  gap: 4rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-inline: ${({ theme }) => theme.spacing.bodyMargin.lg};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: auto;
  }
`;

export const NotFound = styled.strong`
  font-size: 2rem;
  font-weight: 700;
`;
