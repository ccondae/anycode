import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";

import { Header } from "~/widgets/header";
import { LanguageRank } from "~/widgets/language-rank";
import { QuestionGuide } from "~/widgets/question-guide";
import { QuestionList } from "~/widgets/question-list";
import { ReviewerRank } from "~/widgets/reviewer-rank";
import { Top } from "~/widgets/Top";

import { Banner } from "~/shared/banner";

const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
`;

const LeftSideBars = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const RootPage = () => {
  const page = useQuery({
    queryKey: ["fds"],
    queryFn: async () => {
      const response = await fetch("/api/question/page/popular?size=10&page=0", {
        method: "POST",
      });
      const data = await response.json();
      console.log(response);
      return data;
    },
  });
  console.log(page.data);
  return (
    <>
      <Header />
      <Banner />
      <Top />
      <Main>
        <LeftSideBars>
          <ReviewerRank />
          <LanguageRank />
        </LeftSideBars>
        {/* Todo: 사이드바 작업한 거랑 레이아웃 합쳐야함 */}
        <QuestionList />
        <QuestionGuide />
      </Main>
    </>
  );
};
