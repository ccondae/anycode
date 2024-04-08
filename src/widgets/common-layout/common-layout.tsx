import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Banner } from "~/shared/banner";

import { Header } from "../header";
import { LanguageRank } from "../language-rank";
import { QuestionGuide } from "../question-guide";
import { ReviewerRank } from "../reviewer-rank";
import { Top } from "../top-filter";

const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  gap: 10px;
`;

const LeftSideBars = styled.section`
  min-width: 184px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const CommonLayout = () => {
  const location = useLocation();

  const isWritePage = location.pathname === "/question/write";

  return (
    <>
      <Header />
      <Banner />
      <Top />
      <Main>
        <LeftSideBars>
          {!isWritePage && (
            <>
              <ReviewerRank />
              <LanguageRank />
            </>
          )}
        </LeftSideBars>
        <Outlet />
        <QuestionGuide />
      </Main>
    </>
  );
};
