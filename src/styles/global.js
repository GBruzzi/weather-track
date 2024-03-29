import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    color:  ${({theme}) => theme.textColor};
  }

  body {
    background : ${({theme}) => theme.background};
    
    font-size: 16px;
  }

  button {
    cursor: pointer;

  }
`;