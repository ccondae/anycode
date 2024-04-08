import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Header } from "~/widgets/header";
import { Top } from "~/widgets/top-filter";

import { CommentByQuestionAnswer } from "~/entities/comment";
import { useDetailQuery } from "~/entities/question-detail-page/model/use-detail-query";
import { QuestionDetailBody } from "~/entities/question-detail-page/ui/question-detail-body";
import { QuestionDetailTitle } from "~/entities/question-detail-page/ui/question-detail-title";
import { QuestionHeader } from "~/entities/question-header";

// 스타일

const QuestionDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

const QuestionBox = styled.div`
  margin-top: calc(100px + 76px + 20px);
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 20px;
  background: rgb(42, 39, 49);
  background: linear-gradient(60deg, rgba(42, 39, 49, 1) 0%, rgba(137, 128, 155, 1) 35%, rgba(42, 39, 49, 1) 100%);
  border-radius: 28px;
`;

const HeaderWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 5px 10px rgba(117, 117, 121, 0.4);
  background-color: ${({ theme }) => theme.colors.black};
  & > div > * {
    box-shadow: none;
  }
`;

const QuestionDetailWrap = styled.div`
  color: #000;
  line-height: 1.2em;
  border-radius: 15px;
  background-color: #fff;
`;

const QuestionTextContainer = styled.div`
  padding: 25px 20px;
`;

const CommentsContainer = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > * {
    width: 100%;
  }
`;

export const QuestionDetailPage = () => {
  const { id } = useParams();

  const { isError, isLoading, data } = useDetailQuery(id as string);
  console.log(data);

  if (isError) {
    alert("Error from 하늘");
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Title영역
  const title = data?.title || "";
  const categories = data?.categories.map((category) => category.name) || [];
  const githubUrl = data?.githubUrl || "";
  // Body 영역
  const { content = "", purpose = "", code = "", comments = [] } = data || {};
  const questionDetailBodyProps = {
    content,
    purpose,
    code,
  };
  console.log(data);
  return (
    <QuestionDetailContainer>
      <HeaderWrap>
        <Header />
        <Top />
      </HeaderWrap>
      <QuestionBox>
        <QuestionDetailWrap>
          <QuestionHeader
            viewCount={data?.viewCount as number}
            likeCount={data?.likeCount as number}
            comments={data?.comments.length as number}
          />
          <QuestionTextContainer>
            <QuestionDetailTitle title={title} categories={categories} githubUrl={githubUrl} />
            <QuestionDetailBody {...questionDetailBodyProps} />
          </QuestionTextContainer>
        </QuestionDetailWrap>
        <CommentsContainer>
          {comments.map((comment, idx) => {
            return <CommentByQuestionAnswer key={idx} comment={comment} />;
          })}
        </CommentsContainer>
      </QuestionBox>
    </QuestionDetailContainer>
  );
};
