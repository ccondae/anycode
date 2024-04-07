import styled from "styled-components";

import { QuestionHeader } from "~/entities/question-header";

const QuestionContainer = styled.div`
  width: 100%;
  height: 145px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`;

const QuestionContent = styled.div`
  padding: 24px 18px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const QuestionText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
`;

const QuestionFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Language = styled.div`
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 8px;
`;

const Date = styled.div`
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.theme.colors.secondary};
`;

// Todo: 타입 변경 필요
interface IQuestionProps {
  title: string;
  categories: {
    id: number;
    name: string;
    count: number;
  }[];
  likeCount: number;
  viewCount: number;
  commentCount: number;
  children?: React.ReactNode;
  createdAt: string;
}

// Todo: question 타입에 맞게 수정 필요
export const Question = ({
  title,
  likeCount,
  viewCount,
  commentCount,
  categories,
  createdAt,
  children,
}: IQuestionProps) => {
  const date = createdAt.split("T")[0].split("-").join("/");

  return (
    <QuestionContainer>
      <QuestionHeader viewCount={viewCount} likeCount={likeCount} comments={commentCount} />
      <QuestionContent>
        <QuestionText>{title}</QuestionText>
        <QuestionFooter>
          {categories.map(({ name, id }) => (
            <Language key={id}>{name}</Language>
          ))}
          <Date>{date}</Date>
        </QuestionFooter>
        {/*게시물 상세 페이지 본문을 위한 children*/}
        {children}
      </QuestionContent>
    </QuestionContainer>
  );
};
