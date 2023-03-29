import { css, Keyframes } from "styled-components";

export function animate(
  animation: Keyframes,
  durationInMs = 300,
  delayInMs = 0,
  timingFunction = "ease-in-out"
) {
  return css`
    animation-name: ${animation};
    animation-delay: ${delayInMs}ms;
    animation-duration: ${durationInMs}ms;
    animation-timing-function: ${timingFunction};
    animation-fill-mode: forwards;
  `;
}
