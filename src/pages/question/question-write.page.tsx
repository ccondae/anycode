import styled from "styled-components";

import QuestionWrite from "~/features/question/question-write.feature";

const TmpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

const TmpHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

const TmpCategory = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 74px;
  background-color: ${({ theme }) => theme.colors.black};
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

const QuestionWritePage = () => {
  return (
    <TmpContainer>
      <TmpHeader />
      <TmpCategory />
      <TmpContent>
        <QuestionWrite />
      </TmpContent>
    </TmpContainer>
  );

};

export default QuestionWritePage;
