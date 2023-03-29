import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.gray800};
  transition: box-shadow, background-color 300ms ease;

  &:focus-within {
    box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.primary};
  }
`;

export const Icon = styled.div`
  --size: 1.5rem;
  width: var(--size);
  height: var(--size);
  color: ${({ theme }) => theme.colors.gray};

  svg {
    width: var(--size);
    height: var(--size);
  }
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
