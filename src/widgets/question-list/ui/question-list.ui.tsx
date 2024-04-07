import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { Question } from "~/entities/question";
import { useQuestionListQuery } from "~/entities/question-list/api/use-question-list.query";

import { usePageNation } from "~/shared/hooks/use-page-nation";

const Container = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionListContainer = styled.div`
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

const PageNationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
const PageNationItem = styled(Link)<{ $isCurrent: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.headline6};
  color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.colors.white : theme.colors.gray)};
`;

export const QuestionList = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams?.get("page")) || 1;
  const { data: questions, isPending, isError } = useQuestionListQuery(page - 1);
  const { currentPage, pages, isNoPrev, isNoNext } = usePageNation(page, 5);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Container>
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
      <PageNationContainer>
        {!isNoPrev && <Link to={`?page=${pages[0] - 1}`}>{"<"}</Link>}
        {pages.map((page) => (
          <PageNationItem key={page} $isCurrent={currentPage === page} to={`?page=${page}`}>
            {page}
          </PageNationItem>
        ))}
        {!isNoNext && <Link to={`?page=${pages[pages.length - 1] + 1}`}>{">"}</Link>}
      </PageNationContainer>
    </Container>
  );
};
