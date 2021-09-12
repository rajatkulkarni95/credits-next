import { createGlobalStyle } from "styled-components";
import { font } from "./theme";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: ${
      font.face
    },  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
    background: ${({ theme }) => theme.colors.layout.background};
    color:  ${({ theme }) => theme.colors.text.default};
    height: 100vh;
    }   

    * {
        box-sizing: border-box
    }
`;

export default GlobalStyle;
