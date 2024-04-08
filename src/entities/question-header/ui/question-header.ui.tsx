import styled from "styled-components";

import { Icon } from "~/shared/icons";

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
  color: #fff;
`;

const QuestionAndAnswerCount = styled.div`
  font-size: ${(props) => props.theme.fontSize.caption};
  color: ${(props) => props.theme.colors.secondary};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Todo: 타입 변경 필요
interface IQuestionHeaderProps {
  viewCount: number;
  likeCount: number;
  comments: number;
}

export const QuestionHeader = ({ viewCount, likeCount, comments }: IQuestionHeaderProps) => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImage src="https://avatars.githubusercontent.com/u/44036559?v=4" />
        <ProfileName>Sky</ProfileName>
        <QuestionAndAnswerCount>질문횟수: 10회 / 답변횟수: 20회</QuestionAndAnswerCount>
      </ProfileContainer>
      <IconContainer>
        <Icon.View />
        <span>{viewCount}</span>
        <Icon.Review />
        <span>{comments}</span>
        <Icon.Like />
        <span>{likeCount}</span>
      </IconContainer>
    </Container>
  );
};
