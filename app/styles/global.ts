import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #131118;
    color: #FFFFFF; /* corrigido */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
