import { InputHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps, ref: any) => {
  return <InputStyled ref={ref} {...props} />;
};

export const InputStyled = styled.input`
  width: 100%;
  max-width: 800px;
  height: 36px;
  transition: ${theme("transitionTime")} linear;
  font-size: 1rem;
  font-family: inherit;
  border: solid 1px #bfbfbf;
  padding: ${theme("space.xs")} ${theme("space.medium")};
  border-radius: ${theme("borderRadius.normal")};
  background-color: ${theme("colors.bodyBg")};
  margin: 8px;
  color: ${theme("colors.disabledText")};
  &:focus {
    border: 1px solid ${theme("colors.primaryLight")};
  }
  @media (max-width: ${theme("breakpoints.sm")}) {
    margin: 4px;
  }

  &:disabled {
    background: ${theme("colors.disabledBg")};
    border-color: ${theme("colors.disabledBg")};
    color: ${theme("colors.disabledText")};
    cursor: not-allowed;
  }

  ::placeholder {
    font-weight: 300;
    color: #bfbfbf;
  }
`;

export default forwardRef(Input);
