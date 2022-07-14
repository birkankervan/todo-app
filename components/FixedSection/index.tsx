import { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { prop, switchProp, theme } from "styled-tools";

import Container from "components/Container";

type FixedSectionTypes = {
  position: "fixed" | "absolute";
  location: string;
  bgColor?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const FixedSection = ({
  position,
  location,
  bgColor,
  children,
  ...props
}: FixedSectionTypes) => {
  return (
    <AreaStyled
      position={position}
      location={location}
      bgColor={bgColor}
      {...props}
    >
      {children}
    </AreaStyled>
  );
};
const locations = {
  leftTop: css`
    left: 0;
    top: 0;
  `,
  leftBottom: css`
    left: 0;
    bottom: 0;
  `,
  rightTop: css`
    right: 0;
    top: 0;
  `,
  rightBottom: css`
    right: 0;
    bottom: 0;
  `,
};

const AreaStyled = styled(Container)<FixedSectionTypes>`
  position: ${prop("position", "absolute")};

  padding: ${theme("space.xs")};
  border-radius: ${theme("borderRadius.large")};
  z-index: 99;
  cursor: pointer;

  ${switchProp("location", locations)};
`;

export default FixedSection;
