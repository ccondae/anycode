import styled from "styled-components";

import { Header } from "~/widgets/header";
import { LanguageRank } from "~/widgets/language-rank";
import { QuestionGuide } from "~/widgets/question-guide";
import { QuestionList } from "~/widgets/question-list";
import { ReviewerRank } from "~/widgets/reviewer-rank";
import { Top } from "~/widgets/top-filter";

import { Banner } from "~/shared/banner";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  margin-bottom: 200px;
`;

const LeftSideBars = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const RootPage = () => {
  return (
    <Main>
      <Header />
      <Banner />
      <Top />
      <MainContainer>
        <LeftSideBars>
          <ReviewerRank />
          <LanguageRank />
        </LeftSideBars>
        {/* Todo: 사이드바 작업한 거랑 레이아웃 합쳐야함 */}
        <QuestionList />
        <QuestionGuide />
      </MainContainer>
    </Main>
  );
};
