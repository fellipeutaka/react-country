import { keyframes } from "styled-components";

export const growUp = keyframes`
  0% {
    transform: scaleY(1);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(0);
  }
`;
