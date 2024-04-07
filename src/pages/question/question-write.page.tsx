import styled from "styled-components";

import { Header } from "~/widgets/header";
import { QuestionGuide } from "~/widgets/question-guide";
import { Top } from "~/widgets/top-filter";

import QuestionWrite from "~/features/question/question-write.feature";

const QuestionWriteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

const HeaderWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 5px 10px rgba(117, 117, 121, 0.4);
  background-color: ${({ theme }) => theme.colors.black};
  & > div > * {
    box-shadow: none;
  }
`;

const QuestionWriteContent = styled.div`
  margin-top: 172px;
  padding-bottom: 120px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: inset 0 12px 200px ${({ theme }) => theme.colors.white}30;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > * {
    max-width: 1440px;
  }
`;

const ContentWrap = styled.div`
  position: relative;
`;
const WriteSideBar = styled.div`
  position: absolute;
  top: 20px;
  left: calc(100% + 20px);
`;

const QuestionWritePage = () => {
  return (
    <QuestionWriteContainer>
      <HeaderWrap>
        <Header />
        <Top isWritePage />
      </HeaderWrap>
      <QuestionWriteContent>
        <ContentWrap>
          <QuestionWrite />
          <WriteSideBar>
            <QuestionGuide />
          </WriteSideBar>
        </ContentWrap>
      </QuestionWriteContent>
    </QuestionWriteContainer>
  );
};

export default QuestionWritePage;
