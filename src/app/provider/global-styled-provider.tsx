import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { vars } from "../style/theme";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const GlobalStyleProvider = () => {
  return (
    <ThemeProvider theme={vars}>
      <GlobalStyle />
    </ThemeProvider>
  );
};
