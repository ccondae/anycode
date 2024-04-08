import styled from "styled-components";

<<<<<<< HEAD:src/widgets/Top/ui/top.ui.tsx
import { QuestionListFilter } from "~/entities/question-list-filter";
import { QuestionButton } from "~/entities/question_button";
=======
import { Filter } from "~/entities/filter";
import { QuestionButton } from "~/entities/question-button";
>>>>>>> c738796b5b527084f92225b13ac78795c135dfed:src/widgets/top-filter/ui/top.ui.tsx

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
      <QuestionListFilter />
      {!isWritePage && <QuestionButton />}
    </Wrapper>
  );
};
