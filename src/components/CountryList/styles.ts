import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.75rem, 1fr));
  justify-content: space-between;
  margin-block: 4rem;
  margin-inline: ${({ theme }) => theme.spacing.bodyMargin.sm};
  gap: 4rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-inline: ${({ theme }) => theme.spacing.bodyMargin.lg};
  }
`;
