import NextImage from "next/image";
import NextLink from "next/link";
import styled from "styled-components";

import { fadeIn } from "@/styles/animations/fadeIn";
import { animate } from "@/styles/utils/animate";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 16.875rem;
  flex-direction: column;
  border-radius: 0.5rem;
  margin-inline: auto;
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.gray800};
  ${animate(fadeIn)}
`;

export const Flag = styled(NextImage)`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  transition: color 300ms ease-in-out;
`;

export const Title = styled.strong`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Text = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.875rem;

  b {
    font-weight: 700;
  }
`;

export const Link = styled(NextLink)`
  transition: filter 200ms ease;
  color: inherit;
  text-decoration: none;

  &:hover {
    filter: brightness(80%);
    text-decoration: underline;
  }
`;
