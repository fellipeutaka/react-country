import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  justify-content: space-between;
  margin-block: 4rem;
  margin-inline: 4.625rem;
  gap: 4rem;
`;
