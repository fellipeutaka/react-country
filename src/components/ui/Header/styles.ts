import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 5rem;
  padding-inline: calc(${({ theme }) => theme.spacing.bodyMargin.sm} * 2);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: ${({ theme }) => theme.spacing.bodyMargin.lg};
  }
`;

export const Title = styled(Link)`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  user-select: none;
`;
