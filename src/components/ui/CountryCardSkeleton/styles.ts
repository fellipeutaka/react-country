import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: .25;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  margin-inline: auto;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
`;

export const Flag = styled.div`
  width: 16.875rem;
  height: 9.875rem;
  border-radius: 0.5rem 0.5rem 0 0;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.gray};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16.875rem;
  padding: 1.5rem;
`;

export const Title = styled.div`
  width: 70%;
  height: 1.5rem;
  margin-bottom: 0.75rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.125rem;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const Text = styled.div`
  width: 80%;
  height: 1rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.125rem;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
