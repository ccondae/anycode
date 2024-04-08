import styled from "styled-components";

interface QuestionDetailBodyProps {
  content: string;
  purpose: string;
  code: string;
}

// 스타일
const QuestionTextContainer = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 25px;
`;
const QuestionTextTitle = styled.h2`
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  line-height: 30px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.headline6};
`;
const QuestionTextContant = styled.div`
  padding-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.body2};
`;

export const QuestionDetailBody = ({ content, purpose, code }: QuestionDetailBodyProps) => {
  return (
    <>
      <QuestionTextContainer>
        <QuestionTextTitle>목적</QuestionTextTitle>
        <QuestionTextContant>{purpose}</QuestionTextContant>
      </QuestionTextContainer>
      <QuestionTextContainer>
        <QuestionTextTitle>질문</QuestionTextTitle>
        <QuestionTextContant>{content}</QuestionTextContant>
      </QuestionTextContainer>
      <QuestionTextContainer>
        <QuestionTextTitle>Code&lt;&gt;</QuestionTextTitle>
        <QuestionTextContant>{code}</QuestionTextContant>
      </QuestionTextContainer>
    </>
  );
};
