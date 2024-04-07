import styled from "styled-components";

import { Filter } from "~/entities/filter";
import { QuestionButton } from "~/entities/question-button";

const Wrapper = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 100px;
  box-shadow: 0px 5px 10px rgba(117, 117, 121, 0.4);
  margin: auto;
  & > * {
    max-width: 1440px;
  }
`;

export const Top = ({ isWritePage = false }: { isWritePage?: boolean }) => {
  return (
    <Wrapper>
      <Filter />
      {!isWritePage && <QuestionButton />}
    </Wrapper>
  );
};
