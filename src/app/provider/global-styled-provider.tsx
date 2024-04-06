import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
`;

export const GlobalStyleProvider = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};
