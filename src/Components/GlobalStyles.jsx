import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  body,
  html{
    width: 100vw;
    height: 100vh;
  }
  
  body{
    padding: 20px;
    background-color: #2f3640; 
  }
`;

export default globalStyles;
