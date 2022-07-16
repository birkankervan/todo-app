import { memo } from "react";
import styled, { css } from "styled-components";
import { ifProp, theme } from "styled-tools";

type TabProps = {
  isActive?: boolean;
};

type TabsProps = {
  type: string;
  setType: (type: string) => void;
};

const Tabs = ({ type, setType }: TabsProps) => {
  return (
    <TabsStyled>
      <TabStyled isActive={type === "all"} onClick={() => setType("all")}>
        📖 All
      </TabStyled>
      <TabStyled isActive={type === "true"} onClick={() => setType("true")}>
        ✅ Done
      </TabStyled>
      <TabStyled isActive={type === "false"} onClick={() => setType("false")}>
        ❌ Not Yet
      </TabStyled>
    </TabsStyled>
  );
};

const TabsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  font-weight: 500;
  border-radius: ${theme("borderRadius.normal")};
  margin: 10px;
  padding: 10px;
  background-color: ${theme("colors.disabledBg")};
  @media (max-width: 768px) {
    margin: 0px;
    padding: 8px 6px;
  }
`;

const TabStyled = styled.div<TabProps>`
  @media (max-width: 768px) {
    width: 40%;
  }
  cursor: pointer;
  border-bottom: 3px solid transparent;
  width: 20%;
  text-align: center;
  transition: all 0.3s linear;
  color: ${theme("colors.text")};
  &:hover {
    color: ${theme("colors.primaryLight")};
    border-color: ${theme("colors.primaryLight")};
  }
  ${ifProp(
    "isActive",
    css`
      color: ${theme("colors.primary")};
      border-color: ${theme("colors.primary")};
    `
  )}
`;

export default memo(Tabs);
