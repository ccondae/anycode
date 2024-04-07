import { PropsWithChildren, useState } from "react";

import { contextGenerator } from "~/shared/hooks";

type QuestionAnswerBody = {
  answerTitle: string;
  answerContent: string;
};

type QuestionAnswerContextType = {
  value: QuestionAnswerBody;
  setValue: (newState: Partial<QuestionAnswerBody>) => void;
};

const QuestionAnswerContext = contextGenerator<QuestionAnswerContextType>(null);

export const useQuestionAnswer = QuestionAnswerContext.useContext;

export const QuestionAnswerContextProvder = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<QuestionAnswerBody>({ answerContent: "", answerTitle: "" });
  const setValue = (newState: Partial<QuestionAnswerBody>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <QuestionAnswerContext.Provider
      value={{
        value: state,
        setValue: setValue,
      }}
    >
      {children}
    </QuestionAnswerContext.Provider>
  );
};
