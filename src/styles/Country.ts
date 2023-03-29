import Link from "next/link";
import styled from "styled-components";

export const Container = styled.main`
  margin-inline: ${({ theme }) => theme.spacing.bodyMargin.sm};
  margin-block-start: 5.75rem;
  margin-block-end: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-inline: ${({ theme }) => theme.spacing.bodyMargin.lg};
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 4rem 1rem 1rem;
  font-size: 0.875rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: filter 200ms ease;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Details = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
`;

export const Flag = styled.img`
  width: 35rem;
  height: auto;

  @media screen and (max-width: 45rem) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.p``;

export const BorderList = styled.div`
  display: inline-block;
  margin-top: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Border = styled(Link)`
  display: inline-block;
  justify-content: center;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  align-items: center;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid #0c1013;
  border-radius: 0.25rem;
  padding-inline: 1rem;
  padding-block: 0.125rem;
  text-decoration: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    width: 5rem;
    height: 2rem;
  }
`;
