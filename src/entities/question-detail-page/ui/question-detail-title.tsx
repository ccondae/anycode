import styled from "styled-components";

interface QuestionDetailTypeProps {
  title: string;
  categories: string[];
  githubUrl: string;
}

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
  color: #000;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.button};
  border: none;
  border-radius: 10px;
  padding: 0 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const QuestionDetailTitle = ({ title, categories, githubUrl }: QuestionDetailTypeProps) => {
  return (
    <div className="question-detail-title">
      <QuestionTitle>{title}</QuestionTitle>
      <QuestionCodeLink>
        <QuestionCodeType>
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </QuestionCodeType>
        <QuestionGitLinkBtn href={githubUrl} target="_blank">
          Github Link
        </QuestionGitLinkBtn>
      </QuestionCodeLink>
    </div>
  );
};
