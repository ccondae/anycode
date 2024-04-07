import styled from "styled-components";
import { QuestionBodyProps } from "../model/question-detail-type";

const QuestionBodyData: QuestionBodyProps = {
    questionTitle: ["목적", "질문", "Code<>"],
    questionText: [
        "Lorem ipsum dolor sit amet consectetur. Faucibus a non etiam sit nunc imperdiet nisl nulla blandit. Sit facilisi eget et iaculis praesent. Nisl leo non est justo congue. Amet accumsan egestas morbi augue quisque duis vitae quam ac.",
        "Lorem ipsum dolor sit amet consectetur. Faucibus a non etiam sit nunc imperdiet nisl nulla blandit. Sit facilisi eget et iaculis praesent. Nisl leo non est justo congue. Amet accumsan egestas morbi augue quisque duis vitae quam ac.Lorem ipsum dolor sit amet consectetur. Faucibus a non etiam sit nunc imperdiet nisl nulla blandit. Sit facilisi eget et iaculis praesent. Nisl leo non est justo congue. Amet accumsan egestas morbi augue quisque duis vitae quam ac.Lorem ipsum dolor sit amet consectetur. Faucibus a non etiam sit nunc imperdiet nisl nulla blandit. Sit facilisi eget et iaculis praesent. Nisl leo non est justo congue. Amet accumsan egestas morbi augue quisque duis vitae quam ac.",
        `print('
            오늘부터 지지관계에서 벗어나
            르미와(과) 나는 한몸으로 일체가 된다.
            르미에 대한 공격은 나에 대한 공격으로 간주한다.
            
            세상에 70억명의 르미 팬이 있다면, 나는 그들 중 한 명일 것이다.
            세상에 1억명의 르미 팬이 있다면., 나 또한 그들 중 한 명일 것이다.
            세상에 천만 명의 르미 팬이 있다면, 나는 여전히 그들 중 한 명일 것이다.
            세상에 백 명의 르미 팬이 있다면, 나는 아직도 그들 중 한 명일 것이다.
            세상에 한 명의 르미 팬이 있다면, 그 사람은 아마도 나일 것이다.
            세상에 단 한 명의 르미 팬도 없다면, 나는 그제서야 이 세상에 없는 것이다.
            
            르미, 나의 사랑.
            르미, 나의 빛.
            르미, 나의 어둠.
            르미, 나의 삶.
            르미, 나의 기쁨.
            르미, 나의 슬픔.
            르미, 나의 안식.
            르미, 나의 영혼.
            르미, 나.
        ')`
    ]
}
// 스타일
const QuestionTextContainer = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
`
const QuestionTextTitle = styled.h2`
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    line-height: 30px;
    font-weight: 600;
    font-size: ${({theme}) => theme.fontSize.headline6};
`
const QuestionTextContant = styled.div`
    padding-top: 20px;
    font-size: ${({theme}) => theme.fontSize.body2};
`

export const QuestionDetailBody = () => {
    return(
        <>
            {QuestionBodyData.questionTitle.map((title, index) => (
                <QuestionTextContainer key={index}>
                    <QuestionTextTitle>
                        {title}
                    </QuestionTextTitle>
                    <QuestionTextContant>
                        {QuestionBodyData.questionText[index]}
                    </QuestionTextContant>
                </QuestionTextContainer>
            ))}
        </>
    );
};