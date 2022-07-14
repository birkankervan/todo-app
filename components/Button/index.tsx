import dynamic from "next/dynamic";

import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

const Loading = dynamic(import("../Icons/Loading"));

type ButtonPropsType = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  disabled,
  type = "submit",
  loading = false,
  ...props
}: ButtonPropsType) {
  return (
    <ButtonStyled disabled={disabled || loading} {...props} type={type}>
      {loading ? <Loading /> : children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonPropsType>`
  background: ${theme("colors.primary")};

  color: ${theme("colors.white")};
  width: 100%;
  height: 36px;
  margin: 8px;
  cursor: pointer;
  padding: ${theme("space.xs")} ${theme("space.medium")};
  font-size: 1rem;
  transition: all ${theme("transitionTime")} ease;
  border-radius: ${theme("borderRadius.normal")};
  border: solid 1px ${theme("colors.primary")};
  max-width: 130px;
  div {
    width: ${theme("fontSizes.10")};
    height: ${theme("fontSizes.10")};
  }

  &:hover {
    background: ${theme("colors.primaryLight")};
    border-color: ${theme("colors.primaryLight")};
  }
  &:disabled {
    background: ${theme("colors.disabledBg")};
    border-color: ${theme("colors.disabledBg")};
    color: ${theme("colors.disabledText")};
    cursor: not-allowed;
  }

  @media (max-width: ${theme("breakpoints.sm")}) {
    max-width: 100%;
    margin: 4px;
  }
`;

export default Button;
