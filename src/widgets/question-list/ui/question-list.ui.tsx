import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { Question } from "~/entities/question";
import { useQuestionListQuery } from "~/entities/question-list/api/use-question-list.query";
import { useQuestionSearchQuery } from "~/entities/question-list/api/use-question-search.query";

import { PageNation } from "~/shared/common-ui/page-nation";
import { useReumi } from "~/shared/hooks";

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

export const QuestionList = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams?.get("page")) || 1;
  const searchTerm = searchParams?.get("search") || "";
  // Todo: 현재는 "popular"로 고정되어있지만, 인자로 받아서 사용할 수 있도록 변경해야합니다.
  // "전체","답변된 질문","답변되지 않은 질문" 등등..
  const { goToReumi } = useReumi();
  const { data: questions, isPending, isError } = useQuestionListQuery(currentPage - 1);
  const {
    data: searchedQuestionData,
    isPending: isSearchedPending,
    isError: isSearchedError,
  } = useQuestionSearchQuery(searchTerm);

  if (isPending || isSearchedPending) {
    return <div>Loading...</div>;
  }

  if (isError || isSearchedError) {
    return <div>Error</div>;
  }

  const data = searchTerm ? searchedQuestionData : questions.content;

  return (
    <Container>
      <QuestionListContainer>
        {data?.length === 0 && <div>검색 결과가 없습니다.</div>}
        {data && data.map(({ id, title, likeCount, viewCount, categories, commentCount, createdAt }) => (
          <Question
            key={id}
            title={title}
            likeCount={likeCount}
            viewCount={viewCount}
            categories={categories}
            commentCount={commentCount}
            createdAt={createdAt}
            onClick={goToReumi}
          />
        ))}
      </QuestionListContainer>
      {/* 필터링 변경되면 currentPage 초기화 해줘야 함 */}
      <PageNation page={currentPage} />
    </Container>
  );
};
