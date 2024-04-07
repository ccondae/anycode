import styled from "styled-components";

import { Top } from "~/widgets/Top";
import { Header } from "~/widgets/header";
import { QuestionGuide } from "~/widgets/question-guide";

import QuestionWrite from "~/features/question/question-write.feature";

const TmpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

const TmpContent = styled.div`
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
    <TmpContainer>
      <Header />
      <Top isWritePage />
      <TmpContent>
        <ContentWrap>
          <QuestionWrite />
          <WriteSideBar>
            <QuestionGuide />
          </WriteSideBar>
        </ContentWrap>
      </TmpContent>
    </TmpContainer>
  );
};

export default QuestionWritePage;
