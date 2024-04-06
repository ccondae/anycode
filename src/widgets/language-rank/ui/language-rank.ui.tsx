import styled from "styled-components";

import { Language } from "~/entities/language/ui/language";
import { Sidebar } from "~/entities/sidebar";

import { mockData } from "../model/language-rank.model";

const LanguageList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;

export const LanguageRank = () => {
  const listElements = mockData.map(({ id, language }) => <Language key={id} language={language} />);

  return (
    <Sidebar title="인기 언어">
      <LanguageList>{listElements}</LanguageList>
    </Sidebar>
  );
};
