import styled from "styled-components";

import { QuestionTitleProps } from "../model/question-detail-type";

const QuestionTitleData: QuestionTitleProps = {
  title: "Lorem ipsum dolor sit amet consectetur.",
  codetype: ["HTML", "CSS"],
};

// 스타일
const QuestionTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.subtitle1};
  margin-bottom: 25px;
`;
const QuestionCodeLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const QuestionCodeType = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSize.subtitle2};
`;
const QuestionGitLinkBtn = styled.a`
  cursor: pointer;
  line-height: 30px;
  font-size: ${({ theme }) => theme.fontSize.button};
  border: none;
  border-radius: 10px;
  padding: 0 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const QuestionDetailTitle = () => {
  return (
    <div className="question-detail-title">
      <QuestionTitle>{QuestionTitleData.title}</QuestionTitle>
      <QuestionCodeLink>
        <QuestionCodeType>
          {QuestionTitleData.codetype[0]}/{QuestionTitleData.codetype[1]}
        </QuestionCodeType>
        <QuestionGitLinkBtn>Github Link</QuestionGitLinkBtn>
      </QuestionCodeLink>
    </div>
  );
};
