import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding-inline: calc(${({ theme }) => theme.spacing.bodyMargin.sm} * 2);
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 300ms ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: ${({ theme }) => theme.spacing.bodyMargin.lg};
  }
`;

export const Title = styled(Link)`
  font-size: 36px;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  user-select: none;
  transition: color 300ms ease-in-out;
`;

export const ThemeButton = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  > * {
    grid-column-start: 1;
    grid-row-start: 1;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: rotate, opacity;
  }

  svg[aria-label="Sun"] {
    opacity: 1;
    rotate: -90deg;
  }

  svg[aria-label="Moon"] {
    opacity: 0;
    rotate: -90deg;
  }

  &[aria-checked="true"] {
    svg[aria-label="Sun"] {
      opacity: 0;
      rotate: 0deg;
    }

    svg[aria-label="Moon"] {
      opacity: 1;
      rotate: 0deg;
    }
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray800};
  }
`;
