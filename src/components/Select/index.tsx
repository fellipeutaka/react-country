import { forwardRef } from "react";

import { CaretDown, CaretUp, Check } from "phosphor-react";

import type {
  SelectProps as RadixSelectProps,
  SelectTriggerProps as RadixSelectTriggerProps,
} from "@radix-ui/react-select";

import * as S from "./styles";

type SelectProps = {
  rootProps?: RadixSelectProps;
  triggerProps?: RadixSelectTriggerProps;
  placeholder: string;
  items: string[];
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ rootProps, triggerProps, placeholder, items }, ref) => (
    <S.Root {...rootProps}>
      <S.Trigger {...triggerProps} ref={ref}>
        <S.Value placeholder={<S.Placeholder>{placeholder}</S.Placeholder>} />
        <S.Icon>
          <CaretDown weight="bold" size={24} />
        </S.Icon>
      </S.Trigger>
      <S.Portal>
        <S.Content className="bg-zinc-300 dark:bg-zinc-800 rounded-md overflow-hidden shadow-lg">
          <S.ScrollUpButton>
            <CaretUp weight="bold" />
          </S.ScrollUpButton>
          <S.Viewport className="p-2">
            {items.map((item) => (
              <S.Item
                key={item}
                value={item}
                className="text-sm rounded relative flex items-center h-6 px-6 text-zinc-900 dark:text-zinc-100 select-none outline-none data-[highlighted]:bg-violet-600 transition"
              >
                <S.ItemText>{item}</S.ItemText>
                <S.ItemIndicator className="absolute left-0 w-6 flex justify-center items-center">
                  <Check size={16} weight="bold" />
                </S.ItemIndicator>
              </S.Item>
            ))}
          </S.Viewport>
          <S.ScrollDownButton className="flex justify-center items-center h-6">
            <CaretDown />
          </S.ScrollDownButton>
        </S.Content>
      </S.Portal>
    </S.Root>
  )
);

Select.displayName = "Select";
