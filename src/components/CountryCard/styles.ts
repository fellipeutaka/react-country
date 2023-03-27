import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  margin-inline: auto;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
`;

export const Flag = styled(motion.img)`
  width: 16.875rem;
  height: 9.875rem;
  border-radius: 0.5rem 0.5rem 0 0;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16.875rem;
  padding: 1.5rem;
`;

export const Title = styled(motion.strong)`
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
