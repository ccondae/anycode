import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { languageState } from "~/widgets/language-rank/model/language-rank.atom";

interface LanguageProps {
  language: string;
  onLanguageClick: () => void;
  id: number;
}

const Item = styled.button`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Language = ({ language, onLanguageClick, id }: LanguageProps) => {
  const activeLanguageId = useRecoilValue(languageState);
  return (
    <Item onClick={onLanguageClick} className={activeLanguageId === id ? "active" : ""}>
      {language}
    </Item>
  );
};
