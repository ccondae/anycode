import { ProfileHeaderProps } from "~/entities/question-detail-page/model/question-detail-type";
import styled, { css } from "styled-components";

import { Icon } from "~/shared/icons";

const ProfileHeaderData: ProfileHeaderProps = {
    userProfile: {
        userName: "Sky",
        questionCount: 14,
        answerCount: 10
    },
    viewCount: 23,
    commnetCount: 15,
    likeCount: 42
}
// 스타일
const Flex = css`
    display: flex;
`
const QuestionDetailProfile = styled.div`
    padding: 10px 20px;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSize.body2};
    ${Flex}
    justify-content: space-between;
    margin-bottom: 25px;
    background-color:  ${({ theme }) => theme.colors.tabBar};
`
const HeaderProfile = styled.div`
    ${Flex}
`
const Profile = styled.div`
    ${Flex}
    line-height: 30px;
    margin-right: 20px;
`
const ProfileImg = styled.p`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: pink;
`
const UserCount = styled.div`
    line-height: 30px;
    font-size: ${({theme}) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.secondary};
`
const HeaderCount = styled.div`
    ${Flex}
`
const Count = styled.div`
    ${Flex}
    margin-left: 15px;
    line-height: 30px;
`
const Icons = styled.p`
    height: 30px;
    padding-top: 3px;
    box-sizing: border-box;
    margin-right: 5px;
`

export const QuestionDetailPfofile = () => {
    return(
        <QuestionDetailProfile>
            <HeaderProfile>
                <Profile>
                    <ProfileImg></ProfileImg>
                    <p className="user-name">{ProfileHeaderData.userProfile.userName}</p>
                </Profile>
                <UserCount>
                    질문횟수: {ProfileHeaderData.userProfile.questionCount}회/답변횟수: {ProfileHeaderData.userProfile.answerCount}회
                </UserCount>
            </HeaderProfile>
            <HeaderCount>
                <Count>
                    <Icons>
                        <Icon.View />
                    </Icons>
                    <p>{ProfileHeaderData.viewCount}</p>
                </Count>
                <Count>
                    <Icons>
                        <Icon.Review />
                    </Icons>
                    <p>{ProfileHeaderData.commnetCount}</p>
                </Count>
                <Count>
                    <Icons>
                        <Icon.Like />
                    </Icons>
                    <p>{ProfileHeaderData.likeCount}</p>
                </Count>
            </HeaderCount>
        </QuestionDetailProfile>
    );
};