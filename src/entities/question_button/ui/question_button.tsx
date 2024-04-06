import styled from "styled-components"

const Button = styled.button`
    width: 182px;
    height: 44.06px;
    background-color: ${(props) => props.theme.colors.action};
    color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
`

export const QuestionButton = () => {
    return (
        <Button>질문하기</Button>
    )
}