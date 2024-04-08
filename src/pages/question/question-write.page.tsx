import styled from "styled-components";

import QuestionWrite from "~/features/question/question-write.feature";

const QuestionWriteContainer = styled.div`
  scrollbar-width: none;
`;

const QuestionWriteContent = styled.div`
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
  background-color: black;
`;

const QuestionWritePage = () => {
  return (
    <QuestionWriteContainer>
      <QuestionWriteContent>
        <ContentWrap>
          <QuestionWrite />
        </ContentWrap>
      </QuestionWriteContent>
    </QuestionWriteContainer>
  );
};

export default QuestionWritePage;
