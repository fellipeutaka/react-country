import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";

import * as S from "./styles";

type TextFieldRootProps = HTMLAttributes<HTMLDivElement>;

export function Root(props: TextFieldRootProps) {
  return (
    <S.Container
      tabIndex={0}
      onFocus={(e) => {
        e.target.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

type TextFieldIconProps = HTMLAttributes<HTMLDivElement>;

export function Icon(props: TextFieldIconProps) {
  return <S.Icon {...props} />;
}

type TextFieldInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, TextFieldInputProps>(
  (props, ref) => {
    return <S.Input ref={ref} {...props} />;
  }
);

Input.displayName = "TextField.Input";
