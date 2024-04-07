import styled from "styled-components";

interface LanguageProps {
  language: string;
}

const Item = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Language = ({ language }: LanguageProps) => {
  return <Item>{language}</Item>;
};
