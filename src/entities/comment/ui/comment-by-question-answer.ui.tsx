import styled from "styled-components";

import Editor from "~/shared/common-ui/editor/editor";
import { vars } from "~/shared/common-ui/theme";
import { useEditor } from "~/shared/hooks";
import { Icon } from "~/shared/icons";
import { generateRandomNumber } from "~/shared/utils";

import { CommentUploadResponse } from "..";

// 외부 인터페이스
interface CommentByQuestionAnswerProps {
  comment: CommentUploadResponse;
  author?: Author;
  recommendOnClick?: () => void;
  notRecommendOnClick?: () => void;
}

interface Author {
  avatar: string;
  userName: string;
  questionCount: number;
  answerCount: number;
  likeCount: number;
}
/**
 * `CommentByQuestionAnswer` 컴포넌트는 사용자의 질문에 대한 답변과 관련된 댓글을 보여주기 위한 컴포넌트입니다.
 * 이 컴포넌트는 댓글 데이터, 작성자 정보, 그리고 추천/비추천 버튼의 클릭 이벤트 핸들러를 props로 받습니다.
 *
 * @component
 * @prop {CommentUploadResponse} comment - 댓글 내용과 관련된 정보를 담고 있는 객체입니다. 댓글의 ID, 텍스트, 생성 시간 등이 포함될 수 있습니다.
 * @prop {Author} [author] - 댓글 작성자의 정보를 담고 있는 객체입니다. 작성자의 이름, 프로필 이미지 등이 포함될 수 있습니다. 이 프로퍼티는 선택 사항입니다.
 * @prop {Function} [recommendOnClick] - 사용자가 '추천' 버튼을 클릭했을 때 호출되는 함수입니다. 이 이벤트 핸들러는 댓글을 추천하는 로직을 수행해야 합니다. 이 프로퍼티는 선택 사항입니다.
 * @prop {Function} [notRecommendOnClick] - 사용자가 '비추천' 버튼을 클릭했을 때 호출되는 함수입니다. 이 이벤트 핸들러는 댓글을 비추천하는 로직을 수행해야 합니다. 이 프로퍼티는 선택 사항입니다.
 *
 * @example
 * <CommentByQuestionAnswer
 *   comment={{ id: "123", text: "이것은 댓글입니다.", createdAt: "2021-01-01T00:00:00Z" }}
 *   recommendOnClick={() => console.log("추천 클릭")}
 *   notRecommendOnClick={() => console.log("비추천 클릭")}
 * />
 */
export const CommentByQuestionAnswer = ({
  comment,
  recommendOnClick,
  notRecommendOnClick,
}: CommentByQuestionAnswerProps) => {
  const { ref } = useEditor();
  return (
    <CommentContainer>
      <CommentHeaderAndEditor>
        <CommentHeader author={mockAuthor} />
        <Editor ref={ref} markdown={comment.content} readOnly />
      </CommentHeaderAndEditor>

      <RecommendContainer>
        <RecommendIconButton role={"button"} onClick={recommendOnClick}>
          <Icon.Like fill={vars.colors.black} />
          <span className="">{generateRandomNumber(500)}</span>
          <span style={{ marginLeft: "16px" }}>추천해요</span>
        </RecommendIconButton>

        <RecommendIconButton role={"button"} onClick={notRecommendOnClick}>
          <Icon.Like fill={vars.colors.black} />
          <span className="">{generateRandomNumber(500)}</span>
          <span style={{ marginLeft: "16px" }}>비추천해요</span>
        </RecommendIconButton>
      </RecommendContainer>
    </CommentContainer>
  );
};

// mock data

const mockAuthor: Author = {
  avatar: "",
  userName: "르미",
  questionCount: 10,
  answerCount: 20,
  likeCount: 300000,
};

// styled

const CommentHeaderAndEditor = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentContainer = styled.section`
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  padding-bottom: 30px;
`;

const RecommendContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  gap: 50px;
`;

const RecommendIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.tabBar};
  padding: 8px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 29px;
  height: 29px;
  border-radius: 50%;
`;

const ProfileName = styled.div`
  font-size: ${(props) => props.theme.fontSize.body2};
`;

const QuestionAndAnswerCount = styled.div`
  font-size: ${(props) => props.theme.fontSize.caption};
  color: ${(props) => props.theme.colors.secondary};
`;

// Todo: 타입 변경 필요
interface IQuestionHeaderProps {
  author: Author;
}
const CommentHeader = ({ author }: IQuestionHeaderProps) => {
  const { answerCount, likeCount, questionCount, userName } = author;
  const content = `질문횟수 : ${questionCount}회 / 답변횟수 : ${answerCount}회 / 추천수 : ${likeCount}회`;

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage src="https://avatars.githubusercontent.com/u/44036559?v=4" />
        <ProfileName>{userName}</ProfileName>
        <QuestionAndAnswerCount>{content}</QuestionAndAnswerCount>
      </ProfileContainer>
    </Container>
  );
};
