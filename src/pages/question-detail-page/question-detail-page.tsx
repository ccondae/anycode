import styled from "styled-components";
import { QuestionDetailBody } from "~/entities/question-detail-page/ui/question-detail-body";
import { QuestionDetailPfofile } from "~/entities/question-detail-page/ui/question-detail-profile";
import { QuestionDetailTitle } from "~/entities/question-detail-page/ui/question-detail-title";

// 스타일
const QuestionDetailContainer = styled.div`
    color: #000;
    line-height: 1.2em;
    background-color: #fff;
`;
const QuestionTextContainer = styled.div`
    padding: 25px 20px;
`

export const QuestionDetailPage = () => {
    return(
        <>
            <QuestionDetailContainer>
                <QuestionDetailPfofile />
                <QuestionTextContainer>
                    <QuestionDetailTitle />
                    <QuestionDetailBody />
                </QuestionTextContainer>
            </QuestionDetailContainer>
        </>
    );
};