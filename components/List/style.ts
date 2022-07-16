import styled from "styled-components";
import { theme } from "styled-tools";
import { InputStyled } from "components/Input";

export const Checkbox = styled.span`
  display: flex;
  align-self: center;
  position: relative;
  height: 20px;
  width: 20px;
  margin: 0 20px;
  border: 2px solid ${theme("colors.primary")};
  border-radius: 2px;

  flex: 1 0 auto;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const DateStyled = styled.span`
  display: flex;
  position: relative;
  cursor: pointer;
  padding: 20px;
  flex-direction: column;
  text-align: end;
  margin-left: auto;
  font-size: 12px;
  font-weight: 300;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TextStyled = styled.span`
  display: flex;
  align-self: center;
  position: relative;
  cursor: pointer;
  padding: 20px;

  flex: 0 1 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const LabelStyled = styled.label`
  font-size: 1rem;
  margin: 0;
  display: flex;
  width: 100%;
  color: ${theme("colors.text")};
`;

export const ListItemStyled = styled.li`
  display: flex;
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    top: -9999px;
    left: -9999px;
    appearance: none;
    opacity: 0;

    &:checked + ${LabelStyled} {
      transition: all 0.3s;
      background-color: ${theme("colors.disabledBg")};

      ${Checkbox} {
        background-color: ${theme("colors.primary")};
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: -1px;
          left: 4px;
          width: 6px;
          height: 12px;
          border: solid #000;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
      ${TextStyled} {
        text-decoration-line: line-through;
      }
    }
  }
  .remove {
    height: 71.5px;
    display: flex;
    align-items: center;
    svg {
      transition: fill 0.3s;
      fill: red;
    }
  }
  .update {
    height: 71.5px;
    display: flex;
    align-items: center;
    svg {
      transition: fill 0.3s;
      fill: green;
    }
  }
`;

export const Tooltip = styled.div`
  display: block !important;
  padding: 10px;
  position: absolute;
  width: auto;
  white-space: nowrap;
  word-wrap: no-wrap;
  box-shadow: 1px 1px 20px #aaa;
  border-radius: 5px;
  background-color: #fff;
  top: 50px;
  left: 20%;
  transform: translate(-50%);
  transform-style: preserve-3d;
  z-index: 200;
  font-size: 0.9em;
  display: none;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    transform-origin: 50% 50%;
    transform: rotate(45deg) translateX(-50%);
    background-color: #fff;
    left: 50%;
    top: -1px;
    z-index: 400;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    transform-origin: 50% 50%;
    transform: rotate(45deg) translateX(-50%) translateZ(-1px);
    background-color: #fff;
    left: 50%;
    top: 0px;
    z-index: -1;
    box-shadow: -1px -1px 20px #aaa;
  }

  color: #000;
  box-shadow: 1px 1px 20px rgba(#000, 0.3);

  @media (max-width: 768px) {
    left: 35%;
  }
`;

export const EditableArea = styled.div`
  padding-left: 60px;
  height: 100%;
  flex: 1;
  position: relative;

  ${InputStyled} {
    width: 99%;
  }
  @media (max-width: 768px) {
    padding-left: 10px;
    ${InputStyled} {
      width: 90%;
    }
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;

  .update,
  .remove {
    padding: 4px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .update,
    .remove {
      height: 40px;
    }
  }
`;
