import { css, Keyframes } from "styled-components";

export function animate(animation: Keyframes) {
  return css`
    animation: ${animation} 300ms ease-in-out forwards;
  `;
}
