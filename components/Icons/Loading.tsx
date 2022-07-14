import styled from "styled-components";
import { theme } from "styled-tools";

function Loading() {
  return <LoadingStyled />;
}

const LoadingStyled = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid ${theme("colors.primary")};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  margin-left: auto;
  margin-right: auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
