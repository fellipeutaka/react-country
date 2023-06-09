import styled from "styled-components";

import { growDown } from "@/styles/animations/growDown";
import { animate } from "@/styles/utils/animate";
import * as SelectPrimitive from "@radix-ui/react-select";

export const Root = styled(SelectPrimitive.Root)``;

export const Trigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  min-width: 10rem;
  height: 3.5rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.gray800};
  border-radius: 0.5rem;
  user-select: none;
  transition: all 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary},
      0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  &[data-state="open"] .select-icon {
    rotate: 180deg;
  }
`;

export const Value = styled(SelectPrimitive.Value)``;

export const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Icon = styled(SelectPrimitive.Icon)`
  color: ${({ theme }) => theme.colors.gray};
  transition: rotate 300ms ease-in-out;
`;

export const Portal = styled(SelectPrimitive.Portal)``;

export const Content = styled(SelectPrimitive.Content)`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 0.375rem;
  overflow: hidden;
  transform-origin: top center;
  width: var(--radix-select-trigger-width);
  ${animate(growDown)}
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const ScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
`;

export const ScrollDownButton = styled(SelectPrimitive.ScrollDownButton)``;

export const Viewport = styled(SelectPrimitive.Viewport)`
  padding: 0.5rem;
`;

export const Item = styled(SelectPrimitive.Item)`
  font-size: 0.875rem;
  border-radius: 0.375rem;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0.25rem 1.5rem;
  user-select: none;
  outline: none;
  transition: color, background-color 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 2.25rem;
  }
`;

export const ItemText = styled(SelectPrimitive.ItemText)``;

export const ItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
