import { ReactNode } from "react";
import styled from "styled-components";
import { ColorProps, color } from "styled-system";
import { theme } from "styled-tools";

type TypographyProps = {
  color?: string;
  children: ReactNode;
} & ColorProps;

export function H1({ color, children }: TypographyProps) {
  return <H1Styled color={color}>{children}</H1Styled>;
}
export function H6({ color, children }: TypographyProps) {
  return <H6Styled color={color}>{children}</H6Styled>;
}

const H1Styled = styled.h1<TypographyProps>`
  color: ${theme("colors.text")};
  font-weight: 300;
  ${color}
`;
const H6Styled = styled.h6<TypographyProps>`
  color: ${theme("colors.text")};
  text-align: center;
  ${color}
  margin: 10px;
`;
