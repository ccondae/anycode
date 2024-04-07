import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { Question } from "~/entities/question";
import { useQuestionListQuery } from "~/entities/question-list/api/use-question-list.query";

import { usePagenation } from "~/shared/hooks/use-pagenation";

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

const PagenationContainer = styled.div`
  display: flex;
`;
const PagenationItem = styled(Link)<{ $isCurrent: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.headline6};
  color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.colors.white : theme.colors.gray)};
`;

export const QuestionList = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams?.get("page")) || 0;
  const { data: questions, isPending, isError } = useQuestionListQuery(page - 1);
  const { current, pages, isNoPrev, isNoNext } = usePagenation(questions?.totalPages ?? 1, 5);

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
      <PagenationContainer>
        {!isNoPrev && <Link to={`?page=${pages[0] - 1}`}>{"<"}</Link>}
        {pages.map((page) => (
          <PagenationItem key={page} $isCurrent={current === page} to={`?page=${page}`}>
            {page}
          </PagenationItem>
        ))}
        {!isNoNext && <Link to={`?page=${pages[pages.length - 1] + 1}`}>{">"}</Link>}
      </PagenationContainer>
    </Container>
  );
};
