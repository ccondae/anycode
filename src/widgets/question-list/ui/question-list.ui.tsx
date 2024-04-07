import styled from "styled-components";

import { Question } from "~/entities/question";
import { useQuestionListQuery } from "~/entities/question-list/api/use-question-list.query";

export const QuestionListContainer = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 25px;
  padding: 22px;
  background-image: ${(props) =>
    `linear-gradient(to bottom left, ${props.theme.colors.tabBar} 0%, ${props.theme.colors.secondary} 60%, ${props.theme.colors.secondary} 100%)`};
`;

export const QuestionList = () => {
  const { data: questions, isPending, isError } = useQuestionListQuery();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <QuestionListContainer>
      {questions.content.map(({ id, title, likeCount, viewCount, categories, commentCount, createdAt }) => (
        <Question
          key={id}
          title={title}
          likeCount={likeCount}
          viewCount={viewCount}
          categories={categories}
          commentCount={commentCount}
          createdAt={createdAt}
        />
      ))}
    </QuestionListContainer>
  );
};
