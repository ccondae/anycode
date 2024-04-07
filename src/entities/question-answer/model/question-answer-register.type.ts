import { QuestionType } from "~/entities/question/model/question.type";

export interface QuestionAnswerRegisterType {
  text: string;
  question: QuestionType;
}
