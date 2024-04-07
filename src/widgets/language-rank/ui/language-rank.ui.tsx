import styled from "styled-components";

import { Language } from "~/entities/language/ui/language";
import { Sidebar } from "~/entities/sidebar";

import { useLanguageRankQuery } from "../api/use-language-rank.query";

const LanguageList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;

export const LanguageRank = () => {
  const { data, isPending, isError } = useLanguageRankQuery();
  const listElements = data?.slice(0, 10).map(({ id, name }) => <Language key={id} language={name} />);

  if (isPending) {
    return "...loading";
  }
  if (isError) {
    return null;
  }
  return (
    <Sidebar title="인기 언어">
      <LanguageList>{listElements}</LanguageList>
    </Sidebar>
  );
};
