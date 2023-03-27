import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 5rem;
  padding-inline: 4.625rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.strong`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
`;
