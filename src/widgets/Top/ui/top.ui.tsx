import styled from "styled-components"
import { Filter } from "~/entities/filter"
import { QuestionButton } from "~/entities/question_button"

const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px 0;
    gap: 100px;
    box-shadow: 0px 5px 10px rgba(117, 117, 121, 0.4) ;
    margin: auto;
`

export const Top = () => {
    return (
        <Wrapper>
            <Filter />
            <QuestionButton />
        </Wrapper>
    )
}