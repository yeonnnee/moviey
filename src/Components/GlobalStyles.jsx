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
    padding: 0;
    margin: 0;
  }
  body{
    background-color: #151515; 
  }
`;

export default globalStyles;
