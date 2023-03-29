import { forwardRef, memo } from "react";

import { CaretDown, CaretUp, Check } from "phosphor-react";

import { nunito } from "@/pages/_app";
import type {
  SelectProps as RadixSelectProps,
  SelectTriggerProps as RadixSelectTriggerProps,
} from "@radix-ui/react-select";

import * as S from "./styles";

type SelectProps = {
  rootProps?: RadixSelectProps;
  triggerProps?: RadixSelectTriggerProps;
  placeholder: string;
  items: string[] | readonly string[];
};

export const Select = memo(
  forwardRef<HTMLButtonElement, SelectProps>(
    ({ rootProps, triggerProps, placeholder, items }, ref) => (
      <S.Root {...rootProps}>
        <S.Trigger {...triggerProps} ref={ref}>
          <S.Value placeholder={<S.Placeholder>{placeholder}</S.Placeholder>} />
          <S.Icon className="select-icon">
            <CaretDown weight="bold" size={24} />
          </S.Icon>
        </S.Trigger>
        <S.Portal>
          <S.Content position="popper" sideOffset={4}>
            <S.ScrollUpButton>
              <CaretUp weight="bold" />
            </S.ScrollUpButton>
            <S.Viewport>
              {items.map((item) => (
                <S.Item key={item} value={item} style={nunito.style}>
                  <S.ItemText>{item}</S.ItemText>
                  <S.ItemIndicator>
                    <Check size={16} weight="bold" />
                  </S.ItemIndicator>
                </S.Item>
              ))}
            </S.Viewport>
            <S.ScrollDownButton>
              <CaretDown />
            </S.ScrollDownButton>
          </S.Content>
        </S.Portal>
      </S.Root>
    )
  )
);

Select.displayName = "Select";
