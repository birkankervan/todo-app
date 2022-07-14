import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1024px;
    padding: 40px;
    margin: 0 auto;
    background-color: ${theme("colors.bodyBg")};
    transition: background-color 0.3s ease-in-out;
    text-rendering: optimizeLegibility;
     @media (max-width: ${theme("breakpoints.sm")}) {
   
      padding: 40px 20px;
    }
  
  }
  html{
  @media (max-width: ${theme("breakpoints.sm")}) {
      font-size:14px;
     
    }
    @media (min-width: ${theme("breakpoints.sm")}) {
      font-size:16px;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  *{
 
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }


`;

export default GlobalStyle;
