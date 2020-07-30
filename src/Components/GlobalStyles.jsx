import { reset, createGlobalStyle } from "reset-style";

const globalStyle = createGlobalStyle`
  ${reset};
  a{
    text-decoration: none;
  }

  body,
  html{
    width: 100vw;
    height: 100vh;
  }
  
  body{
    padding: 20px;
  }
`;

export default globalStyle;
