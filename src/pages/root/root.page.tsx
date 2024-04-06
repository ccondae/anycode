import { Header } from "~/widgets/header";
import { QuestionList } from "~/widgets/question-list";

export const RootPage = () => {
  return (
    <>
      <Header />
      {/* Todo: 사이드바 작업한 거랑 레이아웃 합쳐야함 */}
      <QuestionList />
    </>
  );
};
