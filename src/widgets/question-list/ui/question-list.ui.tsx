import styled from "styled-components";

import { Question } from "~/entities/question";

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

const dummyQuestions = [
  {
    id: 1,
    title: "How to use Recoil?",
    language: "TypeScript",
    likeCount: 10,
    viewCount: 20,
    categories: ["React", "State Management"],
    comments: ["a", "b", "c"],
  },
  {
    id: 2,
    title: "How to use Recoil?",
    language: "TypeScript",
    likeCount: 10,
    viewCount: 20,
    categories: ["React", "State Management"],
    comments: ["a", "b", "c"],
  },
  {
    id: 3,
    title: "How to use Recoil?",
    language: "TypeScript",
    likeCount: 10,
    viewCount: 20,
    categories: ["React", "State Management"],
    comments: ["a", "b", "c"],
  },
  {
    id: 4,
    title: "How to use Recoil?",
    language: "TypeScript",
    likeCount: 10,
    viewCount: 20,
    categories: ["React", "State Management"],
    comments: ["a", "b", "c"],
  },
];

export const QuestionList = () => {
  return (
    <QuestionListContainer>
      {dummyQuestions.map(({ id, title, language, likeCount, viewCount, categories, comments }) => (
        <Question
          key={id}
          title={title}
          language={language}
          likeCount={likeCount}
          viewCount={viewCount}
          categories={categories}
          comments={comments}
        />
      ))}
    </QuestionListContainer>
  );
};
